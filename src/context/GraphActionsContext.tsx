import { createContext, useContext } from 'react';
import { DebateNode, DebateNodeKind } from '../types/debate';

export interface GraphActionsContextValue {
  isDark: boolean;
  onToggleCollapse: (nodeId: string) => void;
  onFocusNode: (nodeId: string, includeChildren?: boolean) => void;
  onSelectNode: (nodeId: string) => void;
  onOpenAddModal: (parentNode: DebateNode, defaultKind: Extract<DebateNodeKind, 'pro' | 'con' | 'thesis'>) => void;
}

export const GraphActionsContext = createContext<GraphActionsContextValue | null>(null);

export function useGraphActions(): GraphActionsContextValue {
  const ctx = useContext(GraphActionsContext);
  if (!ctx) {
    throw new Error('useGraphActions must be used inside GraphActionsContext.Provider');
  }
  return ctx;
}
