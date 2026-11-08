import { TopicItem } from '@/types';

export const TOPIC_ITEMS: TopicItem[] = [
  {
    id: 'all',
    title: 'All Meditations',
    subtitle: 'Full sacred catalog',
    iconName: 'Sparkles',
    count: 8,
    categoryKey: 'all'
  },
  {
    id: 'beginner-guides',
    title: 'Beginner Guides',
    subtitle: 'Gentle foundation practices',
    iconName: 'Compass',
    count: 2,
    categoryKey: 'beginner'
  },
  {
    id: 'mindful-living',
    title: 'Mindful Living',
    subtitle: 'Daily calm & presence',
    iconName: 'HeartHandshake',
    count: 2,
    categoryKey: 'mindful'
  },
  {
    id: 'spiritual-wisdom',
    title: 'Spiritual Wisdom',
    subtitle: 'Vedic truths & inquiry',
    iconName: 'Flame',
    count: 2,
    categoryKey: 'spiritual'
  },
  {
    id: 'sound-healing',
    title: 'Sound Healing & 432Hz',
    subtitle: 'Singing bowls & delta frequencies',
    iconName: 'Music',
    count: 2,
    categoryKey: 'sound-healing'
  },
  {
    id: 'deep-sleep',
    title: 'Deep Sleep Journeys',
    subtitle: 'Restful delta rejuvenation',
    iconName: 'Moon',
    count: 1,
    categoryKey: 'sleep'
  },
  {
    id: 'upcoming-events',
    title: 'Upcoming Events',
    subtitle: 'Live Satsangs & workshops',
    iconName: 'Calendar',
    count: 4
  }
];
