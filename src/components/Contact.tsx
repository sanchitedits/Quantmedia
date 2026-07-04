import Icon from "./Icon";

const FORM_ACTION = "https://formspree.io/f/xaqgqejp";

export default function Contact() {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="contact-form-card" data-aos="fade-up">
              <span className="sec-badge mb-3">Contact Us</span>
              <h3>Let's Talk Growth</h3>
              <p className="form-subtitle">
                Drop us a message and our team will get back to you within
                24 hours.
              </p>

              <form action={FORM_ACTION} method="POST">
                <input
                  type="text"
                  name="name"
                  className="qm-input"
                  placeholder="Your Name"
                  aria-label="Your name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="qm-input"
                  placeholder="Your Email"
                  aria-label="Your email address"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  className="qm-input"
                  placeholder="Subject"
                  aria-label="Message subject"
                  required
                />
                <textarea
                  name="message"
                  className="qm-input"
                  rows={5}
                  placeholder="Your Message"
                  aria-label="Your message"
                  required
                  style={{ resize: "vertical" }}
                ></textarea>
                <button
                  type="submit"
                  className="btn-dark-pill w-100"
                  style={{ marginTop: 4, justifyContent: "center" }}
                >
                  Send Message
                  <Icon name="paper-plane" style={{ fontSize: 12 }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
