import { Link } from '@enlear/bit-landing-page-template.navigation.link';
import { Box, Avatar, Typography, CardMedia, Chip } from '@mui/material';
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
          p: 2,
          backgroundColor: 'background.paper',
          height: '100%',
          width: '100%',
          ...sx && { ...sx }
        }}
      >
        <Box sx={{ mt: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              my: 2,
              gap: 2,
            }}
          >
            {publicationName && (
              <Avatar src={publicationLogo} variant="rounded" />
            )}

            {!publicationName && <Avatar src={authorAvatar} />}

            <Box>
              <Typography
                color="textPrimary"
                variant="subtitle2"
                fontWeight={500}
              >
                {publicationName || authorName}
                <br />
                <Typography
                  component={'span'}
                  color="textSecondary"
                  variant="caption"
                >
                  {publishedAt ? `${format(publishedAt, 'do MMM yyyy')}` : ''}
                  {views && publishedAt ? ' | ' : ''}
                  {views ? `${views} Views` : ''}
                </Typography>
              </Typography>
            </Box>
          </Box>
          <div
            style={{
              paddingTop: 'calc(210px * 4 / 4)',
              position: 'relative',
            }}
          >
            <CardMedia
              sx={{
                height: '220px',
                position: 'absolute',
                top: 0,
                width: '100%',
                maxWidth: '100%',
              }}
            >
              <CoverImage url={coverImage} />
            </CardMedia>
          </div>
          <Box
            sx={{
              mt: 3,
            }}
          >
            <Typography
              color="textPrimary"
              variant="h6"
              style={{ wordWrap: 'break-word' }}
            >
              {title}
            </Typography>
          </Box>

          <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {tags.map((tag, idx) => {
              if (idx > 30) {
                return <div />;
              }
              return <Chip key={tag} label={tag} variant="outlined" />;
            })}
          </Box>
        </Box>
      </Card>
    </Link>
  );
}

ContentCard.defaultProps = {
  tags: [],
};
