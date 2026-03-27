import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  points: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="space-y-6">
      {experiences.map((exp, i) => (
        <ExperienceEntry key={i} exp={exp} index={i} />
      ))}
    </div>
  );
};

const ExperienceEntry = ({ exp, index }: { exp: Experience; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group"
    >
      <div className="flex justify-between items-baseline gap-4 mb-1">
        <h3 className="font-medium text-sm">{exp.title}</h3>
        <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.period}</span>
      </div>
      <p className="text-xs text-muted-foreground mb-2">{exp.company} · {exp.location}</p>
      <ul className="space-y-1">
        {exp.points.map((point, j) => (
          <li key={j} className="text-xs text-muted-foreground leading-relaxed pl-3 relative before:content-['·'] before:absolute before:left-0 before:text-accent">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceTimeline;
