import useSEO from "../hooks/useSEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Icon from "../components/Icon";

const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";

const VALUES = [
  {
    title: "Data Before Creativity",
    body: "Every edit decision is backed by drop-off analytics. We study your audience's exact exit points before scripting a single hook.",
  },
  {
    title: "Psychological Precision",
    body: "We apply cognitive retention frameworks — pattern interrupts, open loops, and micro-commitments — to engineer 60%+ retention rates consistently.",
  },
  {
    title: "Systems, Not One-Offs",
    body: "One great video doesn't build a business. We build repeatable content pipelines and backend automation that compound over time.",
  },
  {
    title: "Exclusivity as a Standard",
    body: "We cap our client roster intentionally. Fewer clients means deeper partnership, faster turnarounds, and measurably better results.",
  },
];

const TEAM_FACTS = [
  { stat: "60%+", label: "Average Retention Rate Achieved" },
  { stat: "3×",   label: "Organic Reach Growth in 30 Days" },
  { stat: "100+", label: "High-Retention Assets Delivered" },
  { stat: "24h",  label: "Average Response Time" },
];

export default function AboutPage() {
  useSEO({
    title: "About Quant Media | Video Retention Engineering Agency",
    description: "Learn how Quant Media engineers video retention for high-ticket founders, coaches, and consultants. Our psychology-driven approach turns viewers into paying clients through data-backed editing and automation.",
    canonical: "https://www.quantmedia.co/about",
  });

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero-section" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <span className="sec-badge">About Us</span>
              <h1 className="sec-title" style={{ fontSize: 44 }}>
                We Don't Just Edit Videos.
                <br />
                <span style={{ color: "var(--color-primary)" }}>We Engineer Attention.</span>
              </h1>
              <p className="sec-sub mx-auto" style={{ fontSize: 17, maxWidth: 600 }}>
                Quant Media is an elite retention engineering agency exclusively serving
                high-ticket founders, coaches, consultants, and operators who are serious
                about turning their content into a compounding inbound machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4">
              <img
                src="/img/about-us.png"
                alt="Quant Media team working on video retention engineering"
                style={{ borderRadius: "var(--radius)", boxShadow: "0 20px 60px var(--color-primary-shadow)" }}
              />
            </div>
            <div className="col-lg-6 col-md-12 pl-lg-5 mb-4" data-aos="fade-up">
              <span className="sec-badge">Our Story</span>
              <h2 className="sec-title">Why We Started Quant Media</h2>
              <p style={{ color: "var(--color-text)", lineHeight: 1.8 }}>
                We started Quant Media after watching brilliant founders lose millions of
                views — and millions in revenue — because their editors were guessing.
                Most video editors treat every second equally. We treat every second as
                a retention decision.
              </p>
              <p style={{ color: "var(--color-text)", lineHeight: 1.8 }}>
                We built a proprietary framework around three pillars: psychological hook
                architecture, precision pacing, and backend automation. The result is a
                content system that doesn't just get views — it converts viewers into
                booked discovery calls, automatically.
              </p>
              <a href={CTA_URL} className="btn-dark-pill" style={{ marginTop: 8 }}>
                Work With Us
                <i className="fas fa-arrow-right" style={{ fontSize: 11 }}></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: "var(--color-card-dark)", padding: "60px 0" }}>
        <div className="container">
          <div className="row text-center">
            {TEAM_FACTS.map((f) => (
              <div key={f.label} className="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
                <div style={{ color: "var(--color-primary)", fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
                  {f.stat}
                </div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, marginTop: 8 }}>{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          <div className="section-header-center">
            <span className="sec-badge">Our Values</span>
            <h2 className="sec-title">What Drives Every Decision We Make</h2>
            <p className="sec-sub">
              These aren't just words on a wall — they're the operating principles
              behind every asset we deliver.
            </p>
          </div>
          <div className="row">
            {VALUES.map((v, i) => (
              <div key={v.title} className="col-lg-6 col-md-12 mb-4">
                <div className="qm-card" data-aos="fade-up" data-aos-delay={i * 80}>
                  <h5 style={{ marginBottom: 10, color: "var(--color-heading)" }}>{v.title}</h5>
                  <p style={{ margin: 0, color: "var(--color-text)", lineHeight: 1.7 }}>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Partner With a Team That Treats Your Content Like an Investment</h2>
            <p>
              We take on a limited number of clients each month. If you're a high-ticket
              founder serious about scaling your organic reach, let's talk.
            </p>
            <a href={CTA_URL} className="btn-cta-white">
              Book a Free Growth Audit
              <i className="fas fa-arrow-right" style={{ fontSize: 11, marginLeft: 6 }}></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
