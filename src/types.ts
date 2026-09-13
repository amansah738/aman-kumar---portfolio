export type SkillCategory = 'all' | 'programming' | 'web' | 'tools' | 'security';

export interface SkillItem {
  name: string;
  percentage: number;
  colorClass: string;
}

export interface SkillGroup {
  id: string;
  category: SkillCategory;
  title: string;
  subtitle: string;
  icon: string;
  iconColor: string;
  skills: SkillItem[];
  badges: string[];
}

export interface ProjectItem {
  id: string;
  categoryTag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  description: string;
  tags: { label: string; highlight?: boolean }[];
  demoUrl: string;
  githubUrl: string;
  icon: string;
  image?: string;
  accentGlow: string;
  details?: {
    overview: string;
    features: string[];
    securityHighlights: string[];
    techStack: string[];
    role: string;
  };
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
