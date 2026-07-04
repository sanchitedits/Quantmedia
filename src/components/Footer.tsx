const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";

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
  { label: "Pipeline",  href: "#how-we-do" },
  { label: "Pricing",   href: "#pricing" },
  { label: "Contact",   href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="qm-footer">
      {/* ── Top CTA strip ── */}
      <div className="qm-footer__cta-strip">
        <div className="container">
          <div className="qm-footer__cta-inner">
            <div>
              <p className="qm-footer__cta-label">Ready to engineer your growth?</p>
              <h3 className="qm-footer__cta-heading">Let's Build Your System.</h3>
            </div>
            <a href={CTA_URL} className="btn-cta-white qm-footer__cta-btn">
              Book a Free Audit
              <i className="fas fa-arrow-right" style={{ fontSize: 11 }}></i>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="qm-footer__body">
        <div className="container">
          <div className="qm-footer__grid">

            {/* Brand col */}
            <div className="qm-footer__col qm-footer__col--brand">
              <div className="qm-footer__brand-name">
                <span className="qm-footer__brand-icon">Q</span>
                Quant Media
              </div>
              <p className="qm-footer__brand-desc">
                Elite retention engineering for high-ticket founders. We turn
                viewers into booked calls through data-driven video and backend
                automation.
              </p>
              <div className="qm-footer__socials">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="qm-footer__social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Nav links col */}
            <div className="qm-footer__col">
              <p className="qm-footer__col-heading">Navigation</p>
              <ul className="qm-footer__nav-list">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="qm-footer__nav-link">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact col */}
            <div className="qm-footer__col">
              <p className="qm-footer__col-heading">Get in Touch</p>
              <p className="qm-footer__contact-text">
                We work with a select number of clients each month. Schedule
                your discovery call early.
              </p>
              <a href={CTA_URL} className="qm-footer__inline-cta">
                Book a Discovery Call
                <i className="fas fa-arrow-right" style={{ fontSize: 11, marginLeft: 6 }}></i>
              </a>
            </div>

          </div>

          {/* ── Divider + bottom bar ── */}
          <div className="qm-footer__divider"></div>
          <div className="qm-footer__bottom">
            <p className="qm-footer__copy">
              &copy; {new Date().getFullYear()} Quant Media. All Rights Reserved.
            </p>
            <p className="qm-footer__copy">
              quantmedia.co
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
