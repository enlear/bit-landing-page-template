import React from 'react';
import { render } from '@testing-library/react';
import { BasicLogo } from './logo.composition';

it('should render svg as parent element', () => {
  const { container } = render(<BasicLogo />);
  expect(container.children[0].tagName).toBe('svg');
});
