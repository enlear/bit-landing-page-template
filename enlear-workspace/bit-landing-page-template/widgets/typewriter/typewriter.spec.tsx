import React from 'react';
import { render } from '@testing-library/react';
import { BasicTypewriter } from './typewriter.composition';

it('should render by testId', () => {
  const { getByTestId } = render(<BasicTypewriter />);
  const rendered = getByTestId('typewriter');
  expect(rendered).toBeTruthy();
});
