import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';
import React from 'react';
import { StatSummary } from './stat-summary';

export const BasicStatSummary = () => {
  return (
    <LightTheme>
      <StatSummary
        statistics={[
          {
            label: 'Components',
            value: 1000,
            suffix: '+',
          },
          {
            label: 'Contributors',
            value: 1000,
            suffix: '+',
          },
          {
            label: 'Teams',
            value: 1000,
            suffix: '+',
          },
          {
            label: 'Companies',
            value: 1000,
            suffix: '+',
          },
        ]}
      />
    </LightTheme>
  );
};
