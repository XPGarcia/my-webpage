export interface Certification {
  name: string;
  companyName: string;
  date: Date;
  description: string;
}

export interface Experience {
  role: string;
  companyName: string;
  dateStart: Date;
  dateEnd?: Date;
  description: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Project {
  slug: string;
  bannerUrl: string;
  campaignUrl: string;
  name: string;
  externalUrl?: string;
  description: string;
  bulletPoints: string[];
  skills?: Skill[];
  client?: string;
}
