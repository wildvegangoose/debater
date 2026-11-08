import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  applyNodeChanges,
  Background,
  BackgroundVariant,
  MiniMap,
  NodeChange,
  ReactFlow,
  ReactFlowProvider,
  useNodesInitialized,
  useReactFlow,
} from '@xyflow/react';
import clsx from 'clsx';
import { fetchDataset, getCachedDatasetSync, resolveTopicFromUrl, TOPIC_OPTIONS } from './data/datasets';
import { curatedIsraelPalestineDataset } from './data/israelPalestineGraph';
import { DebateGraphDataset, DebateNode, DebateNodeKind, DebateTag, DebateTopicId, LayoutDirection } from './types/debate';
import {
  buildFlowGraph,
  computeGraphStats,
  DebateFlowNode,
  getAncestorIds,
  getDescendantIds,
} from './utils/graphLayout';
import { GraphActionsContext } from './context/GraphActionsContext';
import { DebateCardNode } from './components/DebateCardNode';
import { TopBar } from './components/TopBar';
import { CanvasToolbar } from './components/CanvasToolbar';
import { NodeInspectorDrawer } from './components/NodeInspectorDrawer';
import { Loader2 } from 'lucide-react';
import { NodeEditorModal } from './components/NodeEditorModal';
import { MethodologyModal } from './components/MethodologyModal';

const STORAGE_PREFIX = 'dialectica-debate-sandbox-';
const THEME_KEY = 'dialectica-theme-v1';

const nodeTypes = {
  debateCard: DebateCardNode,
};

function storageKeyForTopic(topicId: DebateTopicId): string {
  return `${STORAGE_PREFIX}${topicId}`;
}

function loadNodesForDataset(dataset: DebateGraphDataset): { nodes: DebateNode[]; hasCustom: boolean } {
  try {
    const raw = localStorage.getItem(storageKeyForTopic(dataset.id));
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed?.nodes) && parsed.nodes.length > 0) {
        if (parsed.version === dataset.version) {
          return { nodes: parsed.nodes, hasCustom: true };
        }
        const baselineIds = new Set(dataset.nodes.map((n) => n.id));
        const customAdditions = (parsed.nodes as DebateNode[]).filter(
          (n) => n.isCustom && !baselineIds.has(n.id)
        );
        return {
          nodes: [...dataset.nodes, ...customAdditions],
          hasCustom: customAdditions.length > 0,
        };
      }
    }
  } catch {
    // Ignore malformed storage
  }
  return { nodes: dataset.nodes, hasCustom: false };
}

function getInitialCollapsedIds(nodes: DebateNode[], targetNodeId?: string | null): Set<string> {
  const collapsed = new Set<string>();
  const childrenParentIds = new Set(nodes.map((n) => n.parentId).filter(Boolean));
  for (const n of nodes) {
    if (n.kind === 'thesis' && childrenParentIds.has(n.id)) {
      collapsed.add(n.id);
    }
  }

  if (targetNodeId) {
    const map = new Map(nodes.map((n) => [n.id, n]));
    const target = map.get(targetNodeId);
    if (target) {
      for (const anc of getAncestorIds(targetNodeId, map)) {
        collapsed.delete(anc);
      }
      collapsed.delete(targetNodeId);
      // If deep-linking to a Pillar, unfold its subtree so all its theses & arguments are visible!
      if (target.kind === 'pillar') {
        for (const desc of getDescendantIds(targetNodeId, nodes)) {
          collapsed.delete(desc);
        }
      }
    }
  }
  return collapsed;
}

function findOwningPillarId(nodeId: string | null, nodes: DebateNode[]): string | null {
  if (!nodeId) return null;
  const map = new Map(nodes.map((n) => [n.id, n]));
  let cur = map.get(nodeId);
  const visited = new Set<string>();
  while (cur && !visited.has(cur.id)) {
    visited.add(cur.id);
    if (cur.kind === 'pillar') return cur.id;
    cur = cur.parentId ? map.get(cur.parentId) : undefined;
  }
  return null;
}

