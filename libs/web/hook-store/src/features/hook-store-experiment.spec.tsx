import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useMyHook } from './hook-store-experiment-hook';
import { FakeLogger } from '../ports/Logger.fake';
import { loggerSingleton } from '../infrastructure/ConsoleLogger';

describe('useMyHook', () => {
  it('should initialize with count 0', () => {
    const {
      current: { state },
    } = setup();
    expect(state.count).toBe(0);
  });

  it('should increment count when increment is called', async () => {
    const { current, logger } = setup();

    act(() => {
      current.increment();
    });

    expect(current.state.count).toBe(1);

    await waitFor(() => expect(logger.getLogs()).toContainEqual('count is 1'));
  });
});

const setup = () => {
  loggerSingleton.reset();

  const logger = new FakeLogger();
  loggerSingleton.override(logger);

  const {
    result: { current },
  } = renderHook(() => useMyHook());

  return { logger, current };
};
