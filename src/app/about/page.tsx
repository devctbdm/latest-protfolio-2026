import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About | devct',
  description: 'Learn more about Minarul, a full stack developer',
};

export default function AboutPage() {
  return (
    <>
      <AboutClient />
    </>
  );
}
