'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const CatHome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="px-6 py-20"
    >
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-indigo-950 via-slate-900 to-purple-950 shadow-2xl shadow-indigo-500/10">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 p-10 md:p-16">
          {/* left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Let&apos;s Work Together
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Have a project
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                in mind?
              </span>
            </h1>
            <p className="mt-5 text-slate-400 text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be
              part of your vision. Let&apos;s build something great together.
            </p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-block"
            >
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-6 text-base rounded-xl shadow-lg shadow-white/10 transition-all cursor-pointer group"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CatHome;
