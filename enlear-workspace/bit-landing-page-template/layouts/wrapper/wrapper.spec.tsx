import React from 'react';
import { render } from '@testing-library/react';
import { WithWrapper } from './wrapper.composition';

it('should have first child as div', () => {
  const { container } = render(<WithWrapper />);
  expect(container.children[0].tagName).toBe('DIV');
});
