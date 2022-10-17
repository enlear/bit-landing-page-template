import { Container } from '@enlear/bit-landing-page-template.layouts.container';
import { Link } from '@enlear/bit-landing-page-template.navigation.link';
import { Button } from '@enlear/bit-landing-page-template.widgets.button';
import { Theme, useMediaQuery, useTheme } from '@mui/material';
import { alpha } from '@mui/material';
import { Grid } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';
import { Divider } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { BoxProps } from '@mui/material';
import React from 'react';
import { useMemo } from 'react';
import { FooterBrand, FooterBrandLabels, FooterItem } from './footer.types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Fragment } from 'react';

export type FooterProps = {
  /**
   * the footer items to render
   */
  items: FooterItem[];
  /**
   * the footer brand to render
   * will include brand name, terms, privacy and cookie links (all optional)
   */
  brand?: FooterBrand;

  /**
   * the footer call to action caption
   */
  ctaCaption?: string;

  /**
   * click listener for the footer call to action
   */
  onCtaClick?: () => void;
} & BoxProps;

export function Footer({
  items,
  brand,
  ctaCaption,
  onCtaClick,
  ...boxProps
}: FooterProps) {
  const theme = useTheme();
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const linkSx = useMemo(
    () => ({
      color: alpha(theme.palette.text.primary, 0.9),
      transition: 'color 0.1s ease-in-out',
      fontSize: 13,
      ':hover': {
        color: alpha(theme.palette.text.primary, 0.4),
      },
    }),
    [theme.palette.text.primary]
  );

  return (
    <Box
      sx={{
        pb: 6,
        pt: {
          md: 10,
          xs: 6,
        },
        ...(mdUp && {
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }),
        ...(mdDown && {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }),
        background: theme.palette.background.default,
      }}
      {...boxProps}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {items.map((item, index) => (
            <Grid
              item
              key={`${item.title}#${index}`}
              {...(item.kind === 'brand' && { xs: 12, sm: 12 })}
              {...(item.kind === 'links' && { xs: 6, sm: 6 })}
              md={4}
              lg={4}
              xl={4}
            >
              <Typography sx={{ fontSize: 13.5, fontWeight: 500 }}>
                {item.title}
              </Typography>
              {item.kind === 'brand' && (
                <Box
                  sx={{
                    pt: 2,
                    display: 'flex',
                  }}
                >
                  {item.links.map((link, linkIdx) => (
                    <Box
                      sx={{
                        pr: 2,
                      }}
                      key={`${link.title}#${linkIdx}`}
                    >
                      <Link href={link.url}>{link.icon}</Link>
                    </Box>
                  ))}
                </Box>
              )}
              {item.kind === 'links' && (
                <List>
                  {item.links.map((link, index) => (
                    <ListItem
                      disableGutters
                      sx={{
                        pb: 0,
                        pt: 1,
                      }}
                      key={`${link.title}#${index}`}
                    >
                      <ListItemText
                        primary={
                          <Link
                            href={link.url}
                            color="textPrimary"
                            variant="subtitle2"
                            sx={{ ...linkSx }}
                          >
                            {link.title}
                          </Link>
                        }
                        primaryTypographyProps={{ ...linkSx }}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </Grid>
          ))}
          {ctaCaption && (
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Button
                variant="text"
                size="large"
                sx={{
                  fontSize: 18,
                  fontWeight: 500,
                  ml: -2,
                  color: theme.palette.text.primary,
                }}
                onClick={onCtaClick}
                endIcon={<ArrowForwardIcon />}
              >
                {ctaCaption}
              </Button>
            </Grid>
          )}
        </Grid>
      </Container>
      <Container maxWidth="lg">
        {brand && (
          <Fragment>
            <Divider
              sx={{
                borderColor: alpha('#FFF', 0.5),
                my: 3,
              }}
            />
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Grid container spacing={3}>
                {!!brand?.brandLabel && (
                  <Grid item md={3} xs={12}>
                    <Typography
                      sx={{
                        fontSize: 13,
                      }}
                    >
                      {brand?.brandLabel}
                    </Typography>
                  </Grid>
                )}
                {!!(
                  brand?.cookieUrl ||
                  brand?.privacyUrl ||
                  brand?.termsUrl
                ) && (
                  <Grid item md={9} sx={{ display: 'flex', gap: 2 }}>
                    {Object.entries(brand || {}).map(([key, value]) => (
                      <Link key={key} href={value} sx={{ ...linkSx }}>
                        <Typography sx={{ ...linkSx }}>
                          {FooterBrandLabels[key as keyof FooterBrand]}
                        </Typography>
                      </Link>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Box>
          </Fragment>
        )}
      </Container>
    </Box>
  );
}

Footer.defaultProps = {
  items: [],
  brand: undefined,
  ctaCaption: undefined,
};
