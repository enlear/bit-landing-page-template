import React from 'react';
import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';
import { Hero } from './hero';
import { Typography } from '@mui/material';
import { Typewriter } from '@enlear/bit-landing-page-template.widgets.typewriter';
import { Button } from '@enlear/bit-landing-page-template.widgets.button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box } from '@mui/material';

export const BasicHero = () => (
  <LightTheme>
    <Hero>
      <Typography variant="h1" fontWeight={600}>
        Your One Stop{' '}
        <Typewriter typeItems={['Shop', 'Store', 'Location']} color="inherit" />
      </Typography>
      <Typography variant="h1" fontWeight={600}>
        For all things.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Button
          hoverTransition
          endIcon={<ArrowForwardIcon />}
          size="large"
          onClick={() => alert('clicked')}
        >
          Get Started For Free
        </Button>
      </Box>
    </Hero>
  </LightTheme>
);
