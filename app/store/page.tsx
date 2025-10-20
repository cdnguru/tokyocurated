"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    key: "collector",
    title: "Collector",
    prompt: "Which disciplines currently anchor your collection—heritage blades, liquid artistry, studio craft?",
  },
  {
    key: "patron",
    title: "Patron",
    prompt: "Whose appreciation are you honouring? Corporate gratitude, lifetime milestone, cultural patronage?",
  },
  {
    key: "visionary",
    title: "Visionary",
    prompt: "What sensations draw you to Tokyo now—avant-garde jewellery, mechanical precision, archival fashion?",
  },
];

const featuredItems = [
  {
    category: "Heritage Blade • 1947",
    name: "Shōwa Chrysanthemum Katana",
    description:
      "Temple-kept gendaitō with imperial chrysanthemum stamp. Freshly polished by Mukansa master and accompanied by bilingual certification portfolio.",
    price: "¥1,800,000",
    highlights: [
      "Authentication dossier with imperial armoury excerpt",
      "Custom kiri presentation chest by Kyoto Kijiya",
      "White-glove export handling arranged",
    ],
    gradient: "linear-gradient(140deg, rgba(195,164,108,0.65), rgba(10,10,10,0.85))",
  },
  {
    category: "Liquid Rarity • 2021 Release",
    name: "Yamagata Junmai Daiginjō Flight",
    description:
      "Three-bottle vertical of unreleased competition blends, cellared by the tōji and poured only for select matsuri patrons.",
    price: "¥420,000",
    highlights: [
      "Hand-lacquered cedar cradle numbered 03/12",
      "Master brewer tasting with interpreter on request",
      "Insulated courier within Greater Tokyo included",
    ],
    gradient: "linear-gradient(150deg, rgba(80,104,169,0.55), rgba(10,10,10,0.9))",
  },
  {
    category: "Mechanical Icon • 1989",
    name: "Nakamura Prototype Rangefinder",
    description:
      "Domestic-only titanium finish, restored in Ginza with matching prime lens set and original artisan logbook.",
    price: "¥960,000",
    highlights: [
      "Shutter recalibrated April 2024 by master technician",
      "Accompanied by archival silver halide print",
      "Exclusive workshop tour for the acquiring patron",
    ],
    gradient: "linear-gradient(160deg, rgba(102,102,102,0.55), rgba(10,10,10,0.95))",
  },
  {
    category: "Atelier Jewellery • 2024 Capsule",
    name: "Aoyama Auric Form #07",
    description:
      "One-of-one kinetic brooch in hammered 22k gold and urushi lacquer, signed by designer Emi Takada.",
    price: "¥1,120,000",
    highlights: [
      "Accompanied by miniature kintsugi travel reliquary",
      "Private fitting at the atelier for two guests",
      "Inscription available in hiragana or romaji",
    ],
    gradient: "linear-gradient(150deg, rgba(195,164,108,0.75), rgba(66,35,20,0.85))",
  },
];

const ethosPillars = [
  {
    title: "Provenance first",
    description:
      "We negotiate directly with custodians, head monks, brewers, and atelier founders to secure pieces before they ever reach the open market.",
  },
  {
    title: "Custodial respect",
    description:
      "Condition reports, climate requirements, export compliance, and presentation are orchestrated by our team so your acquisition arrives stage-ready.",
  },
  {
    title: "Human discretion",
    description:
      "No public listings or auctions—just tailored conversations, NDAs as needed, and a relationship anchored in trust.",
  },
];

const ritualSteps = [
  {
    title: "1. Discovery",
    copy: "A 20-minute exchange to understand the recipient, story, and investment range.",
  },
  {
    title: "2. Dossier & hold",
    copy: "We assemble provenance files, media, and condition reports, then secure a silent hold for 72 hours.",
  },
  {
    title: "3. Private viewing",
    copy: "In-salon in Tokyo or via live broadcast with macro detail—your choice.",
  },
  {
    title: "4. Acquisition",
    copy: "Settlement, insured logistics, and aftercare introductions managed end-to-end.",
  },
];

