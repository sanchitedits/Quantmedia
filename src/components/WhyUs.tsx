const ADVANTAGES = [
  {
    icon: "fas fa-filter",
    title: "0% Fluff",
    description:
      "No useless transitions. Every single cut serves a psychological purpose to keep the viewer engaged.",
    delay: 0,
  },
  {
    icon: "fas fa-laptop-code",
    title: "Proprietary Portal",
    description:
      "Track assets, approve videos, and monitor your pipeline directly in your custom-built client dashboard.",
    delay: 100,
  },
  {
    icon: "fas fa-chart-line",
    title: "Predictable ROI",
    description:
      "By fixing your retention rate, we drastically lower your CAC and amplify your organic reach.",
    delay: 200,
  },
  {
    icon: "fas fa-cogs",
    title: "Full Automation",
    description:
      "We don't just deliver MP4s. We build the backend systems that turn viewers into paying clients.",
    delay: 300,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us-section section bg-grey">
      <div className="container">
        <div className="title-section">
          <span className="section-label">The Quant Advantage</span>
          <h2>Standard Editing vs. Retention Engineering</h2>
        </div>

        <div className="row">
          {ADVANTAGES.map((adv) => (
            <div key={adv.title} className="col-lg-6 col-md-12 mb-4">
              <div
                className="advantage-card d-flex align-items-start bg-white p-4 h-100"
                data-aos="fade-up"
                data-aos-delay={adv.delay}
              >
                <div className="mr-4 flex-shrink-0">
                  <i
                    className={adv.icon}
                    style={{ fontSize: 50, color: "var(--color-primary)" }}
                  ></i>
                </div>
                <div>
                  <h5 className="mb-2 font-weight-bold">{adv.title}</h5>
                  <p className="text-muted mb-0">{adv.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
