import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    description: "Built multi-turn simulation pipeline to evaluate Cialdini persuasion principles across 3B/8B/70B parameter models, analyzing 240 negotiation scenarios across business, legal, family, and consumer domains"
  },
  {
    title: "Compass Center Resource Platform",
    tech: "Python, Django, SQLAlchemy, Pydantic",
    period: "Jan. 2024 – May 2024",
    description: "Engineered backend for domestic violence nonprofit serving 150,000 Orange County residents, replacing Notion-based system with custom platform for volunteer resource management"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-6 right-6 z-50 flex items-center gap-4">
        <ThemeToggle />
        <a href="mailto:abhimanyu.agashe@gmail.com" className="text-sm text-accent hover:text-accent/70">
          get in touch
        </a>
      </nav>

      <main className="max-w-4xl mx-auto px-6 md:px-8 pt-16 pb-12">
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-serif mb-2">Abhimanyu Agashe</h1>
          <div className="flex flex-col md:flex-row gap-2 text-sm text-muted-foreground">
            <span>984-837-2449</span>
            <span className="hidden md:inline">•</span>
            <a href="mailto:abhimanyu.agashe@gmail.com" className="text-accent hover:text-accent/70">abhimanyu.agashe@gmail.com</a>
            <span className="hidden md:inline">•</span>
            <a href="https://linkedin.com/in/manyuagashe" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/70">linkedin</a>
            <span className="hidden md:inline">•</span>
            <span>US Work Authorized</span>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-10 border-b border-border pb-8"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Education</h2>
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-medium">University of North Carolina at Chapel Hill</h3>
              <span className="text-sm text-muted-foreground">Chapel Hill, NC</span>
            </div>
            <p className="text-sm mb-1">B.S. Statistics & Analytics; Minors: Computer Science, Philosophy</p>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>GPA: 3.795/4.00, Dean's List (Every Semester), Ethics Ambassador</span>
              <span>Aug. 2023 – May 2026</span>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10 border-b border-border pb-8"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">Experience</h2>
          <div className="space-y-7">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-medium text-base">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-sm text-muted-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-10 border-b border-border pb-8"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">Projects</h2>
          <div className="space-y-6">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-medium text-base">{proj.title}</h3>
                    <p className="text-sm text-muted-foreground">{proj.tech}</p>
                  </div>
                  <span className="text-sm text-muted-foreground text-right">{proj.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{proj.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-10 border-b border-border pb-8"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Technical Skills</h2>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">Languages:</span> <span className="text-muted-foreground">Python, Java, R, Dart, SQL</span></p>
            <p><span className="font-medium">Frameworks & Tools:</span> <span className="text-muted-foreground">PyTorch, TensorFlow, scikit-learn, pandas, Flutter, FastAPI, React, PostgreSQL, Git</span></p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Relevant Coursework</h2>
          <p className="text-sm text-muted-foreground">
            Deep Learning (Grad), Machine Learning (Grad), LLMs for Societal Alignment (Grad NLP Research), Probability Theory, Optimization, Applied Linear Algebra, Data Structures, Systems Fundamentals
          </p>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground"
        >
          <p>2025</p>
        </motion.footer>
      </main>
    </div>
  );
};

export default Index;
