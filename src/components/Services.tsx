const SERVICES = [
  {
    step: "01",
    icon: "fas fa-couch",
    title: "Elite Comfort",
    description:
      "Instead of scripting, shooting, and editing — just tap 'Approve' from your couch and watch highly qualified leads flow effortlessly.",
    dark: false,
  },
  {
    step: "02",
    icon: "fas fa-chart-pie",
    title: "The 50-30-20 Framework",
    description:
      "Our proprietary hook structure locks in attention in the first 3 seconds, sustains it through the argument, and converts at the CTA.",
    dark: true,
  },
  {
    step: "03",
    icon: "fas fa-robot",
    title: "Bespoke Automation",
    description:
      "Custom n8n workflows and AI chatbots turn your high-retention views into a frictionless, 24/7 lead generation machine.",
    dark: false,
  },
];

export default function Services() {
  return (
    <section id="what-we-do" className="services-section section">
      <div className="container">
        <div className="section-header-center">
          <span className="sec-badge">The Mechanism</span>
          <h2 className="sec-title">How We Scale Your Brand</h2>
          <p className="sec-sub">
            Three pillars that transform your content into a compounding
            inbound machine.
          </p>
        </div>

        <div className="bento-grid-services">
          {SERVICES.map((svc) => (
            <div
              key={svc.step}
              className={`bento-service-card${svc.dark ? " dark" : ""}`}
              data-aos="fade-up"
            >
              <p className="step-number">{svc.step}</p>
              <div className="svc-icon">
                <i className={svc.icon}></i>
              </div>
              <h5>{svc.title}</h5>
              <p>{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
