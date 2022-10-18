import React, { ReactNode } from 'react';
import { Content } from '@enlear/bit-landing-page-template.layouts.content';
import {
  Footer,
  FooterItem,
} from '@enlear/bit-landing-page-template.ui.footer';
import { Header, MenuItem } from '@enlear/bit-landing-page-template.ui.header';

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
};

export function Main({ children, headerItems, footerItems }: MainProps) {
  return (
    <Content>
      <Header items={headerItems} />
      {children}
      <Footer
        items={footerItems}
        brand={{
          brandLabel: '© 2022 Volt. All Rights Reserved.',
          termsUrl: '/terms',
          privacyUrl: '/privacy',
          cookieUrl: '/cookie',
        }}
      />
    </Content>
  );
}
