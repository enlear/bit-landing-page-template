import {
  FooterItem,
  FooterBrand,
} from "@enlear/bit-landing-page-template.ui.footer";
import { MenuItem } from "@enlear/bit-landing-page-template.ui.header";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Avatar, alpha } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const headerItems: MenuItem[] = [
  {
    label: "Company",
    expandable: true,
    color: "primary",
    sub: [
      {
        label: "About",
        color: "info",
        description: "Learn more about us",
        href: "/about",
        icon: <InfoOutlinedIcon />,
      },
    ],
  },
];
const footerItems: FooterItem[] = [
  {
    kind: "brand",
    title: "Volt",
    links: [
      {
        title: "Facebook",
        url: "https://www.facebook.com",
        icon: (
          <Avatar
            variant="rounded"
            sx={{
              background: (theme) => alpha(theme.palette.info.main, 0.08),
              color: "info.main",
              ":hover": {
                background: (theme) => alpha(theme.palette.info.main, 0.1),
              },
            }}
          >
            <FacebookOutlinedIcon />
          </Avatar>
        ),
      },
    ],
  },
  {
    kind: "links",
    title: "Company",
    links: [
      {
        title: "About",
        url: "/about",
        icon: <InfoIcon />,
      },
      {
        title: "Contact",
        url: "/contact",
        icon: <InfoIcon />,
      },
    ],
  },
];

const footerBrand: FooterBrand = {
  brandLabel: "Volt",
  cookieUrl: "/cookie-policy",
  privacyUrl: "/privacy-policy",
  termsUrl: "/terms-of-service",
};

export const navBarItems = {
  headerItems,
  footerItems,
  footerBrand,
};
