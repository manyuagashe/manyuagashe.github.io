import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Pastwork from "@/components/Pastwork";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Pastwork />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
