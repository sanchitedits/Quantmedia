import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Services",  href: "#what-we-do" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pipeline",  href: "#how-we-do" },
  { label: "Pricing",   href: "#pricing" },
  { label: "Contact",   href: "#contact" },
];

const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`qm-navbar${scrolled ? " qm-navbar--scrolled" : ""}`}>
      <div className="container qm-navbar__inner">
        {/* ── Logo ── */}
        <a href="/" className="qm-navbar__brand" onClick={close}>
          <span className="qm-navbar__logo-icon">Q</span>
          Quant Media
        </a>

        {/* ── Desktop nav ── */}
        <ul className="qm-navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a className="qm-navbar__link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <a href={CTA_URL} className="btn-dark-pill qm-navbar__cta">
          Book a Call
          <i className="fas fa-arrow-right" style={{ fontSize: 11 }}></i>
        </a>

        {/* ── Mobile hamburger ── */}
        <button
          className="qm-navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${open ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`qm-navbar__drawer${open ? " qm-navbar__drawer--open" : ""}`}>
        <div className="container">
          <ul className="qm-navbar__drawer-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="qm-navbar__drawer-link" onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={CTA_URL} className="btn-dark-pill qm-navbar__drawer-cta" onClick={close}>
            Book a Call
            <i className="fas fa-arrow-right" style={{ fontSize: 11 }}></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
