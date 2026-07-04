const NAV_LINKS = [
  { label: "Home",      href: "#hero" },
  { label: "Mechanism", href: "#about-us" },
  { label: "Pipeline",  href: "#how-we-do" },
  { label: "Services",  href: "#what-we-do" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Advantage", href: "#why-us" },
  { label: "Pricing",   href: "#pricing" },
  { label: "Contact",   href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg qm-navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          <h2>Quant Media</h2>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-align-justify"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="nav-item">
                <a className="nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
