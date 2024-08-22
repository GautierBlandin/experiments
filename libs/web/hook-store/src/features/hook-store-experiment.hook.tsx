import { useEffect, useState } from 'react';
import { Logger } from '@nestjs/common';

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
