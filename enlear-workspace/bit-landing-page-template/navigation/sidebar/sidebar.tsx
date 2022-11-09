import { IconButton } from '@enlear/bit-landing-page-template.widgets.icon-button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Drawer,
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import React from 'react';
import { ContentItem } from '@enlear/bit-landing-page-template.widgets.content-item';
import { Logo } from '@enlear/bit-landing-page-template.widgets.logo';
import { Wrapper } from '@enlear/bit-landing-page-template.layouts.wrapper';
import { Link } from '@enlear/bit-landing-page-template.navigation.link';

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

export type SidebarProps = {
  /**
   * the items in the menu
   */
  items: MenuItem[];

  /**
   * callback triggered to close the sidebar
   */
  onClose: () => void;

  /**
   * open/close the drawer
   */
  open: boolean;

  /**
   * logo to render on screen
   */
  logo?: React.ReactNode;
};

export function Sidebar({ items, onClose, open, logo }: SidebarProps) {
  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: '100%' } }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar + 100,
      }}
      variant="temporary"
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: 1,
          pb: 2,
          px: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Logo
            logo={logo}
          />
        </Box>
        <IconButton icon="close" onClick={() => onClose()} />
      </Box>
      <Box sx={{ my: 10, mx: 3 }}>
        {items.map((item, itemIdx) => (
          <Accordion
            key={itemIdx}
            variant='outlined'
            sx={{ border: 'none' }}
            onChange={() => {
              if (!item.href) {
              }
            }}
          >
            <AccordionSummary
              {...(item.sub.length > 0 && {
                expandIcon: <ExpandMoreIcon
                  fontWeight={600}
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                  }}
                />,
              })}
            >
              <Wrapper
                condition={Boolean(item.href)}
                wrapper={(children) => (
                  <Link
                    color={'inherit'}
                    href={item.href as string}
                  >
                    {children}
                  </Link>
                )}
              >
                <Typography variant="body2" fontSize={26}
                  fontWeight={600}
                >
                  {item.label}
                </Typography>
              </Wrapper>
            </AccordionSummary>
            {item.sub.length > 0 && (
              <AccordionDetails>
                {item.sub.map((detailedMenu, detailedMenuIdx) => (
                  <ContentItem
                    key={detailedMenuIdx}
                    item={{
                      color: detailedMenu.color,
                      description: detailedMenu.description,
                      icon: detailedMenu.icon,
                      name: detailedMenu.label,
                      href: detailedMenu.href,
                    }}
                  />
                ))}
              </AccordionDetails>
            )}
          </Accordion>
        ))}
      </Box>
    </Drawer>
  );
}
