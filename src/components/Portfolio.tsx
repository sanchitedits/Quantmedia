const VIDEOS = [
  { id: "OKW_krXnzZ4", delay: 0 },
  { id: "OX23CtXx6Kg", delay: 100 },
  { id: "jgAnglNJcTQ", delay: 200 },
];

const EMBED_PARAMS =
  "controls=1&rel=0&modestbranding=1&iv_load_policy=3";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section section">
      <div className="container">
        <div className="section-header-center">
          <span className="sec-badge">Portfolio</span>
          <h2 className="sec-title">Recent Work</h2>
          <p className="sec-sub">
            High-retention videos engineered for founders who close.
          </p>
        </div>

        <div className="row justify-content-center">
          {VIDEOS.map((v) => (
            <div key={v.id} className="col-lg-4 col-md-6 mb-4">
              <div
                className="portfolio-video-wrap"
                data-aos="fade-up"
                data-aos-delay={v.delay}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?${EMBED_PARAMS}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`Portfolio video ${v.id}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
