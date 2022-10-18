import React from 'react';
import { render } from '@testing-library/react';
import { BasicContentDrop } from './content-drop.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicContentDrop />);
  const rendered = getByText('This is an example name');
  expect(rendered).toBeTruthy();
});
