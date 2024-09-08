import { initializeCounter, incrementCounter } from './counter.presenter';
import { useState } from 'react';

export function useCounter() {
  const [count, setCount] = useState(initializeCounter());

  const increment = () => setCount(incrementCounter(count));

  return { count, increment };
}
