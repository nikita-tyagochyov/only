import { render } from '@testing-library/react';

import PageCurrent from './PageCurrent';

describe('PageCurrent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageCurrent />);
    expect(baseElement).toBeTruthy();
  });
});
