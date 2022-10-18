import { Wrapper } from '@enlear/bit-landing-page-template.layouts.wrapper';
import { Link } from '@enlear/bit-landing-page-template.navigation.link';
import { Avatar, alpha, Palette, Typography, Box } from '@mui/material';

import React, { ReactNode, useState } from 'react';

export type ContentItemProps = {
  item: {
    name: string;
    icon: ReactNode;
    href?: string;
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
  };
};

export function ContentItem({ item }: ContentItemProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Box
      sx={{
        display: 'flex',
        my: 2,
        transition: 'color 0.4s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Wrapper
        condition={!!item.href}
        wrapper={(children) => (
          <Link
            sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}
            href={item.href as string}
          >
            {children}
          </Link>
        )}
      >
        <Avatar
          variant="rounded"
          sx={{
            backgroundColor: (theme) =>
              alpha(
                (theme.palette[item.color as keyof Palette] as any)?.main,
                0.08
              ),
            color: `${[item.color]}.main`,
            height: 45,
            width: 45,
          }}
        >
          {item.icon}
        </Avatar>
        <Box
          sx={{
            pl: 2,
          }}
        >
          <Typography
            variant="body1"
            fontWeight="500"
            fontSize={13}
            sx={{
              transition: 'color 0.2s',
              ...(hovered && {
                color: (theme) =>
                  (theme.palette[item.color as keyof Palette] as any)?.main,
              }),
            }}
          >
            {item.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: 12,
              transition: 'color 0.2s',
              color: (theme) =>
                hovered
                  ? (theme.palette[item.color as keyof Palette] as any)?.main
                  : theme.palette.text.secondary,
            }}
          >
            {item.description}
          </Typography>
        </Box>
      </Wrapper>
    </Box>
  );
}
