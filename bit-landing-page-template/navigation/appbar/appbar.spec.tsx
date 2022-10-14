import React from 'react';
import { render } from '@testing-library/react';
import { BasicAppbar } from './appbar.composition';

it('should render the appbar with item 1', () => {
  const { getByText } = render(<BasicAppbar />);
  const rendered = getByText('Item 1');
  expect(rendered).toBeTruthy();
});
