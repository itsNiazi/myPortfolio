export interface PortfolioContent {
  title: string;
  content: string;
}

export interface Personal {
  name: string;
  bio: string;
  location: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
}

export interface Tools {
  id: number;
  name: string;
  img: string;
}
