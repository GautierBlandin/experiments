import { useEffect, useState } from 'react';
import { proxy, useSnapshot } from 'valtio';
import { loggerSingleton } from '../infrastructure/ConsoleLogger';

const state = proxy({ count: 0 });

export function useMyHook() {
  const increment = () => {
    state.count++;
  };

  const [logger] = useState(() => loggerSingleton.get());

  const snap = useSnapshot(state);

  useEffect(() => {
    logger.log('count is ' + snap.count);
  }, [logger, snap.count]);

  return { state, increment, logger };
}
