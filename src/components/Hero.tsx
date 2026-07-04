const VIDEO_SRC_MP4 =
  "https://res.cloudinary.com/dyjqyuzmu/video/upload/v1/lv_0_20260309233147_azv3nj.mp4";
const VIDEO_SRC_WEBM =
  "https://res.cloudinary.com/dyjqyuzmu/video/upload/v1/lv_0_20260309233147_azv3nj.webm";
const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";

export default function Hero() {
  return (
    <div className="hero-section" style={{ paddingBottom: 40, paddingTop: 20 }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="hero-content" data-aos="fade-up">
              <span className="section-label">MARKETING AGENCY</span>
              <h2>
                We Don't Just Edit. <br /> We Engineer Attention.
              </h2>
              <p>
                We partner exclusively with Elite Founders and Serious
                Operators. When a $250M marketer like Jason Fladlien or a
                high-level founder like Mike Claudio needs a backend solution,
                they look for us.
              </p>
              <a href={CTA_URL} className="btn-primary-qm">
                Book a Growth Audit
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mb-4">
            <div className="hero-content" data-aos="fade-up">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "56.25%",
                  height: 0,
                  backgroundColor: "#000",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <video
                  controls
                  playsInline
                  preload="metadata"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <source src={VIDEO_SRC_MP4} type="video/mp4" />
                  <source src={VIDEO_SRC_WEBM} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
