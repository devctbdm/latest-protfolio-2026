'use client';

import { User, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

export function AboutHero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24 mt-10">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left: intro text */}
        <ScrollReveal direction="up">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-border bg-purple-400/20 px-3 py-1 text-xs font-medium text-muted-foreground">
            About me
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            I&apos;m <span className="text-primary">Minarul</span>, a Full Stack Developer
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I love building scalable web applications and solving real-world problems with clean and
            efficient code.
          </p>
        </div>
        </ScrollReveal>

        {/* Right: info card + image */}
        <div className="relative lg:pr-32 xl:pr-40">
          <ScrollReveal direction="up" delay={100}>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-linear-to-br from-primary/10 via-accent/10 to-secondary/20 shadow-sm">
            <div className="aspect-4/3 w-full">
              <img
                src="/ceo.jpg"
                alt="Portrait of Minarul, Full Stack Developer"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
          <div className="mt-6 rounded-2xl border border-border bg-slate-950 p-5 shadow-lg lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-60 lg:-translate-y-1/2 xl:w-60">
            <div className="grid gap-4">
              <InfoRow icon={<User className="h-4 w-4" />} label="Name" value="Minarul Islam" />
              <InfoRow
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value="Dhaka, Bangladesh"
              />
              <InfoRow
                icon={<Briefcase className="h-4 w-4" />}
                label="Experience"
                value="4+ Years"
              />
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground">Availability</p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                    </span>
                    <span className="text-sm font-semibold text-foreground">Open to work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <p className="mt-0.5 truncate text-sm font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
}
