
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-[40vh] flex items-center justify-center bg-white text-unc-navy px-4 pt-16">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold mb-6"
        >
          abhimanyu "manyu" agashe
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-carolina-blue text-2xl md:text-3xl mb-8"
        >
          statistics+computer science student, dev, (hopeful) builder
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 text-xl max-w-2xl mx-auto"
        >
          university of north carolina at chapel hill
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
