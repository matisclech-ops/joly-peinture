import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Realisations from "@/components/sections/Realisations";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsappFloat from "@/components/sections/WhatsappFloat";

export default function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Realisations />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
