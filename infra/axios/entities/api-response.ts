export interface ApiResponse<T> {
  data: T;
}

export interface LanguageResponse {
  id: string;
  name: string;
  level: string;
}

export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  role: string;
  email: string;
  phone?: string;
  address?: string;
  description: string;
  available: boolean;
  nationality: string;
  languages?: LanguageResponse[];
}

export interface SkillResponse {
  id: string;
  name: string;
  percentage: number;
}

export interface ExperienceResponse {
  id: string;
  dateFrom: Date;
  dateTo: Date;
  role: string;
  company: string;
  description: string;
}

export interface EducationResponse {
  id: string;
  dateFrom: Date;
  dateTo?: Date;
  title: string;
  institution: string;
  description: string;
}

export interface CertificationResponse {
  id: string;
  date: Date;
  title: string;
  institution: string;
  description: string;
}
