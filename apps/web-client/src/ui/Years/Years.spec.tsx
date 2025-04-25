import { render } from '@testing-library/react';

import Years from './Years';

describe('Years', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Years />);
    expect(baseElement).toBeTruthy();
  });
});
