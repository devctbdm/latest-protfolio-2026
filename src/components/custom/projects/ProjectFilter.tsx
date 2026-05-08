'use client';

import { motion } from 'motion/react';

export type FilterTab = 'All' | 'Web Apps' | 'Ecommerce' | 'Chat' | 'Blog' | 'Featured';

const tabs: FilterTab[] = ['All', 'Web Apps', 'Ecommerce', 'Chat', 'Blog', 'Featured'];

interface FiltersProps {
  active: FilterTab;
  onChange: (tab: FilterTab) => void;
}

function Filters({ active, onChange }: FiltersProps) {
  return (
    <motion.section
      className="flex flex-wrap gap-3"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
    >
      {tabs.map((t, i) => (
        <motion.button
          key={t}
          onClick={() => onChange(t)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}}
          className={`px-5 py-2.5 rounded-lg border text-sm font-medium cursor-pointer transition-colors duration-200 ${
            active === t
              ? 'bg-indigo-600 border-indigo-500/60 text-white shadow-lg shadow-indigo-500/25'
              : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
          }`}
        >
          {t}
        </motion.button>
      ))}
    </motion.section>
  );
}

export default Filters;
