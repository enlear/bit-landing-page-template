import React from 'react';
import { LogoShowcase } from './logo-showcase';

export const BasicLogoShowcase = () => {
  return (
    <LogoShowcase
      images={[
        {
          src: 'https://static.bit.dev/bit-logo.svg',
          alt: 'bit logo'
        },
        {
          src: 'https://static.bit.dev/bit-logo.svg',
          alt: 'bit logo'
        },
        {
          src: 'https://static.bit.dev/bit-logo.svg',
          alt: 'bit logo'
        },
        {
          src: 'https://static.bit.dev/bit-logo.svg',
          alt: 'bit logo'
        }
      ]}
    />
  );
}
