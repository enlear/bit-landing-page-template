import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';
import { Appbar } from './appbar';

export const BasicAppbar = () => (
  <LightTheme>
    <Appbar
      ctaLabel="Get In Touch"
      maxContainerWidth="md"
      minHeight={64}
      withMdBreakpoint
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
      ]}
      onMenuIconClick={() => alert('You clicked the menu icon, inflate a drawer')}
      onCtaClick={() => alert('You clicked the CTA')}
    />
  </LightTheme>
);
