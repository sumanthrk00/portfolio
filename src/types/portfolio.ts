export interface Profile {
  name: string;
  initials: string;
  title: string;
  badge: string;
  headline: string;
  summary: string;
  bioParagraphs: string[];
  location: string;
  coordinates?: string;
  email: string;
  phone: string;
  github: string;
  githubUrl: string;
  linkedinUrl: string;
  available: boolean;
  resumeFileName: string;
  resumeUrl: string;
  infoPanel: {
    location: string;
    role: string;
    availability: string;
    primaryInterests: string;
    specialization: string;
  };
}

export interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  technologies: string[];
}

export interface SkillItem {
  name: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  startYear?: string;
  endYear: string;
  grade?: string;
  description: string;
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type?: 'Full-time' | 'Internship' | 'Contract' | 'Open Source' | 'Project';
  description: string;
  responsibilities: string[];
  technologies: string[];
  deliverables?: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  highlights: string[];
  repoUrl?: string;
  liveUrl?: string;
  accent?: string;
  metrics?: ProjectMetric[];
  featured?: boolean;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics?: string[];
}

export interface NavLink {
  label: string;
  href: string;
  number?: string;
}
