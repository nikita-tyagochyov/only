import { render } from '@testing-library/react';

import Year from './Year';

describe('Year', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Year />);
    expect(baseElement).toBeTruthy();
  });
});
