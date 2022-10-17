import { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';
import React from 'react';
import Writer from 'typewriter-effect';

export type TypewriterProps = {
  /**
   * The items to be typed
   */
  typeItems: string[];
  /**
   * Property to loop the typeItems
   */
  loop?: boolean;
} & TypographyProps;

export function Typewriter({ typeItems, sx, loop, ...rest }: TypewriterProps) {
  return (
    <Typography
      {...rest}
      sx={{
        display: 'inline-flex',
        ...(sx && { ...sx }),
      }}
    >
      <Writer
        options={{
          strings: typeItems,
          autoStart: true,
          loop,
        }}
      />
    </Typography>
  );
}

Typewriter.defaultProps = {
  typeItems: ['Hello', 'World'],
  loop: true,
  variant: 'h1',
  color: 'text.primary',
  fontWeight: 600,
};
