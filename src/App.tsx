import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import WhoWeHelp    from "./components/WhoWeHelp";
import Services     from "./components/Services";
import Portfolio    from "./components/Portfolio";
import Pipeline     from "./components/Pipeline";
import WhyUs        from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Pricing      from "./components/Pricing";
import AboutUs      from "./components/AboutUs";
import Contact      from "./components/Contact";
import CTA          from "./components/CTA";
import Footer       from "./components/Footer";

import AboutPage    from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import PricingPage  from "./pages/PricingPage";
import ContactPage  from "./pages/ContactPage";

function HomePage() {
  return (
    <>
      <div id="hero">
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

export default function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 900, easing: "ease-out-quart", offset: 60 });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"          element={<HomePage />} />
        <Route path="/about"     element={<AboutPage />} />
        <Route path="/services"  element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/pricing"   element={<PricingPage />} />
        <Route path="/contact"   element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
