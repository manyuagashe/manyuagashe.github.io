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
      "Planned intuitive sessions to review python and data science concepts",
      "1 on 1 corrections, review, debugging sessions",
      "Helped create and grade technical data science curriculum"
    ]
  },
  {
    title: "Undergraduate Researcher",
    org: "Research Lab",
    period: "2023 - Present",
    description: [
      "Conducted research on ML applications in data analysis",
      "Published findings at undergraduate research symposium",
      "Collaborated with graduate students and faculty"
    ]
  }
];

const skills = {
  programmingLanguages: ["Python", "TypeScript", "Java", "R", "SQL"],
  webDevelopment: ["React", "Node.js", "HTML/CSS", "Tailwind CSS", "Next.js"],
  dataScienceML: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Jupyter"],
  toolsTechnologies: ["Git", "Docker", "MongoDB", "PostgreSQL", "Linux"],
  currentlyLearning: ["Rust", "GraphQL", "Kubernetes", "Machine Learning Engineering"]
};

const education = {
  institution: "University of North Carolina at Chapel Hill",
  degree: "Bachelor of Science in Computer Science & Statistics",
  duration: "2022 - 2026",
  gpa: 3.83,
  courses: [
    "Probability Theory",
    "Theory and Methods for Machine Learning",
    "Optimization",
    "Design Patterns of Code",
    "Systems Fundamentals"
  ]
};

const pedagogyResources = [
  {
    title: "Teaching Philosophy",
    description: "My approach to education and learning",
    driveLink: "https://drive.google.com/file/d/1example1/view",
  },
  {
    title: "Course Materials",
    description: "Sample teaching materials and curriculum",
    driveLink: "https://drive.google.com/file/d/1example2/view",
  },
  {
    title: "Educational Research",
    description: "Research on effective teaching methodologies",
    driveLink: "https://drive.google.com/file/d/1example3/view",
  },
  {
    title: "Student Feedback Analysis",
    description: "Analysis of teaching effectiveness",
    driveLink: "https://drive.google.com/file/d/1example4/view",
  }
];

const convertDriveLinkToEmbed = (link: string): string => {
  const match = link.match(/\/d\/([^\/]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return link;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="text-accent hover:text-accent/80 transition-colors">about</a>
            <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors">education</a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">skills</a>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">work</a>
            <a href="#pedagogy" className="text-muted-foreground hover:text-foreground transition-colors">pedagogy</a>
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

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Hero / About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            <span className="italic text-muted-foreground">hi</span>, <span className="font-bold">manyu here</span>.
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            I currently study <span className="font-bold">statistics/operations research/data science</span> with a minor in{" "}
            <span className="font-bold">computer science</span> and involvement in the philosophy department.
          </p>

          <div className="space-y-4 text-base md:text-lg leading-relaxed mb-8">
            <h3 className="text-accent font-semibold">Interests</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Solving core issues in <span className="text-foreground font-medium">education and HCI</span></li>
              <li>Full-stack development and data science</li>
              <li>Industrial design, ethics, and OKRs</li>
            </ul>
          </div>

          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <h3 className="text-accent font-semibold">Current Focus</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Machine learning and AI applications</li>
              <li>Full-stack web development</li>
              <li>Data science and statistical modeling</li>
              <li>Open source contributions</li>
            </ul>
          </div>

          <p className="mt-8 text-sm text-muted-foreground italic">
            student, dev, (hopeful) future builder — university of north carolina at chapel hill, prev @UBS
          </p>
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-t border-border"
        >
          <h2 className="text-2xl font-serif font-bold mb-8">Education</h2>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent">{education.institution}</h3>
            <p className="text-lg">{education.degree}</p>
            <p className="text-muted-foreground">{education.duration}</p>
            <p className="font-medium">GPA: {education.gpa}</p>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Relevant Coursework</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {education.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-t border-border"
        >
          <h2 className="text-2xl font-serif font-bold mb-8">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-accent mb-3">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.programmingLanguages.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-card border border-border rounded text-sm">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-accent mb-3">Web Development</h4>
              <div className="flex flex-wrap gap-2">
                {skills.webDevelopment.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-card border border-border rounded text-sm">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-accent mb-3">Data Science & ML</h4>
              <div className="flex flex-wrap gap-2">
                {skills.dataScienceML.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-card border border-border rounded text-sm">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-accent mb-3">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {skills.toolsTechnologies.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-card border border-border rounded text-sm">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="font-semibold text-accent mb-3">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                {skills.currentlyLearning.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent rounded text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Work Section */}
        <motion.section
          id="work"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-t border-border"
        >
          <h2 className="text-2xl font-serif font-bold mb-8">Work Experience</h2>

          <div className="space-y-10">
            {workExperiences.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-accent">{work.title}</h3>
                <p className="text-muted-foreground mb-3">{work.org} • {work.period}</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {work.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground italic">
            Currently seeking Summer 2025 internships in Software Engineering, Data Science, and Machine Learning.
          </p>
        </motion.section>

        {/* Pedagogy Section */}
        <motion.section
          id="pedagogy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-t border-border"
        >
          <h2 className="text-2xl font-serif font-bold mb-4">Pedagogy</h2>
          <p className="text-muted-foreground mb-8">
            Resources showcasing my work in pedagogy and education. Links will be updated with actual documents.
          </p>

          <div className="space-y-8">
            {pedagogyResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-border rounded-lg overflow-hidden"
              >
                <div className="p-4 bg-card">
                  <h3 className="font-bold text-accent mb-1">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                  <a
                    href={resource.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline"
                  >
                    Open in Google Drive →
                  </a>
                </div>
                <div className="w-full h-[500px] bg-muted">
                  <iframe
                    src={convertDriveLinkToEmbed(resource.driveLink)}
                    className="w-full h-full"
                    title={resource.title}
                    allow="autoplay"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Section */}
        <motion.section
          id="research"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-t border-border"
        >
          <h2 className="text-2xl font-serif font-bold mb-4">Research</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-accent mb-6">AI Ethics</h3>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Exploring the ethical implications of artificial intelligence, including fairness, 
            transparency, accountability, and the societal impact of AI systems.
          </p>
          
          <div className="space-y-2">
            <h4 className="font-semibold">Research Topics</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Algorithmic Fairness</li>
              <li>AI Transparency and Explainability</li>
              <li>Privacy in AI Systems</li>
              <li>Responsible AI Development</li>
            </ul>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-t border-border"
        >
          <h2 className="text-2xl font-serif font-bold mb-8">Contact</h2>
          
          <div className="space-y-3">
            <p>
              <span className="text-muted-foreground">Email:</span>{" "}
              <a href="mailto:manyu@unc.edu" className="text-accent hover:underline">manyu@unc.edu</a>
            </p>
            <p>
              <span className="text-muted-foreground">GitHub:</span>{" "}
              <a href="https://github.com/manyu" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">github.com/manyu</a>
            </p>
            <p>
              <span className="text-muted-foreground">LinkedIn:</span>{" "}
              <a href="https://linkedin.com/in/manyu" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">linkedin.com/in/manyu</a>
            </p>
            <p>
              <span className="text-muted-foreground">Location:</span> Chapel Hill, NC
            </p>
          </div>

          <p className="mt-8 text-muted-foreground italic">
            I'm always interested in new opportunities, collaborations, and conversations about technology. Feel free to reach out!
          </p>
        </motion.section>

        {/* Footer */}
        <footer className="pt-16 border-t border-border text-center text-sm text-muted-foreground">
          <p>abhimanyu dhananjay agashe, c. 2024.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
