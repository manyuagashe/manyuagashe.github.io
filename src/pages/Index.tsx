import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import HeroSection from "@/components/portfolio/HeroSection";
import ExperienceTimeline from "@/components/portfolio/ExperienceTimeline";
import ProjectCard from "@/components/portfolio/ProjectCard";

const experiences = [
  {
    title: "Teaching Assistant",
    company: "University of North Carolina at Chapel Hill",
    period: "Aug. 2025 – Present",
    location: "Chapel Hill, NC",
    points: [
      "TA for Introduction to Data Science (2x across Statistics and Data Science departments) and Ethics of Data Science",
      "Developing lab materials on data manipulation, visualization, and ethical ML practices"
    ]
  },
  {
    title: "Analyst Intern – Group Data Management Office",
    company: "UBS Group AG",
    period: "June 2025 – Aug. 2025",
    location: "Raleigh, NC",
    points: [
      "Built ML classification models via text analysis to categorize 3000+ data quality issues across Investment Banking, Wealth Management, and Asset Management divisions",
      "Developed forecasting pipelines using metadata metrics to predict issue emergence, enabling faster triage and resolution"
    ]
  },
  {
    title: "Product Manager – Software Projects",
    company: "UNC Off Campus Student Life",
    period: "Aug. 2025 – Present",
    location: "Chapel Hill, NC",
    points: [
      "Leading development of party registration platform serving 15,000+ off-campus students, owning product roadmap and feature research while recruiting student developers",
      "Architecting full-stack solution with Next.js, FastAPI, PostgreSQL, and SQLAlchemy; conducting UX research and iterating on technical design"
    ]
  },
  {
    title: "Student Researcher",
    company: "UNC School of Data Science and Society",
    period: "Dec. 2024 – May 2025",
    location: "Chapel Hill, NC",
    points: [
      "Conducted NLP research on AI alignment and bias prevention, developing red-teaming methodologies to assess model perception of human values",
      "Built AI tools using Python (pandas, scikit-learn, PyTorch), React, Supabase, and Node.js to analyze human rights reports for alignment",
      "Presented research on AI impact on energy poverty at Carolina Diplomacy Lab event"
    ]
  },
  {
    title: "Full-Stack Development Intern",
    company: "YM Global IT Technologies",
    period: "May 2024 – Sept. 2024",
    location: "Remote (Singapore)",
    points: [
      "Developed mobile app for 100,000+ amateur golfers in Malaysia using Flutter/Dart frontend and Django/SQLite3 backend",
      "Enabled tournament discovery and promotional offers"
    ]
  }
];

const projects = [
  {
    title: "LLM Persuasion Strategy Research",
    tech: "Python, Llama, Gemma, Multi-agent Simulation",
    period: "Aug. 2025 – Dec. 2025",
    description: "Built multi-turn simulation pipeline to evaluate Cialdini persuasion principles across 3B/8B/70B parameter models, analyzing 240 negotiation scenarios across business, legal, family, and consumer domains.",
    impact: "Revealed systematic differences in how model scale affects persuasive strategy selection — smaller models rely on authority/scarcity framing while larger models use more nuanced reciprocity and consensus cues."
  },
  {
    title: "Compass Center Resource Platform",
    tech: "Python, Django, SQLAlchemy, Pydantic",
    period: "Jan. 2024 – May 2024",
    description: "Engineered backend for domestic violence nonprofit serving 150,000 Orange County residents, replacing Notion-based system with custom platform for volunteer resource management.",
    impact: "Reduced volunteer onboarding time and eliminated manual Notion maintenance for a team of ~40 staff managing 200+ resource entries."
  }
];

const SectionHeader = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-xs font-semibold uppercase tracking-widest text-foreground mb-8 flex items-center gap-4"
    >
      {children}
      <span className="flex-1 h-px bg-border" />
    </motion.h2>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-6 right-6 z-50 flex items-center gap-4">
        <ThemeToggle />
        <a
          href="mailto:abhimanyu.agashe@gmail.com"
          className="text-xs text-muted-foreground hover:text-accent transition-colors"
        >
          get in touch
        </a>
      </nav>

      <div className="fixed top-6 left-6 z-50">
        <span className="text-xs text-muted-foreground/50 font-mono">ma.</span>
      </div>

      <main className="max-w-4xl mx-auto px-6 md:px-12">
        <HeroSection />

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div className="md:col-span-2 space-y-20">
            <section id="experience">
              <SectionHeader>Experience</SectionHeader>
              <ExperienceTimeline experiences={experiences} />
            </section>

            <section id="projects">
              <SectionHeader>Projects</SectionHeader>
              <div className="space-y-3">
                {projects.map((proj, i) => (
                  <ProjectCard key={i} project={proj} index={i} />
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xs text-muted-foreground/50 mt-6 italic"
              >
                more projects coming soon
              </motion.p>
            </section>
          </div>

          <aside className="md:col-span-1 space-y-10 md:pt-0">
            <SidebarSection title="Education">
              <div className="space-y-1.5">
                <p className="text-sm font-medium">UNC Chapel Hill</p>
                <p className="text-xs text-muted-foreground leading-relaxed">B.S. Statistics & Analytics</p>
                <p className="text-xs text-muted-foreground">Minors: Computer Science, Philosophy</p>
                <p className="text-xs text-muted-foreground/60 mt-2">Aug. 2023 – May 2026</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["GPA 3.795", "Dean's List", "Ethics Ambassador"].map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SidebarSection>

            <SidebarSection title="Skills">
              <div className="space-y-3 text-xs">
                <div>
                  <p className="font-medium mb-1.5">Languages</p>
                  <div className="flex flex-wrap gap-1">
                    {["Python", "Java", "R", "Dart", "SQL"].map((s) => (
                      <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-1.5">Frameworks & Tools</p>
                  <div className="flex flex-wrap gap-1">
                    {["PyTorch", "TensorFlow", "scikit-learn", "pandas", "Flutter", "FastAPI", "React", "PostgreSQL", "Git"].map((s) => (
                      <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SidebarSection>

            <SidebarSection title="Coursework">
              <div className="space-y-1 text-xs text-muted-foreground">
                {[
                  "Deep Learning (Grad)",
                  "Machine Learning (Grad)",
                  "LLMs for Societal Alignment",
                  "Probability Theory",
                  "Optimization",
                  "Applied Linear Algebra",
                  "Data Structures",
                  "Systems Fundamentals"
                ].map((course) => (
                  <p key={course} className="leading-relaxed">{course}</p>
                ))}
              </div>
            </SidebarSection>

            <SidebarSection title="Links">
              <div className="space-y-2 text-xs">
                <a
                  href="mailto:abhimanyu.agashe@gmail.com"
                  className="block text-muted-foreground hover:text-accent transition-colors"
                >
                  abhimanyu.agashe@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/manyuagashe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-accent transition-colors"
                >
                  linkedin / manyuagashe
                </a>
                <p className="text-muted-foreground/50">984-837-2449</p>
                <p className="text-muted-foreground/50">US Work Authorized</p>
              </div>
            </SidebarSection>
          </aside>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border mt-20 py-8 flex justify-between items-center text-xs text-muted-foreground/40"
        >
          <span>Abhimanyu Agashe</span>
          <span>2025</span>
        </motion.footer>
      </main>
    </div>
  );
};

const SidebarSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-3 pb-2 border-b border-border">
        {title}
      </h2>
      {children}
    </motion.div>
  );
};

export default Index;
