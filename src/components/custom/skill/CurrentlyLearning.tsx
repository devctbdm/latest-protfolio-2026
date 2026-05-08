'use client';
import { motion } from 'motion/react';
import { BookOpen, Sparkles } from 'lucide-react';
import { SiNextdotjs, SiTypescript, SiDocker, SiKubernetes } from 'react-icons/si';
import { FaProjectDiagram, FaAws } from 'react-icons/fa';

const learning = [
  {
    title: 'Next.js App Router',
    desc: 'Server components, streaming, and advanced routing patterns.',
    icon: SiNextdotjs,
    color: 'text-white',
    ring: 'ring-white/20',
    bg: 'bg-white/5',
    progress: 70,
  },
  {
    title: 'Advanced TypeScript',
    desc: 'Generics, conditional types, and type-level programming.',
    icon: SiTypescript,
    color: 'text-blue-400',
    ring: 'ring-blue-400/30',
    bg: 'bg-blue-500/10',
    progress: 65,
  },
  {
    title: 'System Design',
    desc: 'Scalable architectures, caching, queues and trade-offs.',
    icon: FaProjectDiagram,
    color: 'text-purple-400',
    ring: 'ring-purple-400/30',
    bg: 'bg-purple-500/10',
    progress: 55,
  },
  {
    title: 'Docker & Kubernetes',
    desc: 'Containerization, orchestration and production deployments.',
    icon: SiDocker,
    color: 'text-sky-400',
    ring: 'ring-sky-400/30',
    bg: 'bg-sky-500/10',
    progress: 60,
    secondaryIcon: SiKubernetes,
  },
  {
    title: 'AWS Cloud',
    desc: 'EC2, S3, Lambda, RDS and cloud-native infrastructure.',
    icon: FaAws,
    color: 'text-orange-400',
    ring: 'ring-orange-400/30',
    bg: 'bg-orange-500/10',
    progress: 50,
  },
];

export function CurrentlyLearning() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-purple-300">
            <BookOpen className="h-3.5 w-3.5" />
            Currently Learning
          </span>
          <h2 className="mt-5 bg-linear-to-b from-white to-slate-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Always Leveling Up
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            The technologies and concepts I&apos;m exploring right now to grow as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {learning.map((item, i) => {
            const Icon = item.icon;
            const Secondary = item.secondaryIcon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm transition-colors hover:border-slate-700"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${item.bg} ${item.ring}`}
                    >
                      <Icon className={`h-6 w-6 ${item.color}`} />
                    </motion.div>
                    {Secondary && (
                      <motion.div
                        whileHover={{ rotate: -10, scale: 1.1 }}
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-400/30"
                      >
                        <Secondary className="h-6 w-6 text-blue-400" />
                      </motion.div>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
                    <Sparkles className="h-3 w-3" />
                    Learning
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{item.desc}</p>

                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Progress</span>
                    <span className="font-mono text-slate-400">{item.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2 + i * 0.06 }}
                      className="h-full rounded-full bg-linear-to-r from-purple-400 via-sky-400 to-emerald-400"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CurrentlyLearning;
