import { Link } from '@enlear/bit-landing-page-template.navigation.link';
import { Box, Avatar, Typography, CardMedia, Chip, CardHeader, CardContent } from '@mui/material';
import { Card } from '@mui/material';
import React from 'react';
import { format } from 'date-fns';
import { CoverImage } from '@enlear/bit-landing-page-template.widgets.cover-image';
import { SxProps } from '@mui/material';

export type ContentCardProps = {
  /**
   * the url (canonical) where the content is published at
   */
  publishUrl: string;
  /**
   * the publication or blog name in which the content has been published to
   */
  publicationName?: string;
  /**
   * the logo of the blog or publication in which the content has been published to
   */
  publicationLogo?: string;
  /**
   * the avatar url of the author that created the content
   */
  authorAvatar: string;
  /**
   * the name of the author that created the content
   */
  authorName: string;
  /**
   * the time in milliseconds in which the content was published at
   */
  publishedAt?: number;
  /**
   * the number of views the content has gotten
   */
  views?: number;
  /**
   * the banner image of the content
   */
  coverImage: string;
  /**
   * the title of the content
   */
  title: string;
  /**
   * the tags of the content
   */
  tags: string[];
  /**
   * card sx
   */
  sx?: SxProps

  /**
   * card variant
   */
  variant?: 'outlined' | 'elevation';
};

export function ContentCard({
  authorAvatar,
  authorName,
  coverImage,
  publicationLogo,
  publicationName,
  publishUrl,
  publishedAt,
  tags,
  title,
  views,
  sx,
  variant = 'outlined',
}: ContentCardProps) {
  return (
    <Link color="textPrimary" href={publishUrl} variant="h5">
      <Card
        variant={variant}
        sx={{
          backgroundColor: 'background.paper',
          height: '100%',
          width: '100%',
          ...sx && { ...sx }
        }}
      >
        <CardHeader
          avatar={<>
            {publicationName && (
              <Avatar
                src={publicationLogo}
                alt={publicationName}
                variant="rounded"
              />
            )}
            {!publicationName && <Avatar
              alt={authorName}
              src={authorAvatar} />
            }
          </>}
          title={publicationName || authorName}
          subheader={<>
            {publishedAt ? `${format(publishedAt, 'do MMM yyyy')}` : ''}
            {views && publishedAt ? ' | ' : ''}
            {views ? `${views} Views` : ''}
          </>}
        />

        <CardMedia
          component="img"
          sx={{
            width: '100%',
            height: 275,
            aspectRatio: 1 / 2,
          }}
          image={coverImage}
          alt={`Banner image for ${title}`}
        />
        <CardContent>
          <Typography
            color="textPrimary"
            variant="h6"
            style={{ wordWrap: 'break-word' }}
          >
            {title}
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {tags.map((tag, idx) => {
              if (idx > 30) {
                return <div />;
              }
              return <Chip key={tag} label={tag} variant="outlined" />;
            })}
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}

ContentCard.defaultProps = {
  tags: [],
};
