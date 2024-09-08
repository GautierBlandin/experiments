import { initializeCounter, incrementCounter } from './counter.presenter';

describe('CounterPresenter', () => {
  it('initializes with count 0', () => {
    expect(initializeCounter()).toBe(0);
  });

  it('increments count when increment is called', () => {
    expect(incrementCounter(0)).toBe(1);
  });
});
