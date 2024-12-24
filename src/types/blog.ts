export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: Date;
  category: 'learning' | 'task' | 'project';
  tags: string[];
  excerpt: string;
  slug: string;
}

export interface BlogFormData {
  title: string;
  content: string;
  category: 'learning' | 'task' | 'project';
  tags: string[];
}