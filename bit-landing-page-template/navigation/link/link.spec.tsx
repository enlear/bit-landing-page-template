import React from 'react';
import { render } from '@testing-library/react';
import { BasicLink } from './link.composition';

it('should render link to google.lk', () => {
  const { getByText } = render(<BasicLink />);
  expect(getByText('Navigate To Google').getAttribute('href')).toBe('https://google.com');
});
