import { Typography, Box, Grow, Divider } from '@mui/material';

import React, { useRef, useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Wrapper } from '@enlear/bit-landing-page-template.layouts.wrapper';
import { Link } from '@enlear/bit-landing-page-template.navigation.link';
import { ContentDrop } from '@enlear/bit-landing-page-template.widgets.content-drop';

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

export type WebMenuItemProps = {
  /**
   * The menu item to be rendered
   */
  item: MenuItem;
};

export function WebMenuItem({ item }: WebMenuItemProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const { color, label, expandable, href, sub = [] } = item;
  const ref = useRef<HTMLDivElement | undefined>(undefined);

  return (
    <Box
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        cursor: 'pointer',
        width: 'fit-content',
      }}
    >
      <Wrapper
        condition={!!href}
        wrapper={(children) => <Link href={href as string}>{children}</Link>}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography color="textPrimary" fontSize={14}>
            {label}
          </Typography>
          {expandable && !href && (
            <KeyboardArrowDownIcon
              color={color}
              sx={{
                transition: 'transform 0.2s',
                ...(hovered && {
                  transform: 'rotate(180deg)',
                }),
              }}
            />
          )}
        </Box>
      </Wrapper>
      <Grow in={hovered} style={{ transformOrigin: '1 1 1' }} timeout={300}>
        <Divider
          sx={{
            borderBottomWidth: 3,
            borderColor: (theme) => theme.palette.primary.main,
          }}
        />
      </Grow>
      {item.expandable && (
        <ContentDrop
          anchorEl={ref}
          items={(item.sub || []).map((item) => ({
            color: item.color,
            description: item.description,
            href: item.href,
            icon: item.icon,
            name: item.label,
          }))}
          open={hovered}
        />
      )}

    </Box>
  );
}
