import { FaGithub } from 'react-icons/fa6';
import { FaYoutube, FaFacebook, FaRegEnvelope } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import { CiLinkedin } from 'react-icons/ci';

import { Folder, Code, Wine, Heart } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  sourceLink: string;
  badge: string;
  features: boolean;
  categories: ('Web Apps' | 'Ecommerce' | 'Chat' | 'Blog')[];
}

export const projectsData: Project[] = [
  {
    title: 'Real-time Chat App',
    description:
      'A real-time chat application with authendtication, websockets and messaging features.',
    image: '/test.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://chat-app.com',
    sourceLink: 'https://github.com/chat-app',
    badge: 'Live',
    features: true,
    categories: ['Chat', 'Web Apps'],
  },
  {
    title: 'E-commerce Platform',
    description: 'E-commerce platform with payment integration and inventory management.',
    image: '/test.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://project2.com',
    sourceLink: 'https://github.com/project2',
    badge: 'Live',
    features: true,
    categories: ['Ecommerce', 'Web Apps'],
  },
  {
    title: 'Real-time Chat App',
    description:
      'A real-time chat application with authendtication, websockets and messaging features.',
    image: '/test.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://chat-app.com',
    sourceLink: 'https://github.com/chat-app',
    badge: 'Live',
    features: true,
    categories: ['Chat', 'Web Apps'],
  },
  {
    title: 'E-commerce Platform',
    description: 'E-commerce platform with payment integration and inventory management.',
    image: '/test.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://project2.com',
    sourceLink: 'https://github.com/project2',
    badge: 'Live',
    features: true,
    categories: ['Ecommerce', 'Web Apps'],
  },
  {
    title: 'Real-time Chat App',
    description:
      'A real-time chat application with authendtication, websockets and messaging features.',
    image: '/test.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://chat-app.com',
    sourceLink: 'https://github.com/chat-app',
    badge: 'Live',
    features: false,
    categories: ['Chat', 'Web Apps'],
  },
  {
    title: 'E-commerce Platform',
    description: 'E-commerce platform with payment integration and inventory management.',
    image: '/test.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://project2.com',
    sourceLink: 'https://github.com/project2',
    badge: 'Live',
    features: true,
    categories: ['Ecommerce', 'Web Apps'],
  },
  {
    title: 'Real-time Chat App',
    description:
      'A real-time chat application with authendtication, websockets and messaging features.',
    image: '/test.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://chat-app.com',
    sourceLink: 'https://github.com/chat-app',
    badge: 'Live',
    features: true,
    categories: ['Chat', 'Web Apps'],
  },
  {
    title: 'E-commerce Platform',
    description: 'E-commerce platform with payment integration and inventory management.',
    image: '/test.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://project2.com',
    sourceLink: 'https://github.com/project2',
    badge: 'Live',
    features: false,
    categories: ['Ecommerce', 'Web Apps'],
  },
  {
    title: 'Personal Blog Platform',
    description:
      'A markdown-based blog with CMS integration, SEO optimization, and dark mode support.',
    image: '/test.webp',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveLink: 'https://blog-app.com',
    sourceLink: 'https://github.com/blog-app',
    badge: 'Live',
    features: true,
    categories: ['Blog', 'Web Apps'],
  },
];

export interface Social {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const socialData: Social[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: FaGithub,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: FaYoutube,
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: FaFacebook,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: CiLinkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: IoLogoTwitter,
  },
  {
    name: 'Mail',
    url: 'mailto:example@example.com',
    icon: FaRegEnvelope,
  },
];

export const StatsData = [
  {
    label: 'Projects Completed',
    value: '30+',
    icon: Folder,
  },
  {
    label: 'Years of Experience',
    value: '4+',
    icon: Code,
  },
  {
    label: 'Technologies Mastered',
    value: '10+',
    icon: Wine,
  },
  {
    label: 'Clients Satisfaction',
    value: '100%',
    icon: Heart,
  },
];
