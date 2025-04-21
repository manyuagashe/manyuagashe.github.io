
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [stars, setStars] = useState<{ x: number; y: number; delay: number; scale: number }[]>([]);

  useEffect(() => {
    const numStars = 12;
    const newStars = [];
    
    // Define the text area that should be avoided (approximate x, y percentages)
    const textAreaX = { min: 25, max: 65 }; // middle section horizontally
    const textAreaY = { min: 15, max: 60 }; // middle section vertically
    
    // Function to check if a position is within the text area
    const isInTextArea = (x: number, y: number) => {
      return x >= textAreaX.min && x <= textAreaX.max && y >= textAreaY.min && y <= textAreaY.max;
    };
    
    // Function to generate a star position that avoids the text area
    const generateStarPosition = () => {
      let x, y;
      do {
        // Generate random positions across the entire area
        x = 5 + Math.random() * 90;  // 5% to 95% width
        y = 5 + Math.random() * 90;  // 5% to 95% height
      } while (isInTextArea(x, y));
      
      return { 
        x, 
        y, 
        delay: Math.random() * 3,
        scale: 0.3 + Math.random() * 0.6 
      };
    };
    
    // Generate stars around the text area
    for (let i = 0; i < numStars; i++) {
      newStars.push(generateStarPosition());
    }
    
    setStars(newStars);
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
