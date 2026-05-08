'use client';

import { motion } from 'motion/react';

const StatsCard = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="mb-4 p-1 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-sky-400/60 hover:shadow-[0_25px_50px_-12px_rgba(56,189,248,0.4)] cursor-pointer will-change-transform"
          style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
          whileHover={{
            rotateY: 15,
            rotateX: -10,
            scale: 1.2,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
        >
          {icon}
        </motion.div>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-sm text-slate-400">{label}</p>
      </div>
    </div>
  );
};

export default StatsCard;
