'use client';

import { motion } from 'motion/react';
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiSanity,
} from 'react-icons/si';

type Tech = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};

const technologies: Tech[] = [
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'React', icon: SiReact, color: 'text-sky-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Git', icon: SiGit, color: 'text-orange-500' },
  { name: 'Sanity', icon: SiSanity, color: 'text-red-500' },
];

const fadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
} as const;

const fadeItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
} as const;

const staggerItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeOut' as const },
  },
};

export function Technologies() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="mb-10 text-center"
          variants={fadeContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-80px' }}
        >
          <motion.p
            className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400"
            variants={fadeItem}
          >
            Tech Stack
          </motion.p>
          <motion.h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            variants={fadeItem}
          >
            Technologies I work with
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3 sm:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-60px' }}
        >
          {technologies.map((t) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.name}
                variants={staggerItem}
                className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-900"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-950/80">
                  <Icon className={`h-5 w-5 ${t.color}`} />
                </div>
                <span className="text-sm font-medium text-slate-200">{t.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Technologies;
