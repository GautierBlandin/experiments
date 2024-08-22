import { useMyHook } from './valtio-store-experiment-hook';
import { useSnapshot } from 'valtio';

export function SimplePage() {
  const { state, increment } = useMyHook();
  const snap = useSnapshot(state);

  return (
    <div>
      <h1>Welcome to My Simple Page</h1>
      <p>This is a very simple root page for the React Frontend app.</p>
      <p>Count: {snap.count.toString()}</p>
      <button onClick={increment}>Increment</button>{' '}
    </div>
  );
}
