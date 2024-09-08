import { CounterPresenter } from './counter.presenter';

describe('CounterPresenter', () => {
  it('initializes with count 0', () => {
    const presenter = new CounterPresenter();

    expect(presenter.count).toBe(0);
  });

  it('increments count when increment is called', () => {
    const presenter = new CounterPresenter();

    presenter.increment();

    expect(presenter.count).toBe(1);
  });
});
