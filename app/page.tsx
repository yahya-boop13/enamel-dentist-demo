import Reveal from "./reveal";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it works", href: "#how" },
  { label: "Visit", href: "#visit" },
];

const MARQUEE = [
  "30-minute cleanings",
  "No drills, no judgment",
  "Up to 12 shades brighter",
  "Walk-ins welcome",
  "Evenings & weekends",
  "Cleanings from $149",
];

const STATS = [
  { num: "30", small: "MIN", cap: "A cleaning on your lunch break" },
  { num: "12", small: "", cap: "Shades brighter, no sensitivity" },
  { num: "$149", small: "", cap: "Signature cleaning, all in" },
  { num: "7", small: "", cap: "Days a week, till 8pm" },
];

const SERVICES = [
  { kicker: "Cleaning", title: "The Signature Clean", body: "A thorough, gentle cleaning that skips the pick-and-scrape. Plaque, tartar, and surface stains gone in 30 minutes.", meta: "From $149 · 30 min" },
  { kicker: "Whitening", title: "Glow & Gleam Whitening", body: "Dentist-designed LED whitening, up to 12 shades brighter with little to no sensitivity. Strips can retire now.", meta: "From $249 · 30–60 min" },
  { kicker: "Most popular", title: "The Combo", body: "Clean and whiten in a single sitting. Our best glow-up, same-day, done before your afternoon coffee.", meta: "$399 · 60 min" },
  { kicker: "Alignment", title: "Clear Aligners", body: "Discreet, custom-fit aligners with a 3D scan and a clear plan. Straighten on your schedule, not a bracket's.", meta: "From $2,400 · free consult" },
];

const STEPS = [
  { n: "01", title: "Book or just walk in", body: "Grab a same-day slot online in under a minute, or drop by — evenings and weekends included. Fill out your intake once and you're set." },
  { n: "02", title: "Relax in the chair", body: "A licensed hygienist handles everything — gentle cleaning, whitening, or both. Headphones on, eyes closed, 30 minutes of quiet." },
  { n: "03", title: "Leave gleaming", body: "See your results in the mirror, get a plain-English plan, and we'll hand you a superbill for insurance. If a dentist should look, we refer you to a partner we trust." },
];

const PRICING = [
  { t: "Signature Clean", time: "30 min", price: "$149" },
  { t: "AirFlow Deep Clean", time: "45 min", price: "$199" },
  { t: "Glow Whitening", time: "30 min", price: "$249" },
  { t: "Gleam Whitening", time: "60 min", price: "$299" },
  { t: "The Combo — Clean + Whiten", time: "60 min", price: "$399", popular: true },
  { t: "Bright360 Assessment — exam, X-rays, 3D scan", time: "40 min", price: "$99" },
  { t: "Clear Aligners", time: "Plan", price: "from $2,400" },
];

const TESTIMONIALS = [
  { q: "Genuinely the first cleaning I haven't white-knuckled. In and out in half an hour.", who: "Priya R. · Pearl District" },
  { q: "Booked at 6pm, whitened by 7, dinner by 8. Five shades brighter, zero zingers.", who: "Devon M. · Buckman" },
  { q: "They told me what I actually needed and nothing I didn't. Refreshing.", who: "Alex T. · Alberta" },
];

const FAQ = [
  { q: "Does it hurt? Any drills?", a: "No drills, ever. Our cleanings use gentle AirFlow instead of scraping, and our whitening uses low-heat LED — most clients feel nothing. We're a preventive and cosmetic studio, so anything requiring a drill gets referred to a partner dentist we trust." },
  { q: "Do you take my insurance?", a: "We accept most major providers — Delta, Cigna, Aetna and more — plus HSA and FSA cards. Cleanings are usually covered; whitening is cosmetic and isn't. You pay in-studio and we give you a superbill to submit for reimbursement." },
  { q: "Can I really just walk in?", a: "Yes — walk-ins are welcome and we hold same-day slots daily. Booking ahead guarantees your time, especially for evenings and weekends. Either way you're out in 30–60 minutes." },
  { q: "How long does whitening last?", a: "Most results hold three to six months depending on coffee, tea, red wine, and smoking habits. A quick touch-up every few months keeps you bright — pair it with a cleaning for the best effect." },
];

