import { Box } from '@mui/material';
import React, { useRef } from 'react';

import InfoIcon from '@mui/icons-material/Info';
import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';
import { ContentDrop } from './content-drop';

export const BasicContentDrop = () => {
  const ref = useRef<HTMLDivElement | undefined>(undefined);
  return (
    <LightTheme>
      <Box ref={ref}>
        <ContentDrop
          anchorEl={ref}
          items={[
            {
              color: 'primary',
              description: 'This is an example text',
              name: 'This is an example name',
              href: '/home',
              icon: <InfoIcon />,
            },
          ]}
          open
        />
      </Box>
    </LightTheme>
  );
};
