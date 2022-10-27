import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';
import React from 'react';
import { Header } from './header';
import InfoIcon from '@mui/icons-material/Info';

export const BasicHeader = () => (
  <LightTheme>
    <Header
      items={[
        {
          color: 'primary',
          label: 'Item 1',
          expandable: true,
          sub: [
            {
              color: 'error',
              description: 'Description of Item 01',
              label: 'Item 01 Child 01',
              href: '/subitem',
              icon: <InfoIcon />,
            },
            {
              color: 'error',
              description: 'Description of Item 01',
              label: 'Item 01 Child 01',
              href: '/subitem',
              icon: <InfoIcon />,
            },
            {
              color: 'error',
              description: 'Description of Item 01',
              label: 'Item 01 Child 01',
              href: '/subitem',
              icon: <InfoIcon />,
            },
          ],
        },
        {
          color: 'secondary',
          label: 'Item 2',
          expandable: true,
          sub: [
            {
              color: 'error',
              description: 'Description of Item 01',
              label: 'Item 01 Child 01',
              href: '/subitem',
              icon: <InfoIcon />,
            },
            {
              color: 'error',
              description: 'Description of Item 01',
              label: 'Item 01 Child 01',
              href: '/subitem',
              icon: <InfoIcon />,
            },
          ],
        },
      ]}
    />
  </LightTheme>
);
