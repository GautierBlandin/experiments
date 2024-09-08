import { CounterPresenter } from './counter.presenter';
import { proxy, useSnapshot } from 'valtio';
import { useState } from 'react';

export function useCounter() {
  const [counterPresenter] = useState(() => new CounterPresenter());
  const [counterProxy] = useState(() => proxy(counterPresenter));

  const snap = useSnapshot(counterProxy);

  return { count: snap.count, increment: () => counterProxy.increment() };
}
