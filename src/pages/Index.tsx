import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;