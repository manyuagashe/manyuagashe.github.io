
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Pastwork from "@/components/Pastwork";

const Index = () => {
  return (
    <main className="min-h-screen bg-white pl-2 pr-0 pt-16 text-left"> {/* left-aligned, minimal padding, top space for nav */}
      <Navigation />
      <div>
        <Hero />
        <About />
        <Education />
        <Pastwork />
        <Skills />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
