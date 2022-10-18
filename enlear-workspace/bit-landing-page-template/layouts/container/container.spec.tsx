import React from 'react';
import { render } from '@testing-library/react';
import { ContainerWithLgMaxWidthAndPadding } from './container.composition';

it('should render a container with max width as "lg"', () => {
  const rendered = render(<ContainerWithLgMaxWidthAndPadding />);
  expect(rendered.getByText('MaxWidth="lg"')).toBeTruthy();
});
