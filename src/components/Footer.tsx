const SOCIALS = [
  {
    href: "https://www.instagram.com/quantmedia.co?igsh=dzV3c2Z5d2hiOXBr",
    icon: "fab fa-instagram",
    label: "Instagram",
  },
  {
    href: "https://youtube.com/@therealsanchitpatel?si=ZttIp7XRYq5Er_ec",
    icon: "fab fa-youtube",
    label: "YouTube",
  },
];

const NAV_LINKS = [
  { label: "Services",  href: "#what-we-do" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing",   href: "#pricing" },
  { label: "Contact",   href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="qm-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 mb-4">
            <div className="footer-brand">
              <h2>Quant Media</h2>
              <p>
                Elite retention engineering agency scaling high-ticket
                founders through data-driven video and backend automation.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 offset-lg-1">
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
              Navigation
            </p>
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
              Follow Us
            </p>
            <div className="footer-socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Quant Media. All Rights Reserved.
          </p>
          <p className="footer-copy">quantmedia.co</p>
        </div>
      </div>
    </footer>
  );
}
