import React, { ReactNode, FC } from 'react';
import { Container as MUIContainer, SxProps } from '@mui/material';

type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false | undefined;

export type ContainerProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;

  /**
   * set the maximum width of the container using viewport width.
   * set to `false` to disable maxWidth.
   */
  maxWidth?: MaxWidth;

  /**
   * The styles applied to the component.
   */
  sx?: SxProps;
};

export const Container: FC<ContainerProps> = (props) => {
  const { children, maxWidth, sx } = props;
  return (
    <MUIContainer sx={sx} maxWidth={maxWidth}>
      {children}
    </MUIContainer>
  );
};

Container.defaultProps = {
  maxWidth: false,
  sx: {},
};
