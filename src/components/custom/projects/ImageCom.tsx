'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useState } from 'react';

const ImageCom = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{}}
      className="relative w-full max-w-lg mx-auto md:mx-0"
    >
      {/* Skeleton placeholder */}
      {!loaded && (
        <div className="absolute inset-0 rounded-2xl bg-slate-800 overflow-hidden">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-slate-700/40 to-transparent" />
        </div>
      )}

      <motion.div
        whileHover={{ y: -6, rotate: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-indigo-500/10"
      >
        <Image
          src="/projectshero.png"
          alt="Projects showcase"
          width={560}
          height={420}
          priority
          className={`w-full h-auto object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setLoaded(true)}
        />

        {/* Decorative glow behind */}
        <div className="absolute -inset-1 -z-10 rounded-2xl bg-linear-to-br from-indigo-500/20 to-purple-500/20 blur-xl opacity-60" />
      </motion.div>
    </motion.div>
  );
};

export default ImageCom;
