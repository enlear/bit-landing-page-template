import { Link } from '@enlear/bit-landing-page-template.navigation.link';
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Avatar,
  Typography,
  Divider,
  alpha,
} from '@mui/material';
import React from 'react';
import { User } from './user-card.types';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export type UserCardProps = {
  /**
   * the user information to be displayed on the card
   * @default undefined
   */
  user: User;

  /**
   * the card variant to use
   */
  variant: 'elevation' | 'outlined';
};

export function UserCard({ user, variant }: UserCardProps) {
  return (
    <Card variant={variant}>
      <CardMedia sx={{ height: 100 }} />
      <CardContent sx={{ pt: 0 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
            mt: '-50px',
          }}
        >
          <Avatar
            src={user.avatarUrl}
            sx={{
              border: '3px solid #FFFFFF',
              height: 120,
              width: 120,
            }}
          />
        </Box>
        <Typography align="center" fontWeight={600} color="textPrimary">
          {user.name}
        </Typography>
        <Typography align="center" variant="body2" color="textPrimary">
          {user.bio}
        </Typography>
        {user.social && (
          <>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{
                m: -0.5,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {user.social.linkedIn && (
                <Link href={user.social.linkedIn}>
                  <Avatar
                    sx={{
                      mr: 1,
                      cursor: 'pointer',
                      backgroundColor: (theme) =>
                        alpha(theme.palette.info.main, 0.2),
                    }}
                  >
                    <LinkedInIcon fontSize="small" color="info" />
                  </Avatar>
                </Link>
              )}

              {user.social.twitter && (
                <Link href={user.social.twitter}>
                  <Avatar
                    sx={{
                      ml: 2,
                      cursor: 'pointer',
                      backgroundColor: (theme) =>
                        alpha(theme.palette.info.main, 0.2),
                    }}
                  >
                    <TwitterIcon fontSize="small" color="info" />
                  </Avatar>
                </Link>
              )}
            </Box>
          </>
        )}
      </CardContent>
    </Card>
  );
}

UserCard.defaultProps = {
  variant: 'outlined',
}
