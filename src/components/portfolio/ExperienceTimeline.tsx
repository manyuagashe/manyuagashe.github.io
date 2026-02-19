import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  tags?: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <TimelineEntry
            key={i}
            exp={exp}
            index={i}
            isExpanded={expanded === i}
            onToggle={() => setExpanded(expanded === i ? null : i)}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineEntry = ({
  exp,
  index,
  isExpanded,
  onToggle,
  isLast,
}: {
  exp: Experience;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  isLast: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-7 pb-8"
    >
      <motion.div
        className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-background transition-colors duration-300"
        style={{
          borderColor: isExpanded ? "hsl(var(--accent))" : "hsl(var(--border))",
          backgroundColor: isExpanded ? "hsl(var(--accent))" : "hsl(var(--background))",
        }}
        animate={{
          scale: isExpanded ? 1.2 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      <button
        onClick={onToggle}
        className="w-full text-left group"
      >
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-medium text-sm transition-colors group-hover:text-accent leading-snug">
              {exp.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">{exp.company}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-xs text-muted-foreground">{exp.period}</p>
            <p className="text-xs text-muted-foreground/60">{exp.location}</p>
          </div>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground border-l border-accent/30 pl-3 ml-0.5">
          {exp.points.map((point, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: j * 0.05, duration: 0.25 }}
              className="leading-relaxed"
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceTimeline;
