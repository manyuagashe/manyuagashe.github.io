import { motion } from "framer-motion";

const HeroWindow = () => {
  return (
    <div className="p-6 h-full overflow-auto bg-gradient-to-br from-slate-900/50 via-blue-900/50 to-slate-800/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        className="text-center space-y-6"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-2"
        >
          abhi"manyu" agashe
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-blue-100 mb-1"
        >
          student, dev, (hopeful) future builder
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-blue-200"
        >
          university of north carolina at chapel hill, prev @UBS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 p-4 bg-gradient-to-r from-carolina-blue/20 to-blue-medium/20 rounded-lg border border-carolina-blue/30"
        >
          <p className="text-white/90 text-sm">
            this website is an online repository of the things that matter about me.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroWindow;
