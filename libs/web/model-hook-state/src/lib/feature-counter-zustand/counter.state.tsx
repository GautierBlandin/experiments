import { initializeCounter, incrementCounter } from './counter.presenter';
import { create } from 'zustand';

interface CounterStoreState {
  count: number;
  increment: () => void;
}

export const useCounter = create<CounterStoreState>((set) => ({
  count: initializeCounter(),
  increment: () => set((state) => ({ count: incrementCounter(state.count) })),
}));
