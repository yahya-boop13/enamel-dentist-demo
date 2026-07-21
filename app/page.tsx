import type { CSSProperties } from "react";

/* ---------- small helpers ---------- */

function delay(ms: number): CSSProperties {
  return { animationDelay: `${ms}ms` };
}

const NAV = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#contact" },
];

const SERVICES = [
  {
    title: "Checkups & Cleanings",
    price: "New patients from $89",
    body: "Gentle exams, digital X-rays, and unhurried hygienist cleanings that keep your smile simple to maintain.",
    icon: (
      <path d="M12 3.5c-2 0-2.8 1.2-4.2 1.2C6 4.7 4.5 5.9 4.5 8.3c0 2.2.9 4.4 1.7 6.6.6 1.7 1 4 2.3 4 1.1 0 1-1.8 1.7-3.4.3-.7.7-1.1 1.8-1.1s1.5.4 1.8 1.1c.7 1.6.6 3.4 1.7 3.4 1.3 0 1.7-2.3 2.3-4 .8-2.2 1.7-4.4 1.7-6.6 0-2.4-1.5-3.6-3.3-3.6-1.4 0-2.2-1.2-4.2-1.2Z" />
    ),
  },
  {
    title: "Cosmetic & Whitening",
    price: "Whitening from $299",
    body: "Professional whitening and natural-looking veneers designed around your face — never bulky, never fake.",
    icon: (
      <>
        <path d="M12 3.2 13.7 9l5.8 1.7L13.7 12 12 17.8 10.3 12 4.5 10.7 10.3 9 12 3.2Z" />
        <path d="M18.5 15.5l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1Z" />
      </>
    ),
  },
  {
    title: "Invisalign®",
    price: "Plans from $3,500",
    body: "Clear, removable aligners that straighten teeth quietly — with 3D scans so you see the result before you start.",
    icon: (
      <>
        <path d="M5 9.5c1.6-1.2 3.7-1.8 7-1.8s5.4.6 7 1.8" />
        <path d="M5 9.5c0 3.6 1.9 8 7 8s7-4.4 7-8" />
        <path d="M8.5 11v3M12 11.3v3.4M15.5 11v3" />
      </>
    ),
  },
  {
    title: "Same-day Emergencies",
    price: "Relief from $120",
    body: "Pain, a chipped tooth, a lost filling? We hold space open every single day so you're seen fast.",
    icon: (
      <>
        <path d="M12 20.5S4.5 15.8 4.5 9.9A4.4 4.4 0 0 1 12 6.8a4.4 4.4 0 0 1 7.5 3.1c0 5.9-7.5 10.6-7.5 10.6Z" />
        <path d="M12 9.6v4M10 11.6h4" />
      </>
    ),
  },
];

const STATS = [
  { value: "12+", label: "Years caring for Austin" },
  { value: "8,000+", label: "Smiles looked after" },
  { value: "4.9★", label: "From 320+ reviews" },
  { value: "Sat", label: "Weekend hours" },
];

const HOURS = [
  { day: "Monday – Friday", time: "8:00 – 6:00" },
  { day: "Saturday", time: "9:00 – 2:00" },
  { day: "Sunday", time: "Closed" },
];

