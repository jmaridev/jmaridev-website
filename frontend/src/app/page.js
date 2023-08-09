import Bio from "@/components/Bio";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Nav />
      <Hero />
      <Bio />
      <Skills />
      <Projects />
      <Experiences />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
