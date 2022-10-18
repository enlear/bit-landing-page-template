export type User = {
  name: string;
  bio: string;
  avatarUrl: string;
  social?: UserSocial;
};

export type UserSocial = {
  twitter?: string;
  linkedIn?: string;
};
