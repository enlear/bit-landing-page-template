export type FooterLink = {
  title: string;
  url: string;
  icon: React.ReactNode;
};

export type FooterKind = 'brand' | 'links';

export type FooterItem = {
  title: string;
  links: FooterLink[];
  kind: FooterKind;
};

export type FooterBrand = {
  brandLabel?: string;
  termsUrl?: string;
  privacyUrl?: string;
  cookieUrl?: string;
};

export const FooterBrandLabels: { [key: string]: string } = {
  brandLabel: 'Brand Label',
  termsUrl: 'Terms & Conditions',
  privacyUrl: 'Privacy Policy',
  cookieUrl: 'Cookie Policy',
};
