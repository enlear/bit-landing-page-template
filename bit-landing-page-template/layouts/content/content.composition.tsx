import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';
import { Typography } from '@mui/material';
import React from 'react';
import { Content } from './content';

export const BasicContent = () => {
  return (
    <LightTheme>
      <Content>
        <Typography>hello world!</Typography>
      </Content>
    </LightTheme>
  );
};

export const ContentWithCustomPadding = () => {
  return (
    <LightTheme>
      <Content paddingTop={200}>
        <Typography>hello world!</Typography>
      </Content>
    </LightTheme>
  );
};
