
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
        {/* Two-column layout for Education/Skills + Work Experience */}
        <section className="py-8 bg-white">
          <div className="flex flex-col lg:flex-row gap-8 px-2">
            {/* Left column: Education and Skills */}
            <div className="flex-1 space-y-8">
              <Education />
              <Skills />
            </div>
            {/* Right column: Work Experience */}
            <div className="flex-1">
              <Pastwork />
            </div>
          </div>
        </section>
        <Contact />
      </div>
    </main>
  );
};

export default Index;
