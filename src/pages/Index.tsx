import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";

const Index = () => {
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-6 right-6 z-50 flex items-center gap-3">
        <ThemeToggle />
        <motion.a
          href="mailto:manyu@unc.edu"
          className="text-sm text-accent hover:text-accent/70 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          get in touch
        </motion.a>
      </nav>

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="min-h-[60vh] flex flex-col justify-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tight">
            Abhimanyu<br />Agashe
          </h1>

          <div className="max-w-2xl space-y-4">
            <p className="text-lg md:text-xl leading-relaxed">
              Building at the intersection of statistics, computation, and ethics.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Student researcher at UNC Chapel Hill exploring LLMs and AI alignment.
              Previously engineering data systems at UBS.
            </p>
          </div>
        </motion.section>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16 mb-24">
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 space-y-12"
          >
            <div>
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-8">Currently</h2>
              <div className="space-y-10">
                <motion.div
                  onHoverStart={() => setHoveredWork(0)}
                  onHoverEnd={() => setHoveredWork(null)}
                  className="group cursor-default"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium transition-colors group-hover:text-accent">
                      Product Manager
                    </h3>
                    <span className="text-sm text-muted-foreground">2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Office of Off Campus Student Life, UNC
                  </p>
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredWork === 0 ? "auto" : 0,
                      opacity: hoveredWork === 0 ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-sm leading-relaxed overflow-hidden"
                  >
                    Leading software development for student registration systems.
                    Managing feature design and technical architecture with Next.js, FastAPI, and PostgreSQL.
                  </motion.p>
                </motion.div>

                <motion.div
                  onHoverStart={() => setHoveredWork(1)}
                  onHoverEnd={() => setHoveredWork(null)}
                  className="group cursor-default"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium transition-colors group-hover:text-accent">
                      Teaching Assistant
                    </h3>
                    <span className="text-sm text-muted-foreground">2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    School of Data Science, UNC
                  </p>
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredWork === 1 ? "auto" : 0,
                      opacity: hoveredWork === 1 ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-sm leading-relaxed overflow-hidden"
                  >
                    Designing curriculum and leading technical sessions in Python and data science.
                    Supporting students through debugging sessions and code reviews.
                  </motion.p>
                </motion.div>

                <motion.div
                  onHoverStart={() => setHoveredWork(2)}
                  onHoverEnd={() => setHoveredWork(null)}
                  className="group cursor-default"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium transition-colors group-hover:text-accent">
                      Research
                    </h3>
                    <span className="text-sm text-muted-foreground">Ongoing</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI Ethics & Alignment
                  </p>
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredWork === 2 ? "auto" : 0,
                      opacity: hoveredWork === 2 ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-sm leading-relaxed overflow-hidden"
                  >
                    Exploring algorithmic fairness, transparency, and privacy in AI systems.
                    Focus on LLM alignment and ethical deployment frameworks.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 space-y-12"
          >
            <div>
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Education</h2>
              <p className="text-base mb-2">
                University of North Carolina<br />at Chapel Hill
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Statistics, Mathematics, CS
              </p>
              <p className="text-sm text-muted-foreground">
                2022—2026
              </p>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Tools</h2>
              <div className="flex flex-wrap gap-2">
                {["Python", "PyTorch", "SQL", "FastAPI", "C", "Java", "R"].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="text-sm px-3 py-1 border border-border rounded-full hover:border-accent transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Interests</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Competitive Pokemon, Indian classical music, industrial design,
                organizational systems, John Doerr's OKRs
              </p>
            </div>
          </motion.aside>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div className="flex gap-6 text-sm">
            <a href="mailto:manyu@unc.edu" className="text-accent hover:text-accent/70 transition-colors">
              email
            </a>
            <a href="https://github.com/manyuagashe" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/70 transition-colors">
              github
            </a>
            <a href="https://www.linkedin.com/in/abhimanyu-agashe-95598622a/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/70 transition-colors">
              linkedin
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            2025
          </p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
