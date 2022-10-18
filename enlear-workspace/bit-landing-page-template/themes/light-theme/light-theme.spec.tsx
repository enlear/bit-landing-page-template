import React from 'react';
import { render } from '@testing-library/react';
import { LightThemeButton } from './light-theme.composition';

it('Should Render Button With Correct Text', () => {
  const { container } = render(<LightThemeButton />);
  expect(container.textContent).toBe('Light Theme Button');
});
