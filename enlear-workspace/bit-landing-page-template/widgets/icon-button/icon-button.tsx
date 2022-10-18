import React, { ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton as MUIIconButton, SxProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Icon = 'hamburger' | 'close';
type IconSize = 'large' | 'small' | 'medium';

export type IconButtonProps = {
  /**
   * The type of the icon to be rendered
   */
  icon: Icon;

  /**
   * A callback triggered in case an icon button is clicked
   */
  onClick: () => void;

  /**
   * Optional styling for the icon button component
   */
  sx?: SxProps;

  /**
   * The size of the icon
   */
  iconSize?: IconSize;
};

const icons: { [key in Icon]: ReactNode } = {
  hamburger: <MenuIcon />,
  close: <CloseIcon />,
};

export function IconButton({
  icon, onClick, sx, iconSize,
}: IconButtonProps) {
  return (
    <MUIIconButton size={iconSize} sx={sx} onClick={onClick}>
      {icons[icon]}
    </MUIIconButton>
  );
}

IconButton.defaultProps = {
  icon: 'hamburger',
  sx: {},
  iconSize: 'large',
};
