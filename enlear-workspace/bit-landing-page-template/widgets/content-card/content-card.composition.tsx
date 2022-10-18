import { LightTheme } from '@enlear/bit-landing-page-template.themes.light-theme';
import React from 'react';
import { ContentCard } from './content-card';

export const BasicContentCard = () => {
  return (
    <LightTheme>
      <ContentCard
        title={'A Random Title'}
        authorAvatar={'https://randomuser.me/api/portraits/men/91.jpg'}
        authorName={'John Doe'}
        publishUrl={
          'https://blog.bitsrc.io/choosing-between-graphql-vs-odata-api-823856bce8c2'
        }
        coverImage={
          'https://miro.medium.com/max/720/1*9ey9y8ucSApjXeBz7wpxEg.jpeg'
        }
      />
    </LightTheme>
  );
};

export const DetailedContentCard = () => {
  return (
    <LightTheme>
      <ContentCard
        title={'A Random Title'}
        authorAvatar={'https://randomuser.me/api/portraits/men/91.jpg'}
        authorName={'John Doe'}
        publishUrl={
          'https://blog.bitsrc.io/choosing-between-graphql-vs-odata-api-823856bce8c2'
        }
        coverImage={
          'https://miro.medium.com/max/720/1*9ey9y8ucSApjXeBz7wpxEg.jpeg'
        }
        publishedAt={Date.now()}
        tags={['GraphQL', 'OData', 'REST']}
        views={100}
      />
    </LightTheme>
  );
};

export const ContentCardWithPublication = () => {
  return (
    <LightTheme>
      <ContentCard
        title={'A Random Title'}
        authorAvatar={'https://randomuser.me/api/portraits/men/91.jpg'}
        authorName={'John Doe'}
        publicationName={'Medium'}
        publicationLogo={
          'https://miro.medium.com/fit/c/96/96/1*9ey9y8ucSApjXeBz7wpxEg.jpeg'
        }
        publishUrl={
          'https://blog.bitsrc.io/choosing-between-graphql-vs-odata-api-823856bce8c2'
        }
        coverImage={
          'https://miro.medium.com/max/720/1*9ey9y8ucSApjXeBz7wpxEg.jpeg'
        }
        publishedAt={Date.now()}
        tags={['GraphQL', 'OData', 'REST']}
        views={100}
      />
    </LightTheme>
  );
};