const circleBenefits = [
  {
    title: "Founders Circle",
    price: "¥280,000 annual retainer",
    points: [
      "Guaranteed first look on new consignments",
      "Seasonal tastings and studio visits for two",
      "Dedicated concierge for corporate gifting moments",
    ],
  },
  {
    title: "Patron Reserve",
    price: "By invitation",
    points: [
      "Co-curated commissions with master artisans",
      "Private salon evenings with cultural luminaries",
      "Archival storage and maintenance oversight",
    ],
  },
];

const journalEntries = [
  {
    title: "Blade polishing with Mukansa master S. Takahashi",
    summary: "A behind-the-scenes look at restoring our Chrysanthemum katana before release.",
    tag: "Heritage",
  },
  {
    title: "Inside the kura: brewing the 2021 competition daiginjō",
    summary: "How the tōji guards a flight reserved for festival patrons, now available to our members.",
    tag: "Nihonshu",
  },
  {
    title: "Designing kinetic jewellery with Emi Takada",
    summary: "Sketch to lacquered brilliance—an atelier visit captured in stills and audio.",
    tag: "Atelier",
  },
];

function IntakeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [segment, setSegment] = useState<string>("solo");
  const [form, setForm] = useState({
    name: "",
    email: "",
    channel: "",
    timeframe: "",
    interests: "",
    budget: "",
    intentions: "",
  });

  if (!open) return null;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you. Our curator will respond within one business day (Tokyo).\\n\\n— Tokyo Curated Atelier");
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
                  <label className="text-sm" style={{ color: brand.sub }}>
                    Preferred contact channel
                    <input
                      placeholder="WhatsApp, Signal, email, concierge"
                      value={form.channel}
                      onChange={(e) => setForm({ ...form, channel: (e.target as HTMLInputElement).value })}
                      className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                      style={{ borderColor: brand.ring, color: brand.ink }}
                    />
                  </label>
                  <label className="text-sm" style={{ color: brand.sub }}>
                    Desired acquisition window
                    <input
                      placeholder="e.g., within 4 weeks, open to discovery"
                      value={form.timeframe}
                      onChange={(e) => setForm({ ...form, timeframe: (e.target as HTMLInputElement).value })}
                      className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                      style={{ borderColor: brand.ring, color: brand.ink }}
                    />
                  </label>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <label className="text-sm" style={{ color: brand.sub }}>
                  Pieces currently in consideration
                  <textarea
                    rows={4}
                    placeholder="Shōwa blade with imperial seal, limited junmai daiginjō, bespoke jewellery for anniversary..."
                    value={form.interests}
                    onChange={(e) => setForm({ ...form, interests: (e.target as HTMLTextAreaElement).value })}
                    className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                    style={{ borderColor: brand.ring, color: brand.ink }}
                  />
                </label>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="text-sm" style={{ color: brand.sub }}>
                    Investment bandwidth
                    <input
                      placeholder="e.g., ¥500k – ¥2M"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: (e.target as HTMLInputElement).value })}
                      className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                      style={{ borderColor: brand.ring, color: brand.ink }}
                    />
                  </label>
                  <label className="text-sm" style={{ color: brand.sub }}>
                    Intended recipient or narrative
                    <textarea
                      rows={3}
                      placeholder="Corporate heirloom for board chair, personal milestone, curated gifting portfolio..."
                      value={form.intentions}
                      onChange={(e) => setForm({ ...form, intentions: (e.target as HTMLTextAreaElement).value })}
                      className="mt-1 w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                      style={{ borderColor: brand.ring, color: brand.ink }}
                    />
                  </label>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="rounded-2xl p-6 border" style={{ background: brand.card, borderColor: "#1f1f22" }}>
                  <h4 className="text-lg" style={{ color: brand.ink }}>
                    What you can expect
                  </h4>
                  <ul className="mt-3 list-disc pl-5 text-sm" style={{ color: brand.sub }}>
                    <li>Curator dossier within 24 hours highlighting provenance, condition, and custodial notes.</li>
                    <li>Optional live viewing from our Ginza salon or private in-person appointment.</li>
                    <li>Secured payment pathways and insured global logistics, handled discreetly.</li>
                    <li>Post-acquisition stewardship and introductions to allied artisans on request.</li>
                  </ul>
                </div>
                <p className="text-sm" style={{ color: brand.sub }}>
                  Submit to receive a personalised acquisition pathway. We limit weekly engagements to preserve access.
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
                <CTAButton>Arrange consultation</CTAButton>
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
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="#collection" className="hover:text-white">
              Collection
            </a>
            <a href="#ethos" className="hover:text-white">
              Ethos
            </a>
            <a href="#ritual" className="hover:text-white">
              Acquisition
            </a>
            <a href="#circle" className="hover:text-white">
              Circle
            </a>
            <a href="#journal" className="hover:text-white">
              Journal
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
          <CTAButton onClick={() => setOpen(true)}>Request private viewing</CTAButton>
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
            <Badge>Curated Artifacts • Limited Access</Badge>
            <h1 className="mt-6 text-5xl md:text-6xl leading-tight">Tokyo Curated Atelier.</h1>
            <p className="mt-4 text-lg" style={{ color: brand.sub }}>
              A private gallery of irreplaceable Japanese craft: imperial-history blades, competition nihonshu, atelier jewellery and mechanical icons—sourced directly by our curatorial team.
            </p>
            <p className="mt-3 text-base" style={{ color: brand.sub }}>
              Each acquisition begins with conversation. We orchestrate provenance, authentication, logistics, and presentation so your gesture feels effortless yet unforgettable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton onClick={() => setOpen(true)}>Request a private viewing</CTAButton>
              <a
                href="#collection"
                className="rounded-full border px-6 py-3 text-sm"
                style={{ borderColor: brand.ring, color: brand.ink }}
              >
                Explore the collection
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm" style={{ color: brand.sub }}>
              <div>
                <div className="text-2xl" style={{ color: brand.ink }}>
                  ¥1M+
                </div>
                Typical piece valuation
              </div>
              <div>
                <div className="text-2xl" style={{ color: brand.ink }}>
                  12
                </div>
                Artisans on active retainer
              </div>
              <div>
                <div className="text-2xl" style={{ color: brand.ink }}>
                  72h
                </div>
                Hold window once reserved
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border"
              style={{ borderColor: brand.ring, background: "linear-gradient(180deg,#151515,#0c0c0c)" }}
            >
              <Image
                src="https://gvwwl4nhmibwxszy.public.blob.vercel-storage.com/assets/placeholder.png"
                alt="Tokyo skyline placeholder"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-xs" style={{ color: brand.sub }}>
              Imagery here: night‑drive Ginza, quiet gardens, artisanal counters. (We can swap in your
              photographers’ work.)
            </p>
          </div>
        </div>
      </section>

      <Section
        id="collection"
        title="Featured artifacts"
        subtitle="Each release is sourced exclusively for Tokyo Curated members. Availability is intentionally limited; holds are extended only after consultation."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {featuredItems.map((item) => (
            <div
              key={item.name}
              className="flex h-full flex-col gap-5 rounded-3xl border p-6"
              style={{ background: brand.card, borderColor: "#1f1f22" }}
            >
              <div
                className="relative h-48 overflow-hidden rounded-2xl border"
                style={{ borderColor: brand.ring, background: "rgba(14,14,16,0.9)" }}
              >
                <div className="absolute inset-0" style={{ background: item.gradient }} />
                <div
                  className="absolute inset-x-5 bottom-5 text-xs font-semibold uppercase tracking-[0.28em]"
                  style={{ color: brand.ink }}
                >
                  {item.category}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl" style={{ color: brand.ink }}>{item.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: brand.sub }}>{item.description}</p>
                <ul className="space-y-2 text-sm" style={{ color: brand.sub }}>
                  {item.highlights.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-xs uppercase tracking-[0.3em]" style={{ color: brand.accent }}>{item.price}</span>
                <button
                  onClick={() => setOpen(true)}
                  className="rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em]"
                  style={{ borderColor: brand.ring, color: brand.ink }}
                >
                  Request dossier
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="ethos"
        title="Curatorial ethos"
        subtitle="Our approach balances reverence for craft with the needs of modern gifting and collecting."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {ethosPillars.map((pillar) => (
            <Card key={pillar.title}>
              <h3 className="text-xl" style={{ color: brand.ink }}>{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: brand.sub }}>{pillar.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="ritual"
        title="Acquisition ritual"
        subtitle="Clarity at every stage, whether you are gifting, expanding a collection, or honouring a milestone."
      >
        <div className="grid gap-6 md:grid-cols-4">
          {ritualSteps.map((step) => (
            <Card key={step.title}>
              <h4 className="text-lg" style={{ color: brand.ink }}>{step.title}</h4>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: brand.sub }}>{step.copy}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="circle"
        title="Collectors circle"
        subtitle="Membership extends access, storytelling support, and continuing stewardship."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {circleBenefits.map((tier) => (
            <div
              key={tier.title}
              className="flex h-full flex-col justify-between gap-4 rounded-3xl border p-6"
              style={{ background: brand.card, borderColor: "#1f1f22" }}
            >
              <div>
                <h3 className="text-2xl" style={{ color: brand.ink }}>{tier.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em]" style={{ color: brand.accent }}>{tier.price}</p>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: brand.sub }}>
                  {tier.points.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <CTAButton onClick={() => setOpen(true)}>Join waitlist</CTAButton>
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-8 rounded-2xl border p-6 text-sm md:flex md:items-center md:justify-between"
          style={{ borderColor: brand.ring, background: brand.card }}
        >
          <p style={{ color: brand.sub }}>Corporate curations and limited seasonal projects are accepted on a case-by-case basis.</p>
          <button
            onClick={() => setOpen(true)}
            className="mt-4 inline-flex rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] md:mt-0"
            style={{ borderColor: brand.ring, color: brand.ink }}
          >
            Schedule a briefing
          </button>
        </div>
      </Section>

      <Section
        id="journal"
        title="Journal"
        subtitle="Glimpses into the craftsmen, cellars, and studios that inform our selections."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {journalEntries.map((entry) => (
            <div
              key={entry.title}
              className="rounded-3xl border p-6"
              style={{ background: brand.card, borderColor: "#1f1f22" }}
            >
              <Badge>{entry.tag}</Badge>
              <h4 className="mt-4 text-lg" style={{ color: brand.ink }}>{entry.title}</h4>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: brand.sub }}>{entry.summary}</p>
              <button
                onClick={() => setOpen(true)}
                className="mt-5 text-xs uppercase tracking-[0.24em]"
                style={{ color: brand.accent }}
              >
                Request full story
              </button>
            </div>
          ))}
        </div>
      </Section>
      <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: brand.ink }}>
            Arrange a private consultation
          </h2>
          <p className="mt-3 text-base" style={{ color: brand.sub }}>
            Share a few details about the intention behind your acquisition. We reply within 24 hours (Tokyo).
          </p>
        </div>
        <div className="rounded-2xl p-6 border" style={{ background: brand.card, borderColor: "#1f1f22" }}>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xl" style={{ color: brand.ink }}>
                Discretion-first human guidance
              </h4>
              <p className="mt-2 text-sm" style={{ color: brand.sub }}>
                Outline the story, recipient, or celebration. We will curate a shortlist, handle authentication, and choreograph presentation that honours the gesture.
              </p>
              <div className="mt-6">
                <CTAButton onClick={() => setOpen(true)}>Open request form</CTAButton>
              </div>
              <p className="mt-6 text-xs" style={{ color: brand.sub }}>
                Prefer email? Write to <span style={{ color: brand.ink }}>atelier@tokyocurated.com</span>
              </p>
            </div>
            <div>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="Name"
                    className="rounded-xl border bg-transparent px-3 py-2 outline-none"
                    style={{ borderColor: brand.ring, color: brand.ink }}
                  />
                  <input
                    placeholder="Email"
                    type="email"
                    className="rounded-xl border bg-transparent px-3 py-2 outline-none"
                    style={{ borderColor: brand.ring, color: brand.ink }}
                  />
                </div>
                <input
                  placeholder="Desired acquisition window"
                  className="w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                  style={{ borderColor: brand.ring, color: brand.ink }}
                />
                <textarea
                  rows={4}
                  placeholder="Pieces or disciplines in mind, recipient, presentation ideas..."
                  className="w-full rounded-xl border bg-transparent px-3 py-2 outline-none"
                  style={{ borderColor: brand.ring, color: brand.ink }}
                />
                <div className="pt-2">
                  <CTAButton>Request consultation</CTAButton>
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
            © {new Date().getFullYear()} Tokyo Curated. Bespoke acquisitions and cultural artifacts from Japan.
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
