export type SubMenuItem = {
  label: string;
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
  icon: React.ReactNode;
};

export type MenuItem = {
  label: string;
  href?: string;
  expandable?: boolean;
  sub: Array<SubMenuItem>;
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
};
