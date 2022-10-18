import React from 'react';
import { render } from '@testing-library/react';
import {
  BasicContentCard,
  ContentCardWithPublication,
  DetailedContentCard,
} from './content-card.composition';

it('should render with the correct title', () => {
  const { getByText } = render(<BasicContentCard />);
  const rendered = getByText('A Random Title');
  expect(rendered).toBeTruthy();
});

it('should render with the correct publication name', () => {
  const { getByText } = render(<ContentCardWithPublication />);
  const rendered = getByText('Medium');
  expect(rendered).toBeTruthy();
});

it('should render with the correct user name', () => {
  const { getByText } = render(<DetailedContentCard />);
  const rendered = getByText('John Doe');
  expect(rendered).toBeTruthy();
});
