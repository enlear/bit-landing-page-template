import React from 'react';
import { render } from '@testing-library/react';
import { BasicSidebar } from './sidebar.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSidebar />);
  const rendered = getByText('Item 1');
  expect(rendered).toBeTruthy();
});
