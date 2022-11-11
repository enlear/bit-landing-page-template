import React from 'react';
import { LogoShowcase } from './logo-showcase';

export const BasicLogoShowcase = () => {
  return (
    <LogoShowcase
      images={[
        {
          src: 'https://static.bit.dev/bit-logo.svg',
          alt: 'bit logo',
          name: 'Bit',
          url: 'https://bit.dev',
        },
        {
          src: 'https://static.bit.dev/bit-logo.svg',
          alt: 'bit logo',
          name: 'Bit'
        },
        {
          src: 'https://static.bit.dev/bit-logo.svg',
          alt: 'bit logo',
          name: 'Bit',
          url: 'https://bit.dev',
        },
        {
          src: 'https://static.bit.dev/bit-logo.svg',
          alt: 'bit logo',
          name: 'Bit'
        },

      ]}
    />
  );
}
