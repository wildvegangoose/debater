#!/usr/bin/env node
/**
 * Community Debate Node Validator & PR Registry Updater
 *
 * Parses either:
 *   1. A GitHub Issue Form markdown body (pre-filled from Dialectica or written manually)
 *   2. A standalone JSON payload file
 *
 * Validates against live TypeScript types (`src/types/debate.ts`) and target dataset node IDs,
 * checks source URLs, optionally applies approved nodes into `src/data/communityContributions.json`,
 * and emits a human-readable Markdown validation report.
 */

import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');

const TYPES_FILE = path.join(REPO_ROOT, 'src/types/debate.ts');
const DATASETS_FILE = path.join(REPO_ROOT, 'src/data/datasets.ts');
const REGISTRY_FILE = path.join(REPO_ROOT, 'src/data/communityContributions.json');

const VALID_KINDS = new Set(['pro', 'con', 'thesis']);
const VALID_SOURCE_CATEGORIES = new Set([
  'Primary Text / Treaty',
  'Watchdog / NGO',
  'Empirical / Economic Study',
  'Court / Official Record',
  'Debate / Broadcast',
  'Scholarship',
]);

// --- Type & Dataset Metadata Extraction ------------------------------------

export function loadAllowedTypesAndTopics() {
  const src = fs.readFileSync(TYPES_FILE, 'utf8');

  const extractUnion = (typeName) => {
    const regex = new RegExp(`export\\s+type\\s+${typeName}\\s*=([\\s\\S]*?);`);
    const m = src.match(regex);
    if (!m) throw new Error(`Could not locate type ${typeName} in src/types/debate.ts`);
    return [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1]);
  };

  return {
    allowedTopics: new Set(extractUnion('DebateTopicId')),
    allowedTags: new Set(extractUnion('DebateTag')),
  };
}

function collectFilesRecursively(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  const results = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFilesRecursively(full));
    } else if (entry.isFile() && entry.name.endsWith('.ts')) {
      results.push(full);
    }
  }
  return results;
}

function mapTopicToSourceFiles(topicId) {
  if (topicId === 'israel-palestine') {
    return [
      path.join(REPO_ROOT, 'src/data/israelPalestineGraph.ts'),
      ...collectFilesRecursively(path.join(REPO_ROOT, 'src/data/pillars')),
    ].filter((f) => fs.existsSync(f));
  }
  if (topicId === 'economic-policies') {
    return [
      path.join(REPO_ROOT, 'src/data/economicPoliciesGraph.ts'),
      ...collectFilesRecursively(path.join(REPO_ROOT, 'src/data/economics')),
    ].filter((f) => fs.existsSync(f));
  }

  const datasetsSrc = fs.readFileSync(DATASETS_FILE, 'utf8');
  const escaped = topicId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const dynamicImportMatch = datasetsSrc.match(
    new RegExp(`['"]${escaped}['"]:\\s*async\\s*\\(\\)\\s*=>\\s*\\(await\\s+import\\(['"]([^'"]+)['"]\\)\\)`)
  );
  if (dynamicImportMatch) {
    const rel = `${dynamicImportMatch[1]}.ts`;
    const full = path.resolve(REPO_ROOT, 'src/data', rel);
    return fs.existsSync(full) ? [full] : [];
  }

  if (topicId === 'ai-risk') {
    const aiFile = path.join(REPO_ROOT, 'src/data/topics/aiRisk.ts');
    return fs.existsSync(aiFile) ? [aiFile] : [];
  }

  return [];
}