/* ---------- page ---------- */

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      {/* ================= NAV ================= */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-bone/70 border-b border-ink/5">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-display text-xl font-semibold tracking-tight text-evergreen">
              Brightsmile
            </span>
          </a>
          <div className="hidden items-center gap-9 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-evergreen"
              >
                {n.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-evergreen px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-all hover:bg-evergreen-dark hover:shadow-md"
          >
            Book a visit
          </a>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section id="top" className="relative isolate">
        {/* soft ambient shapes */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="floaty absolute -right-24 -top-24 h-[30rem] w-[30rem] rounded-full bg-mint/50 blur-3xl" />
          <div className="floaty-slow absolute -left-32 top-40 h-96 w-96 rounded-full bg-gold-soft/30 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-24">
          <div>
            <p
              className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-evergreen/15 bg-cream/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-evergreen"
              style={delay(0)}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Boutique dentistry · Austin, TX
            </p>

            <h1
              className="reveal font-display text-5xl font-light leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-7xl"
              style={delay(90)}
            >
              Modern dentistry
              <br />
              with a{" "}
              <span className="relative whitespace-nowrap italic text-evergreen">
                gentle touch
                <Underline />
              </span>
              .
            </h1>

            <p
              className="reveal mt-7 max-w-md text-lg leading-relaxed text-ink/70"
              style={delay(180)}
            >
              Calm rooms, honest advice, and technology that makes every visit
              quicker and easier. The kind of dental office you actually don&apos;t
              mind going to.
            </p>

            <div
              className="reveal mt-9 flex flex-wrap items-center gap-4"
              style={delay(260)}
            >
              <a
                href="#contact"
                className="rounded-full bg-evergreen px-7 py-3.5 text-sm font-semibold text-cream shadow-sm transition-all hover:bg-evergreen-dark hover:shadow-lg"
              >
                Book a visit
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-evergreen hover:text-evergreen"
              >
                See our services
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div
              className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/55"
              style={delay(340)}
            >
              <Tick>Accepting new patients</Tick>
              <Tick>Most PPO insurance</Tick>
              <Tick>Same-day emergencies</Tick>
            </div>
          </div>

          {/* hero card */}
          <div className="reveal relative" style={delay(220)}>
            <div className="floaty relative mx-auto max-w-sm">
              <div className="rounded-[2rem] bg-evergreen p-8 text-cream shadow-2xl shadow-evergreen/20">
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg italic text-gold-soft">
                    Your first visit
                  </span>
                  <Logo className="text-gold-soft" />
                </div>
                <p className="mt-6 font-display text-5xl font-light">$89</p>
                <p className="mt-1 text-sm text-mint/80">
                  Exam, digital X-rays &amp; a full cleaning
                </p>
                <div className="my-6 h-px bg-cream/15" />
                <ul className="space-y-3 text-sm text-cream/85">
                  <HeroLine>No lectures, no upsells</HeroLine>
                  <HeroLine>A clear, written plan</HeroLine>
                  <HeroLine>Comfort options for anxious patients</HeroLine>
                </ul>
                <a
                  href="#contact"
                  className="mt-7 block rounded-full bg-gold py-3 text-center text-sm font-semibold text-evergreen-dark transition-colors hover:bg-gold-soft"
                >
                  Claim this offer
                </a>
              </div>
              {/* floating rating chip */}
              <div className="floaty-slow absolute -bottom-6 -left-8 rounded-2xl bg-cream px-4 py-3 shadow-xl">
                <p className="font-display text-xl font-semibold text-evergreen">
                  4.9★
                </p>
                <p className="text-[11px] font-medium uppercase tracking-wide text-ink/50">
                  320+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-2xl">
            <SectionKicker>What we do</SectionKicker>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
              Everything your smile needs, under one calm roof.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col rounded-3xl border border-ink/8 bg-cream p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-evergreen/20 hover:shadow-xl hover:shadow-evergreen/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/60 text-evergreen transition-colors group-hover:bg-evergreen group-hover:text-cream">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    {s.icon}
                  </svg>
                </span>
                <h3 className="mt-6 font-display text-xl text-ink">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                  {s.body}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-gold">
                  {s.price}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 rounded-[2.5rem] bg-evergreen p-10 text-cream md:grid-cols-2 md:p-16">
            <div>
              <SectionKicker className="text-gold-soft">Our promise</SectionKicker>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight sm:text-5xl">
                Dentistry that doesn&apos;t feel like the dentist.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-mint/85">
                Brightsmile started with a simple idea: a dental visit should feel
                calm, honest, and genuinely comfortable. No pressure, no jargon —
                just a small, dedicated team who take the time to explain, listen,
                and get it right.
              </p>
              <p className="mt-4 max-w-md leading-relaxed text-mint/85">
                From intraoral scanners to gentle numbing and cozy treatment
                rooms, everything is built around making your time with us as easy
                as it is thorough.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 self-center">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-sm"
                >
                  <p className="font-display text-4xl font-light text-gold-soft">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-mint/75">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="relative py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <SectionKicker>Visit us</SectionKicker>
              <h2 className="mt-4 font-display text-4xl font-light leading-tight text-ink sm:text-5xl">
                Come say hello.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-ink/65">
                We&apos;re just off Maple Avenue with easy parking out front. Call,
                email, or book online — new patients are always welcome.
              </p>

              <dl className="mt-9 space-y-6">
                <ContactRow label="Studio" icon={<PinIcon />}>
                  128 Maple Avenue, Suite 4
                  <br />
                  Austin, TX 78701
                </ContactRow>
                <ContactRow label="Talk to us" icon={<PhoneIcon />}>
                  <a href="tel:+15125550142" className="hover:text-evergreen">
                    (512) 555-0142
                  </a>
                  <br />
                  <a
                    href="mailto:hello@brightsmileatx.com"
                    className="hover:text-evergreen"
                  >
                    hello@brightsmileatx.com
                  </a>
                </ContactRow>
              </dl>
            </div>

            {/* hours card */}
            <div className="rounded-[2rem] border border-ink/8 bg-cream p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-ink">Opening hours</h3>
                <span className="inline-flex items-center gap-2 rounded-full bg-mint/60 px-3 py-1 text-xs font-semibold text-evergreen">
                  <span className="h-1.5 w-1.5 rounded-full bg-evergreen" />
                  Open today
                </span>
              </div>

              <ul className="mt-6 divide-y divide-ink/8">
                {HOURS.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-3.5"
                  >
                    <span className="text-sm font-medium text-ink/75">
                      {h.day}
                    </span>
                    <span className="text-sm font-semibold text-ink">
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl bg-bone-deep/60 p-5">
                <p className="text-sm leading-relaxed text-ink/70">
                  In pain right now? We keep emergency slots open every day —
                  call and we&apos;ll fit you in.
                </p>
              </div>

              <a
                href="tel:+15125550142"
                className="mt-6 block rounded-full bg-evergreen py-3.5 text-center text-sm font-semibold text-cream transition-colors hover:bg-evergreen-dark"
              >
                Call to book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="mt-auto border-t border-ink/8 bg-bone">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-display text-xl font-semibold text-evergreen">
                Brightsmile Dental Studio
              </span>
            </div>
            <p className="max-w-xs text-sm text-ink/55">
              Gentle, modern dentistry in the heart of Austin. Accepting new
              patients and same-day emergencies.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-ink/8 pt-6 text-xs text-ink/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Brightsmile Dental Studio.</p>
            <p>Fictional business — a portfolio demo built by Yahya.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- presentational bits ---------- */

function Logo({ className = "text-evergreen" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-7 w-7 ${className}`} fill="none">
      <path
        d="M12 3.2c-2.2 0-3 1.3-4.6 1.3C5.2 4.5 3.6 5.8 3.6 8.4c0 2.4 1 4.8 1.9 7.2.6 1.9 1.1 4.4 2.5 4.4 1.2 0 1.1-2 1.9-3.7.3-.8.8-1.2 2.1-1.2s1.8.4 2.1 1.2c.8 1.7.7 3.7 1.9 3.7 1.4 0 1.9-2.5 2.5-4.4.9-2.4 1.9-4.8 1.9-7.2 0-2.6-1.6-3.9-3.8-3.9-1.6 0-2.4-1.3-4.6-1.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 8.2c1-.6 2-.7 2.6-.7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Underline() {
  return (
    <svg
      viewBox="0 0 200 12"
      className="absolute -bottom-2 left-0 w-full text-gold"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M2 8c40-6 120-6 196 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg viewBox="0 0 20 20" className="h-4 w-4 text-evergreen" fill="none">
        <path
          d="M4 10.5 8 14l8-8.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </span>
  );
}

function HeroLine({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 text-gold-soft" fill="none">
        <path
          d="M4 10.5 8 14l8-8.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </li>
  );
}

function SectionKicker({
  children,
  className = "text-gold",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.22em] ${className}`}
    >
      {children}
    </p>
  );
}

function ContactRow({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-mint/60 text-evergreen">
        {icon}
      </span>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wider text-ink/45">
          {label}
        </dt>
        <dd className="mt-1 leading-relaxed text-ink/80">{children}</dd>
      </div>
    </div>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 21s-6.5-5.2-6.5-10A6.5 6.5 0 0 1 12 4.5 6.5 6.5 0 0 1 18.5 11c0 4.8-6.5 10-6.5 10Z" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6.5 4.5c.7 0 1.3.5 1.5 1.2l.7 2.5c.1.5 0 1.1-.4 1.5l-1 1a11 11 0 0 0 4.5 4.5l1-1c.4-.4 1-.5 1.5-.4l2.5.7c.7.2 1.2.8 1.2 1.5V19a1.8 1.8 0 0 1-1.9 1.8A14.5 14.5 0 0 1 4.7 6.4 1.8 1.8 0 0 1 6.5 4.5Z" strokeLinejoin="round" />
    </svg>
  );
}
