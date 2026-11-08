import { TopicItem } from '@/types';

export const TOPIC_ITEMS: TopicItem[] = [
  {
    id: 'all',
    title: 'सभी सत्संग व वीडियो',
    subtitle: 'चैनल के समस्त पावन उपदेश',
    iconName: 'Sparkles',
    count: 8,
    categoryKey: 'all'
  },
  {
    id: 'upadesa-saram',
    title: 'उपदेश सारम् (महर्षि रमण)',
    subtitle: 'आत्म-विचार व समाधि',
    iconName: 'Flame',
    count: 3,
    categoryKey: 'spiritual'
  },
  {
    id: 'bhagavad-gita',
    title: 'श्रीमद्भगवद्गीता ज्ञान',
    subtitle: 'अध्याय ४ व ज्ञान योग',
    iconName: 'Compass',
    count: 2,
    categoryKey: 'mindful'
  },
  {
    id: 'sultan-bahu',
    title: 'सुलतान बाहू व सूफी वाणी',
    subtitle: 'रूहानी प्रेम व समर्पण',
    iconName: 'Music',
    count: 1,
    categoryKey: 'sound-healing'
  },
  {
    id: 'nature-fields',
    title: 'भारत के खेत व सादगी',
    subtitle: 'प्रकृति, मिट्टी व सहज जीवन',
    iconName: 'HeartHandshake',
    count: 1,
    categoryKey: 'beginner'
  },
  {
    id: 'upcoming-events',
    title: 'आगामी सत्संग व आयोजन',
    subtitle: 'स्वामी अमरजीत सिंह जी के साथ',
    iconName: 'Calendar',
    count: 4
  }
];
