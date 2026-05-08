'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { socialData } from '@/data';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-border/50 overflow-hidden bg-slate-950">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent" />

      <motion.div
        className="max-w-6xl mx-auto px-6 py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Logo text="Dev-CT" />
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Building modern web experiences with clean code.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {socialData.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{}}
                transition={{
                  delay: 0.3 + index * 0.06,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="relative group"
                >
                  <motion.div
                    className="w-10 h-10 rounded-xl border border-border/60 flex items-center justify-center backdrop-blur-sm bg-slate-950 transition-colors duration-300 hover:bg-indigo-500/10 hover:border-indigo-500/40"
                    whileHover={{
                      scale: 1.15,
                      y: -4,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 },
                    }}
                    whileTap={{
                      scale: 0.9,
                      transition: { type: 'spring', stiffness: 300, damping: 15 },
                    }}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-indigo-400 transition-colors duration-300" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Dev-CT. All rights reserved.
          </p>
          <motion.p
            className="text-xs text-muted-foreground flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.5 }}
              className="text-red-500 inline-block"
            >
              &hearts;
            </motion.span>
            by Minarul
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
