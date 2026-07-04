const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";

const PLANS = [
  {
    name: "Growth",
    price: "$1,499",
    featured: false,
    features: [
      "15 Retention-Engineered Assets",
      "Custom Hook Strategy",
      "Monthly Analytics Audit",
      "Client Portal Access",
      "Standard Turnaround",
    ],
  },
  {
    name: "Scale",
    price: "$2,499",
    featured: true,
    features: [
      "30 Retention-Engineered Assets",
      "Long-Form Repurposing",
      "Weekly Strategy Sync",
      "Dedicated Account Editor",
      "Priority Turnaround",
    ],
  },
  {
    name: "Partner",
    price: "$4,500",
    featured: false,
    features: [
      "60+ High-Retention Assets",
      "Full Channel Management",
      "n8n Lead Gen Automation",
      "Custom AI Chatbot Integration",
      "VIP Slack Channel",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section section">
      <div className="container">
        <div className="section-header-center">
          <span className="sec-badge">The Investment</span>
          <h2 className="sec-title">
            Elite Infrastructure for
            <br />
            High-Ticket Brands
          </h2>
          <p className="sec-sub">
            Every plan includes white-glove onboarding and dedicated
            account management.
          </p>
        </div>

        <div className="row justify-content-center">
          {PLANS.map((plan) => (
            <div key={plan.name} className="col-lg-4 col-md-6 mb-4 d-flex">
              <div
                className={`pricing-card${plan.featured ? " featured" : ""} w-100`}
                data-aos="fade-up"
              >
                <p className="pricing-name">{plan.name}</p>
                <div className="mb-2">
                  <span className="pricing-amount">{plan.price}</span>
                  <span className="pricing-period">/mo</span>
                </div>

                <div className="pricing-divider"></div>

                <ul className="pricing-feature-list">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <i className="fas fa-check feat-check"></i>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={CTA_URL}
                  className={plan.featured ? "btn-cta-white" : "btn-dark-pill"}
                  style={{ justifyContent: "center" }}
                >
                  Get Started
                  <i className="fas fa-arrow-right" style={{ fontSize: 12 }}></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
