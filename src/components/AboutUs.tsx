export default function AboutUs() {
  return (
    <section id="about-us" className="about-us-section section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <img
              src="/img/about-us.png"
              alt="About Quant Media"
              className="img-fluid about-us-section feature-image"
            />
          </div>

          <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-up">
            <span className="section-label">The Mechanism</span>
            <h2>We Don't Just Edit. We Engineer Attention.</h2>
            <p>
              Most agencies splice clips together and slap on captions. We
              analyze drop-off graphs and build psychological frameworks
              that force your audience to keep watching.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
