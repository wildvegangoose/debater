import { hierarchy, HierarchyPointNode, tree } from 'd3-hierarchy';
import { Edge, MarkerType, Node, Position } from '@xyflow/react';
import { DebateNode, DebateNodeKind, LayoutDirection } from '../types/debate';

export type NodeBranchSide = 'center' | 'left' | 'right' | 'tb';

export interface EnrichedDebateNodeData extends Record<string, unknown> {
  node: DebateNode;
  depth: number;
  pillarId: string | null;
  directProCount: number;
  directConCount: number;
  directOtherCount: number;
  totalChildCount: number;
  totalDescendantCount: number;
  isCollapsed: boolean;
  isSelected: boolean;
  isInLineage: boolean;
  isDimmed: boolean;
  isSearchMatch: boolean;
  direction: LayoutDirection;
  branchSide: NodeBranchSide;
}

export type DebateFlowNode = Node<EnrichedDebateNodeData, 'debateCard'>;

interface TreeDatum {
  id: string;
  data: DebateNode;
  children?: TreeDatum[];
}

const KIND_SORT_WEIGHT: Record<DebateNodeKind, number> = {
  root: 0,
  pillar: 1,
  thesis: 2,
  pro: 3,
  con: 4,
};

export interface GraphStats {
  totalNodes: number;
  pillarCount: number;
  thesisCount: number;
  proCount: number;
  conCount: number;
  customCount: number;
}

export function computeGraphStats(nodes: DebateNode[]): GraphStats {
  let pillarCount = 0;
  let thesisCount = 0;
  let proCount = 0;
  let conCount = 0;
  let customCount = 0;

  for (const n of nodes) {
    if (n.kind === 'pillar') pillarCount++;
    else if (n.kind === 'thesis') thesisCount++;
    else if (n.kind === 'pro') proCount++;
    else if (n.kind === 'con') conCount++;
    if (n.isCustom) customCount++;
  }

  return {
    totalNodes: nodes.length,
    pillarCount,
    thesisCount,
    proCount,
    conCount,
    customCount,
  };
}

export function getAncestorIds(nodeId: string, nodeMap: Map<string, DebateNode>): string[] {
  const chain: string[] = [];
  let current = nodeMap.get(nodeId);
  const visited = new Set<string>();
  while (current && current.parentId && !visited.has(current.parentId)) {
    visited.add(current.parentId);
    chain.unshift(current.parentId);
    current = nodeMap.get(current.parentId);
  }
  return chain;
}

export function getDescendantIds(nodeId: string, nodes: DebateNode[]): string[] {
  const childrenByParent = new Map<string, string[]>();
  for (const n of nodes) {
    if (n.parentId) {
      const arr = childrenByParent.get(n.parentId) ?? [];
      arr.push(n.id);
      childrenByParent.set(n.parentId, arr);
    }
  }

  const result: string[] = [];
  const stack = [...(childrenByParent.get(nodeId) ?? [])];
  while (stack.length > 0) {
    const id = stack.pop()!;
    result.push(id);
    const kids = childrenByParent.get(id);
    if (kids) stack.push(...kids);
  }
  return result;
}

interface BuildFlowGraphOptions {
  nodes: DebateNode[];
  collapsedIds: Set<string>;
  selectedNodeId: string | null;
  matchingNodeIds: Set<string> | null;
  direction: LayoutDirection;
  showCrossLinks: boolean;
  isDark: boolean;
}

const CARD_HALF_WIDTH = 174; // 348px / 2

