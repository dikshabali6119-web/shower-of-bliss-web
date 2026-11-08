import { TopicItem } from '@/types';

export const TOPIC_ITEMS: TopicItem[] = [
  {
    id: 'all',
    title: 'All Teachings & Simran',
    subtitle: 'Vedanta, Guruvani & Meditation',
    iconName: 'Sparkles',
    count: 8,
    categoryKey: 'all'
  },
  {
    id: 'vedanta-nirmala',
    title: 'Vedanta & Nirmala Wisdom',
    subtitle: 'Teachings of Sant Nikka Singh Ji',
    iconName: 'Flame',
    count: 2,
    categoryKey: 'spiritual'
  },
  {
    id: 'guruvani-anand',
    title: 'Guruvani & Shabad Reflection',
    subtitle: 'Anand Sahib & Mool Mantar',
    iconName: 'HeartHandshake',
    count: 2,
    categoryKey: 'mindful'
  },
  {
    id: 'naam-simran',
    title: 'Naam Simran & 432Hz',
    subtitle: 'Waheguru dhyana & sonic calm',
    iconName: 'Music',
    count: 2,
    categoryKey: 'sound-healing'
  },
  {
    id: 'beginner-guides',
    title: 'Beginner Guides to Stillness',
    subtitle: 'Soham pranayama & postures',
    iconName: 'Compass',
    count: 1,
    categoryKey: 'beginner'
  },
  {
    id: 'deep-sleep',
    title: 'Deep Sleep & Surat Dhyan',
    subtitle: 'Peaceful surrender of thoughts',
    iconName: 'Moon',
    count: 1,
    categoryKey: 'sleep'
  },
  {
    id: 'upcoming-events',
    title: 'Upcoming Satsangs & Events',
    subtitle: 'Live global congregations',
    iconName: 'Calendar',
    count: 4
  }
];
