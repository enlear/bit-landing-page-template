import React, { ReactNode } from 'react';
import { AppBar as MUIAppBar, Toolbar, Box, Link } from '@mui/material';
import { Container } from '@enlear/bit-landing-page-template.layouts.container';
import { Wrapper } from '@enlear/bit-landing-page-template.layouts.wrapper';
import { Logo } from '@enlear/bit-landing-page-template.widgets.logo';
import { Button } from '@enlear/bit-landing-page-template.widgets.button';
import { IconButton } from '@enlear/bit-landing-page-template.widgets.icon-button';
import { WebMenuItem } from '@enlear/bit-landing-page-template.navigation.web-menu-item';

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

export type AppbarProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;

  /**
   * the maximum width of the toolbar content
   */
  maxContainerWidth: 'md' | 'lg';

  /**
   * the minimum height of the toolbar
   */
  minHeight?: number;

  /**
   * Hide main content of navigation when viewport width is lower than md.
   */
  withMdBreakpoint?: boolean;

  /**
   * the navigation items to be rendered in the nav column
   */
  items: MenuItem[];

  /**
   * the application logo to be rendered on the left corner of the nav column
   */
  logo?: ReactNode;

  /**
   * the call to action button text to be rendered in the right corner of the toolbar
   */
  ctaLabel?: string;

  /**
   * callback function that triggers when menu icon gets clicked in md down breakpoint
   */
  onMenuIconClick: () => void;

  /**
   * callback function that triggers when the CTA is clicked
   */
  onCtaClick: () => void;
};

export function Appbar(props: AppbarProps) {
  const {
    maxContainerWidth,
    minHeight,
    withMdBreakpoint,
    logo,
    items,
    ctaLabel,
    onMenuIconClick,
    onCtaClick,
  } = props;

  const handleMenuIconClick = () => {
    onMenuIconClick();
  };
  return (
    <MUIAppBar
      elevation={0}
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Container maxWidth={maxContainerWidth}>
        <Toolbar
          disableGutters
          sx={{
            minHeight,
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
            {logo && (
              <Link underline="none" href="/">
                <Logo
                  logo={logo}
                />
              </Link>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Wrapper
              condition={withMdBreakpoint}
              wrapper={(children) => (
                <Box
                  sx={{
                    display: {
                      sm: 'none',
                      xs: 'none',
                      md: 'flex',
                    },
                    gap: 2,
                  }}
                >
                  {children}
                </Box>
              )}
            >
              {items.map((item, idx) => (
                <WebMenuItem key={idx} item={item} />
              ))}
            </Wrapper>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button variant="outlined" color="primary" onClick={onCtaClick}>
                {ctaLabel}
              </Button>
              <IconButton
                icon="hamburger"
                iconSize="medium"
                sx={{
                  display: {
                    sm: 'flex',
                    xs: 'flex',
                    md: 'none',
                  },
                }}
                onClick={handleMenuIconClick}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
}

Appbar.defaultProps = {
  maxContainerWidth: 'lg',
  minHeight: 64,
  withMdBreakpoint: true,
  items: [],
  logo: <Logo />,
  ctaLabel: 'Talk To Us',
};
