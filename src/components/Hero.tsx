
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [stars, setStars] = useState<{ x: number; y: number; delay: number; scale: number }[]>([]);

  useEffect(() => {
    const numStars = 12; // Further reduced number of stars

    const newStars = [];
    
    // Stars at top left corner (away from text area)
    for (let i = 0; i < 3; i++) {
      newStars.push({
        x: 5 + i * 10,  // left edge (5%-25%)
        y: 5 + Math.random() * 10, 
        delay: Math.random() * 3,
        scale: 0.3 + Math.random() * 0.6,
      });
    }

    // Stars at top right corner (away from text area)
    for (let i = 0; i < 3; i++) {
      newStars.push({
        x: 70 + i * 7,  // right edge (70%-90%)
        y: 5 + Math.random() * 10,
        delay: Math.random() * 3,
        scale: 0.3 + Math.random() * 0.6,
      });
    }

    // Stars at bottom left corner (away from text area)
    for (let i = 0; i < 3; i++) {
      newStars.push({
        x: 5 + i * 10,  // left edge (5%-25%)
        y: 65 + Math.random() * 15,
        delay: Math.random() * 3,
        scale: 0.3 + Math.random() * 0.6,
      });
    }

    // Stars at bottom right corner (away from text area)
    for (let i = 0; i < 3; i++) {
      newStars.push({
        x: 70 + i * 7,  // right edge (70%-90%)
        y: 65 + Math.random() * 15,
        delay: Math.random() * 3,
        scale: 0.3 + Math.random() * 0.6,
      });
    }

    setStars(newStars.slice(0, numStars));
  }, []);

  return (
    <section className="min-h-[38vh] flex items-center bg-white text-unc-navy px-2 pt-6 relative overflow-hidden text-left">
      {/* Stars */}
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="star absolute z-0"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            transform: `scale(${star.scale})`,
          }}
          animate={{
            opacity: [1, 0.5, 1],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3 + star.delay / 2,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
      
      <div className="py-2 px-2 rounded-lg text-left w-full max-w-xl m-0 z-10 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-3"
        >
          abhimanyu "manyu" agashe
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-carolina-blue text-base md:text-lg mb-5"
        >
          statistics+computer science student, dev, (hopeful) builder
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-gray-600 text-sm max-w-2xl"
        >
          university of north carolina at chapel hill
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
