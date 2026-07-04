import useSEO from "../hooks/useSEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Icon from "../components/Icon";

const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";
const FORM_ACTION = "https://formspree.io/f/xaqgqejp";

const CONTACT_POINTS = [
  {
    icon: "fas fa-calendar-alt",
    title: "Book a Discovery Call",
    desc: "15 minutes. No pitch, no pressure. We'll audit your content live and tell you exactly how to improve your retention rate.",
    action: CTA_URL,
    label: "Book on Cal.com",
  },
  {
    icon: "fab fa-instagram",
    title: "Instagram DM",
    desc: "Reach us on Instagram for a faster initial response. We typically reply within a few hours during business hours.",
    action: "https://www.instagram.com/quantmedia.co",
    label: "@quantmedia.co",
  },
  {
    icon: "fab fa-youtube",
    title: "YouTube",
    desc: "Watch our behind-the-scenes content on the Quant Media YouTube channel and see our editing methodology in action.",
    action: "https://youtube.com/@therealsanchitpatel",
    label: "@therealsanchitpatel",
  },
];

export default function ContactPage() {
  useSEO({
    title: "Contact Quant Media | Book a Free Video Retention Audit",
    description: "Contact Quant Media to book a free 15-minute video retention audit. We help high-ticket founders, coaches, and consultants scale organic reach through data-driven video editing and automation.",
    canonical: "https://www.quantmedia.co/contact",
  });

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero-section" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <span className="sec-badge">Contact Us</span>
              <h1 className="sec-title" style={{ fontSize: 44 }}>
                Let's Talk About
                <br />
                <span style={{ color: "var(--color-primary)" }}>Your Growth.</span>
              </h1>
              <p className="sec-sub mx-auto" style={{ fontSize: 17, maxWidth: 520 }}>
                We accept a limited number of new clients each month. If you're serious
                about scaling your organic reach, reach out now.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="section" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          <div className="row justify-content-center mb-5">
            {CONTACT_POINTS.map((cp) => (
              <div key={cp.title} className="col-lg-4 col-md-6 mb-4">
                <div className="qm-card text-center h-100" data-aos="fade-up">
                  <div style={{
                    width: 52, height: 52, borderRadius: "var(--radius-sm)",
                    background: "var(--color-primary-tint)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px", color: "var(--color-primary)", fontSize: 22,
                  }}>
                    <i className={cp.icon}></i>
                  </div>
                  <h5 style={{ marginBottom: 10 }}>{cp.title}</h5>
                  <p style={{ color: "var(--color-text)", lineHeight: 1.7, marginBottom: 20, fontSize: 14 }}>{cp.desc}</p>
                  <a href={cp.action} className="btn-dark-pill" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, padding: "10px 20px" }}>
                    {cp.label}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="contact-form-card" data-aos="fade-up">
                <span className="sec-badge mb-3" style={{ marginBottom: 12 }}>Send a Message</span>
                <h3 style={{ marginBottom: 6 }}>Prefer to Write? We Read Everything.</h3>
                <p className="form-subtitle">
                  Fill out the form below and we'll respond within 24 hours with next steps.
                </p>
                <form action={FORM_ACTION} method="POST">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" name="name" className="qm-input" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" name="email" className="qm-input" placeholder="Your Email" required />
                    </div>
                  </div>
                  <input type="text" name="subject" className="qm-input" placeholder="Subject (e.g. 'Interested in Scale Plan')" required />
                  <textarea name="message" className="qm-input" rows={5} placeholder="Tell us about your channel, current content volume, and what you're hoping to achieve..." required style={{ resize: "vertical" }}></textarea>
                  <button type="submit" className="btn-dark-pill w-100" style={{ marginTop: 4, justifyContent: "center" }}>
                    Send Message
                    <i className="fas fa-paper-plane" style={{ fontSize: 12 }}></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
