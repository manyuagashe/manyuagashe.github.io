
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [stars, setStars] = useState<{ x: number; y: number; delay: number; scale: number }[]>([]);

  useEffect(() => {
    // Generate random stars
    const newStars = [];
    const numStars = 25; // Number of stars to generate
    
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        x: Math.random() * 100, // Random x position (0-100%)
        y: Math.random() * 100, // Random y position (0-100%)
        delay: Math.random() * 5, // Random animation delay
        scale: 0.5 + Math.random() * 1.5, // Random size
      });
    }
    
    setStars(newStars);
  }, []);

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white text-unc-navy px-4 pt-16 relative overflow-hidden">
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
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3 + star.delay / 2,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
      
      <div className="text-center z-10">
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
