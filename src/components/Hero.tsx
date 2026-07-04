import Icon from "./Icon";

const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";
const VIDEO_MP4 =
  "https://res.cloudinary.com/dyjqyuzmu/video/upload/v1/lv_0_20260309233147_azv3nj.mp4";
const VIDEO_WEBM =
  "https://res.cloudinary.com/dyjqyuzmu/video/upload/v1/lv_0_20260309233147_azv3nj.webm";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="hero-text" data-aos="fade-up">
              <span className="sec-badge">Elite Marketing Agency</span>
              <h1>
                We Don't Just Edit.
                <br />
                We Engineer
                <br />
                <span style={{ color: "var(--color-primary)" }}>Attention.</span>
              </h1>
              <p>
                We partner exclusively with elite founders and serious operators.
                When high-level brands need a retention-first backend solution,
                they look for us.
              </p>
              <div className="hero-btn-group">
                <a href={CTA_URL} className="btn-dark-pill">
                  Book a Growth Audit
                  <Icon name="arrow-right" style={{ fontSize: 12 }} />
                </a>
                <a href="#portfolio" className="btn-ghost-pill">
                  See Our Work
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="hero-video-wrap">
              <video controls playsInline preload="metadata">
                <source src={VIDEO_MP4} type="video/mp4" />
                <source src={VIDEO_WEBM} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
