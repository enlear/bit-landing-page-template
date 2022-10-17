import React from 'react';
import { render } from '@testing-library/react';
import { BasicHero } from './hero.composition';

it('should render button with correct CTA', () => {
  const { getByText } = render(<BasicHero />);
  const rendered = getByText('Get Started For Free');
  expect(rendered).toBeTruthy();
});
