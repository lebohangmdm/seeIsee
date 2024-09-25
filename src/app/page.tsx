import About from "@/components/About";
import Choose from "@/components/Choose";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";

export default function Home() {
  // const cookieStore = cookies();
  // const userToken = cookieStore.get("jwt")?.value;
  // console.log("JWT Token", userToken);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Choose />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
