import { Box } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';
import { LightTheme } from './light-theme';

export const LightThemeButton = () => {
  return (
    <LightTheme>
      <Box sx={{ p: 5 }}>
        <Button variant='contained'>Light Theme Button</Button>
      </Box>
    </LightTheme>
  );
}
