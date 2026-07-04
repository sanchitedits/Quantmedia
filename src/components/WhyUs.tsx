const ADVANTAGES = [
  {
    icon: "fas fa-filter",
    title: "0% Fluff",
    description:
      "No useless transitions. Every single cut serves a psychological purpose to keep the viewer engaged.",
    dark: false,
  },
  {
    icon: "fas fa-laptop-code",
    title: "Proprietary Portal",
    description:
      "Track assets, approve videos, and monitor your pipeline directly in your custom-built client dashboard.",
    dark: true,
  },
  {
    icon: "fas fa-chart-line",
    title: "Predictable ROI",
    description:
      "By fixing your retention rate we drastically lower your CAC and amplify your organic reach.",
    dark: true,
  },
  {
    icon: "fas fa-cogs",
    title: "Full Automation",
    description:
      "We build the backend systems that turn viewers into paying clients — not just MP4 files.",
    dark: false,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="why-us-section section">
      <div className="container">
        <div className="section-header-center">
          <span className="sec-badge">The Quant Advantage</span>
          <h2 className="sec-title">Why Founders Choose Us</h2>
          <p className="sec-sub">
            The delta between standard video editing and retention
            engineering is the difference between views and revenue.
          </p>
        </div>

        <div className="bento-grid-why">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.title}
              className={`bento-why-card${adv.dark ? " dark" : ""}`}
              data-aos="fade-up"
            >
              <div className="why-icon">
                <i className={adv.icon}></i>
              </div>
              <h5>{adv.title}</h5>
              <p>{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
