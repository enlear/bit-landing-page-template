import React from 'react';
import { render } from '@testing-library/react';
import { BasicFooter } from './footer.composition';

it('should render with the correct test id', () => {
  const { getByTestId } = render(<BasicFooter />);
  const rendered = getByTestId('footer');
  expect(rendered).toBeTruthy();
});
