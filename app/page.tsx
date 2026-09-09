import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}