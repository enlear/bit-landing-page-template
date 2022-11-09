import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { Sidebar } from './sidebar';

export const BasicSidebar = () => (
  <LightTheme>
    <Sidebar
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
          ],
        },
        {
          color: 'secondary',
          label: 'Item 2',
          href: '/item2',
          expandable: false,
          sub: [
          ],
        },
      ]}
      open
      onClose={() => alert('close sidebar')}
    />
  </LightTheme>
);
