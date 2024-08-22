import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useMyHook } from './hook-store-experiment-hook';

describe('useMyHook', () => {
  it('should initialize with count 0', () => {
    const { result } = renderHook(() => useMyHook());
    expect(result.current.count).toBe(0);
  });

  it('should increment count when increment is called', () => {
    const { result } = renderHook(() => useMyHook());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
