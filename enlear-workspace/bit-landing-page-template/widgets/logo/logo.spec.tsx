import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogo } from './logo.composition';

it('should render svg as parent element', () => {
  const { getByTestId } = render(<BasicLogo />);
  const rendered = getByTestId('logo');
  expect(rendered).toBeTruthy();
});
