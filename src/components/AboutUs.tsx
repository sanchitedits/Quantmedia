export default function AboutUs() {
  return (
    <section id="about-us" className="about-us-section section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-up">
            <span className="sec-badge">The Mechanism</span>
            <h2 className="sec-title">
              We Don't Just Edit.
              <br />
              We Engineer Attention.
            </h2>
            <p className="sec-sub">
              Most agencies splice clips together and slap on captions. We
              analyze drop-off graphs and build psychological frameworks
              that force your audience to keep watching — all the way to
              your CTA.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 mb-4">
            <img
              src="/img/about-us.png"
              alt="About Quant Media — engineering attention"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
