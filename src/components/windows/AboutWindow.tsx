import { motion } from "framer-motion";

const AboutWindow = () => {
  return (
    <div className="p-6 h-full overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-bold text-carolina-blue mb-4"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 text-white"
        >
          <p className="leading-relaxed">
            I currently study <b>statistics/operations research/data science</b> with a minor in <b>computer science</b> and involvement in the philosophy department. I am interested in ideas that involve solving core issues in the field of education and how HCI impacts it.
          </p>
          
          <p className="leading-relaxed">
            Via research, personal projects, and work outside and inside the classroom, I know my way well around major data science packages and have a good hand on full-stack development.
          </p>
          
          <p className="leading-relaxed">
            i've started following competitive pokemon and Indian classical music recently. More seriously: industrial design, ethics, and John Doerr's ideas on OKRS.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 p-4 bg-gradient-to-r from-carolina-blue/10 to-blue-medium/10 rounded-lg border border-carolina-blue/20"
        >
          <h3 className="text-lg font-semibold text-carolina-blue mb-2">currently focused on</h3>
          <ul className="space-y-1 text-sm text-white">
            <li>• machine learning and ai applications</li>
            <li>• full-stack web development</li>
            <li>• data science and statistical modeling</li>
            <li>• open source contributions</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutWindow;