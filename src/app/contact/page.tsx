"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
   Mail, MapPin, Calendar,
  User, FileText, Edit3, Send, Lock, Rocket, ArrowRight, Quote,
} from "lucide-react";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const socialIcons = [GiThunderBlade, LiaLinkedin, BsTwitterX, Mail];


export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-24">
     

      {/* Hero */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2"
      >
        <div>
          <motion.div variants={fadeUp} className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-purple-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" /> CONTACT ME
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl font-bold leading-tight md:text-6xl">
            Let&apos;s Work<br />
            <span className="bg-linear-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Together
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-md text-slate-400">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex gap-3">
            {socialIcons.map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition hover:border-purple-500 hover:text-purple-400"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: 1, ease: "easeInOut" }}
            className="flex items-center justify-center rounded-3xl border border-purple-500/30 bg-linear-to-br from-purple-900/40 to-slate-900 shadow-[0_0_60px_-15px_rgba(168,85,247,0.5)] overflow-hidden"
          >
            <Image src="/contact.png" alt="Contact" width={500} height={500} />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Main grid */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-10 lg:grid-cols-5"
      >
        {/* Left column */}
        <motion.div variants={fadeUp} className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900 p-8 lg:col-span-2">
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
        </motion.div>

        {/* Right column - form */}
        <motion.div variants={fadeUp} className="rounded-2xl border border-slate-800 bg-slate-900 p-8 lg:col-span-3">
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

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-purple-600 to-fuchsia-600 py-4 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(168,85,247,0.6)] transition hover:opacity-95"
            >
              <Send className="h-4 w-4" /> Send Message
            </motion.button>
            <p className="flex items-center justify-center gap-2 text-xs text-slate-500">
              <Lock className="h-3 w-3" /> Your information is 100% secure and will never be shared.
            </p>
          </form>
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-6 pb-16"
      >
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-8 md:flex-row">
          <div className="flex items-center gap-5">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-800"
            >
              <Rocket className="h-6 w-6 text-purple-400" />
            </motion.div>
            <div>
              <h3 className="text-lg font-bold">Let&apos;s build something amazing together!</h3>
              <p className="text-sm text-slate-400">I&apos;m excited to hear about your ideas and help bring them to life.</p>
            </div>
          </div>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-lg border border-purple-500 px-6 py-3 text-sm font-semibold text-purple-400 transition hover:bg-purple-500 hover:text-white"
          >
            <ArrowRight className="h-4 w-4" /> View My Projects
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}

function InfoCard({ icon, title, value, sub }: { icon: React.ReactNode; title: string; value: string; sub: string }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 text-white">
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-purple-400">{value}</p>
        <p className="text-xs text-slate-500">{sub}</p>
      </div>
    </motion.div>
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
