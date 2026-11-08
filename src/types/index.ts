export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  duration: string;
  views: string;
  category: 'beginner' | 'mindful' | 'spiritual' | 'sound-healing' | 'sleep';
  categoryLabel: string;
  thumbnailUrl: string;
  featured?: boolean;
  frequency?: string;
  instructor: string;
  tags: string[];
}

export interface LiveEvent {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  timezone: string;
  type: 'Global Satsang' | 'Full Moon' | 'Breath Workshop' | 'Guided Journey';
  attendeesCount: number;
  isLiveSoon?: boolean;
  daysRemaining?: number;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  readingTime: string;
  category: string;
  publishDate: string;
  author: string;
  keyTakeaways: string[];
  coverGradient: string;
}

export interface SageQuote {
  id: string;
  text: string;
  author: string;
  source: string;
  tag: string;
}

export interface TopicItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  count: number;
  categoryKey?: string;
}
