import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const workExperiences = [
  {
    title: "Product Manager - New Software Projects",
    org: "Office of Off Campus Student Life @UNC",
    period: "Sep '25 - May '26",
    description: [
      "Creating and iterating on proposed software solution for party registration",
      "Detailed design and feature research for product",
      "Developing in Next.JS, FastAPI, Postgres, SQLAlchemy"
    ]
  },
  {
    title: "Teaching Assistant",
    org: "UNC School of Data Science",
    period: "Aug '25 - May '26",
    description: [
      "Review sessions for python and data science",
      "1 on 1 debugging sessions",
      "Creating and grading technical curriculum"
    ]
  },
  {
    title: "Undergraduate Researcher",
    org: "Research Lab",
    period: "2023 - Present",
    description: [
      "ML applications in data analysis",
      "Published at undergraduate research symposium",
      "Collaboration with graduate students and faculty"
    ]
  }
];

const education = {
  institution: "University of North Carolina at Chapel Hill",
  degrees: "B.S. Statistics, B.A. Mathematics, Computer Science Minor",
  duration: "2022 - 2026",
  gpa: 3.83,
  courses: [
    "Probability Theory",
    "Machine Learning",
    "Optimization",
    "Design Patterns",
    "Systems Fundamentals"
  ]
};

const skills = ["Python", "PyTorch", "SQL", "FastAPI", "SQLAlchemy", "C", "Java", "R"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="text-accent hover:text-accent/80 transition-colors">about</a>
            <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors">education</a>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">work</a>
            <a href="#research" className="text-muted-foreground hover:text-foreground transition-colors">research</a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="mailto:manyu@unc.edu" className="text-sm font-medium text-accent hover:underline">
              manyu@unc.edu
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-20 pb-8">
        {/* About */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8"
        >
          <h1 className="text-3xl md:text-4xl font-serif mb-3">
            Abhimanyu Agashe
          </h1>
          
          <p className="text-base leading-relaxed mb-2">
            Statistics and computer science at UNC Chapel Hill. Research focus in LLMs and AI ethics.
          </p>

          <p className="text-muted-foreground text-sm">
            Previously at UBS.
          </p>
        </motion.section>

        {/* Education */}
        <motion.section
          id="education"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-6 border-t border-border"
        >
          <h2 className="text-lg font-serif font-bold mb-4">Education</h2>
          
          <div className="space-y-1">
            <h3 className="text-base font-bold text-accent">{education.institution}</h3>
            <p className="text-sm">{education.degrees}</p>
            <p className="text-muted-foreground text-sm">{education.duration} • GPA: {education.gpa}</p>
            <p className="text-muted-foreground text-sm mt-2">{education.courses.join(" • ")}</p>
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-muted-foreground">{skills.join(" • ")}</p>
          </div>
        </motion.section>

        {/* Work */}
        <motion.section
          id="work"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-6 border-t border-border"
        >
          <h2 className="text-lg font-serif font-bold mb-4">Work</h2>

          <div className="space-y-4">
            {workExperiences.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3 className="text-base font-bold text-accent">{work.title}</h3>
                <p className="text-muted-foreground text-sm mb-1">{work.org} • {work.period}</p>
                <ul className="list-disc list-inside space-y-0.5 text-muted-foreground text-sm">
                  {work.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research */}
        <motion.section
          id="research"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-6 border-t border-border"
        >
          <h2 className="text-lg font-serif font-bold mb-2">Research</h2>
          <p className="text-sm">LLM research and AI ethics.</p>
          <p className="text-muted-foreground text-sm">Algorithmic fairness, transparency, privacy in AI systems.</p>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-6 border-t border-border"
        >
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:manyu@unc.edu" className="text-accent hover:underline">manyu@unc.edu</a>
            <a href="https://github.com/manyu" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">github</a>
            <a href="https://linkedin.com/in/manyu" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">linkedin</a>
          </div>
        </motion.section>

        <footer className="pt-6 border-t border-border text-center text-xs text-muted-foreground">
          <p>abhimanyu dhananjay agashe, 2024</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
