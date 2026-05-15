'use client';

import Logo from './Logo';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Hide navbar on dashboard routes
  if (pathname.startsWith('/dashboard')) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const activeIndex = navLinks.findIndex(
    (link) => link.href === pathname || (pathname.startsWith(link.href) && link.href !== '/'),
  );

  const indicatorIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <>
      <motion.nav
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-background/70 border-b border-border shadow-lg shadow-black/5'
            : 'backdrop-blur-md bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Logo text="Dev-CT" />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {indicatorIndex === index && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full bg-primary shadow-lg shadow-primary/30"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <motion.span
                  className="relative z-10 text-sm font-medium transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  style={{
                    color:
                      indicatorIndex === index
                        ? 'var(--primary-foreground)'
                        : 'var(--muted-foreground)',
                  }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="block w-full h-0.5 bg-foreground origin-center"
              />
              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                  scaleX: isOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="block w-full h-0.5 bg-foreground"
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="block w-full h-0.5 bg-foreground origin-center"
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu with 3D Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* 3D Container */}
            <div className="relative z-10 w-full px-8" style={{ perspective: 1000 }}>
              <motion.div
                className="flex flex-col items-center gap-6"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {navLinks.map((link, index) => {
                  const isActive =
                    link.href === pathname || (pathname.startsWith(link.href) && link.href !== '/');
                  return (
                    <motion.div
                      key={link.name}
                      initial={{
                        opacity: 0,
                        rotateX: -75,
                        translateY: 40,
                        translateZ: -100,
                      }}
                      animate={{
                        opacity: 1,
                        rotateX: 0,
                        translateY: 0,
                        translateZ: 0,
                      }}
                      exit={{
                        opacity: 0,
                        rotateX: 45,
                        translateY: -20,
                        translateZ: -80,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`relative block text-4xl font-bold tracking-tight transition-colors duration-300 ${
                          isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <motion.span
                          className="relative inline-block"
                          whileHover={{
                            scale: 1.1,
                            rotateY: 10,
                            translateZ: 30,
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                          }}
                          style={{ transformStyle: 'preserve-3d' }}
                        >
                          {link.name}
                          {isActive && (
                            <motion.span
                              layoutId="mobile-active-indicator"
                              className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full shadow-lg shadow-primary/50"
                              transition={{
                                type: 'spring',
                                stiffness: 350,
                                damping: 30,
                              }}
                            />
                          )}
                        </motion.span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
