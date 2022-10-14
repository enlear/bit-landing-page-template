import React from 'react';
import { render } from '@testing-library/react';
import { BasicContentItem } from './content-item.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicContentItem />);
  const rendered = getByText('This is a sample name');
  expect(rendered).toBeTruthy();
});
