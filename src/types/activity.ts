export interface ActivityData {
  date: string;
  hours: number;
  tasks: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}