import useSEO from "../hooks/useSEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Icon from "../components/Icon";

const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";

const PLANS = [
  {
    name: "Growth",
    price: "$1,499",
    tagline: "For founders ready to fix their retention problem",
    featured: false,
    features: [
      "15 Retention-Engineered Video Assets/mo",
      "Custom Hook Strategy for your niche",
      "Monthly Analytics Audit & Retention Report",
      "Proprietary Client Portal Access",
      "Standard 3–5 Day Turnaround",
      "Dedicated editor assigned to your account",
    ],
    notIncluded: ["Short-form repurposing", "n8n Automation", "Weekly strategy calls"],
  },
  {
    name: "Scale",
    price: "$2,499",
    tagline: "For serious operators scaling to 7 figures",
    featured: true,
    features: [
      "30 Retention-Engineered Assets/mo",
      "Long-Form + Short-Form Repurposing",
      "Weekly Strategy Sync Call",
      "Dedicated Account Editor",
      "Priority 24–48 Hour Turnaround",
      "Bi-weekly Analytics Deep-Dive",
    ],
    notIncluded: ["n8n Automation", "AI Chatbot Integration"],
  },
  {
    name: "Partner",
    price: "$4,500",
    tagline: "For elite brands who want the full system",
    featured: false,
    features: [
      "60+ High-Retention Assets/mo",
      "Full Channel Management",
      "Custom n8n Lead Gen Automation",
      "AI Chatbot Integration",
      "VIP Slack Channel & Async Access",
      "Quarterly Brand & Strategy Review",
    ],
    notIncluded: [],
  },
];

const FAQS = [
  {
    q: "Is there a minimum contract length?",
    a: "We work on a month-to-month basis for Growth clients, and offer discounted quarterly commitments for Scale and Partner plans. We prefer to earn your business every month through results.",
  },
  {
    q: "What platforms do you optimize for?",
    a: "We optimize primarily for YouTube (long-form and Shorts), Instagram Reels, LinkedIn video, and TikTok. Each platform gets native formatting and platform-specific hook strategies.",
  },
  {
    q: "What do I need to provide each month?",
    a: "Just your raw footage or a Loom/Zoom recording. Our editors and strategists handle scripting review, editing, captioning, thumbnail briefing, and optimization.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes — you can switch plans at the start of any billing cycle. There are no penalties for upgrading or downgrading.",
  },
  {
    q: "Do you offer a trial or sample edit?",
    a: "We offer a paid sample edit at a flat rate for qualified leads, so you can assess our quality before committing. Book a call to discuss.",
  },
];

const COMPARE_ROWS = [
  { feature: "Retention-Engineered Editing",    growth: true,  scale: true,  partner: true  },
  { feature: "Proprietary Client Portal",        growth: true,  scale: true,  partner: true  },
  { feature: "Monthly Analytics Audit",          growth: true,  scale: true,  partner: true  },
  { feature: "Short-Form Repurposing",           growth: false, scale: true,  partner: true  },
  { feature: "Weekly Strategy Sync",             growth: false, scale: true,  partner: true  },
  { feature: "Priority 24–48h Turnaround",       growth: false, scale: true,  partner: true  },
  { feature: "n8n Lead Gen Automation",          growth: false, scale: false, partner: true  },
  { feature: "Custom AI Chatbot Integration",    growth: false, scale: false, partner: true  },
  { feature: "Full Channel Management",          growth: false, scale: false, partner: true  },
  { feature: "VIP Slack Channel",                growth: false, scale: false, partner: true  },
];

