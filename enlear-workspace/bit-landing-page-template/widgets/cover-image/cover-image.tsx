import { Box } from '@mui/material';
import React from 'react';
import ImageIcon from '@mui/icons-material/Image';

export type CoverImageProps = {
  /**
   * the image url to render
   */
  url?: string;
};

export function CoverImage({ url }: CoverImageProps) {
  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: 'background.default',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        height: 'inherit',
        width: 'inherit',
        '& img': {
          height: 'inherit',
          width: 'inherit',
          objectFit: 'cover',
        },
      }}
    >
      {Boolean(url) ? (
        <img width="inherit" height="inherit" alt="CoverImage" src={url} />
      ) : (
        <Box
          sx={{
            p: '25%',
          }}
        >
          <ImageIcon
            sx={{
              display: 'flex',
              minWidth: 100,
            }}
            fontSize="large"
          />
        </Box>
      )}
    </Box>
  );
}
