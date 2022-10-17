import React from 'react';
import { render } from '@testing-library/react';
import { BasicStatSummary } from './stat-summary.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicStatSummary />);
  const rendered = getByText('Components');
  expect(rendered).toBeTruthy();
});
