const STEPS = [
  {
    num: "01",
    title: "Deep Analytics Audit",
    body: "We dissect your channel data to find exactly where your content bleeds viewers — before writing a single word.",
  },
  {
    num: "02",
    title: "Hook Architecture",
    body: "We script and storyboard custom retention mechanisms designed specifically for your high-ticket demographic.",
  },
  {
    num: "03",
    title: "Precision Editing",
    body: "Our editors apply psychological pacing, dynamic B-roll, and premium motion graphics to lock in attention from first frame to CTA.",
  },
  {
    num: "04",
    title: "Deliver & Automate",
    body: "Assets land in your portal on schedule. Automation flows activate to convert viewers into booked calls — hands-free.",
  },
];

export default function Pipeline() {
  return (
    <section id="how-we-do" className="pipeline-section section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 mb-4">
            <img
              src="/img/about-us.png"
              alt="Quant Media pipeline process"
            />
          </div>

          <div className="col-lg-7 col-md-12 pl-lg-5" data-aos="fade-up">
            <span className="sec-badge">The Pipeline</span>
            <h2 className="sec-title mb-3">
              Step-by-Step to
              <br />
              Scalable Reach
            </h2>
            <p className="sec-sub mb-4">
              We don't guess. Every deliverable is grounded in data before
              a single edit is made.
            </p>

            <div className="mt-2">
              {STEPS.map((step) => (
                <div key={step.num} className="pipeline-step">
                  <div className="pipeline-step-num">{step.num}</div>
                  <div className="pipeline-step-body">
                    <h5>{step.title}</h5>
                    <p>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
