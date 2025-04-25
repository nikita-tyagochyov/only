import { render } from '@testing-library/react';

import PageToolbar from './PageToolbar';

describe('PageToolbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageToolbar />);
    expect(baseElement).toBeTruthy();
  });
});
