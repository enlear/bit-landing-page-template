import React from 'react';
import { render } from '@testing-library/react';
import { BasicMain } from './main.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicMain />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
