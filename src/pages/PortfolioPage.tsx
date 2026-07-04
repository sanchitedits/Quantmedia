import useSEO from "../hooks/useSEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Icon from "../components/Icon";

const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";
const EMBED_PARAMS = "controls=1&rel=0&modestbranding=1&iv_load_policy=3";

const VIDEOS = [
  { id: "OKW_krXnzZ4", title: "High-Retention Sales Video — Coach Client" },
  { id: "OX23CtXx6Kg", title: "Authority Building Long-Form — Consultant" },
  { id: "jgAnglNJcTQ", title: "Viral Hook Short — Course Creator" },
];

const RESULTS = [
  {
    metric: "20% → 65%",
    label: "Retention Rate",
    quote: "We went from a 20% retention rate to holding 65% of our audience to the end of the video. The inbound leads have also increased.",
    author: "CEO — WinRate Consulting",
  },
  {
    metric: "3× Growth",
    label: "Organic Reach",
    quote: "Our organic reach tripled in 30 days. Recommended if you are tired of freelancers and want free time to close more leads.",
    author: "Founder — Enterprise Consulting",
  },
];

const NICHES = [
  "High-Ticket Coaches & Consultants",
  "B2B SaaS Founders",
  "Online Course Creators",
  "Real Estate & Finance Educators",
  "LinkedIn Thought Leaders",
  "YouTube Educators & Educators",
];

export default function PortfolioPage() {
  useSEO({
    title: "Our Work & Portfolio | Quant Media Video Retention Engineering",
    description: "See real results from Quant Media's video retention engineering. Client case studies showing 3× organic reach growth, 65% retention rates, and increased inbound leads for high-ticket founders and coaches.",
    canonical: "https://www.quantmedia.co/portfolio",
  });

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero-section" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <span className="sec-badge">Portfolio & Results</span>
              <h1 className="sec-title" style={{ fontSize: 44 }}>
                Real Videos. Real Retention.
                <br />
                <span style={{ color: "var(--color-primary)" }}>Real Revenue.</span>
              </h1>
              <p className="sec-sub mx-auto" style={{ fontSize: 17, maxWidth: 600 }}>
                Every video below was engineered — not edited. We study the data, build
                the hook architecture, and deliver assets that hold attention from the
                first frame to the final CTA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          <div className="section-header-center">
            <span className="sec-badge">Recent Work</span>
            <h2 className="sec-title">High-Retention Video Samples</h2>
            <p className="sec-sub">All videos engineered for maximum watch time and conversion.</p>
          </div>
          <div className="row justify-content-center">
            {VIDEOS.map((v) => (
              <div key={v.id} className="col-lg-4 col-md-6 mb-4">
                <div data-aos="fade-up">
                  <div className="portfolio-video-wrap--landscape">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?${EMBED_PARAMS}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={v.title}
                      loading="lazy"
                    ></iframe>
                  </div>
                  <p style={{ textAlign: "center", fontSize: 13, color: "var(--color-text-muted)", marginTop: 10 }}>{v.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section" style={{ background: "var(--color-card-dark)", padding: "80px 0" }}>
        <div className="container">
          <div className="section-header-center">
            <span className="sec-badge" style={{ background: "rgba(97,76,170,0.3)", color: "#a48ff0" }}>Client Results</span>
            <h2 className="sec-title" style={{ color: "#fff" }}>Numbers That Actually Matter</h2>
            <p className="sec-sub" style={{ color: "rgba(255,255,255,0.55)" }}>
              We measure success in retention rates, lead volume, and revenue — not just views.
            </p>
          </div>
          <div className="row">
            {RESULTS.map((r) => (
              <div key={r.author} className="col-lg-6 col-md-12 mb-4">
                <div style={{
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "var(--radius)", padding: "var(--card-pad)",
                }} data-aos="fade-up">
                  <div style={{ fontSize: 40, fontWeight: 800, color: "var(--color-primary)", letterSpacing: -1, marginBottom: 4 }}>
                    {r.metric}
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>
                    {r.label}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontStyle: "italic", lineHeight: 1.7, marginBottom: 16 }}>
                    "{r.quote}"
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: 0, fontWeight: 600 }}>{r.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niches */}
      <section className="section" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          <div className="section-header-center">
            <span className="sec-badge">Who We Serve</span>
            <h2 className="sec-title">Industries We Specialize In</h2>
            <p className="sec-sub">
              We focus exclusively on high-ticket niches where video content directly
              drives discovery calls and revenue.
            </p>
          </div>
          <div className="row justify-content-center">
            {NICHES.map((niche) => (
              <div key={niche} className="col-lg-4 col-md-6 mb-3">
                <div className="qm-card text-center" style={{ padding: "20px 24px" }} data-aos="fade-up">
                  <i className="fas fa-check" style={{ color: "var(--color-primary)", fontSize: 14, marginBottom: 8, display: "block" }}></i>
                  <p style={{ margin: 0, fontWeight: 600, color: "var(--color-heading)", fontSize: 15 }}>{niche}</p>
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
            <h2>See What We Can Do for Your Channel</h2>
            <p>Book a 15-minute discovery call and we'll audit your top-performing video live — showing you exactly where retention drops and how we'd fix it.</p>
            <a href={CTA_URL} className="btn-cta-white">
              Book a Free Audit Call
              <i className="fas fa-arrow-right" style={{ fontSize: 11, marginLeft: 6 }}></i>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
