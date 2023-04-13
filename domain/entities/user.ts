import { Language } from './language';
import { SocialMedia } from './socialMedia';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  role: string;
  email: string;
  phone?: string;
  address?: string;
  description: string;
  available: boolean;
  nationality: string;
  socialMedia?: SocialMedia;
  languages?: Language[];
}
