const TESTIMONIALS = [
  {
    quote:
      "\"We went from a 20% retention rate to holding 65% of our audience to the end of the video. The inbound leads have also increased.\"",
    author: "CEO, Founder WinRate Consulting",
    delay: 0,
  },
  {
    quote:
      "\"Our organic reach tripled in 30 days. Recommended if you are tired of freelancers and want free time to close more leads.\"",
    author: "Founder, Enterprise Consultant",
    delay: 100,
  },
];

const STARS = [1, 2, 3, 4, 5];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section section bg-grey">
      <div className="container">
        <div className="title-section">
          <span className="section-label">The Proof</span>
          <h2>Numbers Don't Lie.</h2>
        </div>

        <div className="row">
          {TESTIMONIALS.map((t) => (
            <div key={t.author} className="col-lg-6 col-md-12 mb-4">
              <div
                className="testimonial-card p-4"
                data-aos="fade-up"
                data-aos-delay={t.delay}
              >
                <p className="text-muted font-italic mb-4">{t.quote}</p>
                <ul className="stars d-flex justify-content-center p-0 mb-3">
                  {STARS.map((s) => (
                    <li key={s}>
                      <i className="fa fa-star text-warning px-1"></i>
                    </li>
                  ))}
                </ul>
                <h5 className="text-center font-weight-bold m-0">{t.author}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
