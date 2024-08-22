import { useEffect, useState } from 'react';
import { Logger } from '../infrastructure/Logger';

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

export function useMyHook() {
  const [count, setCount] = useState(0);

  const [logger] = useState(() => new Logger());

  useEffect(() => {
    logger.log('count is ' + count);
  }, [logger, count]);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment, logger };
}
