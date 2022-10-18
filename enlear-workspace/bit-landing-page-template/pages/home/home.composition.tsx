import React from 'react';
import { Home } from './home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@enlear/bit-landing-page-template.widgets.button';
import { Typewriter } from '@enlear/bit-landing-page-template.widgets.typewriter';
import { Typography, Box } from '@mui/material';
import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';
import InfoIcon from '@mui/icons-material/Info';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Avatar, alpha } from '@mui/material';

export const BasicHome = () => {
  return (
    <LightTheme>
      <Home
        headerItems={[
          {
            color: 'primary',
            label: 'Item 1',
            expandable: true,
            sub: [
              {
                color: 'error',
                description: 'Description of Item 01',
                label: 'Item 01 Child 01',
                href: '/subitem',
                icon: <InfoIcon />,
              },
            ],
          },
          {
            color: 'secondary',
            label: 'Item 2',
            expandable: true,
            sub: [
              {
                color: 'error',
                description: 'Description of Item 01',
                label: 'Item 01 Child 01',
                href: '/subitem',
                icon: <InfoIcon />,
              },
            ],
          },
        ]}
        footerItems={[
          {
            title: 'Volt',
            kind: 'brand',
            links: [
              {
                title: 'Facebook',
                url: 'https://facebook.com',
                icon: (
                  <Avatar
                    variant="rounded"
                    sx={{
                      background: (theme) =>
                        alpha(theme.palette.info.main, 0.08),
                      color: 'info.main',
                      ':hover': {
                        background: (theme) =>
                          alpha(theme.palette.info.main, 0.1),
                      },
                    }}
                  >
                    <FacebookIcon />
                  </Avatar>
                ),
              },
              {
                title: 'LinkedIn',
                url: 'https://linkedin.com',
                icon: (
                  <Avatar
                    variant="rounded"
                    sx={{
                      background: (theme) =>
                        alpha(theme.palette.info.main, 0.08),
                      color: 'info.main',
                      ':hover': {
                        background: (theme) =>
                          alpha(theme.palette.info.main, 0.1),
                      },
                    }}
                  >
                    <LinkedInIcon color="info" />
                  </Avatar>
                ),
              },
              {
                title: 'YouTube',
                url: 'https://youtube.com',
                icon: (
                  <Avatar
                    variant="rounded"
                    sx={{
                      background: (theme) =>
                        alpha(theme.palette.error.main, 0.9),
                      ':hover': {
                        background: (theme) =>
                          alpha(theme.palette.error.main, 0.8),
                      },
                    }}
                  >
                    <YouTubeIcon />
                  </Avatar>
                ),
              },
            ],
          },
          {
            title: 'Company',
            kind: 'links',
            links: [
              {
                title: 'About Us',
                url: '/about',
                icon: <InfoIcon />,
              },
              {
                title: 'Contact',
                url: '/contact',
                icon: <EmailIcon />,
              },
            ],
          },
        ]}
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
        footerBrand={{
          brandLabel: '© 2022 Volt. All Rights Reserved.',
          termsUrl: '/terms',
          privacyUrl: '/privacy',
          cookieUrl: '/cookie',
        }}
      />
    </LightTheme>
  );
};
