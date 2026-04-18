export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: Author;
  date: string;
  readTime: string;
  image: string;
  content: string;
  tags: string[];
  featured?: boolean;
}

export interface Project {
  id: string;
  projectName: string;
  projectDescription: string;
  githubLink: string;
  liveSiteLink: string;
  image: string;
  technologies: string[];
  features: string[];
}

export interface Tech {
  name: string;
  icon: React.ReactNode;
  level?: number;
}
