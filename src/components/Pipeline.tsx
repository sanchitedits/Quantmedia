const STEPS = [
  {
    id: "collapseOne",
    heading: "headingOne",
    label: "Step 01 - Deep Analytics",
    body: "We audit your channel data to find exactly where your current content is bleeding viewers.",
    defaultOpen: true,
  },
  {
    id: "collapseTwo",
    heading: "headingTwo",
    label: "Step 02 - Hook Architecture",
    body: "We script and storyboard custom retention mechanisms designed specifically for your high-ticket demographic.",
    defaultOpen: false,
  },
  {
    id: "collapseThree",
    heading: "headingThree",
    label: "Step 03 - Precision Editing",
    body: "Our editors apply psychological pacing, dynamic B-roll, and premium motion graphics to lock in attention.",
    defaultOpen: false,
  },
];

export default function Pipeline() {
  return (
    <section id="how-we-do" className="pipeline-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <img
              src="/img/about-us.png"
              alt="Our pipeline process"
              className="img-fluid pipeline-section feature-image"
            />
          </div>

          <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-up">
            <span className="section-label">The Pipeline</span>
            <h2>How We Scale Your Brand, Step-by-Step</h2>
            <p>
              We don't just guess what works. We use a data-driven approach
              to ensure every piece of content performs.
            </p>

            <div className="accordion mt-4" id="pipelineAccordion">
              {STEPS.map((step) => (
                <div key={step.id} className="card border-0 mb-2">
                  <div className="card-header bg-white border-0 p-0" id={step.heading}>
                    <h5 className="mb-0">
                      <button
                        className={`btn btn-link text-dark font-weight-bold p-0 text-left w-100${step.defaultOpen ? "" : " collapsed"}`}
                        type="button"
                        data-toggle="collapse"
                        data-target={`#${step.id}`}
                        aria-expanded={step.defaultOpen}
                        aria-controls={step.id}
                        style={{ textDecoration: "none" }}
                      >
                        <i className="fas fa-plus mr-2" style={{ color: "var(--color-primary)" }}></i>
                        {step.label}
                      </button>
                    </h5>
                  </div>
                  <div
                    id={step.id}
                    className={`collapse${step.defaultOpen ? " show" : ""}`}
                    aria-labelledby={step.heading}
                    data-parent="#pipelineAccordion"
                  >
                    <div className="card-body text-muted px-4 py-3">
                      {step.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
