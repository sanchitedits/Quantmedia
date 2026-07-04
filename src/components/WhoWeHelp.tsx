const CHECKLIST = [
  "0% Fluff",
  "Proprietary Portal",
  "Predictable ROI",
  "Full Automation",
];

export default function WhoWeHelp() {
  return (
    <section className="who-we-help-section section bg-grey">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-up">
            <span className="section-label">The Quant Advantage</span>
            <h2>Standard Editing vs. Retention Engineering</h2>
            <p>
              We build the backend systems that turn viewers into paying
              clients.
            </p>
            <ul className="list-unstyled mt-4">
              {CHECKLIST.map((item) => (
                <li key={item} className="mb-2">
                  <i className="fas fa-check text-theme mr-2" style={{ color: "var(--color-primary)" }}></i>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6 col-md-12 mb-4">
            <img
              src="/img/our-work2.png"
              alt="Our work"
              className="img-fluid rounded shadow who-we-help-section feature-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
