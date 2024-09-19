import { useRef } from 'react';
import { proxy, useSnapshot } from 'valtio';

class Counter {
  public count = 0;

  public increment() {
    this.count++;
  }
}

export function useCounter() {
  const counterRef = useRef(proxy(new Counter()));
  const { count } = useSnapshot(counterRef.current);

  return {
    count,
    increment: () => {
      counterRef.current.increment();
    },
  };
}
