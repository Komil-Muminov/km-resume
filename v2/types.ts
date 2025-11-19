export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  isTyping?: boolean;
}

export enum SenderType {
  USER = 'user',
  AI = 'ai'
}

export interface NavigationItem {
  label: string;
  href: string;
}