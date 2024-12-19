import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-unc-navy text-white px-4">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          [Your Name]
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-carolina-blue text-xl md:text-2xl mb-8"
        >
          Statistics B.S. + M.S. Student
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          University of North Carolina at Chapel Hill
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;