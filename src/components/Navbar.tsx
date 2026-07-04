const NAV_LINKS = [
  { label: "Services",  href: "#what-we-do" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pipeline",  href: "#how-we-do" },
  { label: "Pricing",   href: "#pricing" },
  { label: "Contact",   href: "#contact" },
];

const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg qm-navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          <h2>Quant Media</h2>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" style={{ color: "var(--color-heading)", fontSize: 16 }}></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="nav-item">
                <a className="nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={CTA_URL} className="btn-dark-pill navbar-cta">
            Book a Call
            <i className="fas fa-arrow-right" style={{ fontSize: 12 }}></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
