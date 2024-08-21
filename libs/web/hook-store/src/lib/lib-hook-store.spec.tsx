import { render } from '@testing-library/react';

import LibHookStore from './lib-hook-store';

describe('LibHookStore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibHookStore />);
    expect(baseElement).toBeTruthy();
  });
});
