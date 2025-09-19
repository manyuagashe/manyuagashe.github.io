import { motion } from "framer-motion";

const EducationWindow = () => {
  return (
    <div className="p-6 h-full overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-bold text-carolina-blue mb-6"
        >
          Education
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg p-4"
        >
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-carolina-blue">
              University of North Carolina at Chapel Hill
            </h3>
            <span className="text-sm text-white bg-white/20 px-2 py-1 rounded">
              2022 - 2026
            </span>
          </div>
          
          <p className="text-blue-deep font-medium mb-3">
            Bachelor of Science in Computer Science & Statistics
          </p>
          
          <div className="space-y-2 text-sm text-white">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">GPA:</span>
              <span>3.83, Dean's List</span>
            </div>
            
            <div>
              <span className="font-semibold block mb-1">Key Courses:</span>
              <ul className="list-disc list-inside space-y-0.5 ml-2">
                <li>Probability Theory</li>
                <li>Theory and Methods for Machine Learning</li>
                <li>Optimization</li>
                <li>Design Patterns of Code</li>
                <li>Systems Fundamentals</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg p-4"
        >
          <h3 className="text-lg font-semibold text-blue-deep mb-2">Academic Interests</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="space-y-1">
              <h4 className="font-medium text-carolina-blue">Computer Science</h4>
              <ul className="text-white space-y-0.5">
                <li>• Machine Learning</li>
                <li>• Software Engineering</li>
                <li>• Data Structures</li>
              </ul>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium text-carolina-blue">Statistics</h4>
              <ul className="text-white space-y-0.5">
                <li>• Statistical Modeling</li>
                <li>• Data Analysis</li>
                <li>• Probability Theory</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EducationWindow;