export interface ProjectGalleryItem {
  url: string;
  description: string;
  isPortrait: boolean;
}

export interface Project {
  id: string;
  title: string;
  impact: string;
  techStack: string[];
  mockupUrl: string;
  liveUrl: string;
  githubUrl: string;
  problem: string;
  architecture: {
    description: string;
    diagramUrl: string;
  };
  gallery: ProjectGalleryItem[];
  codeHighlight: {
    title: string;
    language: string;
    code: string;
    description: string;
  };
  challenges: string[];
  results: string[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    intro: string;
    cvUrl: string;
    email: string;
    avatarUrl: string;
    socials: {
      platform: string;
      url: string;
      label: string;
    }[];
  };
  services: ServiceItem[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  experience: WorkExperience[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}
