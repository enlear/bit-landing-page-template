import React, { ReactNode, Fragment } from 'react';
import {
  Link as MUILink,
  SxProps,
  LinkProps as MUILinkProps,
} from '@mui/material';

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
} & MUILinkProps;

export function Link({ children, href, sx, ...rest }: LinkProps) {
  return (
    <MUILink href={href} target={'_blank'} underline="none" sx={sx} {...rest}>
      <Fragment>{children}</Fragment>
    </MUILink>
  );
}
