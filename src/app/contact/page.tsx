"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
   Mail, MapPin, Calendar,
  User, FileText, Edit3, Send, Lock, Rocket, ArrowRight, Quote,
} from "lucide-react";

import { LiaLinkedin } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

const socialIcons = [FaGithub, LiaLinkedin, BsTwitterX, Mail];


export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-24">
     

      {/* Hero */}
      <section
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2"
      >
        <ScrollReveal direction="up">
        <div>
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-purple-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" /> CONTACT ME
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Let&apos;s Work<br />
            <span className="bg-linear-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          <p className="mt-6 max-w-md text-slate-400">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <div className="mt-8 flex gap-3">
            {socialIcons.map((Icon, i) => (
  <a
    key={i}
    href="#"
    className="
      group relative flex h-12 w-12 items-center justify-center
      rounded-xl border border-slate-800 bg-slate-900
      text-slate-300 shadow-lg
      transition-all duration-300 ease-out
      hover:-translate-y-1.5 hover:scale-105 hover:rotate-1
      hover:border-purple-500 hover:bg-slate-800
      hover:text-purple-400 hover:shadow-purple-500/20
      active:scale-95
    "
  >
    {/* Glow Effect */}
    <span
      className="
        absolute inset-0 rounded-xl opacity-0 blur-xl
        transition-opacity duration-300
        group-hover:opacity-100
        bg-purple-500/20
      "
    />

    {/* Icon */}
    <div className="relative z-10 transition-transform duration-200 group-hover:scale-110">
      <Icon className="h-5 w-5" />
    </div>
  </a>
))}
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={150} className="w-full">
        <div className="flex justify-center w-full">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center rounded-3xl border border-purple-500/30 bg-linear-to-br from-purple-900/40 to-slate-900 shadow-[0_0_60px_-15px_rgba(168,85,247,0.5)] overflow-hidden">
            <Image src="/contact.png" alt="Contact" fill style={{ objectFit: 'cover' }} sizes="(min-width: 768px) 50vw, 100vw" loading="eager" priority />
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Main grid */}
      <section
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-10 lg:grid-cols-5"
      >
        {/* Left column */}
        <ScrollReveal direction="up" className="lg:col-span-2">
        <div className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div>
            <h2 className="text-xl font-bold">Let&apos;s Connect</h2>
            <div className="mt-2 h-0.5 w-12 bg-purple-500" />
          </div>
          <p className="text-sm text-slate-400">
            Feel free to reach out through any of these platforms. I&apos;ll get back to you as soon as possible.
          </p>

          <InfoCard icon={<Mail className="h-5 w-5" />} title="Email" value="minarul.dev@gmail.com" sub="I reply within 24 hours" />
          <InfoCard icon={<MapPin className="h-5 w-5" />} title="Location" value="Dhaka, Bangladesh" sub="Available for remote work" />
          <InfoCard icon={<Calendar className="h-5 w-5" />} title="Availability" value="Open for new projects" sub="Full-time / Freelance" />

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5">
            <div className="flex gap-3">
              <Quote className="h-7 w-7 shrink-0 text-purple-400" />
              <div>
                <p className="text-sm font-medium">The best way to predict the future is to create it.</p>
                <p className="mt-2 text-sm text-purple-400">– Peter Drucker</p>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Right column - form */}
        <ScrollReveal direction="up" delay={150} className="lg:col-span-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <div>
            <h2 className="text-xl font-bold">Send a Message</h2>
            <div className="mt-2 h-0.5 w-12 bg-purple-500" />
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Have a project in mind or just want to say hello?<br />
            Fill out the form and I&apos;ll get back to you.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-5">
            <Field label="Your Name" icon={<User className="h-4 w-4" />} placeholder="Enter your name"
              value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Field label="Your Email" icon={<Mail className="h-4 w-4" />} type="email" placeholder="Enter your email"
              value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <Field label="Subject" icon={<FileText className="h-4 w-4" />} placeholder="What's this about?"
              value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />

            <div>
              <label className="mb-2 block text-sm">Your Message</label>
              <div className="flex gap-3 rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 transition-colors focus-within:border-purple-500">
                <Edit3 className="mt-1 h-4 w-4 text-slate-500" />
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-purple-600 to-fuchsia-600 py-4 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(168,85,247,0.6)] transition hover:opacity-95 active:scale-[0.98]"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
            <p className="flex items-center justify-center gap-2 text-xs text-slate-500">
              <Lock className="h-3 w-3" /> Your information is 100% secure and will never be shared.
            </p>
          </form>
        </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <ScrollReveal direction="up">
      <section
        className="mx-auto max-w-6xl px-6 pb-16"
      >
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-8 md:flex-row">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800">
              <Rocket className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Let&apos;s build something amazing together!</h3>
              <p className="text-sm text-slate-400">I&apos;m excited to hear about your ideas and help bring them to life.</p>
            </div>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg border border-purple-500 px-6 py-3 text-sm font-semibold text-purple-400 transition hover:bg-purple-500 hover:text-white active:scale-95"
          >
            <ArrowRight className="h-4 w-4" /> View My Projects
          </a>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}

function InfoCard({ icon, title, value, sub }: { icon: React.ReactNode; title: string; value: string; sub: string }) {
  return (
    <div
      className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4 transition-all hover:translate-x-1"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white">
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-purple-400">{value}</p>
        <p className="text-xs text-slate-500">{sub}</p>
      </div>
    </div>
  );
}

function Field({ label, icon, placeholder, value, onChange, type = "text" }: {
  label: string; icon: React.ReactNode; placeholder: string;
  value: string; onChange: (v: string) => void; type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm">{label}</label>
      <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 transition-colors focus-within:border-purple-500">
        <span className="text-slate-500">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
        />
      </div>
    </div>
  );
}
