// zustand-hook.tsx
import { useEffect, useState } from 'react';
import create from 'zustand';
import { loggerSingleton } from '../infrastructure/ConsoleLogger';

interface StoreState {
  count: number;
  increment: () => void;
}

const useCountStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export function useZustandHook() {
  const { count, increment } = useCountStore();
  const [logger] = useState(() => loggerSingleton.get());

  useEffect(() => {
    logger.log('count is ' + count);
  }, [logger, count]);

  return { count, increment, logger };
}
