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

  /**
   * custom footer links
   * key - label
   * value - link
   */
  links?: Record<string, string>;
} & BoxProps;

export function Footer({
  items,
  brand,
  ctaCaption,
  onCtaClick,
  links,
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
        <Grid
          container
          spacing={2}
        >
          {items.map((item, index) => (
            <Grid
              item
              key={`${item.title}#${index}`}
              {...(item.kind === 'brand' && { xs: 12, sm: 12 })}
              {...(item.kind === 'links' && { xs: 6, sm: 6 })}
              md={2}
              lg={2}
              xl={2}
            >

              <Typography
                sx={{
                  fontWeight: 600,
                  color: (theme) => theme.palette.text.primary,
                }}
              >
                {item.title}
              </Typography>
              {item.kind === 'brand' && (
                <>
                  {item.links.length > 0 && (
                    <Box
                      sx={{
                        pt: 2,
                        display: 'flex',
                        gap: 2
                      }}
                    >
                      {item.links.map((link, linkIdx) => (
                        <Box
                          key={`${link.title}#${linkIdx}`}
                        >
                          <Link href={link.url}>{link.icon}</Link>
                        </Box>
                      ))}
                    </Box>
                  )}
                </>
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
        </Grid>
        {ctaCaption && (
          <Grid item sx={{ my: 1 }}>
            <Button
              variant="text"
              size="large"
              sx={{
                fontSize: 18,
                fontWeight: 500,
                ml: -2,
                color: theme.palette.text.primary,
                textTransform: 'none',
              }}
              onClick={onCtaClick}
              endIcon={<ArrowForwardIcon />}
            >
              {ctaCaption}
            </Button>
          </Grid>
        )}
      </Container>
      <Container maxWidth="lg">
        {brand && (
          <Fragment>
            <Divider
              sx={{
                borderColor: alpha('#FFF', 0.5),
                my: 1,
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
                        color: (theme) => theme.palette.text.primary,
                      }}
                    >
                      {brand?.brandLabel}
                    </Typography>
                  </Grid>
                )}
                <Grid item md={9} sx={{ display: 'flex', gap: 2 }}>
                  {Object.entries({ ...brand && { ...brand }, ...links && { ...links } }).map(([key, value]) => (
                    <Fragment key={key}>
                      {key !== 'brandLabel' && (
                        <Link href={value} sx={{ ...linkSx }}>
                          <Typography sx={{
                            ...linkSx, ...FooterBrandLabels[key as keyof FooterBrand] === undefined && {
                              borderBottom: '1px solid',
                            }
                          }}>
                            {FooterBrandLabels[key as keyof FooterBrand] ? (
                              FooterBrandLabels[key as keyof FooterBrand]
                            ) : (
                              key
                            )}
                          </Typography>
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Fragment>
        )}
      </Container>
    </Box >
  );
}

Footer.defaultProps = {
  items: [],
  brand: undefined,
  ctaCaption: undefined,
};
