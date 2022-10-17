import React from 'react';
import { Typewriter } from './typewriter';
import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';

export const BasicTypewriter = () => {
  return (
    <LightTheme>
      <div
        data-testid="typewriter"
      >
        <Typewriter
          typeItems={['Hello', 'World']}
          loop={true}
          variant="h1"
          color="text.primary"
          fontWeight={600}
        />
      </div>
    </LightTheme>
  );
};
