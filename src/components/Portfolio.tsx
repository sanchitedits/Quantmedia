const VIDEOS = [
  { id: "OKW_krXnzZ4", delay: 0 },
  { id: "OX23CtXx6Kg", delay: 100 },
  { id: "jgAnglNJcTQ", delay: 200 },
];

const EMBED_PARAMS = "controls=0&rel=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section section">
      <div className="container">
        <div className="title-section">
          <span className="section-label">Portfolio</span>
          <h2>Discover our recent projects</h2>
        </div>

        <div className="row justify-content-center">
          {VIDEOS.map((v) => (
            <div key={v.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div
                data-aos="fade-up"
                data-aos-delay={v.delay}
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "177.77%",
                  height: 0,
                  backgroundColor: "#000",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?${EMBED_PARAMS}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
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
