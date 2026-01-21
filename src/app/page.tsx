import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Work />
      <Process />
      <About />
      <Contact />
      <Testimonials />
      <Footer />
    </>
  );
}
