import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  tech: string;
  period: string;
  description: string;
  impact?: string;
  github?: string;
  demo?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });
  const techList = project.tech.split(", ");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-border rounded-lg p-5 hover:border-accent/40 transition-colors duration-300"
    >
      <div className="flex justify-between items-start gap-3 mb-2">
        <h3 className="font-medium text-sm leading-snug">{project.title}</h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{project.description}</p>

      {project.impact && (
        <p className="text-xs text-muted-foreground/70 mb-3 italic">{project.impact}</p>
      )}

      <div className="flex flex-wrap gap-1.5">
        {techList.map((t) => (
          <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
