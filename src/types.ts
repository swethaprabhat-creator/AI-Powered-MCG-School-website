export type ScreenType =
  | 'home'
  | 'about-us'
  | 'academics'
  | 'ai-learning'
  | 'campus-life'
  | 'admissions'
  | 'gallery'
  | 'news-and-events'
  | 'contact';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface AdmissionFormData {
  parentName: string;
  studentName: string;
  dob: string;
  grade: string;
  phone: string;
  email: string;
  notes: string;
  consent: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'campus' | 'learning' | 'arts' | 'sports' | 'events';
  imageUrl: string;
  caption: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
}
