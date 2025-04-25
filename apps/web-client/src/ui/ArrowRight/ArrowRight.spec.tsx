import { render } from '@testing-library/react';

import ArrowRight from './ArrowRight';

describe('ArrowRight', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ArrowRight />);
    expect(baseElement).toBeTruthy();
  });
});
