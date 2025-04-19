
import { Banner } from '@/types';

export const banners: Banner[] = [
  {
    id: '1',
    title: 'Summer Collection 2025',
    description: 'Discover the latest trends for this season',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000',
    link: '/category/summer',
    isActive: true,
  },
  {
    id: '2',
    title: 'New Season Arrivals',
    description: 'Be the first to shop our newest styles',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000',
    link: '/new-arrivals',
    isActive: true,
  },
  {
    id: '3',
    title: 'Limited Time Offer',
    description: 'Up to 50% off on selected items',
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1000',
    link: '/sale',
    isActive: true,
  },
];
