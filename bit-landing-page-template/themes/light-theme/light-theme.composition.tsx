import { Box, Button } from '@mui/material';

import React from 'react';
import { LightTheme } from './light-theme';

export const LightThemeButton = () => (
  <LightTheme>
    <Box sx={{ p: 5 }}>
      <Button variant="contained">Light Theme Button</Button>
    </Box>
  </LightTheme>
);
