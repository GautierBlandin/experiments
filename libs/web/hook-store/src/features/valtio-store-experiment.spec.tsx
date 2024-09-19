import { renderHook, act, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCounter } from './valtio-store-experiment-hook';

describe('useCounter', () => {
  it('should initialize with count 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should initialize getCount with 0', async () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.getCount()).toBe(0);
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

  it('should increment getCount when increment is called', async () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    await waitFor(() => {
      expect(result.current.getCount()).toBe(1);
    });
  });

  it('should double count when doubled is called', async () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    await waitFor(() => {
      expect(result.current.doubled()).toBe(2);
    });
  });
});
