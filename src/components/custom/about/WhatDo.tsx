'use client';

import { Layers, Lightbulb, Palette, GraduationCap } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

type Skill = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};
type Tech = {
  name: string;
  initial: string;
};
const skills: Skill[] = [
  {
    icon: Layers,
    title: 'Full Stack Dev',
    description: 'End-to-end web apps — from polished UI to robust APIs.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Breaking complex problems into clean, scalable solutions.',
  },
  {
    icon: Palette,
    title: 'UI/UX Focused',
    description: 'Pixel-perfect interfaces with thoughtful user experience.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Always exploring new tools, patterns and best practices.',
  },
];
const stack: Tech[] = [
  { name: 'Next.js', initial: 'N' },
  { name: 'React', initial: 'R' },
  { name: 'Node.js', initial: 'N' },
  { name: 'TypeScript', initial: 'TS' },
  { name: 'MongoDB', initial: 'M' },
  { name: 'Tailwind CSS', initial: 'T' },
  { name: 'Git', initial: 'G' },
  { name: 'Sanity', initial: 'S' },
];

export function WhatIDo() {
  return (
    <section className="relative w-full py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal direction="up">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            What I Do
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Skills & tech I work with
          </h2>
        </div>
        </ScrollReveal>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT — Skills */}
          <div>
            <ScrollReveal direction="up">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Skills
            </h3>
            </ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((s, index) => {
                const Icon = s.icon;
                return (
                  <ScrollReveal key={s.title} direction="up" delay={index * 100}>
                  <div
                    className="group rounded-2xl border border-border bg-slate-950 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-semibold text-card-foreground">{s.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
          {/* RIGHT — Tech Stack */}
          <div>
            <ScrollReveal direction="up">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Tech Stack
            </h3>
            </ScrollReveal>
            <div className="rounded-2xl border border-border bg-slate-950 p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {stack.map((t, index) => (
                  <ScrollReveal key={t.name} direction="up" delay={index * 80}>
                  <div
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-slate-950 px-3 py-2.5 transition-colors hover:border-primary/40 hover:bg-slate-900"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-primary to-primary/60 text-xs font-bold text-primary-foreground">
                      {t.initial}
                    </div>
                    <span className="text-sm font-medium text-card-foreground">{t.name}</span>
                  </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhatIDo;
