import { useCounter } from './counter.state';
import { CounterView } from './counter.view';

export function CounterController() {
  const { count, doubled, increment } = useCounter();

  return <CounterView count={count} doubled={doubled} increment={increment} />;
}
