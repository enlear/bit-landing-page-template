import { Appbar } from '@enlear/bit-landing-page-template.navigation.appbar';
import { Sidebar } from '@enlear/bit-landing-page-template.navigation.sidebar';
import React, { useCallback, useState } from 'react';
import { useMediaQuery, Theme } from '@mui/material';
import { MenuItem } from './header.types';

export type HeaderProps = {
  /**
   * the menu items to render on navbar and sidebar
   */
  items: MenuItem[];
};

export function Header({ items }: HeaderProps) {
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
