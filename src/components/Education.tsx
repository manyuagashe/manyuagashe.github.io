
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="py-0 bg-transparent px-0 flex flex-col items-start" 
      id="education"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg font-bold text-blue-navy mb-6 text-left w-full max-w-xl hover:text-blue-deep transition-colors duration-500"
      >
        Education
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-glass-bg backdrop-blur-glass border-l-4 border-l-blue-deep border border-glass-border rounded-lg p-6 w-full hover:border-l-blue-navy hover:scale-[1.02] transition-all duration-500 shadow-glass"
      >
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base font-bold text-unc-navy hover:text-carolina-blue transition-colors duration-300"
        >
          B.S. statistics/operations research, expected 2026
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-carolina-blue text-sm mt-1 hover:text-unc-navy transition-colors duration-300"
        >
          compsci minor, parr center for ethics member
        </motion.p>
        <motion.ul 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-2 text-gray-700 list-disc pl-4 space-y-1 text-xs"
        >
          <li className="hover:text-unc-navy transition-colors duration-300"><b>gpa</b>: 3.83, dean's list</li>
          <li className="hover:text-unc-navy transition-colors duration-300">key courses: probability theory, theory and methods for machine learning, optimization, design patterns of code, systems fundamentals</li>
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default Education;
