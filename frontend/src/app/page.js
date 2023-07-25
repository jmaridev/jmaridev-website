import Bio from "@/components/Bio";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Transition from "@/components/Transition";
import waveSlate from "../../public/wave-slate.svg";
import waveWhite from "../../public/wave-white.svg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Nav />
      <Hero />
      <Transition imageUrl={waveWhite} />
      <Bio />
      <Transition imageUrl={waveSlate} />
      <Skills />
      <Transition imageUrl={waveWhite} />
      <Projects />
      <Transition imageUrl={waveSlate} />
      <Experiences />
      <Transition imageUrl={waveWhite} />
      <Contact />
      <Transition imageUrl={waveSlate} />
      <Footer />
    </main>
  );
}
