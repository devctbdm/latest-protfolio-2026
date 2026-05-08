'use client';

import { motion } from 'motion/react';
import { useRef } from 'react';
import { projectsData, socialData, StatsData } from '@/data';
import { AnimatedBackground, FloatingParticles } from '@/components/Animation';
import StatsCard from '../stats/StatsCard';
import { ProjectCard } from '../ProjectsCard';
import CodeBlock from '../../Code';
import Technologies from '@/components/Technologies';
import SkillsCTA from '../skill/SkillsCTA';

const HeaderSection = () => {
  const statsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
      <AnimatedBackground />
      <FloatingParticles />

      {/* HERO SECTION */}
      <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
        {/* LEFT SIDE - Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Title */}
          <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I&apos;m <motion.span className="text-indigo-500 inline-block">Minarul</motion.span>
          </motion.h1>

          {/* Description */}
          <motion.h1 className="mt-4 text-3xl leading-tight font-bold">
            I build scalable web apps with clean code and modern UI.
          </motion.h1>

          <motion.hr className="mt-4 w-full h-1 bg-indigo-500" />

          <motion.p className="mt-4 text-sm text-gray-300 leading-relaxed">
            I&apos;m a full-stack developer specializing in Next.js, Node.js, and modern
            technologies. I love building products that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="mt-8 flex gap-4 flex-wrap">
            <motion.button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-medium relative overflow-hidden group cursor-pointer transition-colors duration-200">
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Projects</span>
            </motion.button>

            <motion.button className="border border-white/20 hover:border-white/40 hover:bg-white/5 px-6 py-3 rounded-xl font-medium backdrop-blur-sm relative overflow-hidden group cursor-pointer transition-colors duration-200">
              <span className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-colors duration-300" />
              <span className="relative flex items-center gap-2">
                Download CV
                <motion.span>↓</motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-3 mt-5 flex-wrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: 0.6,
                },
              },
            }}
          >
            {socialData.map((social, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                    },
                  },
                }}
              >
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                  {social.name}
                </span>

                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 hover:border-white/40 hover:bg-white/5 p-2 rounded-xl backdrop-blur-sm relative overflow-hidden block cursor-pointer transition-colors duration-200"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2, type: 'spring', stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 bg-linear-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <motion.span
                    className="relative flex items-center justify-center"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.4 },
                    }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.span>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Code Card & Status */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Code Card */}
          <CodeBlock />

          {/* Working Status Card */}
          <motion.div
            className="rounded-xl p-4 flex items-center gap-4 justify-between bg-linear-to-r from-slate-900 via-slate-900 to-indigo-950 border border-indigo-500/20 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-4 text-sm text-white/90"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-white">Available for work</h1>
                <p className="text-xs text-white/70">
                  Let&apos;s build something amazing together 🚀
                </p>
              </div>
            </motion.div>
            <motion.img
              src="https://github.com/shadcn.png"
              alt="profile"
              className="w-12 h-12 rounded-full p-0.5 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* STATS SECTION - Scroll triggered */}
      <motion.div
        ref={statsRef}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: '-60px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {StatsData.map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                },
              },
            }}
          >
            <StatsCard
              label={stat.label}
              value={stat.value}
              icon={<stat.icon size={32} className="text-indigo-400" />}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* FEATURED PROJECTS SECTION - Scroll triggered */}
      <motion.div
        ref={projectsRef}
        className="mt-10 py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: '-60px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        {/* Section Header */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <motion.h1 className="text-lg font-bold bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </motion.h1>
          <motion.h2 className="text-3xl text-white font-bold mt-2">
            Some Things I&apos;ve Built
          </motion.h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {projectsData.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: 'easeOut' },
                },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Technologies />
      <SkillsCTA />
    </section>
  );
};

export default HeaderSection;
