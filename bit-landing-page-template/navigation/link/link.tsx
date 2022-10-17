import React, { ReactNode, Fragment } from 'react';
import { Link as MUILink, SxProps } from '@mui/material';

export type LinkProps = {
  /**
   * a node to be rendered under the link
   */
  children?: ReactNode;

  /**
   * url to be redirected to on click
   */
  href: string;

  /**
   * The styling to be applied to the link
   */
  sx?: SxProps;

  /**
   * the color of the text
   */
  color?: 'textPrimary' | 'textSecondary';

  /**
   * the text variant
   */
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline'
    | 'inherit';
};

export function Link({ children, href, sx, color, variant }: LinkProps) {
  return (
    <MUILink
      href={href}
      target={'_blank'}
      underline="none"
      sx={sx}
      {...(color && {
        color,
      })}
      {...(variant && {
        variant,
      })}
    >
      <Fragment>{children}</Fragment>
    </MUILink>
  );
}
