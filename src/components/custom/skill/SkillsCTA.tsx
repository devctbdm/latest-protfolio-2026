'use client';
import { Quote, Sparkles, ArrowRight, Mail, Rocket } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

export function SkillsCTA() {
  return (
    <section className="relative w-full bg-slate-950/20 overflow-hidden py-24">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.08),transparent_60%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        {/* LEFT — quote */}
        <ScrollReveal direction="left">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-purple-300">
            <Sparkles className="h-3.5 w-3.5" />
            Mindset
          </span>

          <div className="relative mt-6">
            <Quote className="absolute -left-2 -top-4 h-10 w-10 text-emerald-400/30" />
            <h2 className="bg-linear-to-b from-white to-slate-400 bg-clip-text text-3xl font-bold leading-snug tracking-tight text-transparent sm:text-4xl md:text-[2.6rem]">
              &quot;The more I learn, the more I realize how much more there is to learn.&quot;
            </h2>
          </div>

          <p className="mt-6 font-mono text-base text-emerald-300">
            &mdash; keep building, keep growing.
          </p>
        </div>
        </ScrollReveal>

        {/* RIGHT — CTA card */}
        <ScrollReveal direction="right" delay={150}>
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-linear-to-br from-slate-900 via-slate-900/80 to-slate-950 p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-500/30">
            <Rocket className="h-6 w-6 text-emerald-400" />
          </div>

          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Let&apos;s build something great together.
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Have an idea, project, or role in mind? I&apos;m always open to collaborate on modern
            web applications.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-emerald-500 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-shadow hover:shadow-emerald-500/40"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-700"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_60%)]" />
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default SkillsCTA;
