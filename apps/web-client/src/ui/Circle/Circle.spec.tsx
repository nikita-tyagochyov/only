import { render } from '@testing-library/react';

import Circle from './Circle';

describe('Circle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Circle />);
    expect(baseElement).toBeTruthy();
  });
});
