import About from "@/components/About";
import Choose from "@/components/Choose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Choose />
      <Contact />
      <Footer />
    </>
  );
}
