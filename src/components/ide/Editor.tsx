import { motion } from "framer-motion";

interface EditorProps {
  activeFile: string;
}

// Syntax highlighter
const highlightSyntax = (line: string, language: string): JSX.Element => {
  if (language === 'markdown') {
    // Markdown highlighting
    if (line.startsWith('# ')) {
      return <span className="text-[hsl(210,100%,70%)] font-bold">{line}</span>;
    }
    if (line.startsWith('## ')) {
      return <span className="text-[hsl(210,100%,65%)] font-bold">{line}</span>;
    }
    if (line.startsWith('- ') || line.startsWith('* ')) {
      return <span><span className="text-[hsl(40,100%,60%)]">{line.substring(0, 2)}</span><span className="text-foreground">{line.substring(2)}</span></span>;
    }
    if (line.includes('**')) {
      const parts = line.split('**');
      return <span>{parts.map((part, i) => i % 2 === 1 ? <span key={i} className="text-[hsl(280,100%,70%)] font-bold">{part}</span> : <span key={i} className="text-foreground">{part}</span>)}</span>;
    }
    if (line.startsWith('*') && line.endsWith('*')) {
      return <span className="text-muted-foreground italic">{line}</span>;
    }
    if (line.startsWith('---')) {
      return <span className="text-border">{line}</span>;
    }
  }
  
  if (language === 'typescript') {
    // TypeScript highlighting
    const keywords = ['interface', 'const', 'export', 'default', 'string', 'number', 'boolean', 'void', 'any', 'type', 'enum'];
    let highlighted = line;
    
    // Comments
    if (line.trim().startsWith('//')) {
      return <span className="text-muted-foreground italic">{line}</span>;
    }
    
    // Multi-line comment
    if (line.trim().startsWith('/*') || line.trim().startsWith('*')) {
      return <span className="text-muted-foreground italic">{line}</span>;
    }
    
    // Strings
    const stringMatch = line.match(/"[^"]*"|'[^']*'|`[^`]*`/g);
    if (stringMatch) {
      const parts: JSX.Element[] = [];
      let lastIndex = 0;
      stringMatch.forEach((str) => {
        const index = line.indexOf(str, lastIndex);
        if (index > lastIndex) {
          parts.push(<span key={`text-${lastIndex}`}>{highlightKeywords(line.substring(lastIndex, index), keywords)}</span>);
        }
        parts.push(<span key={`str-${index}`} className="text-[hsl(120,100%,65%)]">{str}</span>);
        lastIndex = index + str.length;
      });
      if (lastIndex < line.length) {
        parts.push(<span key={`text-${lastIndex}`}>{highlightKeywords(line.substring(lastIndex), keywords)}</span>);
      }
      return <span>{parts}</span>;
    }
    
    return <span>{highlightKeywords(line, keywords)}</span>;
  }
  
  if (language === 'json') {
    // JSON highlighting
    if (line.includes(':')) {
      const parts = line.split(':');
      return <span>
        <span className="text-[hsl(200,100%,70%)]">{parts[0]}</span>
        <span className="text-foreground">:</span>
        <span className="text-[hsl(120,100%,65%)]">{parts.slice(1).join(':')}</span>
      </span>;
    }
  }
  
  return <span className="text-foreground">{line}</span>;
};

const highlightKeywords = (text: string, keywords: string[]): JSX.Element => {
  const parts: (string | JSX.Element)[] = [text];
  
  keywords.forEach((keyword) => {
    const newParts: (string | JSX.Element)[] = [];
    parts.forEach((part) => {
      if (typeof part === 'string') {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        const matches = [...part.matchAll(regex)];
        if (matches.length > 0) {
          let lastIndex = 0;
          matches.forEach((match, i) => {
            if (match.index !== undefined) {
              if (match.index > lastIndex) {
                newParts.push(part.substring(lastIndex, match.index));
              }
              newParts.push(<span key={`kw-${keyword}-${i}`} className="text-[hsl(280,100%,70%)]">{match[0]}</span>);
              lastIndex = match.index + match[0].length;
            }
          });
          if (lastIndex < part.length) {
            newParts.push(part.substring(lastIndex));
          }
        } else {
          newParts.push(part);
        }
      } else {
        newParts.push(part);
      }
    });
    parts.length = 0;
    parts.push(...newParts);
  });
  
  return <span>{parts}</span>;
};

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
  pedagogy: {
    title: 'pedagogy.ts',
    language: 'typescript',
    content: `interface PedagogyResource {
  title: string;
  description: string;
  driveLink: string;
  type: string;
}

const pedagogyResources: PedagogyResource[] = [
  {
    title: "Teaching Philosophy",
    description: "My approach to education and learning",
    driveLink: "https://drive.google.com/file/d/1example1/view",
    type: "PDF"
  },
  {
    title: "Course Materials",
    description: "Sample teaching materials and curriculum",
    driveLink: "https://drive.google.com/file/d/1example2/view",
    type: "PDF"
  },
  {
    title: "Educational Research",
    description: "Research on effective teaching methodologies",
    driveLink: "https://drive.google.com/file/d/1example3/view",
    type: "PDF"
  },
  {
    title: "Student Feedback Analysis",
    description: "Analysis of teaching effectiveness",
    driveLink: "https://drive.google.com/file/d/1example4/view",
    type: "PDF"
  }
];

/**
 * These resources showcase my work in pedagogy and education.
 * Links will be updated with actual documents.
 */

export default pedagogyResources;`
  },
  research: {
    title: 'research.ts',
    language: 'typescript',
    content: `// Research Focus

/**
 * AI Ethics
 * 
 * Exploring the ethical implications of artificial intelligence,
 * including fairness, transparency, accountability, and the
 * societal impact of AI systems.
 */

const researchAreas = {
  primary: "AI Ethics",
  topics: [
    "Algorithmic Fairness",
    "AI Transparency and Explainability",
    "Privacy in AI Systems",
    "Responsible AI Development"
  ]
};

export default researchAreas;`
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
                  <code>{highlightSyntax(line || ' ', file.language)}</code>
                </div>
              ))}
            </pre>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
