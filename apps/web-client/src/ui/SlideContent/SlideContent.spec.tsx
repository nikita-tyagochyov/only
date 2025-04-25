import { render } from '@testing-library/react';

import SlideContent from './SlideContent';

describe('SlideContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SlideContent />);
    expect(baseElement).toBeTruthy();
  });
});
