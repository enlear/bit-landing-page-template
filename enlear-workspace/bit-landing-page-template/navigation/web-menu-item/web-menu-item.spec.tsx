import React from 'react';
import { render } from '@testing-library/react';
import { BasicWebMenuItem } from './web-menu-item.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicWebMenuItem />);
  const rendered = getByText('Menu Item');
  expect(rendered).toBeTruthy();
});
