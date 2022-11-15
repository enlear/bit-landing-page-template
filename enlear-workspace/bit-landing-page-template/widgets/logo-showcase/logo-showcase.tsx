import { Typography } from '@mui/material';
import { keyframes } from '@mui/material';
import { Box, SxProps } from '@mui/material';
import React from 'react';
import { ShowCaseImage } from './logo-showcase.types';
import { Wrapper } from '@enlear/bit-landing-page-template.layouts.wrapper';
import { Link } from '@enlear/bit-landing-page-template.navigation.link';

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

  /**
   * time taken for animation in seconds
   * @default 20
   */
  animationTime?: number

  /**
   * margin left and right between images in px
   */
  margin?: string
};

const conveyerBelt = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export function LogoShowcase({ images = [], sx, size = '85px', animationTime = 20, margin = "40px" }: LogoShowcaseProps) {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        width: '100%',
        whiteSpace: 'nowrap',
        animation: `${conveyerBelt} ${animationTime}s linear infinite forwards`,
        '& > *': {
          width: size,
          height: size,
          padding: '24px',
          borderRadius: '100%',
          background: 'var(--surface-color, #ffffff)',
          boxShadow: ' 0px 8px 20px rgba(30, 30, 30, 0.1)',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
          marginLeft: margin,
          marginRight: margin,
          transition: 'box-shadow 0.1s ease-in-out',
          '&:hover': {
            boxShadow: '0px 8px 20px rgba(30, 30, 30, 0.5)',
          }
        },
        '> :nth-of-type(even)': {
          marginTop: '40px',
        },
        '> :nth-of-type(odd)': {
          marginBottom: '40px',
        },
        ...sx && { ...sx },
      }}
    >
      {
        images.map((image, index) => (
          <Wrapper
            key={index}
            condition={!!image.url}
            wrapper={(children) => (
              <Box>
                <Link
                  sx={{
                    color: 'inherit',
                  }}
                  href={image.url as string}
                >
                  {children}
                </Link>
              </Box>
            )}
          >
            <Box>
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: size, height: size, borderRadius: '100%' }}
              />
              {image.name && (
                <Typography
                  textAlign={"center"}
                  variant='body2'
                  fontSize={16}
                  marginTop={3.5}
                  fontWeight={500}
                >
                  {image.name.split('')?.map((char, index) => {
                    if (char === '\n') {
                      return <br key={index} />;
                    }
                    return char;
                  })}
                </Typography>
              )}
            </Box>
          </Wrapper>
        ))
      }
    </Box >
  );
}
