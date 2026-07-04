const SERVICES = [
  {
    icon: "fas fa-couch",
    title: "Elite Comfort",
    description:
      "Instead of scripting, shooting, and editing—just tap 'Approve' from your couch and watch highly qualified leads flow into your pipeline effortlessly.",
    delay: 0,
  },
  {
    icon: "fas fa-chart-pie",
    title: "The 50-30-20 Framework",
    description:
      "Our proprietary hook structure locks in attention in the first 3 seconds, sustains it through the argument, and converts viewers at the CTA.",
    delay: 100,
  },
  {
    icon: "fas fa-robot",
    title: "Bespoke Automation",
    description:
      "We integrate custom workflows using n8n and AI chatbots, turning your high-retention views into a frictionless, 24/7 lead generation machine.",
    delay: 200,
  },
];

export default function Services() {
  return (
    <section id="what-we-do" className="services-section section bg-grey">
      <div className="container">
        <div className="title-section">
          <span className="section-label">The Mechanism</span>
          <h2>
            Choose our
            <br />
            creative services
          </h2>
        </div>

        <div className="row">
          {SERVICES.map((svc) => (
            <div key={svc.title} className="col-lg-4 col-md-6 mb-4">
              <div
                className="service-card bg-white p-4 border"
                data-aos="fade-up"
                data-aos-delay={svc.delay}
              >
                <i
                  className={svc.icon}
                  style={{ fontSize: 50, color: "var(--color-primary)", marginBottom: 12, display: "block" }}
                ></i>
                <h5 className="font-weight-bold">{svc.title}</h5>
                <p className="text-muted mb-0">{svc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
