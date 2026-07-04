import Icon from "./Icon";

const CTA_URL = "https://cal.com/quantmedia/15min?overlayCalendar=true";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card" data-aos="fade-up">
          <h2>Ready to Scale Your Reach?</h2>
          <p>
            Stop burning money on standard editors. Let us engineer your
            retention and build backend systems that turn viewers into
            paying clients.
          </p>
          <a href={CTA_URL} className="btn-cta-white">
            Book a Free Growth Audit
            <Icon name="arrow-right" style={{ fontSize: 12 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
