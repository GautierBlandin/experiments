import { useRef } from 'react';
import { proxy, useSnapshot } from 'valtio';

class Counter {
  public count = 0;

  public increment() {
    this.count++;
  }

  public getCount() {
    return this.count;
  }

  public doubled() {
    return this.count * 2;
  }
}

export function useCounter() {
  const counterRef = useRef(proxy(new Counter()));
  const { count, doubled, getCount } = useSnapshot(counterRef.current);

  return {
    count,
    getCount,
    doubled,
    increment: () => {
      counterRef.current.increment();
    },
  };
}
