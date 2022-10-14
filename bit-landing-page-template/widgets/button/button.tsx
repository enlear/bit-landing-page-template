import React, { ReactNode, useState, useCallback } from 'react';
import { Button as MUIButton, Box } from '@mui/material';

export type ButtonProps = {
  /**
   * a node to be rendered in the button.
   */
  children?: ReactNode;

  /**
   * variant of the button.
   */
  variant?: 'contained' | 'outlined' | 'text';

  /**
   *  size of the button
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * the icon to be placed at the right
   */
  endIcon?: ReactNode;

  /**
   * the color of the button
   */
  color?: 'primary' | 'secondary' | 'info' | 'error' | 'success' | 'warning';

  /**
   * create a transition effect for the icon when hovering over the button
   */
  hoverTransition?: boolean;

  /**
   * the callback to be invoked when button is clicked
   */
  onClick?: () => void;
};

export function Button({
  children,
  endIcon,
  size,
  variant,
  color,
  hoverTransition,
  onClick,
}: ButtonProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  const toggleHover = useCallback(() => {
    setHovered((prevState) => !prevState);
  }, []);
  return (
    <MUIButton
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      color={color}
      size={size}
      onClick={onClick}
      {...(endIcon && {
        endIcon: (
          <Box
            component={'div'}
            {...(hoverTransition && {
              sx: {
                display: 'inline-flex',
                transition: 'transform 0.2s ease-in',
                ...(hovered && { transform: 'translateX(4px)' }),
              },
            })}
          >
            {endIcon}
          </Box>
        ),
      })}
      variant={variant}
    >
      {children}
    </MUIButton>
  );
}

Button.defaultProps = {
  variant: 'contained',
  size: 'medium',
  endIcon: undefined,
  hoverTransition: true,
};
