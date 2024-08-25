// zustand-page.tsx

import { useZustandHook } from './zustand-store-experiment.hook';

export function ZustandPage() {
  const { count, increment } = useZustandHook();

  return (
    <div>
      <h1>Welcome to My Zustand Page</h1>
      <p>This is a very simple root page for the React Frontend app using Zustand.</p>
      <p>Count: {count.toString()}</p>
      <button onClick={increment}>Increment</button>{' '}
    </div>
  );
}
