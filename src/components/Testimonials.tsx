const TESTIMONIALS = [
  {
    quote:
      "We went from a 20% retention rate to holding 65% of our audience to the end of the video. The inbound leads have also increased significantly.",
    author: "CEO, Founder — WinRate Consulting",
  },
  {
    quote:
      "Our organic reach tripled in 30 days. Recommended if you are tired of freelancers and want free time to close more leads.",
    author: "Founder — Enterprise Consulting",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="container">
        <div className="section-header-center">
          <span className="sec-badge">The Proof</span>
          <h2 className="sec-title">Numbers Don't Lie.</h2>
          <p className="sec-sub">
            Real results from real founders who made the switch.
          </p>
        </div>

        <div className="row">
          {TESTIMONIALS.map((t) => (
            <div key={t.author} className="col-lg-6 col-md-12 mb-4">
              <div className="testimonial-card" data-aos="fade-up">
                <div className="t-stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <i key={s} className="fa fa-star"></i>
                  ))}
                </div>
                <p className="t-quote">"{t.quote}"</p>
                <p className="t-author">{t.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
