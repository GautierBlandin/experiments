import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useMyHook } from './hook-store-experiment-hook';

describe('useMyHook', () => {
  it('should initialize with count 0', () => {
    const {
      result: {
        current: { state },
      },
    } = renderHook(() => useMyHook());
    expect(state.count).toBe(0);
  });

  it('should increment count when increment is called', async () => {
    const { result } = renderHook(() => useMyHook());

    act(() => {
      result.current.increment();
    });

    expect(result.current.state.count).toBe(1);

    await waitFor(() => expect(result.current.logger.getLogs()).toContainEqual('count is 1'));
  });
});
