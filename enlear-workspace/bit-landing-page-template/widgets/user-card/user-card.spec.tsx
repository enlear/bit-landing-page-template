import React from 'react';
import { render } from '@testing-library/react';
import { UserCardWithOutlinedVariant } from './user-card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<UserCardWithOutlinedVariant />);
  const rendered = getByText('This is the bio of John Doe');
  expect(rendered).toBeTruthy();
});
