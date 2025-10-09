import { motion } from "framer-motion";

interface EditorProps {
  activeFile: string;
}

const fileContents: Record<string, { title: string; content: string; language: string }> = {
  about: {
    title: 'README.md',
    language: 'markdown',
    content: `# About Me

I currently study **statistics/operations research/data science** with a minor in **computer science** and involvement in the philosophy department.

## Interests
- Solving core issues in education and HCI
- Full-stack development and data science
- Industrial design, ethics, and OKRs

## Current Focus
- Machine learning and AI applications
- Full-stack web development  
- Data science and statistical modeling
- Open source contributions

---
*student, dev, (hopeful) future builder*
*university of north carolina at chapel hill, prev @UBS*`
  },
  education: {
    title: 'education.ts',
    language: 'typescript',
    content: `interface Education {
  institution: string;
  degree: string;
  duration: string;
  gpa: number;
  courses: string[];
}

const education: Education = {
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

// Academic Interests
const interests = {
  computerScience: [
    "Machine Learning",
    "Software Engineering",
    "Data Structures"
  ],
  statistics: [
    "Statistical Modeling",
    "Data Analysis",
    "Probability Theory"
  ]
};

export default education;`
  },
  skills: {
    title: 'skills.json',
    language: 'json',
    content: `{
  "programmingLanguages": [
    "Python",
    "TypeScript", 
    "Java",
    "R",
    "SQL"
  ],
  "webDevelopment": [
    "React",
    "Node.js",
    "HTML/CSS",
    "Tailwind CSS",
    "Next.js"
  ],
  "dataScienceML": [
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "TensorFlow",
    "PyTorch",
    "Jupyter"
  ],
  "toolsTechnologies": [
    "Git",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "Linux"
  ],
  "currentlyLearning": [
    "Rust",
    "GraphQL",
    "Kubernetes",
    "Machine Learning Engineering"
  ]
}`
  },
  work: {
    title: 'experience.ts',
    language: 'typescript',
    content: `interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

const experiences: WorkExperience[] = [
  {
    company: "Office of Off Campus Student Life @UNC",
    position: "Product Manager - New Software Projects",
    duration: "Sep '25 - May '26",
    responsibilities: [
      "Creating and iterating on proposed software solution for party registration",
      "Detailed design and feature research for product",
      "Developing in Next.JS, FastAPI, Postgres, SQLAlchemy"
    ]
  },
  {
    company: "UNC School of Data Science",
    position: "Teaching Assistant",
    duration: "August '25 - May '26",
    responsibilities: [
      "Planned intuitive sessions to review python and data science concepts",
      "1 on 1 corrections, review, debugging sessions",
      "Helped create and grade technical data science curriculum"
    ]
  },
  {
    company: "Research Lab",
    position: "Undergraduate Researcher", 
    duration: "2023 - Present",
    responsibilities: [
      "Conducted research on ML applications in data analysis",
      "Published findings at undergraduate research symposium",
      "Collaborated with graduate students and faculty"
    ]
  }
];

// Currently seeking Summer 2025 internships in:
// - Software Engineering
// - Data Science
// - Machine Learning

export default experiences;`
  },
  contact: {
    title: 'contact.ts',
    language: 'typescript',
    content: `interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
  phone: string;
}

const contact: ContactInfo = {
  email: "manyu@unc.edu",
  github: "github.com/manyu",
  linkedin: "linkedin.com/in/manyu",
  location: "Chapel Hill, NC",
  phone: "+1 (555) 123-4567"
};

/**
 * I'm always interested in new opportunities, 
 * collaborations, and conversations about technology.
 * Feel free to reach out!
 */

export default contact;`
  }
};

export function Editor({ activeFile }: EditorProps) {
  const file = fileContents[activeFile] || fileContents.about;
  const lines = file.content.split('\n');

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Tab Bar */}
      <div className="flex items-center h-9 bg-card border-b border-border px-2">
        <div className="flex items-center gap-2 px-3 py-1 bg-background border-r border-border text-xs font-mono text-primary">
          {file.title}
          <span className="text-muted-foreground ml-2">{file.language}</span>
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex-1 overflow-auto">
        <div className="flex">
          {/* Line Numbers */}
          <div className="flex-shrink-0 w-12 bg-card border-r border-border text-right pr-3 py-4 select-none">
            {lines.map((_, index) => (
              <div
                key={index}
                className="font-mono text-xs leading-6 text-muted-foreground"
              >
                {index + 1}
              </div>
            ))}
          </div>

          {/* Code Content */}
          <motion.div
            key={activeFile}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="flex-1 py-4 px-4"
          >
            <pre className="font-mono text-xs leading-6">
              {lines.map((line, index) => (
                <div key={index} className="whitespace-pre-wrap">
                  <code className="text-foreground">{line || ' '}</code>
                </div>
              ))}
            </pre>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
