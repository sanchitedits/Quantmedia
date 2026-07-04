import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon";

const SECTION_LINKS = [
  { label: "Services",     anchor: "what-we-do" },
  { label: "Portfolio",    anchor: "portfolio" },
  { label: "Pipeline",     anchor: "how-we-do" },
  { label: "Pricing",      anchor: "pricing" },
  { label: "Contact",      anchor: "contact" },
];

const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { pathname }            = useLocation();
  const isHome                  = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const getHref = (anchor: string) => (isHome ? `#${anchor}` : `/#${anchor}`);

  return (
    <nav className={`qm-navbar${scrolled ? " qm-navbar--scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="container qm-navbar__inner">
        <Link to="/" className="qm-navbar__brand" onClick={close} aria-label="Quant Media home">
          <span className="qm-navbar__logo-icon">Q</span>
          Quant Media
        </Link>

        <ul className="qm-navbar__links" role="list">
          {SECTION_LINKS.map((link) => (
            <li key={link.anchor}>
              <a className="qm-navbar__link" href={getHref(link.anchor)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={CTA_URL} className="btn-dark-pill qm-navbar__cta" target="_blank" rel="noopener noreferrer">
          Book a Call
          <Icon name="arrow-right" aria-hidden style={{ fontSize: 11 }} />
        </a>

        <button
          className="qm-navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "times" : "bars"} aria-hidden />
        </button>
      </div>

      <div className={`qm-navbar__drawer${open ? " qm-navbar__drawer--open" : ""}`} aria-hidden={!open}>
        <div className="container">
          <ul className="qm-navbar__drawer-links" role="list">
            {SECTION_LINKS.map((link) => (
              <li key={link.anchor}>
                <a href={getHref(link.anchor)} className="qm-navbar__drawer-link" onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="qm-navbar__drawer-sep" aria-hidden="true"></li>
            <li><Link to="/about"   className="qm-navbar__drawer-link" onClick={close}>About Us</Link></li>
            <li><Link to="/contact" className="qm-navbar__drawer-link" onClick={close}>Contact</Link></li>
          </ul>
          <a href={CTA_URL} className="btn-dark-pill qm-navbar__drawer-cta" onClick={close} target="_blank" rel="noopener noreferrer">
            Book a Call
            <Icon name="arrow-right" aria-hidden style={{ fontSize: 11 }} />
          </a>
        </div>
      </div>
    </nav>
  );
}
