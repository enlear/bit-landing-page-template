import { Hero } from '@enlear/bit-landing-page-template.ui.home.hero';
import React from 'react';
import { StatSummary } from '@enlear/bit-landing-page-template.ui.home.stat-summary';
import { Main } from '@enlear/bit-landing-page-template.layouts.main';
import { StatSummaryItem } from '@enlear/bit-landing-page-template.ui.home.stat-summary';

export type HomeProps = {
  /**
   * the hero content to be placed in the center of the landing page
   */
  heroContent: React.ReactNode;
  /**
   * the statistics to be counted up
   */
  statistics: StatSummaryItem[];
};

export function Home({ heroContent, statistics }: HomeProps) {
  return (
    <Main>
      <Hero>{heroContent}</Hero>
      <StatSummary statistics={statistics} />
    </Main>
  );
}
