import React, { ReactNode } from 'react';
import { Link as MUILink, SxProps } from '@mui/material';
import { Fragment } from 'react';

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
};

export function Link({ children, href, sx }: LinkProps) {
  return (
    <MUILink href={href} target={'_blank'} underline="none" sx={sx}>
      <Fragment>{children}</Fragment>
    </MUILink>
  );
}
