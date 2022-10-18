import React, { ReactNode } from 'react';
import { Content } from '@enlear/bit-landing-page-template.layouts.content';
import {
  Footer,
  FooterItem,
} from '@enlear/bit-landing-page-template.ui.footer';
import { Header, MenuItem } from '@enlear/bit-landing-page-template.ui.header';
import { FooterBrand } from '@enlear/bit-landing-page-template.ui.footer';

export type MainProps = {
  /**
   * the content to be placed within the main landing page layout
   */
  children?: ReactNode;

  /**
   * the header items to be rendered
   */
  headerItems: MenuItem[];

  /**
   * the footer items to be rendered
   */
  footerItems: FooterItem[];

  /**
   * the terms, privacy, cookie and brand information
   */
  footerBrand?: FooterBrand;
};

export function Main({
  children,
  headerItems,
  footerItems,
  footerBrand,
}: MainProps) {
  return (
    <Content>
      <Header items={headerItems} />
      {children}
      <Footer
        items={footerItems}
        brand={footerBrand}
      />
    </Content>
  );
}
