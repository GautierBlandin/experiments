import { useEffect, useState } from 'react';
import { Logger } from '../infrastructure/Logger';
import { proxy, useSnapshot } from 'valtio';

const state = proxy({ count: 0 });

export function useMyHook() {
  const increment = () => {
    state.count++;
  };

  const [logger] = useState(() => new Logger());

  const snap = useSnapshot(state);

  useEffect(() => {
    logger.log('count is ' + snap.count);
  }, [logger, snap.count]);

  return { state, increment, logger };
}
