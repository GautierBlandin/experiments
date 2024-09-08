import { useCounter } from './counter.state';
import { CounterView } from './counter.view';

export function CounterController() {
  const { count, increment } = useCounter();

  return <CounterView count={count} increment={increment} />;
}
