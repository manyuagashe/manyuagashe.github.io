import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";

interface Project {
  title: string;
  tech: string;
  period: string;
  description: string;
  tags?: string[];
  highlight?: string;
  impact?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  const techList = project.tech.split(", ");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left border border-border rounded-lg p-4 hover:border-accent/50 transition-all duration-300 hover:bg-muted/30"
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium text-sm group-hover:text-accent transition-colors leading-snug">
                {project.title}
              </h3>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-muted-foreground flex-shrink-0 text-xs"
              >
                ↓
              </motion.span>
            </div>
            <p className="text-xs text-muted-foreground">{project.period}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {techList.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border"
            >
              {t}
            </span>
          ))}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border border-t-0 border-border rounded-b-lg px-4 pb-4 pt-3 bg-muted/10">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              {project.impact && (
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs font-medium text-accent mb-1">Impact</p>
                  <p className="text-xs text-muted-foreground">{project.impact}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
