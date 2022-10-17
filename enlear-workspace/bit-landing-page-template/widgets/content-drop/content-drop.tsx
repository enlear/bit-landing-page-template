import { Popper, Fade, Paper, Box, Grid } from '@mui/material';
import React, { ReactNode, MutableRefObject } from 'react';

import { ContentItem } from '@enlear/bit-landing-page-template.widgets.content-item';

export type ContentDropProps = {
  /**
   * an element to reference where the content drop will appear from
   */
  anchorEl?: MutableRefObject<HTMLDivElement | undefined>;

  /**
   * a boolean declaring whether the content drop should be open
   */
  open: boolean;

  /**
   * the list of items to display in the content drop
   */
  items: {
    name: string;
    icon: ReactNode;
    href: string;
    description: string;
    color:
      | 'primary'
      | 'secondary'
      | 'error'
      | 'warning'
      | 'info'
      | 'success'
      | 'action'
      | 'inherit'
      | 'disabled'
      | undefined;
  }[];
};

export function ContentDrop({ anchorEl, open, items }: ContentDropProps) {
  return (
    <Popper anchorEl={anchorEl?.current} open={open} transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={300}>
          <Paper
            sx={{
              mt: 2.7,
            }}
          >
            <Box
              sx={{
                maxHeight: 700,
                overflow: 'auto',
              }}
            >
              <Grid
                container
                sx={{
                  px: 4,
                  py: 2,
                }}
                spacing={6}
              >
                {items.map((item, itemIdx) => (
                  <Grid item sx={{ maxWidth: 420 }} key={itemIdx}>
                    <ContentItem item={item} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}
