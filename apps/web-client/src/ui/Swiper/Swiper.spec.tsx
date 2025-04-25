import { render } from '@testing-library/react';

import Swiper from './Swiper';

describe('Swiper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Swiper />);
    expect(baseElement).toBeTruthy();
  });
});
