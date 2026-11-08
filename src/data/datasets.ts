import { DebateGraphDataset, DebateTopicId } from '../types/debate';
import { curatedIsraelPalestineDataset } from './israelPalestineGraph';
import { curatedEconomicPoliciesDataset } from './economicPoliciesGraph';

export const DEBATE_DATASETS: Record<DebateTopicId, DebateGraphDataset> = {
  'israel-palestine': curatedIsraelPalestineDataset,
  'economic-policies': curatedEconomicPoliciesDataset,
};

export const TOPIC_OPTIONS: { id: DebateTopicId; shortTitle: string }[] = [
  { id: 'israel-palestine', shortTitle: 'Israel–Palestine' },
  { id: 'economic-policies', shortTitle: 'Economic Policies' },
];

export function resolveTopicFromUrl(): DebateTopicId {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('topic')?.toLowerCase();
  if (raw === 'economic-policies' || raw === 'economics' || raw === 'econ') {
    return 'economic-policies';
  }
  if (raw === 'israel-palestine' || raw === 'ip') {
    return 'israel-palestine';
  }

  // Also check if #node=<id> belongs uniquely to economic-policies!
  const hash = window.location.hash;
  if (hash.startsWith('#node=')) {
    const targetId = decodeURIComponent(hash.slice('#node='.length));
    const inEcon = curatedEconomicPoliciesDataset.nodes.some((n) => n.id === targetId);
    const inIp = curatedIsraelPalestineDataset.nodes.some((n) => n.id === targetId);
    if (inEcon && !inIp) {
      return 'economic-policies';
    }
  }

  return 'israel-palestine';
}
