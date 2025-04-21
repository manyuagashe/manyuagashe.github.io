
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [stars, setStars] = useState<{ x: number; y: number; delay: number; scale: number }[]>([]);

  useEffect(() => {
    // Reduce number of stars
    const numStars = 15; // Reduced from 25
    
    // Define a distribution pattern that surrounds the text rather than avoiding it
    // We'll create a "frame" effect with stars placed mainly at the edges and some around the text
    const newStars = [];
    
    // Add stars to top area
    for (let i = 0; i < 3; i++) {
      newStars.push({
        x: 10 + (i * 30), // Distribute across top
        y: 5 + Math.random() * 10, // Near top
        delay: Math.random() * 3,
        scale: 0.4 + Math.random() * 0.8, // Smaller scale
      });
    }
    
    // Add stars to right side
    for (let i = 0; i < 3; i++) {
      newStars.push({
        x: 80 + Math.random() * 15, // Right side
        y: 20 + (i * 20), // Distribute vertically
        delay: Math.random() * 3,
        scale: 0.4 + Math.random() * 0.8,
      });
    }
    
    // Add stars to bottom area
    for (let i = 0; i < 3; i++) {
      newStars.push({
        x: 15 + (i * 25), // Distribute across bottom
        y: 75 + Math.random() * 15, // Near bottom
        delay: Math.random() * 3,
        scale: 0.4 + Math.random() * 0.8,
      });
    }
    
    // Add stars to left side
    for (let i = 0; i < 3; i++) {
      newStars.push({
        x: 5 + Math.random() * 10, // Left side
        y: 30 + (i * 15), // Distribute vertically
        delay: Math.random() * 3,
        scale: 0.4 + Math.random() * 0.8,
      });
    }
    
    // Add a few stars near the text to create a surrounding effect
    newStars.push({
      x: 40 + Math.random() * 20,
      y: 30 + Math.random() * 10,
      delay: Math.random() * 3,
      scale: 0.3 + Math.random() * 0.6, // Even smaller near text
    });
    
    newStars.push({
      x: 45 + Math.random() * 15,
      y: 60 + Math.random() * 10,
      delay: Math.random() * 3,
      scale: 0.3 + Math.random() * 0.6,
    });
    
    // Add one more star if we haven't reached our limit
    if (newStars.length < numStars) {
      newStars.push({
        x: 60 + Math.random() * 15,
        y: 45 + Math.random() * 15,
        delay: Math.random() * 3,
        scale: 0.3 + Math.random() * 0.6,
      });
    }
    
    setStars(newStars.slice(0, numStars)); // Ensure we don't exceed numStars
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
            y: [0, -8, 0], // Reduced movement
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
