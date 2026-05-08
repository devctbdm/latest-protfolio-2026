'use client';
import { motion } from 'motion/react';
import {
  FaUserFriends,
  FaRegLightbulb,
  FaComments,
  FaClock,
  FaUsers,
  FaSyncAlt,
} from 'react-icons/fa';

const softSkills = [
  {
    icon: FaRegLightbulb,
    title: 'Problem Solving',
    description:
      'I enjoy solving complex problems and turning them into simple, efficient solutions.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    ring: 'ring-yellow-500/30',
  },
  {
    icon: FaComments,
    title: 'Communication',
    description: 'Clear, honest communication keeps teams aligned and projects moving forward.',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    ring: 'ring-sky-500/30',
  },
  {
    icon: FaClock,
    title: 'Time Management',
    description: 'I prioritize tasks effectively to deliver quality work on time, every time.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    ring: 'ring-emerald-500/30',
  },
  {
    icon: FaUsers,
    title: 'Teamwork',
    description: 'I collaborate openly, share knowledge, and help teammates ship their best work.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    ring: 'ring-purple-500/30',
  },
  {
    icon: FaSyncAlt,
    title: 'Adaptability',
    description: 'I embrace change, learn fast, and adjust quickly to new tools and challenges.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    ring: 'ring-pink-500/30',
  },
];

export function SoftSkills() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      {/* glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-purple-500/20 to-sky-500/20 ring-1 ring-purple-500/30">
            <FaUserFriends className="h-7 w-7 text-purple-300" />
          </div>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-purple-300">
            Soft Skills
          </span>
          <h2 className="mt-4 bg-linear-to-b from-white to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Beyond the Code
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-400">
            The human side of building great products — how I work, communicate and collaborate.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-colors hover:border-slate-700"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${s.bg} ring-1 ${s.ring}`}
                >
                  <Icon className={`h-6 w-6 ${s.color}`} />
                </motion.div>
                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>

                <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-slate-700 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;
