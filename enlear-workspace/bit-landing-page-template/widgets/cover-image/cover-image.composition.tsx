import React from 'react';
import { CoverImage } from './cover-image';

export const CoverImageWithNoContent = () => {
  return <CoverImage />;
};

export const CoverImageWithImage = () => {
  return (
    <CoverImage
      url={'https://miro.medium.com/max/720/1*9ey9y8ucSApjXeBz7wpxEg.jpeg'}
    />
  );
};
