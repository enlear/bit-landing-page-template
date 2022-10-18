import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';
import React from 'react';
import { UserCard } from './user-card';

export const UserCardWithOutlinedVariant = () => {
  return (
    <LightTheme>
      <UserCard
        user={{
          name: 'John Doe',
          bio: 'This is the bio of John Doe',
          avatarUrl: 'https://randomuser.me/api/portraits/men/91.jpg',
          social: {
            twitter: 'https://twitter.com/bitdev',
            linkedIn: 'https://www.linkedin.com/company/bitdev/',
          },
        }}
      />
    </LightTheme>
  );
};

export const UserCardWithElevationVariant = () => {
  return (
    <LightTheme>
      <UserCard
        user={{
          name: 'John Doe',
          bio: 'This is the bio of John Doe',
          avatarUrl: 'https://randomuser.me/api/portraits/men/91.jpg',
          social: {
            twitter: 'https://twitter.com/bitdev',
            linkedIn: 'https://www.linkedin.com/company/bitdev/',
          },
        }}
        variant="elevation"
      />
    </LightTheme>
  );
};
