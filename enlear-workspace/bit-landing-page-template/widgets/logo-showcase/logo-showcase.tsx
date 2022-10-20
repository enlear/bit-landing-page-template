import { Avatar } from '@mui/material';
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
};

const conveyerBelt = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export function LogoShowcase({ images = [], sx }: LogoShowcaseProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        whiteSpace: 'nowrap',
        imageRendering: 'crisp-edges',
        animation: `${conveyerBelt} 30s linear infinite`,
        '& > *': {
          width: 100,
          height: 100,
          padding: 3,
          background: 'var(--surface-color, #ffffff)',
          boxShadow: ' 0px 8px 20px rgba(30, 30, 30, 0.1)',
          backfaceVisibility: 'hidden',
          mx: 10
        },
        '> :nth-child(even)': {
          mt: 10,
        },
        '> :nth-child(odd)': {
          mb: 10,
        },
        ...sx && { sx },
      }}
    >
      {
        images.map((image, index) => (
          <Avatar
            key={index}
            src={image.src}
            alt={image.alt}
          />
        ))
      }
    </Box >
  );
}
