// zustand-store-experiment.spec.tsx
import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useZustandHook } from './zustand-store-experiment.hook';
import { FakeLogger } from '../ports/Logger.fake';
import { loggerSingleton } from '../infrastructure/ConsoleLogger';

describe('useZustandHook', () => {
  it('should initialize with count 0', () => {
    const {
      current: { count },
    } = setup();
    expect(count).toBe(0);
  });

  it('should increment count when increment is called', async () => {
    const { current, logger } = setup();

    act(() => {
      current.increment();
    });

    await waitFor(() => expect(current.count).toBe(1));
    await waitFor(() => expect(logger.getLogs()).toContainEqual('count is 1'));
  });
});

const setup = () => {
  loggerSingleton.reset();

  const logger = new FakeLogger();
  loggerSingleton.override(logger);

  const {
    result: { current },
  } = renderHook(() => useZustandHook());

  return { logger, current };
};