function PhotoPlaceholder({ label }: { label: string }) {
  return (
    <div className="ph">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="0" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className="ph-cap">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Reveal />

      {/* NAV */}
      <div className="nav-wrap">
        <nav className="nav">
          <a href="#top" className="brand">
            <span className="sq" />
            ENAMEL<span className="dot">.</span>
          </a>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="link">
              {n.label}
            </a>
          ))}
          <a href="#book" className="btn btn-primary">Book a visit</a>
        </nav>
      </div>

      {/* HERO */}
      <div id="top" className="wrap">
        <section className="hero">
          <div>
            <span className="eyebrow" style={{ marginBottom: 22 }}>
              <span className="sq" />A smile studio in Portland
            </span>
            <h1 className="h1">
              <span style={{ display: "block" }}>The dentist,</span>
              <span style={{ display: "block" }}>minus</span>
              <span style={{ display: "block" }} className="accent">the dread.</span>
            </h1>
            <p className="lead">
              Gentle cleanings and pro whitening, hygienist-led, in as little as 30 minutes.
              No drills. No scraping. No judgment. Walk in on your lunch break and leave gleaming.
            </p>
            <div className="cta-row">
              <a href="#book" className="btn btn-primary">Book a visit</a>
              <a href="#pricing" className="btn btn-ghost">See pricing</a>
            </div>
            <div className="chips">
              <span className="chip"><span className="sq" />Same-day &amp; walk-ins</span>
              <span className="chip"><span className="sq" />Evenings &amp; weekends</span>
              <span className="chip"><span className="sq" />HSA / FSA accepted</span>
            </div>
          </div>
          <div className="photo photo-4x5">
            <PhotoPlaceholder label="Hero photo — client smiling / studio chair" />
          </div>
        </section>
      </div>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[0, 1].map((track) => (
            <div className="marquee-seg" key={track} aria-hidden={track === 1}>
              {MARQUEE.map((m, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                  <span className="txt">{m}</span>
                  <span className="dot" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="wrap">
        <section className="stats" data-reveal>
          {STATS.map((s) => (
            <div key={s.cap}>
              <p className="stat-num">{s.num}{s.small && <small>{s.small}</small>}</p>
              <p className="stat-cap">{s.cap}</p>
            </div>
          ))}
        </section>

        {/* SERVICES */}
        <section id="services" className="section section-rule" data-reveal>
          <div className="svc-head">
            <div>
              <span className="eyebrow" style={{ marginBottom: 12 }}>What we do</span>
              <h2 className="h2" style={{ maxWidth: "16ch", marginTop: 12 }}>Everything for a healthy, bright smile.</h2>
            </div>
            <a href="#pricing" style={{ fontSize: 14, whiteSpace: "nowrap" }}>See full pricing →</a>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s) => (
              <div className="card" key={s.title}>
                <div className="card-kicker">{s.kicker}</div>
                <div className="card-title">{s.title}</div>
                <p className="card-body">{s.body}</p>
                <div className="card-meta"><span>{s.meta}</span></div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* STUDIO BAND */}
      <div className="studio-band" data-reveal>
        <PhotoPlaceholder label="Wide studio interior photo" />
      </div>

      <div className="wrap">
        {/* HOW IT WORKS */}
        <section id="how" className="section" data-reveal>
          <span className="eyebrow" style={{ marginBottom: 26 }}>How it works</span>
          <div style={{ marginTop: 26 }}>
            {STEPS.map((s, i) => (
              <div className={`how-row${i === STEPS.length - 1 ? " last" : ""}`} key={s.n}>
                <p className="how-num">{s.n}</p>
                <h3 className="how-title">{s.title}</h3>
                <p className="how-body">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="section" data-reveal>
          <div style={{ marginBottom: 26 }}>
            <span className="eyebrow" style={{ marginBottom: 12 }}>Pricing</span>
            <h2 className="h2" style={{ marginTop: 12 }}>Flat prices. No surprises.</h2>
          </div>
          <table className="table">
            <thead>
              <tr><th>Treatment</th><th>Time</th><th style={{ textAlign: "right" }}>Price</th></tr>
            </thead>
            <tbody>
              {PRICING.map((p) => (
                <tr key={p.t}>
                  <td style={{ fontWeight: 600 }}>
                    {p.t}{p.popular && <span className="pill-accent"> · most popular</span>}
                  </td>
                  <td>{p.time}</td>
                  <td style={{ textAlign: "right" }}>{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: 13, lineHeight: 1.6, margin: "16px 0 0", color: "color-mix(in srgb, var(--color-text) 64%, transparent)", maxWidth: "70ch" }}>
            We accept most major insurance (Delta, Cigna, Aetna) plus HSA/FSA. Cleanings are typically covered; whitening is cosmetic and isn&apos;t. We hand you a superbill for easy reimbursement.
          </p>
        </section>

        {/* FOUNDER */}
        <section className="section founder" data-reveal>
          <div className="photo photo-1x1">
            <PhotoPlaceholder label="Founder / dentist portrait" />
          </div>
          <div>
            <span className="eyebrow" style={{ marginBottom: 16 }}>Who runs it</span>
            <blockquote className="pull" style={{ marginTop: 16 }}>
              &ldquo;You wouldn&apos;t wax a car without washing it first. Same goes for your smile — health comes before shine.&rdquo;
            </blockquote>
            <p style={{ fontSize: 15, lineHeight: 1.65, margin: "22px 0 0", color: "color-mix(in srgb, var(--color-text) 80%, transparent)", maxWidth: "46ch" }}>
              Dr. Mara Vance founded ENAMEL after fifteen years in general dentistry, tired of watching people dread a chair they didn&apos;t need to. Every hygienist here is licensed, every plan is honest, and nobody gets upsold.
            </p>
            <p style={{ fontSize: 13, letterSpacing: "0.04em", textTransform: "uppercase", margin: "18px 0 0", color: "color-mix(in srgb, var(--color-text) 60%, transparent)" }}>
              Dr. Mara Vance · Founder &amp; supervising dentist
            </p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section" data-reveal>
          <span className="eyebrow" style={{ marginBottom: 26 }}>What clients say</span>
          <div className="svc-grid" style={{ marginTop: 26, gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {TESTIMONIALS.map((t) => (
              <div className="quote-card" key={t.who}>
                <p>&ldquo;{t.q}&rdquo;</p>
                <div className="card-meta"><span>{t.who}</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="section" data-reveal>
          <span className="eyebrow" style={{ marginBottom: 20 }}>Good to know</span>
          <div className="faq" style={{ marginTop: 20 }}>
            {FAQ.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary className="faq-q">
                  {f.q}
                  <span className="faq-plus">+</span>
                </summary>
                <p className="faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* POSTER CTA */}
      <section id="book" className="poster">
        <div className="poster-inner">
          <h3>
            <span style={{ display: "block" }}>Book your gleam.</span>
            <span style={{ display: "block" }}>Lunch break&apos;s plenty.</span>
          </h3>
          <p>Same-day appointments, evenings, and weekends. Or ask our concierge anything — bottom-right corner.</p>
          <div className="cta-row">
            <a href="tel:+15035550188" className="btn btn-invert">Call (503) 555-0188</a>
            <a href="https://maps.google.com/?q=88+Marlow+Street+Portland+OR" target="_blank" rel="noopener" className="btn btn-invert">Get directions</a>
          </div>
        </div>
      </section>

      {/* VISIT + FOOTER */}
      <div className="wrap">
        <section id="visit" className="visit">
          <div>
            <span className="eyebrow" style={{ marginBottom: 14 }}>Find us</span>
            <p className="visit-addr" style={{ marginTop: 14 }}>88 Marlow Street, Suite 2<br />Portland, OR 97209</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: "16px 0 0", color: "color-mix(in srgb, var(--color-text) 80%, transparent)" }}>
              <a href="tel:+15035550188">(503) 555-0188</a><br />
              <a href="mailto:hello@enamelstudio.co">hello@enamelstudio.co</a>
            </p>
          </div>
          <div>
            <span className="eyebrow" style={{ marginBottom: 14 }}>Hours</span>
            <table className="table" style={{ marginTop: 14 }}>
              <tbody>
                <tr><td style={{ fontWeight: 600 }}>Mon – Fri</td><td style={{ textAlign: "right" }}>9:00 AM – 8:00 PM</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Sat – Sun</td><td style={{ textAlign: "right" }}>10:00 AM – 6:00 PM</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 13, lineHeight: 1.6, margin: "14px 0 0", color: "color-mix(in srgb, var(--color-text) 64%, transparent)" }}>
              Walk-ins welcome. Same-day slots held daily.
            </p>
          </div>
          <div>
            <span className="eyebrow" style={{ marginBottom: 14 }}>The studio</span>
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: "14px 0 0", color: "color-mix(in srgb, var(--color-text) 80%, transparent)" }}>
              Cleanings · Whitening · The Combo · Bright360 exams · Clear aligners. Hygienist-led, dentist-supervised.
            </p>
          </div>
        </section>
        <footer className="footer">
          <span>© 2026 ENAMEL. smile studio · 88 Marlow Street, Portland, OR · a portfolio demo by Yahya</span>
          <span>Smile-care = self-care</span>
        </footer>
      </div>
    </>
  );
}
