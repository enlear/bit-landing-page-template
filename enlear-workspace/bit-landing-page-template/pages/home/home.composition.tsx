import React from 'react';
import { Home } from './home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@enlear/bit-landing-page-template.widgets.button';
import { Typewriter } from '@enlear/bit-landing-page-template.widgets.typewriter';
import { Typography, Box } from '@mui/material';

export const BasicHome = () => {
  return (
    <Home
      heroContent={
        <>
          <Typography variant="h1" fontWeight={600}>
            Your One Stop{' '}
            <Typewriter
              typeItems={['Shop', 'Store', 'Location']}
              color="inherit"
            />
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
        </>
      }
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
  );
};
