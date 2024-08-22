import { useMyHook } from './hook-store-experiment-hook';

export function SimplePage() {
  const { count, increment } = useMyHook();

  return (
    <div>
      <h1>Welcome to My Simple Page</h1>
      <p>This is a very simple root page for the React Frontend app.</p>
      <p>Count: {count.toString()}</p>
      <button onClick={increment}>Increment</button>{' '}
    </div>
  );
}
