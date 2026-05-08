'use client';

import { motion } from 'motion/react';
import { Code2, Server, Rocket } from 'lucide-react';

type JourneyItem = {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const journey: JourneyItem[] = [
  {
    year: '2023',
    title: 'Started Development',
    description: 'Began with HTML, CSS, and JavaScript — building the foundation of the web.',
    icon: Code2,
  },
  {
    year: '2024',
    title: 'Backend Focus',
    description: 'Learned APIs, authentication, and databases to build full systems.',
    icon: Server,
  },
  {
    year: '2025 — Present',
    title: 'Full Stack Developer',
    description: 'Building modern applications with Next.js and Node.js.',
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export function MyJurny() {
  return (
    <section className="relative w-full py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-80px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            My Journey
          </motion.p>
          <motion.h2
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From first line of code <br className="hidden sm:block" />
            to full stack craft
          </motion.h2>
        </motion.div>

        <motion.ol
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-60px' }}
        >
          {/* vertical line */}
          <div
            aria-hidden
            className="absolute left-6 top-2 bottom-2 w-px bg-linear-to-b from-primary/60 via-border to-transparent sm:left-1/2 sm:-translate-x-1/2"
          />

          {journey.map((item, i) => {
            const Icon = item.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.li
                key={item.year}
                variants={itemVariants}
                className={`relative mb-12 last:mb-0 pl-16 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 ${
                  isLeft ? '' : 'sm:[&>*:first-child]:col-start-2'
                }`}
              >
                {/* node */}
                <div className="absolute left-6 top-3 -translate-x-1/2 sm:left-1/2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-slate-950 shadow-sm ring-4 ring-background">
                    <Icon className="h-4 w-4 text-green-400" />
                  </div>
                </div>

                <div
                  className={`group rounded-2xl border border-border bg-slate-950 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md ${
                    isLeft ? 'sm:mr-10 sm:text-right' : 'sm:ml-10'
                  }`}
                >
                  <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold tracking-wide text-secondary-foreground">
                    {item.year}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-card-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}

export default MyJurny;
