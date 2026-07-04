const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";

const PLANS = [
  {
    name: "Growth",
    price: "$1499",
    featured: false,
    features: [
      "15 Retention-Engineered Assets",
      "Custom Hook Strategy",
      "Monthly Analytics Audit",
      "Client Portal Access",
      "Standard Turnaround",
    ],
    delay: 0,
  },
  {
    name: "Scale",
    price: "$2499",
    featured: true,
    features: [
      "30 Retention-Engineered Assets",
      "Long-Form Repurposing",
      "Weekly Strategy Sync",
      "Dedicated Account Editor",
      "Priority Turnaround",
    ],
    delay: 100,
  },
  {
    name: "Partner",
    price: "$4500",
    featured: false,
    features: [
      "60+ High-Retention Assets",
      "Full Channel Management",
      "n8n Lead Gen Automation",
      "Custom AI Chatbot Integration",
      "VIP Slack Channel",
    ],
    delay: 200,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="title-section">
          <span className="section-label">The Investment</span>
          <h2>Elite Infrastructure for High-Ticket Brands</h2>
        </div>

        <div className="row justify-content-center">
          {PLANS.map((plan) => (
            <div key={plan.name} className="col-lg-4 col-md-6 mb-4">
              <div
                className={`pricing-card${plan.featured ? " pricing-card-featured" : ""}`}
                data-aos="fade-up"
                data-aos-delay={plan.delay}
              >
                <h5>{plan.name}</h5>
                <h3>
                  {plan.price}<span>/mo</span>
                </h3>
                <ul className="mb-4">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={CTA_URL}
                  className={plan.featured ? "btn-primary-qm" : "btn-outline-qm"}
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
