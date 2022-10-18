import { Hero } from '@enlear/bit-landing-page-template.ui.home.hero';
import React from 'react';
import { StatSummary } from '@enlear/bit-landing-page-template.ui.home.stat-summary';
import { Main } from '@enlear/bit-landing-page-template.layouts.main';
import { StatSummaryItem } from '@enlear/bit-landing-page-template.ui.home.stat-summary';
import { FooterItem } from '@enlear/bit-landing-page-template.ui.footer';
import { MenuItem } from '@enlear/bit-landing-page-template.ui.header';
import { FooterBrand } from '@enlear/bit-landing-page-template.ui.footer';

export type HomeProps = {
  /**
   * the hero content to be placed in the center of the landing page
   */
  heroContent: React.ReactNode;
  /**
   * the statistics to be counted up
   */
  statistics: StatSummaryItem[];

  /**
   * the header items to be rendered
   */
  headerItems: MenuItem[];

  /**
   * the footer items to be rendered
   */
  footerItems: FooterItem[];

  /**
   * the footer brand information
   */
  footerBrand?: FooterBrand;

  /**
   * any additional children to be displayed after statsitics, but above footer
   */
  children?: React.ReactNode;
};

export function Home({
  heroContent,
  statistics,
  headerItems,
  footerItems,
  footerBrand,
  children,
}: HomeProps) {
  return (
    <Main
      headerItems={headerItems}
      footerItems={footerItems}
      footerBrand={footerBrand}
    >
      <Hero>{heroContent}</Hero>
      <StatSummary statistics={statistics} />
      {children}
    </Main>
  );
}
