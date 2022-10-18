import React from 'react';
import { render } from '@testing-library/react';
import { ContentWithCustomPadding } from './content.composition';

it('should render with the correct content with custom padding of 205', () => {
  const { container } = render(<ContentWithCustomPadding />);
  expect(container.firstChild).toHaveStyle('padding-top: 200px');
});