export function buildFlowGraph({
  nodes,
  collapsedIds,
  selectedNodeId,
  matchingNodeIds,
  direction,
  showCrossLinks,
  isDark,
}: BuildFlowGraphOptions): { flowNodes: DebateFlowNode[]; flowEdges: Edge[] } {
  const nodeMap = new Map<string, DebateNode>();
  const childrenByParent = new Map<string, DebateNode[]>();

  for (const n of nodes) {
    nodeMap.set(n.id, n);
  }

  for (const n of nodes) {
    if (n.parentId && nodeMap.has(n.parentId)) {
      const list = childrenByParent.get(n.parentId) ?? [];
      list.push(n);
      childrenByParent.set(n.parentId, list);
    }
  }

  // Sort siblings (Pillars preserve authored order; Theses/Pro/Con group cleanly)
  for (const [parentId, list] of childrenByParent) {
    const parent = nodeMap.get(parentId);
    if (parent?.kind !== 'root') {
      list.sort((a, b) => KIND_SORT_WEIGHT[a.kind] - KIND_SORT_WEIGHT[b.kind]);
    }
  }

  const descendantCountCache = new Map<string, number>();
  function countDescendants(id: string): number {
    if (descendantCountCache.has(id)) return descendantCountCache.get(id)!;
    const kids = childrenByParent.get(id) ?? [];
    let sum = kids.length;
    for (const k of kids) {
      sum += countDescendants(k.id);
    }
    descendantCountCache.set(id, sum);
    return sum;
  }

  const rootDebateNode = nodes.find((n) => n.parentId === null) ?? nodes[0];
  if (!rootDebateNode) {
    return { flowNodes: [], flowEdges: [] };
  }

  countDescendants(rootDebateNode.id);

  function findPillarId(id: string): string | null {
    let cur = nodeMap.get(id);
    const seen = new Set<string>();
    while (cur && !seen.has(cur.id)) {
      seen.add(cur.id);
      if (cur.kind === 'pillar') return cur.id;
      cur = cur.parentId ? nodeMap.get(cur.parentId) : undefined;
    }
    return null;
  }

  const lineageIds = new Set<string>();
  const ancestorEdgePairs = new Set<string>();
  if (selectedNodeId && nodeMap.has(selectedNodeId)) {
    const ancestors = getAncestorIds(selectedNodeId, nodeMap);
    const fullChain = [...ancestors, selectedNodeId];
    for (let i = 0; i < fullChain.length; i++) {
      lineageIds.add(fullChain[i]);
      if (i > 0) {
        ancestorEdgePairs.add(`${fullChain[i - 1]}->${fullChain[i]}`);
      }
    }
    const immediateChildren = childrenByParent.get(selectedNodeId) ?? [];
    for (const child of immediateChildren) {
      lineageIds.add(child.id);
    }
  }

  function buildVisibleSubtree(node: DebateNode): TreeDatum {
    const isCollapsed = collapsedIds.has(node.id);
    const rawChildren = childrenByParent.get(node.id) ?? [];
    return {
      id: node.id,
      data: node,
      children: !isCollapsed && rawChildren.length > 0 ? rawChildren.map(buildVisibleSubtree) : undefined,
    };
  }

  const visibleRootDatum = buildVisibleSubtree(rootDebateNode);

  const visibleIds = new Set<string>();
  const flowNodes: DebateFlowNode[] = [];
  const flowEdges: Edge[] = [];

  function emitNode(
    dNode: DebateNode,
    depth: number,
    x: number,
    y: number,
    branchSide: NodeBranchSide
  ) {
    visibleIds.add(dNode.id);

    const allKids = childrenByParent.get(dNode.id) ?? [];
    let directProCount = 0;
    let directConCount = 0;
    let directOtherCount = 0;
    for (const k of allKids) {
      if (k.kind === 'pro') directProCount++;
      else if (k.kind === 'con') directConCount++;
      else directOtherCount++;
    }

    const hasActiveFilter = matchingNodeIds !== null;
    const isSearchMatch = hasActiveFilter ? matchingNodeIds.has(dNode.id) : false;
    const isDimmed = hasActiveFilter && !isSearchMatch;

    const sourcePosition =
      branchSide === 'left'
        ? Position.Left
        : branchSide === 'tb'
          ? Position.Bottom
          : Position.Right;
    const targetPosition =
      branchSide === 'left'
        ? Position.Right
        : branchSide === 'tb'
          ? Position.Top
          : Position.Left;

    flowNodes.push({
      id: dNode.id,
      type: 'debateCard',
      position: { x, y },
      initialWidth: 348,
      initialHeight: 220,
      sourcePosition,
      targetPosition,
      data: {
        node: dNode,
        depth,
        pillarId: findPillarId(dNode.id),
        directProCount,
        directConCount,
        directOtherCount,
        totalChildCount: allKids.length,
        totalDescendantCount: descendantCountCache.get(dNode.id) ?? 0,
        isCollapsed: collapsedIds.has(dNode.id),
        isSelected: dNode.id === selectedNodeId,
        isInLineage: lineageIds.has(dNode.id),
        isDimmed,
        isSearchMatch,
        direction,
        branchSide,
      },
    });
  }

  function emitParentEdge(parentId: string, dNode: DebateNode, sourceHandle: string) {
    const edgeKey = `${parentId}->${dNode.id}`;
    const isAncestorPath = ancestorEdgePairs.has(edgeKey);
    const isDirectChildOfSelected = parentId === selectedNodeId;

    let strokeColor = isDark ? '#475569' : '#94a3b8';
    if (dNode.kind === 'pro') {
      strokeColor = isAncestorPath || isDirectChildOfSelected ? '#10b981' : isDark ? '#059669' : '#10b981';
    } else if (dNode.kind === 'con') {
      strokeColor = isAncestorPath || isDirectChildOfSelected ? '#f43f5e' : isDark ? '#e11d48' : '#f43f5e';
    } else if (dNode.kind === 'pillar') {
      strokeColor = isAncestorPath || isDirectChildOfSelected ? '#38bdf8' : isDark ? '#0284c7' : '#0ea5e9';
    } else if (dNode.kind === 'thesis') {
      strokeColor = isAncestorPath || isDirectChildOfSelected ? '#f59e0b' : isDark ? '#d97706' : '#f59e0b';
    }

    const hasActiveFilter = matchingNodeIds !== null;
    const edgeDimmed =
      hasActiveFilter && !matchingNodeIds.has(dNode.id) && !matchingNodeIds.has(parentId);

    flowEdges.push({
      id: `e-${parentId}-${dNode.id}`,
      source: parentId,
      target: dNode.id,
      sourceHandle,
      targetHandle: 'tgt-in',
      type: 'default',
      animated: isAncestorPath,
      style: {
        stroke: strokeColor,
        strokeWidth: isAncestorPath ? 3.2 : isDirectChildOfSelected ? 2.5 : 1.85,
        opacity: edgeDimmed ? 0.16 : isAncestorPath || isDirectChildOfSelected ? 1 : 0.76,
      },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 14,
        height: 14,
        color: strokeColor,
      },
    });
  }

  const rootKids = visibleRootDatum.children ?? [];

  if (direction === 'SPLIT' && rootKids.length > 1) {
    // Balanced Bilateral Mindmap: First half branches Left, second half branches Right from centered Root
    const mid = Math.ceil(rootKids.length / 2);
    const leftKids = rootKids.slice(0, mid);
    const rightKids = rootKids.slice(mid);

    const splitTreeLayout = tree<TreeDatum>()
      .nodeSize([336, 458])
      .separation((a, b) => (a.parent === b.parent ? 1.0 : 1.15));

    const leftHierarchy = splitTreeLayout(
      hierarchy<TreeDatum>({ id: rootDebateNode.id, data: rootDebateNode, children: leftKids }, (d) => d.children)
    );
    const rightHierarchy = splitTreeLayout(
      hierarchy<TreeDatum>({ id: rootDebateNode.id, data: rootDebateNode, children: rightKids }, (d) => d.children)
    );

    // Emit centered Root once at (-CARD_HALF_WIDTH, 0)
    emitNode(rootDebateNode, 0, -CARD_HALF_WIDTH, 0, 'center');

    const processHalf = (rootPoint: HierarchyPointNode<TreeDatum>, isLeft: boolean) => {
      rootPoint.each((hNode) => {
        if (hNode.depth === 0) return;
        const dNode = hNode.data.data;
        const x = isLeft ? -hNode.y - CARD_HALF_WIDTH : hNode.y - CARD_HALF_WIDTH;
        const y = hNode.x;
        emitNode(dNode, hNode.depth, x, y, isLeft ? 'left' : 'right');

        if (hNode.parent) {
          const parentId = hNode.parent.data.id;
          const srcHandle =
            hNode.parent.depth === 0 ? (isLeft ? 'src-left' : 'src-right') : 'src-out';
          emitParentEdge(parentId, dNode, srcHandle);
        }
      });
    };

    processHalf(leftHierarchy, true);
    processHalf(rightHierarchy, false);
  } else {
    // Unidirectional LR or TB tree
    const isHorizontal = direction !== 'TB';
    const uniLayout = tree<TreeDatum>()
      .nodeSize(isHorizontal ? [336, 458] : [395, 345])
      .separation((a, b) => (a.parent === b.parent ? 1.0 : 1.18));

    const laidOutRoot = uniLayout(hierarchy<TreeDatum>(visibleRootDatum, (d) => d.children));

    laidOutRoot.each((hNode) => {
      const dNode = hNode.data.data;
      const x = isHorizontal ? hNode.y : hNode.x;
      const y = isHorizontal ? hNode.x : hNode.y;
      emitNode(dNode, hNode.depth, x, y, isHorizontal ? 'right' : 'tb');

      if (hNode.parent) {
        emitParentEdge(hNode.parent.data.id, dNode, 'src-out');
      }
    });
  }

  // Cross-branch connections
  const addedCrossPairs = new Set<string>();
  for (const n of nodes) {
    if (!visibleIds.has(n.id) || !n.relatedIds) continue;
    for (const relId of n.relatedIds) {
      if (!visibleIds.has(relId)) continue;
      const involvesSelected = n.id === selectedNodeId || relId === selectedNodeId;
      if (!showCrossLinks && !involvesSelected) continue;

      const pairKey = [n.id, relId].sort().join('::');
      if (addedCrossPairs.has(pairKey)) continue;
      addedCrossPairs.add(pairKey);

      const srcFlowNode = flowNodes.find((fn) => fn.id === n.id);
      const srcSide = srcFlowNode?.data.branchSide;
      const crossSrcHandle =
        srcSide === 'center' ? 'src-right' : 'src-out';

      flowEdges.push({
        id: `cross-${pairKey}`,
        source: n.id,
        target: relId,
        sourceHandle: crossSrcHandle,
        targetHandle: 'tgt-in',
        type: 'default',
        animated: involvesSelected,
        label: involvesSelected ? 'Cross-branch link' : undefined,
        labelStyle: {
          fill: isDark ? '#c4b5fd' : '#6d28d9',
          fontSize: 11,
          fontWeight: 600,
        },
        labelBgStyle: {
          fill: isDark ? '#1e1b4b' : '#ede9fe',
          fillOpacity: 0.9,
        },
        style: {
          stroke: involvesSelected ? '#a78bfa' : isDark ? '#8b5cf6' : '#7c3aed',
          strokeWidth: involvesSelected ? 2.2 : 1.4,
          strokeDasharray: '6 5',
          opacity: involvesSelected ? 0.95 : 0.45,
        },
      });
    }
  }

  return { flowNodes, flowEdges };
}
