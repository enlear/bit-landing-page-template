import React from 'react';
import { render } from '@testing-library/react';
import { IconButtonWithHamburger } from './icon-button.composition';

it('should render button with onClick', () => {
  const { getByTestId } = render(<IconButtonWithHamburger />);
  const button = getByTestId('button');
  expect(button).toBeTruthy();
});
