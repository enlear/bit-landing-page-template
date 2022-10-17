import { styled } from '@mui/material';
import React, { ReactNode } from 'react';

export type ContentProps = {
  /**
   * a node to be rendered inside the layout
   */
  children?: ReactNode;

  /**
   * The content padding - defaults to 105
   */
  paddingTop?: number;
};

const ContentLayoutRoot = styled('div')<{ paddingTop: number }>(
  ({ theme, paddingTop }) => ({
    backgroundColor: theme.palette.background.default,
    height: '100%',
    width: '100%',
    paddingTop: paddingTop,
  })
);

export function Content({ children, paddingTop = 105 }: ContentProps) {
  return (
    <ContentLayoutRoot paddingTop={paddingTop}>{children}</ContentLayoutRoot>
  );
}
