import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import DownloadCV from "@/components/DownloadCV";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <DownloadCV />
      <Contact />
      <Footer />
    </main>
  );
}