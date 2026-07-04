import useSEO from "../hooks/useSEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Icon from "../components/Icon";

const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";

const SERVICES = [
  {
    icon: "fas fa-chart-bar",
    title: "Retention-Engineered Video Editing",
    description:
      "Most editors cut for aesthetics. We cut for psychology. Every transition, every B-roll choice, every audio swell is designed to maintain viewer attention through to your CTA. We achieve 60%+ average retention rates for our clients versus the industry average of 25–35%.",
    features: ["Drop-off graph analysis before editing begins", "Psychological pacing and pattern interrupts", "Custom hook scripts for the first 3–5 seconds", "Subtitle and caption optimization for silent viewers"],
  },
  {
    icon: "fas fa-bullhorn",
    title: "Short-Form Content Repurposing",
    description:
      "Your long-form content is a goldmine. We extract the highest-retention moments, repackage them into scroll-stopping short-form clips optimized for Instagram Reels, YouTube Shorts, and TikTok — each with platform-native hooks and formatting.",
    features: ["Long-to-short-form repurposing pipeline", "Platform-native formatting (Reels, Shorts, TikTok)", "Viral hook identification and enhancement", "Caption overlays and dynamic text animation"],
  },
  {
    icon: "fas fa-robot",
    title: "n8n Automation & AI Lead Generation",
    description:
      "Views without conversions are vanity. We build custom n8n workflows and AI chatbot integrations that automatically nurture your audience and qualify leads — so your content machine runs 24/7 even when you're offline.",
    features: ["Custom n8n automation workflows", "AI chatbot integration for lead qualification", "CRM pipeline connection", "Automatic DM and email follow-up sequences"],
  },
  {
    icon: "fas fa-laptop-code",
    title: "Proprietary Client Portal",
    description:
      "No more chasing freelancers on Slack. Every client gets access to a custom-built portal where you can review assets, leave timestamped feedback, track your content calendar, and monitor your channel analytics in real time.",
    features: ["Centralized asset review and approval system", "Timestamped video feedback tools", "Live content calendar and scheduling", "Analytics dashboard with retention metrics"],
  },
  {
    icon: "fas fa-search",
    title: "Channel & Content Strategy",
    description:
      "We don't just execute — we plan. Our strategists analyze your niche, study competitor channels, and build a data-driven content roadmap designed to maximize organic reach, subscriber growth, and inbound lead quality.",
    features: ["Competitor content gap analysis", "Keyword and topic research for your niche", "Monthly editorial calendar creation", "Content pillar and series development"],
  },
  {
    icon: "fas fa-chart-line",
    title: "Monthly Analytics Audits",
    description:
      "You can't improve what you don't measure. Every month, our analysts review your channel performance, identify retention weak points, and adjust our editing strategy to continuously improve your metrics.",
    features: ["Full channel performance review", "Retention curve analysis per video", "A/B thumbnail and title testing recommendations", "Growth trajectory reporting and goal setting"],
  },
];

const FAQS = [
  {
    q: "What makes Quant Media different from a standard video editing service?",
    a: "Standard editors focus on aesthetics. We focus on retention data. Before touching a single clip, we study your audience's drop-off points and build a custom editing framework around keeping viewers engaged through to your CTA.",
  },
  {
    q: "Do you work with coaches, consultants, and course creators?",
    a: "Yes — our clients are primarily high-ticket coaches, B2B consultants, SaaS founders, and elite operators who use video as a primary client acquisition channel.",
  },
  {
    q: "How quickly do you deliver edited videos?",
    a: "Standard turnaround is 3–5 business days. Priority clients on our Scale and Partner plans receive 24–48 hour turnaround.",
  },
  {
    q: "Do you handle YouTube Shorts and Instagram Reels as well?",
    a: "Absolutely. All plans above Growth include short-form repurposing of your long-form content into platform-optimized clips.",
  },
];

export default function ServicesPage() {
  useSEO({
    title: "Video Retention Engineering Services | Quant Media",
    description: "Explore Quant Media's video editing, short-form repurposing, n8n automation, and content strategy services for high-ticket founders and coaches. Data-driven editing that turns viewers into paying clients.",
    canonical: "https://www.quantmedia.co/services",
  });

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero-section" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <span className="sec-badge">Our Services</span>
              <h1 className="sec-title" style={{ fontSize: 44 }}>
                Every Service We Offer is Designed
                <br />
                <span style={{ color: "var(--color-primary)" }}>to Convert Viewers Into Clients</span>
              </h1>
              <p className="sec-sub mx-auto" style={{ fontSize: 17, maxWidth: 600 }}>
                We're not a production house. We're a growth system. Every service we
                offer is engineered to move the needle on the metrics that actually
                grow your business.
              </p>
              <a href={CTA_URL} className="btn-dark-pill" style={{ marginTop: 8 }}>
                Book a Free Consultation
                <i className="fas fa-arrow-right" style={{ fontSize: 11 }}></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          <div className="row">
            {SERVICES.map((svc, i) => (
              <div key={svc.title} className="col-lg-6 col-md-12 mb-4">
                <div className="qm-card h-100" data-aos="fade-up" data-aos-delay={i * 60}>
                  <div style={{
                    width: 48, height: 48, borderRadius: "var(--radius-sm)",
                    background: "var(--color-primary-tint)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20, color: "var(--color-primary)", fontSize: 20,
                  }}>
                    <i className={svc.icon}></i>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{svc.title}</h3>
                  <p style={{ color: "var(--color-text)", lineHeight: 1.75, marginBottom: 20 }}>{svc.description}</p>
                  <ul style={{ padding: 0, margin: 0 }}>
                    {svc.features.map((f) => (
                      <li key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "6px 0", borderBottom: "1px solid var(--color-border)", fontSize: 14, color: "var(--color-text)" }}>
                        <i className="fas fa-check" style={{ color: "var(--color-primary)", fontSize: 11, marginTop: 4, flexShrink: 0 }}></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          <div className="section-header-center">
            <span className="sec-badge">FAQ</span>
            <h2 className="sec-title">Common Questions About Our Services</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {FAQS.map((faq, i) => (
                <div key={i} className="qm-card mb-3" data-aos="fade-up" data-aos-delay={i * 60}>
                  <h5 style={{ marginBottom: 10, color: "var(--color-heading)" }}>{faq.q}</h5>
                  <p style={{ margin: 0, color: "var(--color-text)", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Turn Your Content Into a Lead Engine?</h2>
            <p>Book a 15-minute call and we'll audit your current content, identify your biggest retention leaks, and outline exactly how we'd fix them.</p>
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
