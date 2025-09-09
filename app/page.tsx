"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const brand = {
  bg: "#0a0a0a",
  card: "#111113",
  ink: "#EAEAEA",
  sub: "#A1A1AA",
  accent: "#c3a46c",
  accentSoft: "rgba(195,164,108,0.15)",
  ring: "rgba(195,164,108,0.35)",
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs tracking-widest uppercase"
      style={{
        borderColor: brand.accent,
        color: brand.accent,
        background: brand.accentSoft,
        letterSpacing: "0.16em",
      }}
    >
      {children}
    </span>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-20">
      {title && (
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: brand.ink }}>
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base" style={{ color: brand.sub }}>
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-6 border" style={{ background: brand.card, borderColor: "#1f1f22" }}>
      {children}
    </div>
  );
}

function CTAButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="cta-gold relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium"
      style={{ color: brand.ink }}
    >
      <span>{children}</span>
    </button>
  );
}

const segments = [
  {
    key: "solo",
    title: "Solo Traveler",
    prompt: "Tell us what energises you in Tokyo—food bars, architecture, art, artisan retail?",
  },
  {
    key: "couple",
    title: "Couple",
    prompt: "What does a perfect day together look like—quiet luxury, hidden omakase, private drives?",
  },
  {
    key: "family",
    title: "Small Family",
    prompt: "Ages & energy levels? Stroller logistics? Any must‑sees we should streamline?",
  },
];

function IntakeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [segment, setSegment] = useState<string>("solo");
  const [form, setForm] = useState({
    name: "",
    email: "",
    dates: "",
    preferences: "",
    musts: "",
  });

  if (!open) return null;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you. We will reach out within 24 hours (Tokyo).\\n\\n— Tokyo Curated");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" style={{ background: "rgba(0,0,0,0.6)" }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl overflow-hidden rounded-2xl border"
        style={{ background: brand.card, borderColor: brand.ring }}
      >
        <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: `1px solid ${brand.ring}` }}>
          <div className="flex items-center gap-3">
            <Badge>Human Intelligence</Badge>
            <span className="text-sm" style={{ color: brand.sub }}>
              Zero packages. 100% bespoke.
            </span>
          </div>
          <button className="text-sm" onClick={onClose} style={{ color: brand.sub }}>
            Close
          </button>
        </div>

        <div className="px-6 pb-6 pt-4">
          <div className="mb-6 flex gap-2">
            {segments.map((s) => (
              <button
                key={s.key}
                onClick={() => setSegment(s.key)}
                className={`rounded-full border px-4 py-2 text-sm ${segment === s.key ? "opacity-100" : "opacity-60"}`}
                style={{ borderColor: brand.accent, color: brand.ink }}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm" style={{ color: brand.sub }}>
              Step {step + 1} of 3
            </p>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-1 w-10 rounded" style={{ background: i <= step ? brand.accent : "#2a2a2e" }} />
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="mt-4 space-y-5">
            {step === 0 && (
              <div className="space-y-4">
                <p className="text-base" style={{ color: brand.ink }}>
                  {segments.find((s) => s.key === segment)?.prompt}
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="text-sm" style={{ color: brand.sub }}>
                    Name
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: (e.target as HTMLInputElement).value })}
                      className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                      style={{ borderColor: brand.ring, color: brand.ink }}
                    />
                  </label>
                  <label className="text-sm" style={{ color: brand.sub }}>
                    Email
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: (e.target as HTMLInputElement).value })}
                      className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                      style={{ borderColor: brand.ring, color: brand.ink }}
                    />
                  </label>
                </div>
                <label className="text-sm" style={{ color: brand.sub }}>
                  Travel window (approx.)
                  <input
                    placeholder="e.g., 14–18 Nov, flexible"
                    value={form.dates}
                    onChange={(e) => setForm({ ...form, dates: (e.target as HTMLInputElement).value })}
                    className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                    style={{ borderColor: brand.ring, color: brand.ink }}
                  />
                </label>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <label className="text-sm" style={{ color: brand.sub }}>
                  Your pace & focus
                  <textarea
                    rows={4}
                    placeholder="Effortless movement, chauffeured transfers, curated dining, contemporary art, golf, rare vinyl..."
                    value={form.preferences}
                    onChange={(e) => setForm({ ...form, preferences: (e.target as HTMLTextAreaElement).value })}
                    className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                    style={{ borderColor: brand.ring, color: brand.ink }}
                  />
                </label>
                <label className="text-sm" style={{ color: brand.sub }}>
                  Non‑negotiables / must‑haves
                  <input
                    placeholder="2 seatings at small sushi-ya, quiet room, no queues, rooftop whiskey…"
                    value={form.musts}
                    onChange={(e) => setForm({ ...form, musts: (e.target as HTMLInputElement).value })}
                    className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                    style={{ borderColor: brand.ring, color: brand.ink }}
                  />
                </label>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="rounded-2xl p-6 border" style={{ background: brand.card, borderColor: "#1f1f22" }}>
                  <h4 className="text-lg" style={{ color: brand.ink }}>
                    What you can expect
                  </h4>
                  <ul className="mt-3 list-disc pl-5 text-sm" style={{ color: brand.sub }}>
                    <li>{'“50% more in 50% less time” — efficient, unhurried days.'}</li>
		    <li>Door‑to‑door logistics with private driving concierge.</li>
                    <li>Dining & culture aligned to your taste, not lists.</li>
                    <li>Clear daily brief via WhatsApp/iMessage; zero guesswork.</li>
                  </ul>
                </div>
                <p className="text-sm" style={{ color: brand.sub }}>
                  Submit to request a complimentary 20‑minute fit call. We only accept a small number of clients per week.
                </p>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep(Math.max(0, step - 1))}
                className="text-sm"
                style={{ color: step > 0 ? brand.ink : brand.sub }}
                disabled={step === 0}
              >
                Back
              </button>
              {step < 2 ? (
                <CTAButton onClick={() => setStep(step + 1)}>Next</CTAButton>
              ) : (
                <CTAButton>Request fit call</CTAButton>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: brand.bg,
        color: brand.ink,
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Helvetica, Arial",
      }}
    >
      <header
        className="sticky top-0 z-40 border-b backdrop-blur"
        style={{ background: "rgba(10,10,10,0.65)", borderColor: "#1a1a1d" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full" style={{ background: brand.accent }} />
            <span className="tracking-widest" style={{ letterSpacing: "0.22em" }}>
              TOKYO CURATED
            </span>
          </div>
          <nav className="hidden gap-6 md:flex text-sm" style={{ color: brand.sub }}>
            <a href="#manifesto" className="hover:text-white">
              Manifesto
            </a>
            <a href="#concierge" className="hover:text-white">
              Concierge
            </a>
            <a href="#process" className="hover:text-white">
              Process
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
          <CTAButton onClick={() => setOpen(true)}>Start your brief</CTAButton>
        </div>
      </header>

      <section className="relative">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1200px 500px at 50% -10%, rgba(195,164,108,0.08), transparent)",
          }}
        />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-7">
            <Badge>Human Intelligence • Bespoke</Badge>
            <h1 className="mt-6 text-5xl md:text-6xl leading-tight">Tokyo, without the drain.</h1>
            <p className="mt-4 text-lg" style={{ color: brand.sub }}>
              For discerning travelers who value time over friction. We design days that feel
              effortless—private driving concierge, secured reservations, and a cadence that fits
              your rhythm.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton onClick={() => setOpen(true)}>Tell us your brief</CTAButton>
              <button className="rounded-full border px-6 py-3 text-sm" style={{ borderColor: brand.ring, color: brand.ink }}>
                See how it works
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm" style={{ color: brand.sub }}>
              <div>
                <div className="text-2xl" style={{ color: brand.ink }}>
                  50% more
                </div>
                Curated in 50% less time
              </div>
              <div>
                <div className="text-2xl" style={{ color: brand.ink }}>
                  0 queues
                </div>
                Quiet luxury, no chaos
              </div>
              <div>
                <div className="text-2xl" style={{ color: brand.ink }}>
                  1:1
                </div>
                Dedicated human team
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div
              className="aspect-[4/5] w-full overflow-hidden rounded-3xl border"
              style={{ borderColor: brand.ring, background: "linear-gradient(180deg,#151515,#0c0c0c)" }}
            >
              <div
                className="h-full w-full"
                style={{
                  background:
                    "radial-gradient(800px 300px at 60% 20%, rgba(195,164,108,0.12), transparent)",
                }}
              />
            </div>
            <p className="mt-3 text-xs" style={{ color: brand.sub }}>
              Imagery here: night‑drive Ginza, quiet gardens, artisanal counters. (We can swap in your
              photographers’ work.)
            </p>
          </div>
        </div>
      </section>

      <section id="manifesto" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: brand.ink }}>
            Our Manifesto
          </h2>
          <p className="mt-3 text-base" style={{ color: brand.sub }}>
            No AI itineraries. No generic lists. Just seasoned judgment and meticulous groundwork.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { h: "Time is the only luxury", p: "We compress planning and movement so you spend time experiencing—not navigating." },
            { h: "Human over algorithm", p: "We listen, infer, and curate. Your taste—not a template—drives decisions." },
            { h: "Calm cadence", p: "Days breathe. We protect your energy with considered pacing and door‑to‑door logistics." },
          ].map((it, i) => (
            <div key={i} className="rounded-2xl p-6 border" style={{ background: brand.card, borderColor: "#1f1f22" }}>
              <h3 className="text-xl" style={{ color: brand.ink }}>
                {it.h}
              </h3>
              <p className="mt-2 text-sm" style={{ color: brand.sub }}>
                {it.p}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="concierge" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: brand.ink }}>
            Concierge
          </h2>
          <p className="mt-3 text-base" style={{ color: brand.sub }}>
            We accept a limited number of clients per week to preserve quality.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Solo", b: ["Precision logistics", "Chef’s counter access", "Artisanal retail mapping", "Quiet lounges"] },
            { t: "Couple", b: ["Private drives", "Intimate dining", "Hidden gardens & tea", "Sunset rooftops"] },
            { t: "Family", b: ["Door‑to‑door days", "Stroller‑smart routes", "Kid‑friendly gems", "Flexible pacing"] },
          ].map((card, i) => (
            <div key={i} className="rounded-2xl p-6 border" style={{ background: brand.card, borderColor: "#1f1f22" }}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl" style={{ color: brand.ink }}>
                  {card.t}
                </h3>
                <span className="text-xs" style={{ color: brand.sub }}>
                  from ¥ — on request
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: brand.sub }}>
                {card.b.map((x, ix) => (
                  <li key={ix}>• {x}</li>
                ))}
              </ul>
              <div className="mt-5">
                <CTAButton onClick={() => setOpen(true)}>Request brief</CTAButton>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm" style={{ color: brand.sub }}>
          Pricing is bespoke per itinerary. No affiliates. We work solely for you.
        </p>
      </section>

      <section id="process" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: brand.ink }}>
            How it works
          </h2>
          <p className="mt-3 text-base" style={{ color: brand.sub }}>
            A clear path, zero friction.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { h: "1. Fit Call", p: "A short conversation to align on taste, pace, and constraints." },
            { h: "2. Bespoke Plan", p: "We draft your days, holds on key reservations, and logistics." },
            { h: "3. Confirmation", p: "You approve; we secure bookings and finalize drivers & timing." },
            { h: "4. In‑Stay Care", p: "Live adjustments, message‑first support, and proactive recovery." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl p-6 border" style={{ background: brand.card, borderColor: "#1f1f22" }}>
              <h4 className="text-lg" style={{ color: brand.ink }}>
                {s.h}
              </h4>
              <p className="mt-2 text-sm" style={{ color: brand.sub }}>
                {s.p}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: brand.ink }}>
            Begin your brief
          </h2>
          <p className="mt-3 text-base" style={{ color: brand.sub }}>
            We typically respond within 24 hours (Tokyo).
          </p>
        </div>
        <div className="rounded-2xl p-6 border" style={{ background: brand.card, borderColor: "#1f1f22" }}>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl" style={{ color: brand.ink }}>
                A human team, on your wavelength
              </h4>
              <p className="mt-2 text-sm" style={{ color: brand.sub }}>
                Tell us roughly when you’re visiting and what matters most. We’ll advise whether we’re the right
                partner—and if so, outline a path that protects your time and energy.
              </p>
              <div className="mt-6">
                <CTAButton onClick={() => setOpen(true)}>Open intake</CTAButton>
              </div>
              <p className="mt-6 text-xs" style={{ color: brand.sub }}>
                Prefer email? Write to <span style={{ color: brand.ink }}>hi@tokyocurated.com</span>
              </p>
            </div>
            <div>
              <form className="space-y-3" onSubmit={(e)=>e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="Name"
                    className="rounded-xl border bg-transparent px-3 py-2 outline-none"
                    style={{ borderColor: brand.ring }}
                  />
                  <input
                    placeholder="Email"
                    type="email"
                    className="rounded-xl border bg-transparent px-3 py-2 outline-none"
                    style={{ borderColor: brand.ring }}
                  />
                </div>
                <input
                  placeholder="Approx. dates"
                  className="w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                  style={{ borderColor: brand.ring }}
                />
                <textarea
                  rows={4}
                  placeholder="Interests, constraints, must‑dos…"
                  className="w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                  style={{ borderColor: brand.ring }}
                />
                <div className="pt-2">
                  <CTAButton>Request fit call</CTAButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t" style={{ borderColor: "#1a1a1d" }}>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full" style={{ background: brand.accent }} />
            <span className="text-sm tracking-widest" style={{ letterSpacing: "0.22em", color: brand.sub }}>
              TOKYO CURATED
            </span>
          </div>
          <div className="text-xs" style={{ color: brand.sub }}>
            © {new Date().getFullYear()} Tokyo Curated. Bespoke, human‑led experiences in Tokyo.
          </div>
          <div className="text-xs" style={{ color: brand.sub }}>
            Privacy • Terms • Imprint
          </div>
        </div>
      </footer>

      <IntakeModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
