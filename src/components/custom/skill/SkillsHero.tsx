'use client';
import { motion } from 'motion/react';
import {
  Download,
  Sparkles,
  Lightbulb,
  Code2,
  Rocket,
  TrendingUp,
  GraduationCap,
} from 'lucide-react';
import { SiReact, SiNextdotjs, SiNodedotjs, SiTypescript } from 'react-icons/si';

const actions = [
  { icon: Lightbulb, label: 'Solve Problems', color: 'text-yellow-400' },
  { icon: Code2, label: 'Write Clean Code', color: 'text-emerald-400' },
  { icon: Rocket, label: 'Ship Products', color: 'text-sky-400' },
  { icon: TrendingUp, label: 'Learn & Improve', color: 'text-purple-400' },
];

export function SkillsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-20 md:py-32">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.08),transparent_60%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            My Skills
          </span>
          <h2 className="mt-5 bg-linear-to-b from-white to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            The Skills Behind My Work
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            A combination of technical expertise, problem-solving ability and continuous learning
            helps me build modern and scalable web applications.
          </p>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="/cv.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-emerald-500 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-shadow hover:shadow-emerald-500/40"
          >
            <Download className="h-4 w-4" />
            Download CV
          </motion.a>

          {/* bottom action grid */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {actions.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="group flex cursor-pointer flex-col items-start gap-2 rounded-xl border border-slate-800 bg-slate-900/60 p-3 backdrop-blur-sm transition-colors hover:border-slate-700"
                >
                  <Icon className={`h-5 w-5 ${a.color}`} />
                  <span className="text-xs font-medium text-slate-200">{a.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Always learning card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                <Lightbulb className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Always Learning</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              I believe in continuous learning and staying up to date with the latest technologies.
            </p>
          </div>

          {/* Visual icon image box */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl border border-slate-800 bg-linear-to-br from-slate-900 via-slate-900/80 to-slate-950 p-8"
          >
            {/* graduation icon top right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 ring-1 ring-blue-500/30"
            >
              <GraduationCap className="h-6 w-6 text-blue-400" />
            </motion.div>

            {/* center code icon + surrounding tech */}
            <div className="flex min-h-[220px] items-center justify-between gap-4">
              {/* left stack */}
              <div className="flex flex-col gap-4">
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-800 bg-slate-950"
                >
                  <SiReact className="h-7 w-7 text-sky-400" />
                </motion.div>
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-800 bg-slate-950"
                >
                  <SiNextdotjs className="h-7 w-7 text-white" />
                </motion.div>
              </div>

              {/* middle </> */}
              <motion.div
                animate={{ rotate: [0, 4, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500/20 to-sky-500/20 ring-1 ring-emerald-500/30"
              >
                <span className="font-mono text-2xl font-bold text-emerald-300">{'</>'}</span>
              </motion.div>

              {/* right stack */}
              <div className="flex flex-col gap-4">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-800 bg-slate-950"
                >
                  <SiNodedotjs className="h-7 w-7 text-green-500" />
                </motion.div>
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-800 bg-slate-950"
                >
                  <SiTypescript className="h-7 w-7 text-blue-400" />
                </motion.div>
              </div>
            </div>

            {/* subtle bg grid */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_70%)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsHero;