function extractNodesFromTsSource(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const nodes = [];
  // Match object entries containing id, optional parentId, optional kind, and title
  const idRegex = /\bid\s*:\s*(['"`])((?:\\.|(?!\1).)+)\1/g;
  let match;
  while ((match = idRegex.exec(text)) !== null) {
    const id = match[2];
    const windowSlice = text.slice(match.index, match.index + 800);
    // Avoid matching root dataset id (where kind: is absent near id:)
    const kindMatch = windowSlice.match(/\bkind\s*:\s*(['"`])(root|pillar|thesis|pro|con)\1/);
    const titleMatch = windowSlice.match(/\btitle\s*:\s*(['"`])((?:\\.|(?!\1).)+)\1/);
    if (kindMatch && titleMatch) {
      nodes.push({
        id,
        kind: kindMatch[2],
        title: titleMatch[2].replace(/\\'/g, "'").replace(/\\"/g, '"'),
      });
    }
  }
  return nodes;
}

export function loadTopicInventory(topicId, registryPath = REGISTRY_FILE) {
  const sourceFiles = mapTopicToSourceFiles(topicId);
  const byId = new Map();
  const titles = [];

  for (const file of sourceFiles) {
    for (const node of extractNodesFromTsSource(file)) {
      byId.set(node.id, node);
      titles.push({ id: node.id, title: node.title });
    }
  }

  if (fs.existsSync(registryPath)) {
    try {
      const reg = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
      if (Array.isArray(reg)) {
        for (const entry of reg) {
          if (entry?.topicId === topicId && entry?.node?.id) {
            byId.set(entry.node.id, {
              id: entry.node.id,
              kind: entry.node.kind,
              title: entry.node.title,
            });
            titles.push({ id: entry.node.id, title: entry.node.title });
          }
        }
      }
    } catch {
      // Handled gracefully during validation
    }
  }

  return { byId, titles, sourceFiles };
}

// --- Parsing GitHub Issue Form Markdown & JSON -----------------------------

function parseIssueFormSections(markdown) {
  const sections = {};
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  let currentKey = null;
  let buffer = [];

  for (const line of lines) {
    const headingMatch = line.match(/^###\s+(.+?)\s*$/);
    if (headingMatch) {
      if (currentKey !== null) {
        sections[currentKey] = buffer.join('\n').trim();
      }
      currentKey = headingMatch[1].trim().toLowerCase();
      buffer = [];
    } else if (currentKey !== null) {
      buffer.push(line);
    }
  }
  if (currentKey !== null) {
    sections[currentKey] = buffer.join('\n').trim();
  }
  return sections;
}

function cleanNoResponse(val) {
  if (!val) return '';
  const trimmed = val.trim();
  if (trimmed === '_No response_' || trimmed === '_no response_') return '';
  return trimmed;
}

function extractFencedJson(block) {
  const cleaned = cleanNoResponse(block);
  if (!cleaned) return null;
  const fenced = cleaned.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1].trim() : cleaned;
  if (!candidate.startsWith('{')) return null;
  return JSON.parse(candidate);
}

export function parseSourcesField(rawOrList) {
  if (Array.isArray(rawOrList)) {
    return rawOrList
      .filter((s) => s && typeof s.title === 'string' && typeof s.url === 'string')
      .map((s) => ({
        title: s.title.trim(),
        url: s.url.trim(),
        ...(s.publisher ? { publisher: String(s.publisher).trim() } : {}),
        ...(s.year ? { year: String(s.year).trim() } : {}),
        ...(s.category && VALID_SOURCE_CATEGORIES.has(s.category) ? { category: s.category } : {}),
      }));
  }

  const text = cleanNoResponse(String(rawOrList || ''));
  const sources = [];
  for (const line of text.split('\n').map((l) => l.trim()).filter(Boolean)) {
    const stripped = line.replace(/^[-*]\s+/, '');
    const parts = stripped.split('|').map((p) => p.trim());
    if (parts.length >= 2 && /^https?:\/\//i.test(parts[1])) {
      const cat = parts[3];
      sources.push({
        title: parts[0],
        url: parts[1],
        ...(parts[2] ? { publisher: parts[2] } : {}),
        ...(cat && VALID_SOURCE_CATEGORIES.has(cat) ? { category: cat } : {}),
      });
    } else if (/^https?:\/\//i.test(stripped)) {
      sources.push({ title: stripped, url: stripped });
    }
  }
  return sources;
}

function slugifyId(input) {
  return String(input || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 42);
}

export function parseSubmissionInput({ rawBody = '', jsonObject = null, issueNumber = undefined, issueAuthor = undefined }) {
  if (jsonObject && jsonObject.node) {
    const n = jsonObject.node;
    return {
      topicId: String(jsonObject.topicId || '').trim(),
      submissionType: String(jsonObject.submissionType || 'New Argument Node').trim(),
      contributor: String(jsonObject.contributor || n.contributor || issueAuthor || '').trim(),
      rationale: String(jsonObject.rationale || '').trim(),
      issueNumber,
      node: {
        id: String(n.id || '').trim() || `community-${issueNumber ? `i${issueNumber}-` : ''}${slugifyId(n.title)}`,
        parentId: n.parentId === null ? null : String(n.parentId || jsonObject.parentId || '').trim(),
        kind: String(n.kind || '').trim().toLowerCase(),
        title: String(n.title || '').trim(),
        summary: String(n.summary || '').trim(),
        details: Array.isArray(n.details)
          ? n.details.map((d) => String(d).trim()).filter(Boolean)
          : [],
        sources: parseSourcesField(n.sources || []),
        tags: Array.isArray(n.tags)
          ? n.tags.map((t) => String(t).trim()).filter(Boolean)
          : [],
        ...(n.era ? { era: String(n.era).trim() } : {}),
      },
    };
  }

  const sections = parseIssueFormSections(rawBody);
  const rawJson = sections['structured json payload (auto-generated by app — optional)'] || sections['structured json payload'] || '';
  if (rawJson) {
    try {
      const parsed = extractFencedJson(rawJson);
      if (parsed && parsed.node) {
        return parseSubmissionInput({ jsonObject: parsed, issueNumber, issueAuthor });
      }
    } catch {
      // Fall back to reading form fields below if JSON block was malformed
    }
  }

  const getField = (...keys) => {
    for (const k of keys) {
      for (const [secKey, val] of Object.entries(sections)) {
        if (secKey.includes(k)) {
          const cleaned = cleanNoResponse(val);
          if (cleaned) return cleaned;
        }
      }
    }
    return '';
  };

  const topicId = getField('debate topic id', 'topic id', 'topic');
  const submissionType = getField('submission type') || 'New Argument Node';
  const parentId = getField('target parent node id', 'parent node', 'parent id');
  const role = getField('logical role', 'role').toLowerCase();
  const headline = getField('argument headline', 'headline');
  const summary = getField('steelmanned summary', 'summary');
  const detailsRaw = getField('empirical evidence', 'details');
  const sourcesRaw = getField('primary sources', 'sources');
  const tagsRaw = getField('thematic lenses', 'tags');
  const rationale = getField('maintainer rationale', 'rationale');
  const contributor = getField('attribution', 'contributor') || issueAuthor || '';

  const details = detailsRaw
    ? detailsRaw
        .split('\n')
        .map((line) => line.replace(/^[-*•]\s+/, '').trim())
        .filter(Boolean)
    : [];

  const tags = tagsRaw
    ? tagsRaw
        .split(',')
        .map((t) => t.replace(/`/g, '').trim())
        .filter(Boolean)
    : [];

  const prefix = issueNumber ? `community-i${issueNumber}-` : 'community-';
  const generatedId = `${prefix}${slugifyId(headline) || 'node'}`;

  return {
    topicId,
    submissionType,
    contributor,
    rationale,
    issueNumber,
    node: {
      id: generatedId,
      parentId: parentId || '',
      kind: role,
      title: headline,
      summary,
      details,
      sources: parseSourcesField(sourcesRaw),
      tags,
    },
  };
}

// --- Network & Quality Checks ----------------------------------------------

function isPrivateOrUnsafeHost(hostname) {
  const lower = hostname.toLowerCase();
  return (
    lower === 'localhost' ||
    lower === '127.0.0.1' ||
    lower === '::1' ||
    lower.startsWith('10.') ||
    lower.startsWith('192.168.') ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(lower) ||
    lower.endsWith('.local')
  );
}

async function checkLiveUrl(rawUrl) {
  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return { url: rawUrl, ok: false, status: 0, note: 'Invalid URL syntax' };
  }
  if (!['https:', 'http:'].includes(parsed.protocol)) {
    return { url: rawUrl, ok: false, status: 0, note: `Disallowed protocol ${parsed.protocol}` };
  }
  if (isPrivateOrUnsafeHost(parsed.hostname)) {
    return { url: rawUrl, ok: false, status: 0, note: 'Private or loopback host disallowed' };
  }

  const doFetch = async (method) =>
    fetch(rawUrl, {
      method,
      redirect: 'follow',
      signal: AbortSignal.timeout(8000),
      headers: {
        'User-Agent': 'Dialectica-Debate-Validator/1.0 (+https://wildvegangoose.github.io/debater/)',
        Accept: 'text/html,application/xhtml+xml,application/pdf,*/*;q=0.8',
      },
    });

  try {
    let res = await doFetch('HEAD');
    if (res.status === 405 || res.status === 403 || res.status === 501) {
      res = await doFetch('GET');
    }
    if (res.ok || (res.status >= 300 && res.status < 400)) {
      return { url: rawUrl, ok: true, status: res.status, note: `HTTP ${res.status} Reachable` };
    }
    if (res.status === 403 || res.status === 429) {
      return {
        url: rawUrl,
        ok: true,
        warning: true,
        status: res.status,
        note: `HTTP ${res.status} (Publisher bot-protection likely; domain resolves over TLS)`,
      };
    }
    return { url: rawUrl, ok: false, status: res.status, note: `HTTP ${res.status}` };
  } catch (err) {
    return { url: rawUrl, ok: false, status: 0, note: err?.message || 'Network request failed' };
  }
}

function normalizeTitle(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenJaccard(a, b) {
  const sa = new Set(normalizeTitle(a).split(' ').filter((w) => w.length > 2));
  const sb = new Set(normalizeTitle(b).split(' ').filter((w) => w.length > 2));
  if (sa.size === 0 || sb.size === 0) return 0;
  let inter = 0;
  for (const x of sa) {
    if (sb.has(x)) inter++;
  }
  return inter / (sa.size + sb.size - inter);
}

// --- Main Validation Routine -----------------------------------------------

export async function validateSuggestion(submission, options = {}) {
  const { checkUrls = false, checkTsc = false, registryPath = REGISTRY_FILE } = options;
  const errors = [];
  const warnings = [];
  const passes = [];

  const { allowedTopics, allowedTags } = loadAllowedTypesAndTopics();

  // 1. Topic validation
  if (!submission.topicId || !allowedTopics.has(submission.topicId)) {
    errors.push(
      `Invalid topicId \`${submission.topicId || '(empty)'}\`. Must match a valid \`DebateTopicId\` in \`src/types/debate.ts\`.`
    );
  } else {
    passes.push(`Valid topic \`${submission.topicId}\`.`);
  }

  // 2. Inventory & parent node check
  const inventory =
    submission.topicId && allowedTopics.has(submission.topicId)
      ? loadTopicInventory(submission.topicId, registryPath)
      : { byId: new Map(), titles: [], sourceFiles: [] };

  if (submission.topicId && allowedTopics.has(submission.topicId)) {
    if (!submission.node.parentId) {
      errors.push('Missing `parentId`. Every community contribution must connect to an existing parent node.');
    } else if (!inventory.byId.has(submission.node.parentId)) {
      errors.push(
        `Parent node \`${submission.node.parentId}\` was not found in topic \`${submission.topicId}\` (scanned ${inventory.byId.size} nodes).`
      );
    } else {
      const parentObj = inventory.byId.get(submission.node.parentId);
      passes.push(`Target parent verified: \`${parentObj.id}\` ("${parentObj.title}").`);

      if ((parentObj.kind === 'root' || parentObj.kind === 'pillar') && submission.node.kind !== 'thesis') {
        warnings.push(
          `Target parent is a \`${parentObj.kind}\` node — Dialectica typically attaches \`thesis\` nodes beneath pillars/roots rather than \`${submission.node.kind}\`.`
        );
      }
      if (['thesis', 'pro', 'con'].includes(parentObj.kind) && submission.node.kind === 'thesis') {
        warnings.push(
          `Target parent is a \`${parentObj.kind}\` node — claims responding to theses/arguments usually use \`pro\` or \`con\`.`
        );
      }
    }
  }

  // 3. Role / kind check
  if (!VALID_KINDS.has(submission.node.kind)) {
    errors.push(`Invalid logical role \`${submission.node.kind}\`. Must be one of: \`pro\`, \`con\`, \`thesis\`.`);
  } else {
    passes.push(`Valid logical role \`${submission.node.kind}\`.`);
  }

  // 4. Headline & duplicate detection
  if (submission.node.title.length < 8 || submission.node.title.length > 180) {
    errors.push(
      `Headline length (${submission.node.title.length} chars) must be between 8 and 180 characters.`
    );
  } else {
    const normNew = normalizeTitle(submission.node.title);
    let duplicateHit = null;
    for (const existing of inventory.titles) {
      if (normalizeTitle(existing.title) === normNew || tokenJaccard(submission.node.title, existing.title) >= 0.85) {
        duplicateHit = existing;
        break;
      }
    }
    if (duplicateHit) {
      warnings.push(
        `Possible duplicate or closely overlapping claim detected: \`${duplicateHit.id}\` ("${duplicateHit.title}"). Consider editing that node instead if this covers the same ground.`
      );
    } else {
      passes.push('Headline clear and no duplicate argument detected in topic.');
    }
  }

  // 5. Summary & steelman quality check
  if (submission.node.summary.length < 25 || submission.node.summary.length > 1000) {
    errors.push(
      `Summary length (${submission.node.summary.length} chars) must be between 25 and 1000 characters.`
    );
  } else {
    const upperRatio =
      (submission.node.summary.match(/[A-Z]/g)?.length ?? 0) /
      Math.max(1, submission.node.summary.replace(/[^a-zA-Z]/g, '').length);
    if (upperRatio > 0.65) {
      warnings.push('Summary contains unusually high uppercase ratio — ensure neutral encyclopedic steelmanning.');
    } else {
      passes.push('Summary meets length and formatting baseline.');
    }
  }

  // 6. Details warning
  if (!submission.node.details || submission.node.details.length === 0) {
    warnings.push('No bullet takeaways (`details`) included; adding 2–3 concrete facts improves readability.');
  } else {
    passes.push(`${submission.node.details.length} empirical/analytical detail bullet(s) provided.`);
  }

  // 7. Tag validation
  const validTags = submission.node.tags.filter((t) => allowedTags.has(t));
  const invalidTags = submission.node.tags.filter((t) => !allowedTags.has(t));
  if (invalidTags.length > 0) {
    warnings.push(`Ignored unrecognized tag(s): ${invalidTags.map((t) => `\`${t}\``).join(', ')}.`);
  }
  if (validTags.length === 0) {
    validTags.push('Governance');
    warnings.push('No valid `DebateTag` supplied; defaulted to `Governance`.');
  } else {
    passes.push(`Validated tag(s): ${validTags.map((t) => `\`${t}\``).join(', ')}.`);
  }

  // 8. Sources & URL checks
  const urlResults = [];
  if (!submission.node.sources || submission.node.sources.length === 0) {
    errors.push('At least one valid primary source with an `https://` URL is required (`Title | https://url | Publisher`).');
  } else {
    for (const src of submission.node.sources) {
      try {
        const u = new URL(src.url);
        if (!['https:', 'http:'].includes(u.protocol) || isPrivateOrUnsafeHost(u.hostname)) {
          errors.push(`Invalid or unsafe source URL: \`${src.url}\``);
          continue;
        }
      } catch {
        errors.push(`Malformed source URL: \`${src.url}\``);
        continue;
      }

      if (checkUrls) {
        const res = await checkLiveUrl(src.url);
        urlResults.push(res);
        if (!res.ok) {
          errors.push(`Source URL failed live check (${res.note}): ${src.url}`);
        } else if (res.warning) {
          warnings.push(`Source URL check warning (${res.note}): ${src.url}`);
        } else {
          passes.push(`Verified live source (${res.note}): [${src.title}](${src.url})`);
        }
      } else {
        passes.push(`Syntax-valid source URL: ${src.url}`);
      }
    }
  }

  // 9. Canonical ID collision guard
  let finalNodeId = submission.node.id;
  if (submission.issueNumber && !finalNodeId.includes(`i${submission.issueNumber}-`)) {
    finalNodeId = `community-i${submission.issueNumber}-${slugifyId(submission.node.title) || 'node'}`;
  }
  while (inventory.byId.has(finalNodeId)) {
    finalNodeId = `${finalNodeId}-v2`;
  }

  const normalizedEntry = {
    topicId: submission.topicId,
    ...(submission.issueNumber ? { issueNumber: submission.issueNumber } : {}),
    contributor: submission.contributor || 'community',
    addedAt: new Date().toISOString().slice(0, 10),
    node: {
      id: finalNodeId,
      parentId: submission.node.parentId,
      kind: submission.node.kind,
      title: submission.node.title,
      summary: submission.node.summary,
      details: submission.node.details,
      sources: submission.node.sources,
      tags: validTags,
      ...(submission.node.era ? { era: submission.node.era } : {}),
      isCommunity: true,
      ...(submission.contributor ? { contributor: submission.contributor } : {}),
      ...(submission.issueNumber ? { issueNumber: submission.issueNumber } : {}),
    },
  };

  // 10. Optional live TypeScript compilation verification
  if (checkTsc && errors.length === 0) {
    try {
      execFileSync('npx', ['tsc', '--noEmit'], { cwd: REPO_ROOT, stdio: 'pipe' });
      passes.push('Repository TypeScript check (`npx tsc --noEmit`) passed cleanly.');
    } catch (err) {
      errors.push(`TypeScript check failed: ${String(err?.stderr || err?.message).slice(0, 400)}`);
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    warnings,
    passes,
    urlResults,
    entry: normalizedEntry,
  };
}

export function applyToRegistry(entry, registryPath = REGISTRY_FILE) {
  let existing = [];
  if (fs.existsSync(registryPath)) {
    const parsed = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
    if (Array.isArray(parsed)) existing = parsed;
  }

  const filtered = existing.filter((item) => {
    if (entry.issueNumber && item.issueNumber === entry.issueNumber) return false;
    if (item.topicId === entry.topicId && item.node?.id === entry.node.id) return false;
    return true;
  });

  filtered.push(entry);
  fs.writeFileSync(registryPath, `${JSON.stringify(filtered, null, 2)}\n`, 'utf8');
  return filtered.length;
}

export function formatMarkdownReport(result, submission) {
  const badge = result.ok ? 'READY FOR MAINTAINER REVIEW' : 'CHANGES REQUESTED';
  const lines = [
    `## Dialectica Automated Submission Report — ${badge}`,
    '',
    `- **Topic:** \`${submission.topicId || '(missing)'}\``,
    `- **Parent Node:** \`${submission.node.parentId || '(missing)'}\``,
    `- **Logical Role:** \`${submission.node.kind || '(missing)'}\``,
    `- **Proposed Node ID:** \`${result.entry.node.id}\``,
    '',
  ];

  if (result.errors.length > 0) {
    lines.push('### Blocking Issues', '');
    for (const err of result.errors) lines.push(`- ❌ ${err}`);
    lines.push('');
  }

  if (result.warnings.length > 0) {
    lines.push('### Quality Notes & Warnings', '');
    for (const w of result.warnings) lines.push(`- ⚠️ ${w}`);
    lines.push('');
  }

  if (result.passes.length > 0) {
    lines.push('### Verification Checks Passed', '');
    for (const p of result.passes) lines.push(`- ✅ ${p}`);
    lines.push('');
  }

  lines.push(
    '<details>',
    '<summary>Normalized Registry Entry (preview for <code>src/data/communityContributions.json</code>)</summary>',
    '',
    '```json',
    JSON.stringify(result.entry, null, 2),
    '```',
    '</details>',
    '',
    result.ok
      ? '> Maintainers: add the **`approved-for-pr`** label to automatically open a Pull Request merging this node.'
      : '> Contributors: edit this issue using the pencil icon above to fix the blocking items and automated validation will re-run.'
  );

  return lines.join('\n');
}

// --- Self-Test Suite -------------------------------------------------------

async function runSelfTest() {
  console.log('Running Dialectica validateSuggestion.mjs self-test suite...');

  const { allowedTopics, allowedTags } = loadAllowedTypesAndTopics();
  assert(allowedTopics.has('ai-risk'), 'Expected ai-risk topic');
  assert(allowedTopics.has('economic-policies'), 'Expected economic-policies topic');
  assert(allowedTopics.has('israel-palestine'), 'Expected israel-palestine topic');
  assert(allowedTags.has('AI & Technology'), 'Expected AI & Technology tag');

  // Test 1: Manual Issue Form Markdown parsing on ai-risk
  const sampleMarkdown = `
### Submission Type
New Argument Node

### Debate Topic ID
ai-risk

### Target Parent Node ID
pillar-ai-alignment

### Logical Role
con

### Argument Headline
Behavioral Evals Fail Against Deceptively Aligned Frontier Models

### Steelmanned Summary
Standard input-output behavioral evaluations cannot distinguish genuine human-aligned generalization from deceptive instrumental compliance during training checkpoints.

### Empirical Evidence & Key Takeaways
- Sleeper Agents benchmarks demonstrated persistent backdoor behavior surviving standard safety RLHF fine-tuning.
- Red-teaming alone leaves worst-case capability overhangs unmeasured prior to deployment.

### Primary Sources & URLs
Sleeper Agents: Training Deceptive LLMs | https://arxiv.org/abs/2401.05566 | Anthropic / arXiv | Empirical / Economic Study

### Thematic Lenses
AI & Technology, Science & Innovation

### Attribution / GitHub Handle
@test-reviewer
`;

  const parsedMd = parseSubmissionInput({ rawBody: sampleMarkdown, issueNumber: 42, issueAuthor: 'octocat' });
  const res1 = await validateSuggestion(parsedMd, { checkUrls: false });
  assert.equal(res1.ok, true, `Expected markdown submission to pass, got: ${res1.errors.join('; ')}`);
  assert.equal(res1.entry.issueNumber, 42);
  assert.equal(res1.entry.node.parentId, 'pillar-ai-alignment');
  assert.equal(res1.entry.node.kind, 'con');
  assert(res1.entry.node.tags.includes('AI & Technology'));

  // Test 2: JSON payload submission on multi-file topic (israel-palestine pillar node)
  const jsonSub = parseSubmissionInput({
    issueNumber: 77,
    jsonObject: {
      topicId: 'israel-palestine',
      contributor: '@historian',
      node: {
        parentId: 'pillar-borders-settlements',
        kind: 'thesis',
        title: 'Water Aquifer Allocation Under Article 40 Shaped Settlement Sustainability',
        summary:
          'Joint Water Committee veto dynamics under Oslo II Article 40 created asymmetric infrastructure approval rates across Area C and Palestinian municipalities.',
        details: ['Oslo II Annex III Article 40 established shared extraction quotas for the Mountain Aquifer.'],
        sources: [
          {
            title: 'Oslo II Agreement (1995) — Yale Avalon Project',
            url: 'https://avalon.law.yale.edu/20th_century/isoslo.asp',
            publisher: 'Yale Law School',
            category: 'Primary Text / Treaty',
          },
        ],
        tags: ['Diplomacy', 'International Law'],
      },
    },
  });
  const res2 = await validateSuggestion(jsonSub, { checkUrls: false });
  assert.equal(res2.ok, true, `Expected IP pillar parent to verify, got: ${res2.errors.join('; ')}`);

  // Test 3: Reject non-existent parent and private localhost URL
  const badSub = parseSubmissionInput({
    jsonObject: {
      topicId: 'economic-policies',
      node: {
        parentId: 'non-existent-parent-999',
        kind: 'pro',
        title: 'Short Bad',
        summary: 'Valid summary string that passes minimum length checks nicely here.',
        sources: [{ title: 'Local', url: 'http://127.0.0.1/secret' }],
        tags: ['Macroeconomics'],
      },
    },
  });
  const res3 = await validateSuggestion(badSub, { checkUrls: false });
  assert.equal(res3.ok, false, 'Expected invalid parent + localhost URL to fail validation');
  assert(res3.errors.some((e) => e.includes('not found')));
  assert(res3.errors.some((e) => e.includes('unsafe source URL')));

  // Test 4: Isolated registry apply test in /tmp (never touches repo file)
  const tmpRegistry = path.join('/tmp', `dialectica-registry-test-${Date.now()}.json`);
  try {
    fs.writeFileSync(tmpRegistry, '[]\n', 'utf8');
    const count = applyToRegistry(res1.entry, tmpRegistry);
    assert.equal(count, 1);
    const countIdempotent = applyToRegistry(res1.entry, tmpRegistry);
    assert.equal(countIdempotent, 1, 'Expected idempotent upsert for matching issueNumber');
  } finally {
    if (fs.existsSync(tmpRegistry)) fs.unlinkSync(tmpRegistry);
  }

  console.log('All validateSuggestion.mjs self-tests passed cleanly.');
}

// --- CLI Entrypoint --------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--self-test')) {
    await runSelfTest();
    return;
  }

  const getArg = (flag) => {
    const idx = args.indexOf(flag);
    return idx !== -1 && idx + 1 < args.length ? args[idx + 1] : null;
  };

  const issueBodyFile = getArg('--issue-body-file');
  const jsonFile = getArg('--json');
  const reportFile = getArg('--report-file');
  const issueNumberRaw = getArg('--issue-number') || process.env.ISSUE_NUMBER;
  const issueAuthor = getArg('--author') || process.env.ISSUE_AUTHOR || undefined;
  const issueNumber = issueNumberRaw ? Number(issueNumberRaw) || undefined : undefined;

  const checkUrls = args.includes('--check-urls');
  const checkTsc = args.includes('--check-tsc');
  const shouldApply = args.includes('--apply');

  let submission;
  if (jsonFile) {
    const jsonObject = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
    submission = parseSubmissionInput({ jsonObject, issueNumber, issueAuthor });
  } else if (issueBodyFile) {
    const rawBody = fs.readFileSync(issueBodyFile, 'utf8');
    submission = parseSubmissionInput({ rawBody, issueNumber, issueAuthor });
  } else if (process.env.ISSUE_BODY) {
    submission = parseSubmissionInput({ rawBody: process.env.ISSUE_BODY, issueNumber, issueAuthor });
  } else {
    console.error('Usage: validateSuggestion.mjs [--self-test] | [--issue-body-file <file> | --json <file>] [--check-urls] [--check-tsc] [--apply] [--report-file <md>]');
    process.exit(2);
  }

  const result = await validateSuggestion(submission, { checkUrls, checkTsc });
  const markdownReport = formatMarkdownReport(result, submission);

  if (reportFile) {
    fs.writeFileSync(reportFile, `${markdownReport}\n`, 'utf8');
  }
  console.log(markdownReport);

  if (shouldApply) {
    if (!result.ok) {
      console.error('Cannot --apply invalid submission.');
      process.exit(1);
    }
    const total = applyToRegistry(result.entry);
    console.error(`Applied node "${result.entry.node.id}" to communityContributions.json (total entries: ${total}).`);
  }

  if (!result.ok) {
    process.exit(1);
  }
}

const isDirectCli = process.argv[1] && path.resolve(process.argv[1]) === __filename;
if (isDirectCli) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
