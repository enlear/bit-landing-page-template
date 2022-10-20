import { keyframes } from '@mui/material';
import { Box, SxProps } from '@mui/material';
import React from 'react';
import { ShowCaseImage } from './logo-showcase.types';

export type LogoShowcaseProps = {
  /**
   * the images to be rendered on the carousel
   */
  images: ShowCaseImage[];

  /**
   * additional sx props for box
   */
  sx?: SxProps;

  /**
   * image size in pixels
   * @default 85px
   */
  size?: string
};

const conveyerBelt = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export function LogoShowcase({ images = [], sx, size = '85px' }: LogoShowcaseProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        whiteSpace: 'nowrap',
        animation: `${conveyerBelt} 30s linear infinite`,
        '& > *': {
          width: size,
          height: size,
          padding: '24px',
          borderRadius: '100%',
          background: 'var(--surface-color, #ffffff)',
          boxShadow: ' 0px 8px 20px rgba(30, 30, 30, 0.1)',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
          marginLeft: '80px',
          marginRight: '80px',
        },
        '> :nth-child(even)': {
          marginTop: '40px',
        },
        '> :nth-child(odd)': {
          marginBottom: '40px',
        },
        ...sx && { sx },
      }}
    >
      {
        images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ width: size, height: size, borderRadius: '100%' }}
          />
        ))
      }
    </Box >
  );
}
