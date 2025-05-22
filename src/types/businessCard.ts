export interface SocialLink {
  platform: string;
  url: string;
}

export interface BusinessCardProps {
  name: string;
  title: string;
  company?: string;
  email?: string;
  phone?: string;
  address?: string;
  website?: string;
  logoUrl?: string;
  socials?: SocialLink[];
  themeColor?: string;
  textColor?: string;
}