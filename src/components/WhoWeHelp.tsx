const CHECKLIST = [
  "0% Fluff — every cut has a purpose",
  "Proprietary client portal & dashboard",
  "Predictable ROI through retention metrics",
  "Full backend automation with AI & n8n",
];

export default function WhoWeHelp() {
  return (
    <section className="who-we-help-section section" id="who-we-help">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <img
              src="/img/our-work2.png"
              alt="Quant Media work"
            />
          </div>

          <div className="col-lg-6 col-md-12 mb-4 pl-lg-5" data-aos="fade-up">
            <span className="sec-badge">The Quant Advantage</span>
            <h2 className="sec-title">
              Standard Editing vs.
              <br />
              Retention Engineering
            </h2>
            <p className="sec-sub mb-4">
              We build the backend systems that turn viewers into paying clients.
              Most agencies splice clips — we analyze drop-off graphs.
            </p>

            <div className="mt-2">
              {CHECKLIST.map((item) => (
                <div key={item} className="checklist-item">
                  <span className="check-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
