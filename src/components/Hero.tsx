
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [stars, setStars] = useState<{ x: number; y: number; delay: number; scale: number }[]>([]);

  useEffect(() => {
    // Define a safe zone for text in the middle
    const safeZoneVerticalStart = 30; // % from top
    const safeZoneVerticalEnd = 70; // % from top
    const safeZoneHorizontalStart = 20; // % from left
    const safeZoneHorizontalEnd = 80; // % from left
    
    // Minimum distance between stars (in percentage of viewport)
    const minDistanceBetweenStars = 10;
    
    const newStars = [];
    const numStars = 25;
    
    // Helper function to check if a position is valid
    const isValidPosition = (x: number, y: number) => {
      // Check if inside text safe zone
      if (x >= safeZoneHorizontalStart && x <= safeZoneHorizontalEnd && 
          y >= safeZoneVerticalStart && y <= safeZoneVerticalEnd) {
        return false;
      }
      
      // Check if too close to any existing star
      for (const star of newStars) {
        const distance = Math.sqrt(Math.pow(star.x - x, 2) + Math.pow(star.y - y, 2));
        if (distance < minDistanceBetweenStars) {
          return false;
        }
      }
      
      return true;
    };
    
    // Generate random stars with valid positions
    let attempts = 0;
    const maxAttempts = 200;
    
    while (newStars.length < numStars && attempts < maxAttempts) {
      attempts++;
      
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      if (isValidPosition(x, y)) {
        newStars.push({
          x,
          y,
          delay: Math.random() * 5,
          scale: 0.5 + Math.random() * 1.5,
        });
      }
    }
    
    setStars(newStars);
  }, []);

  return (
    <section className="min-h-[38vh] flex items-center bg-white text-unc-navy px-2 pt-6 relative overflow-hidden text-left"> {/* smaller min-h, smaller px/pt */}
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
      
      <div className="py-2 px-2 rounded-lg text-left w-full max-w-xl m-0">
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
