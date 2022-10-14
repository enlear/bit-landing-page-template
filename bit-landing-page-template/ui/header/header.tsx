import { Appbar } from '@enlear/bit-landing-page-template.navigation.appbar';
import { Sidebar } from '@enlear/bit-landing-page-template.navigation.sidebar';
import React, { useCallback, useState } from 'react';

import InfoIcon from '@mui/icons-material/Info';
import { useMediaQuery, Theme } from '@mui/material';

export type HeaderProps = {};

export type SubMenuItem = {
  label: string;
  href: string;
  description: string;
  color:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | 'action'
    | 'inherit'
    | 'disabled'
    | undefined;
  icon: React.ReactNode;
};

export type MenuItem = {
  label: string;
  href?: string;
  expandable?: boolean;
  sub: Array<SubMenuItem>;
  color:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | 'action'
    | 'inherit'
    | 'disabled'
    | undefined;
};

const items: MenuItem[] = [
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

export function Header({}: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const handleCtaClick = useCallback(() => {}, []);

  const handleMenuIconClick = useCallback(() => {
    setIsSidebarOpen((prevState) => !prevState);
  }, []);

  return (
    <>
      <Appbar
        onMenuIconClick={handleMenuIconClick}
        onCtaClick={handleCtaClick}
        items={items}
        ctaLabel="Get In Touch"
      />
      <Sidebar
        items={items}
        onClose={() => setIsSidebarOpen(false)}
        open={isSidebarOpen && !lgUp}
      />
    </>
  );
}
