import {
  Footer,
  FooterItem,
} from '@enlear/bit-landing-page-template.ui.footer';
import { Header } from '@enlear/bit-landing-page-template.ui.header';
import { Hero } from '@enlear/bit-landing-page-template.ui.home.hero';
import { Button } from '@enlear/bit-landing-page-template.widgets.button';
import { Typewriter } from '@enlear/bit-landing-page-template.widgets.typewriter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';
import { Avatar, alpha } from '@mui/material';
import { Content } from '@enlear/bit-landing-page-template.layouts.content';

export type HomeProps = {};

const sections: FooterItem[] = [
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
              background: (theme) => alpha(theme.palette.info.main, 0.08),
              color: 'info.main',
              ':hover': {
                background: (theme) => alpha(theme.palette.info.main, 0.1),
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
              background: (theme) => alpha(theme.palette.info.main, 0.08),
              color: 'info.main',
              ':hover': {
                background: (theme) => alpha(theme.palette.info.main, 0.1),
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
              background: (theme) => alpha(theme.palette.error.main, 0.9),
              ':hover': {
                background: (theme) => alpha(theme.palette.error.main, 0.8),
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
];

export function Home({}: HomeProps) {
  return (
    <LightTheme>
      <Header />
      <Content>
        <Hero>
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
        </Hero>
        <Footer
          items={sections}
          brand={{
            brandLabel: '© 2022 Volt. All Rights Reserved.',
            termsUrl: '/terms',
            privacyUrl: '/privacy',
            cookieUrl: '/cookie',
          }}
        />
      </Content>
    </LightTheme>
  );
}
