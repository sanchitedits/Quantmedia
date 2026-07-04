import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import WhoWeHelp   from "./components/WhoWeHelp";
import Services    from "./components/Services";
import Portfolio   from "./components/Portfolio";
import Pipeline    from "./components/Pipeline";
import WhyUs       from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Pricing     from "./components/Pricing";
import AboutUs     from "./components/AboutUs";
import Contact     from "./components/Contact";
import CTA         from "./components/CTA";
import Footer      from "./components/Footer";

export default function App() {
  useEffect(() => {
    AOS.init({ once: false, duration: 1200, easing: "ease-out-quart", offset: 50 });
    setTimeout(() => AOS.refresh(), 500);
  }, []);

  return (
    <>
      <div id="hero" className="header-intro">
        <Navbar />
        <Hero />
      </div>

      <WhoWeHelp />
      <Services />
      <Portfolio />
      <Pipeline />
      <WhyUs />
      <Testimonials />
      <Pricing />
      <AboutUs />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
}
