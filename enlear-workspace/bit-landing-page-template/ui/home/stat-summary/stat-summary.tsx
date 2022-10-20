import { Container } from '@enlear/bit-landing-page-template.layouts.container';
import { Typography, SxProps } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';
import { Fragment } from 'react';
import CountUp from 'react-countup';
import { StatSummaryItem } from './stat-summary.types';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export type StatSummaryProps = {
  /**
   * The statistics to display with the count up animation
   */
  statistics: StatSummaryItem[];

  /**
   * The counting duration in seconds
   */
  timerDuration?: number;

  /**
   * additional sx props
   */
  sx?: SxProps;
};

export function StatSummary({ statistics, timerDuration, sx }: StatSummaryProps) {
  return (
    <Box
      sx={{
        width: '100%',
        py: 8,
        backgroundColor: 'background.paper',
        ...sx && { ...sx },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: {
            md: 'row',
            xs: 'column',
          },
          gap: 2,
        }}
      >
        {statistics.map((stat, statIdx) => (
          <Fragment key={`${stat.value}#${statIdx}`}>
            <Box
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <Typography
                variant="body1"
                fontWeight={500}
                fontSize={30}
                color="primary.main"
              >
                <CountUp
                  end={stat.value}
                  duration={timerDuration}
                  suffix={stat.suffix}
                />
              </Typography>
              <Box sx={{ mt: 0.6 }}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  fontSize={16}
                  color="text.primary"
                >
                  {stat.label}
                </Typography>
              </Box>
            </Box>
            {statIdx !== statistics.length - 1 && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  flex: 1,
                  pr: 4,
                }}
              >
                <ChevronRightIcon
                  fontSize="large"
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'none',
                      md: 'block',
                    },
                    color: (theme) => theme.palette.text.primary,
                  }}
                />
              </Box>
            )}
          </Fragment>
        ))}
      </Container>
    </Box>
  );
}

StatSummary.defaultProps = {
  statistics: [],
  timerDuration: 0.7,
};