export default function PricingPage() {
  useSEO({
    title: "Video Retention Engineering Pricing | Quant Media",
    description: "Transparent pricing for video retention engineering, editing, automation, and growth services. Plans starting at $1,499/mo for high-ticket founders and coaches ready to scale their organic reach.",
    canonical: "https://www.quantmedia.co/pricing",
  });

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero-section" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <span className="sec-badge">Pricing</span>
              <h1 className="sec-title" style={{ fontSize: 44 }}>
                Elite Infrastructure.
                <br />
                <span style={{ color: "var(--color-primary)" }}>Transparent Investment.</span>
              </h1>
              <p className="sec-sub mx-auto" style={{ fontSize: 17, maxWidth: 580 }}>
                Every plan includes white-glove onboarding, a dedicated editor,
                and the proprietary retention frameworks we've used to 3× organic
                reach for high-ticket founders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          <div className="row justify-content-center">
            {PLANS.map((plan) => (
              <div key={plan.name} className="col-lg-4 col-md-6 mb-4 d-flex">
                <div className={`pricing-card${plan.featured ? " featured" : ""} w-100`} data-aos="fade-up">
                  {plan.featured && (
                    <div style={{
                      position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                      background: "var(--color-primary)", color: "#fff", fontSize: 11,
                      fontWeight: 700, padding: "4px 16px", borderRadius: "var(--radius-pill)",
                      letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap",
                    }}>Most Popular</div>
                  )}
                  <p className="pricing-name">{plan.name}</p>
                  <div className="mb-2">
                    <span className="pricing-amount">{plan.price}</span>
                    <span className="pricing-period">/mo</span>
                  </div>
                  <p style={{ fontSize: 13, color: plan.featured ? "rgba(255,255,255,0.5)" : "var(--color-text-muted)", marginBottom: 20 }}>{plan.tagline}</p>
                  <div className="pricing-divider"></div>
                  <ul className="pricing-feature-list">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <i className="fas fa-check feat-check"></i>
                        {f}
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} style={{ opacity: 0.3, textDecoration: "line-through" }}>
                        <i className="fas fa-times" style={{ fontSize: 11, flexShrink: 0 }}></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={CTA_URL} className={plan.featured ? "btn-cta-white" : "btn-dark-pill"} style={{ justifyContent: "center" }}>
                    Get Started
                    <i className="fas fa-arrow-right" style={{ fontSize: 11 }}></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          <div className="section-header-center">
            <span className="sec-badge">Compare Plans</span>
            <h2 className="sec-title">What's Included in Each Plan</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="qm-card" style={{ padding: 0, overflow: "hidden" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "var(--color-card-dark)" }}>
                      <th style={{ padding: "16px 24px", textAlign: "left", color: "rgba(255,255,255,0.5)", fontSize: 13, fontWeight: 600 }}>Feature</th>
                      {["Growth", "Scale", "Partner"].map((p) => (
                        <th key={p} style={{ padding: "16px 16px", textAlign: "center", color: "#fff", fontSize: 14, fontWeight: 700 }}>{p}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_ROWS.map((row, i) => (
                      <tr key={row.feature} style={{ borderBottom: "1px solid var(--color-border)", background: i % 2 === 0 ? "var(--color-card)" : "var(--color-bg)" }}>
                        <td style={{ padding: "14px 24px", fontSize: 14, color: "var(--color-text)" }}>{row.feature}</td>
                        {[row.growth, row.scale, row.partner].map((has, j) => (
                          <td key={j} style={{ textAlign: "center", padding: "14px 16px" }}>
                            {has
                              ? <i className="fas fa-check" style={{ color: "var(--color-primary)", fontSize: 14 }}></i>
                              : <span style={{ color: "var(--color-border)", fontSize: 18, lineHeight: 1 }}>—</span>
                            }
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          <div className="section-header-center">
            <span className="sec-badge">FAQ</span>
            <h2 className="sec-title">Pricing Questions Answered</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {FAQS.map((faq, i) => (
                <div key={i} className="qm-card mb-3" data-aos="fade-up" data-aos-delay={i * 50}>
                  <h5 style={{ marginBottom: 10 }}>{faq.q}</h5>
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
            <h2>Not Sure Which Plan Is Right for You?</h2>
            <p>Book a 15-minute call and we'll recommend the right plan based on your content volume, goals, and current metrics. No pressure, no pitch.</p>
            <a href={CTA_URL} className="btn-cta-white">
              Book a Free Strategy Call
              <i className="fas fa-arrow-right" style={{ fontSize: 11, marginLeft: 6 }}></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
