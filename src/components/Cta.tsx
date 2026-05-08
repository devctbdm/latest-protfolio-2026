import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Mail } from 'lucide-react';

function CTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-indigo-500 to-purple-600 shadow-2xl"
      >
        {/* Decorative blurred orbs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-10 h-80 w-80 rounded-full bg-purple-400/30 blur-3xl" />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6 md:p-8">
          {/* Left: text content */}
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Available for new projects
            </span>

            <h2 className="mt-3 text-2xl md:text-3xl font-bold leading-tight">
              Let&apos;s build something <span className="italic">amazing</span> together
            </h2>

            <p className="mt-2 text-sm text-white/80 max-w-md">
              Open for collaboration and projects.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button className="group inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-black/80 hover:scale-[1.02]">
                Contact me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20">
                View work
              </button>
            </div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative flex h-40 md:h-60 w-full items-center justify-center overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
              <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent" />
              <Mail
                className="relative h-24 w-24 md:h-32 md:w-32 text-white drop-shadow-lg"
                strokeWidth={1.5}
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 hidden md:flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
                <Sparkles className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">Let&apos;s collaborate</p>
                <p className="text-xs text-gray-500">Reply within 24h</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;
