import React, { ReactNode } from 'react';
import { Content } from '@enlear/bit-landing-page-template.layouts.content';
import { Footer, FooterItem } from '@enlear/bit-landing-page-template.ui.footer';
import { Header, MenuItem } from '@enlear/bit-landing-page-template.ui.header';
import InfoIcon from '@mui/icons-material/Info';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Avatar, alpha } from '@mui/material';

const headerItems: MenuItem[] = [
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
];

const footerItems: FooterItem[] = [
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

export type MainProps = {
  /**
   * the content to be placed within the main landing page layout
   */
  children?: ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <Content>
      <Header items={headerItems} />
      {children}
      <Footer
        items={footerItems}
        brand={{
          brandLabel: '© 2022 Volt. All Rights Reserved.',
          termsUrl: '/terms',
          privacyUrl: '/privacy',
          cookieUrl: '/cookie',
        }}
      />
    </Content>
  );
}
