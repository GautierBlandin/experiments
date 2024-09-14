import { render } from '@testing-library/react';

import ComplexValtioFeature from './complex-valtio-feature';

describe('ComplexValtioFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComplexValtioFeature />);
    expect(baseElement).toBeTruthy();
  });
});
