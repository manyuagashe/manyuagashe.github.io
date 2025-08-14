
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="py-8 bg-white px-2 hover:bg-gray-50 transition-colors duration-700" 
      id="contact"
    >
      <div className="max-w-xl text-left">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg font-bold text-unc-navy mb-4 hover:text-carolina-blue transition-colors duration-500"
        >
          Contact
        </motion.h2>
        <div className="space-y-2 text-sm">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-700 hover:text-unc-navy transition-colors duration-300"
          >
            Email: <a href="mailto:manyu@unc.edu" className="text-carolina-blue hover:text-unc-navy hover:scale-105 transition-all duration-300 inline-block">manyu@unc.edu</a>
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-700 hover:text-unc-navy transition-colors duration-300"
          >
            LinkedIn: <a href="https://www.linkedin.com/in/abhimanyu-agashe-95598622a/" target="_blank" rel="noopener noreferrer" className="text-carolina-blue hover:text-unc-navy hover:scale-105 transition-all duration-300 inline-block">my linkedin</a>
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-700 hover:text-unc-navy transition-colors duration-300"
          >
            GitHub: <a href="https://github.com/manyuagashe" target="_blank" rel="noopener noreferrer" className="text-carolina-blue hover:text-unc-navy hover:scale-105 transition-all duration-300 inline-block">my github</a>
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
