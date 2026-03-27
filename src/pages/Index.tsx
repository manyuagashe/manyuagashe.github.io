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
    description: "Multi-turn simulation pipeline evaluating Cialdini persuasion principles across 3B/8B/70B parameter models. Analyzed 240 negotiation scenarios across business, legal, family, and consumer domains.",
    impact: "Smaller models rely on authority/scarcity framing; larger models use reciprocity and consensus cues.",
    github: "https://github.com/manyuagashe/llm-persuasion",
  },
  {
    title: "Compass Center Resource Platform",
    tech: "Python, Django, SQLAlchemy, Pydantic",
    period: "Jan. 2024 – May 2024",
    description: "Backend for domestic violence nonprofit serving 150,000 Orange County residents. Replaced Notion-based system with custom platform for volunteer resource management.",
    impact: "Reduced volunteer onboarding time for ~40 staff managing 200+ resource entries.",
    github: "https://github.com/manyuagashe/compass-center",
  },
  {
    title: "Off-Campus Party Registration Platform",
    tech: "Next.js, FastAPI, PostgreSQL, SQLAlchemy",
    period: "Aug. 2025 – Present",
    description: "Full-stack platform for UNC's 15,000+ off-campus students to register events. Auth system, admin dashboard, event moderation pipeline.",
    github: "https://github.com/manyuagashe/offcampus-registration",
    demo: "https://offcampus.unc.edu",
  },
  {
    title: "AI Alignment Red-Teaming Toolkit",
    tech: "Python, PyTorch, React, Supabase",
    period: "Dec. 2024 – May 2025",
    description: "Red-teaming methodologies and tooling to assess LLM perception of human values. Analyzed human rights reports for alignment patterns using NLP pipelines.",
    github: "https://github.com/manyuagashe/alignment-redteam",
  },
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
      className="text-xs font-semibold uppercase tracking-widest text-foreground mb-6 flex items-center gap-4"
    >
      {children}
      <span className="flex-1 h-px bg-border" />
    </motion.h2>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </nav>

      <main className="max-w-3xl mx-auto px-6 md:px-12">
        <HeroSection />

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground mb-3">Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {["Python", "PyTorch", "SQL", "FastAPI", "SQLAlchemy", "C", "Java", "R"].map((s) => (
              <span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">
                {s}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionHeader>Education</SectionHeader>
          <div className="flex justify-between items-baseline gap-4 mb-1">
            <p className="text-sm font-medium">University of North Carolina at Chapel Hill</p>
            <span className="text-xs text-muted-foreground whitespace-nowrap">Aug. 2023 – May 2026</span>
          </div>
          <p className="text-xs text-muted-foreground">B.S. Statistics · B.A. Mathematics · Computer Science Minor</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {["GPA 3.795", "Dean's List"].map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <section id="experience" className="mb-16">
          <SectionHeader>Experience</SectionHeader>
          <ExperienceTimeline experiences={experiences} />
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16">
          <SectionHeader>Projects</SectionHeader>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((proj, i) => (
              <ProjectCard key={i} project={proj} index={i} />
            ))}
          </div>
        </section>

        {/* Coursework */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <SectionHeader>Coursework</SectionHeader>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
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
              <span key={course}>{course}</span>
            ))}
          </div>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border py-6 flex justify-between items-center text-xs text-muted-foreground/40"
        >
          <span>Abhimanyu Agashe</span>
          <span>2025</span>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
