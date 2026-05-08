'use client';
import { motion, useReducedMotion } from 'motion/react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiPrisma,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiVite,
  SiSanity,
} from 'react-icons/si';

type Skill = {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
};

const skills: Skill[] = [
  {
    name: 'JavaScript',
    level: 95,
    icon: SiJavascript,
    color: 'text-yellow-400',
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    level: 90,
    icon: SiTypescript,
    color: 'text-blue-400',
    category: 'Frontend',
  },
  { name: 'React', level: 92, icon: SiReact, color: 'text-sky-400', category: 'Frontend' },
  { name: 'Next.js', level: 88, icon: SiNextdotjs, color: 'text-white', category: 'Frontend' },
  {
    name: 'Tailwind CSS',
    level: 94,
    icon: SiTailwindcss,
    color: 'text-cyan-400',
    category: 'Frontend',
  },
  { name: 'Redux', level: 80, icon: SiRedux, color: 'text-purple-400', category: 'Frontend' },
  { name: 'Node.js', level: 90, icon: SiNodedotjs, color: 'text-green-500', category: 'Backend' },
  { name: 'Express', level: 86, icon: SiExpress, color: 'text-slate-200', category: 'Backend' },
  { name: 'GraphQL', level: 75, icon: SiGraphql, color: 'text-pink-400', category: 'Backend' },
  { name: 'Prisma', level: 78, icon: SiPrisma, color: 'text-emerald-300', category: 'Backend' },
  { name: 'MongoDB', level: 88, icon: SiMongodb, color: 'text-green-400', category: 'Database' },
  {
    name: 'PostgreSQL',
    level: 80,
    icon: SiPostgresql,
    color: 'text-sky-300',
    category: 'Database',
  },
  { name: 'Sanity', level: 82, icon: SiSanity, color: 'text-red-400', category: 'Database' },
  { name: 'Git', level: 90, icon: SiGit, color: 'text-orange-500', category: 'Tools' },
  { name: 'Docker', level: 70, icon: SiDocker, color: 'text-blue-400', category: 'Tools' },
  { name: 'Vite', level: 88, icon: SiVite, color: 'text-violet-400', category: 'Tools' },
];

const categories = ['Frontend', 'Backend', 'Database', 'Tools'] as const;

const floatingTokens = [
  'const',
  '=> {}',
  'async',
  'await',
  'useState',
  'useEffect',
  '<JSX />',
  'npm i',
  'git push',
  'MERN',
  '{ ...spread }',
  'Promise',
];

export function CodeRain() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {floatingTokens.map((t, i) => (
        <motion.span
          key={i}
          initial={{ y: '-10%', opacity: 0 }}
          animate={{ y: '110%', opacity: [0, 0.6, 0.6, 0] }}
          transition={{
            duration: 12 + (i % 5) * 2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'linear',
          }}
          className="absolute font-mono text-xs text-emerald-400/40"
          style={{ left: `${(i * 8.3) % 100}%` }}
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm transition-colors hover:border-slate-700"
    >
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-slate-800/0 via-slate-800/0 to-slate-700/0 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="mb-4 flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 12, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-950"
        >
          <Icon className={`h-6 w-6 ${skill.color}`} />
        </motion.div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{skill.name}</p>
          <p className="text-xs text-slate-500">{skill.category}</p>
        </div>
        <span className="font-mono text-xs text-slate-400">{skill.level}%</span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2 + index * 0.04, ease: 'easeOut' }}
          className="h-full rounded-full bg-linear-to-r from-yellow-400 via-emerald-400 to-sky-400"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 py-10">
      <CodeRain />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            MERN Stack Developer
          </motion.span>
          <h1 className="mt-5 bg-linear-to-b from-white via-white to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            My Skills
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            JavaScript-powered full stack toolkit — from React on the front to Node, Express &amp;
            MongoDB on the back.
          </p>
        </motion.div>

        {categories.map((cat, ci) => (
          <div key={cat} className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="font-mono text-sm text-emerald-400">0{ci + 1}.</span>
              <h2 className="text-lg font-semibold text-white">{cat}</h2>
              <div className="h-px flex-1 bg-linear-to-r from-slate-800 to-transparent" />
            </motion.div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills
                .filter((s) => s.category === cat)
                .map((s, i) => (
                  <SkillCard key={s.name} skill={s} index={i} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
