import { render } from '@testing-library/react';

import ArrowLeft from './ArrowLeft';

describe('ArrowLeft', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArrowLeft />);
    expect(baseElement).toBeTruthy();
  });
});
