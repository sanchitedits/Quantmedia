const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/quantmedia.co?igsh=dzV3c2Z5d2hiOXBr",
    icon: "fab fa-instagram fa-instagram",
    label: "Instagram",
  },
  {
    href: "https://youtube.com/@therealsanchitpatel?si=ZttIp7XRYq5Er_ec",
    icon: "fab fa-youtube fa-youtube",
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="qm-footer">
      <div className="container">
        <h2>Quant Media</h2>
        <p>
          Quant Media is an elite retention engineering agency scaling
          high-ticket founders through data-driven video and backend
          automation.
        </p>
        <ul className="social-links">
          {SOCIAL_LINKS.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <i className={s.icon}></i>
              </a>
            </li>
          ))}
        </ul>
        <h6>Copyright &copy; {new Date().getFullYear()} Quant Media. All Rights Reserved.</h6>
      </div>
    </footer>
  );
}
