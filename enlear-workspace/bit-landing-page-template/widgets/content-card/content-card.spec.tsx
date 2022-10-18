import React from 'react';
import { render } from '@testing-library/react';
import { BasicContentCard } from './content-card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicContentCard />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
