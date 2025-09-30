import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TerminalWindow = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to manyuOS Terminal v1.0",
    "Type 'help' for available commands",
    ""
  ]);
  const [currentPath, setCurrentPath] = useState("~");
  const [fileSystem] = useState<Record<string, string>>({
    "about.txt": "Manyu - Computer Science & Statistics Student at UNC Chapel Hill",
    "education.txt": "University of North Carolina at Chapel Hill (2022-2026)\nGPA: 3.83 (Dean's List)",
    "skills.txt": "Python, JavaScript, TypeScript, Java, R, SQL, C++",
    "contact.txt": "Email: manyu@unc.edu\nGitHub: github.com/manyu\nLinkedIn: linkedin.com/in/manyu",
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => [
      "Available commands:",
      "  help       - Show this help message",
      "  about      - Show information about me",
      "  skills     - List my technical skills",
      "  education  - Show education details",
      "  contact    - Display contact information",
      "  projects   - List recent projects",
      "  clear      - Clear terminal",
      "  ls         - List directory contents",
      "  pwd        - Show current directory",
      ""
    ],
    about: () => [
      "Manyu - Computer Science & Statistics Student",
      "University of North Carolina at Chapel Hill",
      "Passionate about machine learning, web development, and data science",
      "Currently seeking internship opportunities for Summer 2025",
      ""
    ],
    skills: () => [
      "Programming Languages: Python, JavaScript, TypeScript, Java, R, SQL, C++",
      "Web Development: React, Node.js, HTML/CSS, Tailwind CSS, Next.js",
      "Data Science & ML: Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch",
      "Tools: Git, Docker, AWS, MongoDB, PostgreSQL, Linux",
      ""
    ],
    education: () => [
      "University of North Carolina at Chapel Hill (2022-2026)",
      "Bachelor of Science in Computer Science & Statistics",
      "GPA: 3.83 (Dean's List)",
      "Key Courses: ML Theory, Probability, Optimization, Systems",
      ""
    ],
    contact: () => [
      "Email: manyu@unc.edu",
      "GitHub: github.com/manyu",
      "LinkedIn: linkedin.com/in/manyu",
      "Location: Chapel Hill, NC",
      ""
    ],
    projects: () => [
      "🚀 Personal Portfolio OS - Interactive desktop environment",
      "🤖 ML Stock Predictor - Time series forecasting with Python",
      "🌐 Social Media Analytics - React dashboard with data viz",
      "📊 Statistics Tutor Bot - AI-powered learning assistant",
      ""
    ],
    ls: () => [
      "about.txt    education.txt    skills.txt    projects/",
      "contact.txt  resume.pdf       photos/       documents/",
      ""
    ],
    pwd: () => [`/home/manyu/${currentPath}`, ""],
    clear: () => null,
    whoami: () => ["manyu", ""],
    date: () => [new Date().toString(), ""],
    echo: (args: string[]) => [args.join(" "), ""],
    cd: (args: string[]) => {
      if (args.length === 0) {
        setCurrentPath("~");
        return ["", ""];
      }
      const dir = args[0];
      if (dir === "~" || dir === "/") {
        setCurrentPath("~");
        return ["", ""];
      }
      if (dir === "..") {
        setCurrentPath("~");
        return ["", ""];
      }
      return [`cd: ${dir}: No such file or directory`, ""];
    },
    mkdir: (args: string[]) => {
      return ["mkdir: Permission denied - only manyu has access!", ""];
    },
    cat: (args: string[]) => {
      if (args.length === 0) {
        return ["cat: missing file operand", ""];
      }
      const filename = args[0];
      if (fileSystem[filename]) {
        return [fileSystem[filename], ""];
      }
      return [`cat: ${filename}: No such file or directory`, ""];
    }
  };

  const handleCommand = (cmd: string) => {
    const parts = cmd.trim().split(" ");
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (command === "clear") {
      setHistory([]);
      return;
    }

    const newHistory = [...history, `manyu@manyuOS:${currentPath}$ ${cmd}`];

    if (commands[command as keyof typeof commands]) {
      const result = commands[command as keyof typeof commands](args);
      if (result) {
        newHistory.push(...result);
      }
    } else if (command === "") {
      newHistory.push("");
    } else {
      newHistory.push(`bash: ${command}: command not found`, "");
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div 
      className="h-full bg-gray-900 text-carolina-blue font-mono text-sm p-4 overflow-hidden flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      <div 
        ref={terminalRef}
        className="flex-1 overflow-y-auto space-y-1 mb-4"
      >
        {history.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
            className="whitespace-pre-wrap"
          >
            {line}
          </motion.div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-carolina-blue mr-2">
          manyu@manyuOS:{currentPath}$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-carolina-blue outline-none caret-carolina-blue"
          spellCheck={false}
          autoComplete="off"
        />
        <motion.div
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-2 h-4 bg-carolina-blue ml-1"
        />
      </form>
    </div>
  );
};

export default TerminalWindow;