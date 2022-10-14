import React from 'react';
import { ContentItem } from './content-item';
import InfoIcon from '@mui/icons-material/Info';
import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';

export const BasicContentItem = () => (
  <LightTheme>
    <ContentItem
      item={{
        color: 'primary',
        description: 'This is a sample description',
        icon: <InfoIcon />,
        name: 'This is a sample name',
      }}
    />
  </LightTheme>
);
