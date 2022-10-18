import React from 'react';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { WebMenuItem } from './web-menu-item';

export const BasicWebMenuItem = () => (
    <WebMenuItem
      item={{
        color: 'primary',
        label: 'Menu Item',
        expandable: true,
        href: '/menu-item',
        sub: [],
      }}
    />
);

export const ComplexWebMenuItem = () => (
    <WebMenuItem
      item={{
        color: 'primary',
        label: 'Menu Item',
        expandable: true,
        sub: [
          {
            color: 'secondary',
            description: 'This is a sample description of a sub item',
            href: '/menu-item',
            icon: <RateReviewIcon />,
            label: 'Sub Item',
          },
        ],
      }}
    />
);
