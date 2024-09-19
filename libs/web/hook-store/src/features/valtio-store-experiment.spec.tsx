import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCounter } from './valtio-store-experiment-hook';

describe('useCounter', () => {
  it('should initialize with count 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should increment count when increment is called', async () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    await waitFor(() => {
      expect(result.current.count).toBe(1);
    });
  });
});