function parseHashNodeId(): string | null {
  const hash = window.location.hash;
  if (hash.startsWith('#node=')) {
    return decodeURIComponent(hash.slice('#node='.length));
  }
  return null;
}

interface PendingCameraRequest {
  nodeIds: string[];
  maxZoom?: number;
  padding?: number;
  duration?: number;
}

function DebateGraphWorkspace() {
  const { fitView } = useReactFlow();
  const nodesInitialized = useNodesInitialized();

  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
  }, [isDark]);

  // Active Topic & Dataset state
  const [topicId, setTopicId] = useState<DebateTopicId>(() => resolveTopicFromUrl());
  const [activeDataset, setActiveDataset] = useState<DebateGraphDataset>(() => {
    const initialTopic = resolveTopicFromUrl();
    return getCachedDatasetSync(initialTopic) ?? curatedIsraelPalestineDataset;
  });
  const [isLoadingTopic, setIsLoadingTopic] = useState<boolean>(false);

  const [nodes, setNodes] = useState<DebateNode[]>(() => {
    const initialTopic = resolveTopicFromUrl();
    const dataset = getCachedDatasetSync(initialTopic) ?? curatedIsraelPalestineDataset;
    return loadNodesForDataset(dataset).nodes;
  });
  const [hasSandboxChanges, setHasSandboxChanges] = useState<boolean>(() => {
    const initialTopic = resolveTopicFromUrl();
    const dataset = getCachedDatasetSync(initialTopic) ?? curatedIsraelPalestineDataset;
    return loadNodesForDataset(dataset).hasCustom;
  });

  const [collapsedIds, setCollapsedIds] = useState<Set<string>>(() => {
    const initialTopic = resolveTopicFromUrl();
    const dataset = getCachedDatasetSync(initialTopic) ?? curatedIsraelPalestineDataset;
    const initialNodes = loadNodesForDataset(dataset).nodes;
    return getInitialCollapsedIds(initialNodes, parseHashNodeId());
  });

  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(() => parseHashNodeId());
  const [activePillarId, setActivePillarId] = useState<string | null>(() => {
    const initialTopic = resolveTopicFromUrl();
    const dataset = getCachedDatasetSync(initialTopic) ?? curatedIsraelPalestineDataset;
    const initialNodes = loadNodesForDataset(dataset).nodes;
    return findOwningPillarId(parseHashNodeId(), initialNodes);
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<DebateTag | null>(null);
  const [direction, setDirection] = useState<LayoutDirection>('SPLIT');
  const [showCrossLinks, setShowCrossLinks] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  useEffect(() => {
    document.title = `${activeDataset.title} — Dialectica`;
  }, [activeDataset.title]);

  const persistSandboxNodes = useCallback(
    (updatedNodes: DebateNode[]) => {
      setNodes(updatedNodes);
      setHasSandboxChanges(true);
      try {
        localStorage.setItem(
          storageKeyForTopic(activeDataset.id),
          JSON.stringify({
            version: activeDataset.version,
            savedAt: new Date().toISOString(),
            nodes: updatedNodes,
          })
        );
      } catch {
        // Ignore storage quota errors
      }
    },
    [activeDataset]
  );

  // Add / Edit Modal state
  const [editorState, setEditorState] = useState<{
    isOpen: boolean;
    mode: 'add' | 'edit';
    parentNode: DebateNode | null;
    initialNode: DebateNode | null;
    defaultKind: DebateNodeKind;
  }>({
    isOpen: false,
    mode: 'add',
    parentNode: null,
    initialNode: null,
    defaultKind: 'pro',
  });

  // Deterministic post-layout camera flight queue
  const [pendingCamera, setPendingCamera] = useState<PendingCameraRequest | null>(null);
  const didInitialViewportFit = useRef(false);

  const nodeMap = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);
  const stats = useMemo(() => computeGraphStats(nodes), [nodes]);

  // Switch between Debate Graph Topics
  const applyTopicAndTarget = useCallback(
    async (nextTopicId: DebateTopicId, targetNodeId: string | null, updateHistory = true) => {
      let nextDataset = getCachedDatasetSync(nextTopicId);
      if (!nextDataset) {
        setIsLoadingTopic(true);
        try {
          nextDataset = await fetchDataset(nextTopicId);
        } catch (err) {
          console.error('Failed to load topic dataset', err);
          setIsLoadingTopic(false);
          return;
        }
        setIsLoadingTopic(false);
      }

      setActiveDataset(nextDataset);
      const loaded = loadNodesForDataset(nextDataset);
      setTopicId(nextTopicId);
      setNodes(loaded.nodes);
      setHasSandboxChanges(loaded.hasCustom);
      setSearchQuery('');
      setActiveTag(null);
      setCollapsedIds(getInitialCollapsedIds(loaded.nodes, targetNodeId));
      setSelectedNodeId(targetNodeId && loaded.nodes.some((n) => n.id === targetNodeId) ? targetNodeId : null);
      setActivePillarId(findOwningPillarId(targetNodeId, loaded.nodes));

      if (updateHistory) {
        const url = new URL(window.location.href);
        url.searchParams.set('topic', nextTopicId);
        url.hash = targetNodeId ? `node=${encodeURIComponent(targetNodeId)}` : '';
        window.history.pushState(null, '', `${url.pathname}${url.search}${url.hash}`);
      }

      if (targetNodeId && loaded.nodes.some((n) => n.id === targetNodeId)) {
        const targetObj = loaded.nodes.find((n) => n.id === targetNodeId)!;
        const focusIds =
          targetObj.kind === 'pillar'
            ? [targetNodeId, ...getDescendantIds(targetNodeId, loaded.nodes)]
            : [targetNodeId, ...loaded.nodes.filter((n) => n.parentId === targetNodeId).map((n) => n.id)];
        setPendingCamera({
          nodeIds: focusIds,
          maxZoom: targetObj.kind === 'pillar' ? 0.78 : 0.92,
          padding: 0.2,
          duration: 500,
        });
      } else {
        setPendingCamera({
          nodeIds: loaded.nodes.map((n) => n.id),
          maxZoom: 0.75,
          padding: 0.1,
          duration: 450,
        });
      }
    },
    []
  );

  // If initial URL topic was not pre-cached, fetch it on mount
  useEffect(() => {
    const initialTopic = resolveTopicFromUrl();
    if (!getCachedDatasetSync(initialTopic)) {
      applyTopicAndTarget(initialTopic, parseHashNodeId(), false);
    }
  }, [applyTopicAndTarget]);

  const handleSwitchTopic = useCallback(
    (nextTopicId: DebateTopicId) => {
      if (nextTopicId === topicId) return;
      applyTopicAndTarget(nextTopicId, null, true);
    },
    [topicId, applyTopicAndTarget]
  );

  // Live URL listener for `#node=...` hash changes and browser Back/Forward (`popstate`)!
  useEffect(() => {
    const syncFromLocation = () => {
      const urlTopic = resolveTopicFromUrl();
      const targetId = parseHashNodeId();
      if (urlTopic !== topicId) {
        applyTopicAndTarget(urlTopic, targetId, false);
        return;
      }
      if (targetId && nodeMap.has(targetId)) {
        const target = nodeMap.get(targetId)!;
        const ancestors = getAncestorIds(targetId, nodeMap);
        const unfoldIds =
          target.kind === 'pillar'
            ? [targetId, ...getDescendantIds(targetId, nodes)]
            : [...ancestors, targetId];
        setCollapsedIds((prev) => {
          const next = new Set(prev);
          for (const id of unfoldIds) next.delete(id);
          return next;
        });
        setSelectedNodeId(targetId);
        setActivePillarId(findOwningPillarId(targetId, nodes));
        const cameraIds =
          target.kind === 'pillar'
            ? [targetId, ...getDescendantIds(targetId, nodes)]
            : [targetId, ...nodes.filter((n) => n.parentId === targetId).map((n) => n.id)];
        setPendingCamera({
          nodeIds: cameraIds,
          maxZoom: target.kind === 'pillar' ? 0.78 : 0.92,
          padding: 0.22,
          duration: 500,
        });
      } else if (!targetId) {
        setSelectedNodeId(null);
        setActivePillarId(null);
      }
    };

    window.addEventListener('hashchange', syncFromLocation);
    window.addEventListener('popstate', syncFromLocation);
    return () => {
      window.removeEventListener('hashchange', syncFromLocation);
      window.removeEventListener('popstate', syncFromLocation);
    };
  }, [topicId, nodeMap, nodes, applyTopicAndTarget]);

  // Search + Lens Filter matching set
  const matchingNodeIds = useMemo<Set<string> | null>(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q && !activeTag) return null;

    const matches = new Set<string>();
    for (const n of nodes) {
      const tagOk = !activeTag || n.tags.includes(activeTag);
      const queryOk =
        !q ||
        n.title.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.details.some((d) => d.toLowerCase().includes(q)) ||
        (n.sections ?? []).some(
          (s) =>
            s.heading.toLowerCase().includes(q) ||
            s.paragraphs.some((p) => p.toLowerCase().includes(q))
        ) ||
        (n.sources ?? []).some(
          (src) =>
            src.title.toLowerCase().includes(q) ||
            (src.publisher ?? '').toLowerCase().includes(q)
        ) ||
        (n.references ?? []).some((r) => r.toLowerCase().includes(q));

      if (tagOk && queryOk) {
        matches.add(n.id);
      }
    }
    return matches;
  }, [nodes, searchQuery, activeTag]);

  // Build laid-out React Flow nodes & edges
  const { flowNodes: computedFlowNodes, flowEdges } = useMemo(
    () =>
      buildFlowGraph({
        nodes,
        collapsedIds,
        selectedNodeId,
        matchingNodeIds,
        direction,
        showCrossLinks,
        isDark,
      }),
    [nodes, collapsedIds, selectedNodeId, matchingNodeIds, direction, showCrossLinks, isDark]
  );

  // Sync computed layout nodes while preserving React Flow ResizeObserver `measured` dimensions
  const [rfNodes, setRfNodes] = useState<DebateFlowNode[]>(computedFlowNodes);

  useEffect(() => {
    setRfNodes((prev) => {
      const prevMeasured = new Map(prev.map((n) => [n.id, n.measured]));
      return computedFlowNodes.map((n) => {
        const measured = prevMeasured.get(n.id);
        return measured ? { ...n, measured } : n;
      });
    });
  }, [computedFlowNodes]);

  const handleNodesChange = useCallback((changes: NodeChange<DebateFlowNode>[]) => {
    setRfNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  // Initial camera framing once React Flow finishes measuring DOM cards
  useEffect(() => {
    if (!nodesInitialized || didInitialViewportFit.current) return;
    didInitialViewportFit.current = true;

    const targetId = parseHashNodeId();
    if (targetId && nodeMap.has(targetId)) {
      const target = nodeMap.get(targetId)!;
      const focusIds =
        target.kind === 'pillar'
          ? [targetId, ...getDescendantIds(targetId, nodes)]
          : [targetId, ...nodes.filter((n) => n.parentId === targetId).map((n) => n.id)];
      fitView({
        nodes: focusIds.map((id) => ({ id })),
        duration: 380,
        padding: 0.22,
        maxZoom: target.kind === 'pillar' ? 0.78 : 0.92,
      });
      return;
    }

    fitView({ duration: 0, padding: 0.08, maxZoom: 0.8 });
  }, [nodesInitialized, fitView, nodeMap, nodes]);

  // Execute pending camera animation once rfNodes reflect latest state
  useEffect(() => {
    if (!pendingCamera || !nodesInitialized) return;
    const validTargets = pendingCamera.nodeIds.filter((id) => rfNodes.some((fn) => fn.id === id));
    const timer = window.setTimeout(() => {
      if (validTargets.length > 0) {
        fitView({
          nodes: validTargets.map((id) => ({ id })),
          duration: pendingCamera.duration ?? 540,
          padding: pendingCamera.padding ?? 0.22,
          maxZoom: pendingCamera.maxZoom ?? 1.02,
        });
      } else {
        fitView({ duration: 480, padding: 0.12 });
      }
      setPendingCamera(null);
    }, 65);
    return () => window.clearTimeout(timer);
  }, [pendingCamera, rfNodes, nodesInitialized, fitView]);

  // Keyboard shortcuts (F = Fit View, Esc = Close drawer / modal)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'Escape') {
        if (isGuideOpen) setIsGuideOpen(false);
        else if (editorState.isOpen) setEditorState((s) => ({ ...s, isOpen: false }));
        else setSelectedNodeId(null);
      } else if (e.key.toLowerCase() === 'f' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        fitView({ duration: 500, padding: 0.14 });
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [fitView, isGuideOpen, editorState.isOpen]);

  const syncUrlHash = useCallback(
    (nodeId: string | null) => {
      const url = new URL(window.location.href);
      url.searchParams.set('topic', topicId);
      url.hash = nodeId ? `node=${encodeURIComponent(nodeId)}` : '';
      window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
    },
    [topicId]
  );

  // Toggle expand/collapse on a node
  const handleToggleCollapse = useCallback(
    (nodeId: string) => {
      setCollapsedIds((prev) => {
        const next = new Set(prev);
        const willExpand = next.has(nodeId);
        if (willExpand) {
          next.delete(nodeId);
          const directChildIds = nodes.filter((n) => n.parentId === nodeId).map((n) => n.id);
          setPendingCamera({
            nodeIds: [nodeId, ...directChildIds],
            maxZoom: 0.92,
            padding: 0.24,
          });
        } else {
          next.add(nodeId);
        }
        return next;
      });
    },
    [nodes]
  );

  // Focus & smoothly animate zoom onto a node (and optionally its direct children)
  const handleFocusNode = useCallback(
    (nodeId: string, includeChildren = false) => {
      const ancestors = getAncestorIds(nodeId, nodeMap);
      setCollapsedIds((prev) => {
        const next = new Set(prev);
        for (const ancId of ancestors) next.delete(ancId);
        if (includeChildren) next.delete(nodeId);
        return next;
      });

      const directKids = includeChildren
        ? nodes.filter((n) => n.parentId === nodeId).map((n) => n.id)
        : [];

      setPendingCamera({
        nodeIds: [nodeId, ...directKids],
        maxZoom: includeChildren && directKids.length > 0 ? 0.86 : 1.02,
        padding: 0.28,
      });
    },
    [nodeMap, nodes]
  );

  const handleSelectNode = useCallback(
    (nodeId: string | null) => {
      setSelectedNodeId(nodeId);
      setActivePillarId(findOwningPillarId(nodeId, nodes));
      syncUrlHash(nodeId);
    },
    [nodes, syncUrlHash]
  );

  const handleSelectAndZoom = useCallback(
    (nodeId: string, frameChildren = false) => {
      handleSelectNode(nodeId);
      handleFocusNode(nodeId, frameChildren);
    },
    [handleSelectNode, handleFocusNode]
  );

  // Jump to Pillar from TopBar
  const handleJumpToPillar = useCallback(
    (pillarId: string | null) => {
      setActivePillarId(pillarId);
      if (pillarId === null) {
        setSelectedNodeId(null);
        syncUrlHash(null);
        setPendingCamera({
          nodeIds: computedFlowNodes.map((n) => n.id),
          maxZoom: 0.75,
          padding: 0.1,
        });
        return;
      }

      const rootId = nodes.find((n) => n.parentId === null)?.id;
      const subtreeIds = getDescendantIds(pillarId, nodes);
      setCollapsedIds((prev) => {
        const next = new Set(prev);
        if (rootId) next.delete(rootId);
        next.delete(pillarId);
        for (const id of subtreeIds) {
          next.delete(id);
        }
        return next;
      });
      setSelectedNodeId(pillarId);
      syncUrlHash(pillarId);
      setPendingCamera({
        nodeIds: [pillarId, ...subtreeIds],
        maxZoom: 0.78,
        padding: 0.18,
      });
    },
    [computedFlowNodes, nodes, syncUrlHash]
  );

  // Apply Depth Presets (1 = Pillars, 2 = Theses, 3 = Pro/Con, 'all' = Full Depth)
  const handleApplyDepthPreset = useCallback(
    (maxDepth: number | 'all') => {
      setActivePillarId(null);
      if (maxDepth === 'all') {
        setCollapsedIds(new Set());
        setPendingCamera({
          nodeIds: nodes.map((n) => n.id),
          maxZoom: 0.65,
          padding: 0.14,
        });
        return;
      }

      const nextCollapsed = new Set<string>();
      for (const n of nodes) {
        const depth = getAncestorIds(n.id, nodeMap).length;
        if (depth >= maxDepth) {
          nextCollapsed.add(n.id);
        }
      }
      setCollapsedIds(nextCollapsed);
      setPendingCamera({
        nodeIds: nodes.filter((n) => getAncestorIds(n.id, nodeMap).length <= maxDepth).map((n) => n.id),
        maxZoom: 0.85,
        padding: 0.16,
      });
    },
    [nodes, nodeMap]
  );

  // Sandbox Add / Edit / Delete handlers
  const handleOpenAddModal = useCallback(
    (parentNode: DebateNode, defaultKind: Extract<DebateNodeKind, 'pro' | 'con' | 'thesis'>) => {
      setEditorState({
        isOpen: true,
        mode: 'add',
        parentNode,
        initialNode: null,
        defaultKind,
      });
    },
    []
  );

  const handleOpenEditModal = useCallback((node: DebateNode) => {
    setEditorState({
      isOpen: true,
      mode: 'edit',
      parentNode: null,
      initialNode: node,
      defaultKind: node.kind,
    });
  }, []);

  const handleSaveNode = useCallback(
    (data: Omit<DebateNode, 'id'> & { id?: string }) => {
      const rootId = nodes.find((n) => n.parentId === null)?.id ?? null;
      if (data.id) {
        const updated = nodes.map((n) => (n.id === data.id ? { ...n, ...data, id: data.id, isCustom: true } : n));
        persistSandboxNodes(updated);
        handleSelectNode(data.id);
      } else {
        const newId = `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
        const newNode: DebateNode = {
          ...data,
          parentId: data.parentId ?? rootId,
          id: newId,
          isCustom: true,
        };
        const updated = [...nodes, newNode];
        persistSandboxNodes(updated);
        if (newNode.parentId) {
          setCollapsedIds((prev) => {
            const next = new Set(prev);
            next.delete(newNode.parentId!);
            return next;
          });
        }
        handleSelectNode(newId);
        setPendingCamera({
          nodeIds: newNode.parentId ? [newNode.parentId, newId] : [newId],
          maxZoom: 0.95,
          padding: 0.3,
        });
      }
    },
    [nodes, persistSandboxNodes, handleSelectNode]
  );

  const handleDeleteNode = useCallback(
    (target: DebateNode) => {
      if (target.kind === 'root') return;
      const descendants = getDescendantIds(target.id, nodes);
      const countMsg =
        descendants.length > 0
          ? `Remove "${target.title}" and its ${descendants.length} sub-arguments from your local sandbox? (You can restore defaults anytime with Reset.)`
          : `Remove "${target.title}" from your local sandbox?`;
      if (!window.confirm(countMsg)) return;

      const toRemove = new Set([target.id, ...descendants]);
      const updated = nodes.filter((n) => !toRemove.has(n.id));
      persistSandboxNodes(updated);
      handleSelectNode(target.parentId);
    },
    [nodes, persistSandboxNodes, handleSelectNode]
  );

  const handleExportJson = useCallback(() => {
    const payload = {
      ...activeDataset,
      exportedAt: new Date().toISOString(),
      nodes,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeDataset.id}-debate-graph.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [activeDataset, nodes]);

  const handleImportJson = useCallback(
    (file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(String(reader.result));
          const importedNodes: DebateNode[] = Array.isArray(parsed) ? parsed : parsed?.nodes;
          if (!Array.isArray(importedNodes) || importedNodes.length === 0) {
            alert('Invalid JSON format: expected an object with a non-empty "nodes" array.');
            return;
          }
          persistSandboxNodes(importedNodes);
          setCollapsedIds(getInitialCollapsedIds(importedNodes));
          handleSelectNode(null);
          setPendingCamera({ nodeIds: importedNodes.map((n: DebateNode) => n.id), maxZoom: 0.75, padding: 0.15 });
        } catch {
          alert('Could not parse JSON file.');
        }
      };
      reader.readAsText(file);
    },
    [persistSandboxNodes, handleSelectNode]
  );

  const handleResetSandbox = useCallback(() => {
    if (!window.confirm('Reset local sandbox edits and restore the original curated debate graph?')) return;
    localStorage.removeItem(storageKeyForTopic(activeDataset.id));
    setHasSandboxChanges(false);
    setNodes(activeDataset.nodes);
    setCollapsedIds(getInitialCollapsedIds(activeDataset.nodes));
    handleSelectNode(null);
    setPendingCamera({
      nodeIds: activeDataset.nodes.map((n: DebateNode) => n.id),
      maxZoom: 0.75,
      padding: 0.14,
    });
  }, [activeDataset, handleSelectNode]);

  const graphActionsValue = useMemo(
    () => ({
      isDark,
      onToggleCollapse: handleToggleCollapse,
      onFocusNode: handleFocusNode,
      onSelectNode: handleSelectNode,
      onOpenAddModal: handleOpenAddModal,
    }),
    [isDark, handleToggleCollapse, handleFocusNode, handleSelectNode, handleOpenAddModal]
  );

  const selectedNode = selectedNodeId ? nodeMap.get(selectedNodeId) ?? null : null;

  return (
    <GraphActionsContext.Provider value={graphActionsValue}>
      <div
        className={clsx(
          'w-screen h-screen flex flex-col overflow-hidden',
          isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
        )}
      >
        <TopBar
          dataset={activeDataset}
          topicOptions={TOPIC_OPTIONS}
          onSwitchTopic={handleSwitchTopic}
          nodes={nodes}
          stats={stats}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeTag={activeTag}
          onTagChange={setActiveTag}
          activePillarId={activePillarId}
          onJumpToPillar={handleJumpToPillar}
          onSelectSearchResult={(id) => {
            setSearchQuery('');
            handleSelectAndZoom(id, false);
          }}
          hasSandboxChanges={hasSandboxChanges}
          onExportJson={handleExportJson}
          onImportJson={handleImportJson}
          onResetSandbox={handleResetSandbox}
          isDark={isDark}
          onToggleTheme={() => setIsDark((d) => !d)}
          onOpenGuide={() => setIsGuideOpen(true)}
        />

        {/* Main Workspace: Infinite Zoomable Canvas + Right Inspector Drawer */}
        <div className="flex-1 flex min-h-0 relative">
          <div className="flex-1 h-full relative">
            {isLoadingTopic && (
              <div className="absolute inset-0 z-40 bg-slate-950/70 backdrop-blur-xs flex flex-col items-center justify-center gap-3 text-slate-100 animate-in fade-in duration-150">
                <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
                <p className="text-sm font-semibold tracking-wide">Loading Landmark Debate...</p>
                <p className="text-xs text-slate-400">Fetching curated nodes &amp; primary evidence dossiers</p>
              </div>
            )}
            <ReactFlow<DebateFlowNode>
              nodes={rfNodes}
              edges={flowEdges}
              onNodesChange={handleNodesChange}
              nodeTypes={nodeTypes}
              minZoom={0.09}
              maxZoom={2.0}
              zoomOnScroll
              zoomOnPinch
              panOnDrag
              zoomOnDoubleClick={false}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable
              onPaneClick={() => handleSelectNode(null)}
              proOptions={{ hideAttribution: true }}
            >
              <Background
                variant={BackgroundVariant.Dots}
                gap={24}
                size={1.35}
                color={isDark ? '#334155' : '#cbd5e1'}
              />

              <MiniMap
                pannable
                zoomable
                position="bottom-right"
                style={{
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.92)' : 'rgba(255, 255, 255, 0.92)',
                  border: isDark ? '1px solid rgba(51, 65, 85, 0.8)' : '1px solid rgba(203, 213, 225, 0.9)',
                }}
                maskColor={isDark ? 'rgba(2, 6, 23, 0.62)' : 'rgba(241, 245, 249, 0.65)'}
                nodeColor={(n) => {
                  const kind = (n.data as DebateFlowNode['data'])?.node?.kind;
                  if (kind === 'root') return '#6366f1';
                  if (kind === 'pillar') return '#38bdf8';
                  if (kind === 'thesis') return '#f59e0b';
                  if (kind === 'pro') return '#10b981';
                  if (kind === 'con') return '#f43f5e';
                  return '#94a3b8';
                }}
              />

              <CanvasToolbar
                direction={direction}
                onCycleDirection={() => {
                  setDirection((prev) =>
                    prev === 'SPLIT' ? 'LR' : prev === 'LR' ? 'TB' : 'SPLIT'
                  );
                  setPendingCamera({
                    nodeIds: computedFlowNodes.map((n) => n.id),
                    maxZoom: 0.75,
                    padding: 0.1,
                  });
                }}
                showCrossLinks={showCrossLinks}
                onToggleCrossLinks={() => setShowCrossLinks((v) => !v)}
                onApplyDepthPreset={handleApplyDepthPreset}
                isDark={isDark}
              />
            </ReactFlow>
          </div>

          <NodeInspectorDrawer
            topicId={activeDataset.id}
            epistemologyNote={activeDataset.epistemologyNote}
            selectedNode={selectedNode}
            allNodes={nodes}
            isDark={isDark}
            onClose={() => handleSelectNode(null)}
            onSelectAndZoom={handleSelectAndZoom}
            onOpenAddChild={handleOpenAddModal}
            onOpenEdit={handleOpenEditModal}
            onDeleteNode={handleDeleteNode}
          />
        </div>

        <NodeEditorModal
          isOpen={editorState.isOpen}
          mode={editorState.mode}
          availableTags={activeDataset.availableTags}
          parentNode={editorState.parentNode}
          initialNode={editorState.initialNode}
          defaultKind={editorState.defaultKind}
          isDark={isDark}
          onClose={() => setEditorState((s) => ({ ...s, isOpen: false }))}
          onSave={handleSaveNode}
        />

        <MethodologyModal
          dataset={activeDataset}
          isOpen={isGuideOpen}
          isDark={isDark}
          onClose={() => setIsGuideOpen(false)}
        />
      </div>
    </GraphActionsContext.Provider>
  );
}

export default function App() {
  return (
    <ReactFlowProvider>
      <DebateGraphWorkspace />
    </ReactFlowProvider>
  );
}
