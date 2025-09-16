
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const skills = [
    { 
      category: "Statistics/Data Science", 
      items: ["R", "Pandas", "SKlearn"] 
    },
    { 
      category: "Programming", 
      items: ["Python", "SQL", "Java", "TypeScript"] 
    },
    { 
      category: "Data Analysis", 
      items: ["Regression Analysis", "Machine Learning", "Data Visualization"] 
    },
    { 
      category: "Other Tools for Dev/Non-Dev", 
      items: ["Git(Hub)", "Jira", "Tableau", "Excel", "AMPL"] 
    },
  ];

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="py-0 bg-transparent px-0" 
      id="skills"
    >
      <div className="max-w-xl">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg font-bold text-blue-navy mb-6 text-left hover:text-blue-deep transition-colors duration-500"
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category} 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
              className="bg-glass-bg backdrop-blur-glass border border-glass-border p-4 rounded-lg hover:scale-[1.03] transition-all duration-500 hover:border-blue-medium shadow-glass"
            >
              <h3 className="text-base font-bold text-carolina-blue mb-1 hover:text-unc-navy transition-colors duration-300">{skillGroup.category}</h3>
              <ul className="space-y-0.5">
                {skillGroup.items.map((item, itemIndex) => (
                  <motion.li 
                    key={item} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + itemIndex * 0.05 }}
                    className="text-xs text-gray-700 hover:text-unc-navy transition-colors duration-300"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
