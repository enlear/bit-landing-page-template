import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeader } from './header.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicHeader />);
  const rendered = getByText('Item 1');
  expect(rendered).toBeTruthy();
});
