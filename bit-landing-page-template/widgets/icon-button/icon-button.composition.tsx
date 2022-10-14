import React from 'react';
import { IconButton } from './icon-button';

export const IconButtonWithHamburger = () => {
  return (
    <div
      data-testid="button"
    >
      <IconButton
        onClick={() => alert('Clicked Hamburger Button!')}
        icon={'hamburger'}
      />
    </div>
  );
};
