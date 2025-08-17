
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="py-8 bg-gray-50 px-2 hover:bg-gray-100 transition-colors duration-700" 
      id="about"
    >
      <div className="max-w-xl">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg font-bold text-unc-navy mb-3 text-left hover:text-carolina-blue transition-colors duration-500"
        >
          About Me
        </motion.h2>
        <div className="text-sm text-gray-700 space-y-3 text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hover:text-unc-navy transition-colors duration-300"
          >
            I currently study <b>statistics/operations research/data science</b> with a minor in <b>computer science</b> and involvement in the philosophy department. I am interested in ideas that involve solving core issues in the field of education and how HCI impacts it. 
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hover:text-unc-navy transition-colors duration-300"
          >
            Via research, personal projects, and work outside and inside the classroom, I know my way well around major data science packages and have a good hand on full-stack development.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hover:text-unc-navy transition-colors duration-300"
          >
           i've started following competitive pokemon and Indian classical music recently. More seriously: industrial design, ethics, and John Doerr's ideas on OKRS.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
