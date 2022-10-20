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

  /**
   * the CTA label to render
   * @default 'Get In Touch'
   */
  ctaLabel?: string;

  /**
   * app logo to render on navbar
   */
  logo?: React.ReactNode;

  /**
   * callback executed when cta is clicked
   */
  onCtaClick?: () => void;
};

export function Header({ items, ctaLabel = 'Get In Touch', logo, onCtaClick }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const handleCtaClick = useCallback(() => { onCtaClick?.() }, []);

  const handleMenuIconClick = useCallback(() => {
    setIsSidebarOpen((prevState) => !prevState);
  }, []);

  return (
    <>
      <Appbar
        onMenuIconClick={handleMenuIconClick}
        onCtaClick={handleCtaClick}
        items={items}
        ctaLabel={ctaLabel}
        withMdBreakpoint
        logo={logo}
      />
      <Sidebar
        items={items}
        onClose={() => setIsSidebarOpen(false)}
        open={isSidebarOpen && !lgUp}
        logo={logo}
      />
    </>
  );
}
