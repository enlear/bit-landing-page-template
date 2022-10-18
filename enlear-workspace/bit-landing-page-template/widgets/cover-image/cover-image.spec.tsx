import React from 'react';
import { render } from '@testing-library/react';
import { CoverImageWithImage, CoverImageWithNoContent } from './cover-image.composition';

it('should render an image tag', () => {
  const { container } = render(<CoverImageWithImage />);
  expect(container.querySelector('img')).toBeTruthy();
});

it('should render not render an image tag', () => {
  const { container } = render(<CoverImageWithNoContent />);
  expect(container.querySelector('img')).toBeFalsy();
});
