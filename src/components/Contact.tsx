const FORM_ACTION = "https://formspree.io/f/xaqgqejp";

export default function Contact() {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="title-section">
          <span className="section-label">Contact us</span>
          <h2>Get in touch with us</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div
              className="bg-white p-4 rounded shadow-sm"
              data-aos="fade-up"
            >
              <h5 className="font-weight-bold mb-4 text-center">
                Send us a message
              </h5>

              <form action={FORM_ACTION} method="POST">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control bg-light border-0 py-4"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-light border-0 py-4"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control bg-light border-0 py-4"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <textarea
                    name="message"
                    className="form-control bg-light border-0 py-3"
                    rows={4}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary-qm border-0 w-100 py-3"
                  style={{ marginTop: 0 }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
