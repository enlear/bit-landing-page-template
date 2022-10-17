import React from 'react';
import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';
import { Typewriter } from './typewriter';

export const BasicTypewriter = () => (
  <LightTheme>
    <div data-testid="typewriter">
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
