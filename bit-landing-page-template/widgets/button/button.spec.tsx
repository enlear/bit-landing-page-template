import React from 'react';
import { render } from '@testing-library/react';
import { ButtonWithClickAndIcon } from './button.composition';

it('should render button with correct text', () => {
  const { getByText } = render(<ButtonWithClickAndIcon />);
  const rendered = getByText('Hello World!');
  expect(rendered).toBeTruthy();
});
