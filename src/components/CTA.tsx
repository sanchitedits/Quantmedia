const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";

export default function CTA() {
  return (
    <section className="cta-section section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="bg-white p-5 rounded shadow-sm text-center border"
              data-aos="fade-up"
            >
              <h2 className="font-weight-bold mb-3">
                Ready to Scale Your Reach?
              </h2>
              <p
                className="text-muted mb-4 mx-auto"
                style={{ maxWidth: 600, fontSize: 16 }}
              >
                Stop burning money on standard editors. Let us engineer your
                retention and build backend systems that turn viewers into
                paying clients.
              </p>
              <a
                href={CTA_URL}
                className="btn-primary-qm px-5 py-3"
                style={{ fontSize: 18, borderRadius: 8 }}
              >
                Book a Growth Audit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
