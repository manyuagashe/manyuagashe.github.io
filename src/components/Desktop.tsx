import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Taskbar from "./Taskbar";
import WindowManager from "./WindowManager";
import ContactButton from "./ContactButton";
import { WindowProvider } from "./WindowContext";

interface Star {
  id: number;
  x: number;
  y: number;
  delay: number;
  scale: number;
  twinkleDuration: number;
}

const Desktop = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const numStars = 60; // Reduced from 80 as requested (25% less)
      
      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 2,
          scale: 0.3 + Math.random() * 0.7,
          twinkleDuration: 2 + Math.random() * 3,
        });
      }
      
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <WindowProvider>
      <div className="h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden relative">
        {/* Starry Background */}
        <motion.div 
          ref={sectionRef}
          style={{ y, opacity }}
          className="absolute inset-0 overflow-hidden"
        >
          {/* Mountain Silhouettes */}
          <div className="absolute bottom-0 left-0 w-full h-40 opacity-20">
            <svg viewBox="0 0 1200 400" className="w-full h-full">
              <path d="M0,400 L0,200 L200,100 L400,150 L600,80 L800,120 L1000,60 L1200,100 L1200,400 Z" fill="rgba(15, 23, 42, 0.8)" />
              <path d="M0,400 L0,250 L150,180 L350,220 L550,160 L750,190 L950,140 L1200,180 L1200,400 Z" fill="rgba(15, 23, 42, 0.6)" />
            </svg>
          </div>

          {/* Moon */}
          <motion.div
            style={{ y: moonY }}
            className="absolute top-20 right-20 w-20 h-20 bg-amber-100 rounded-full shadow-lg shadow-amber-200/30 opacity-80"
          />

          {/* Stars */}
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                scale: star.scale,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [star.scale * 0.8, star.scale * 1.2, star.scale * 0.8],
              }}
              transition={{
                duration: star.twinkleDuration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Atmospheric Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${80 + Math.random() * 20}%`,
              }}
              animate={{
                y: [-20, -60],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>

        {/* OS Interface */}
        <div className="relative z-10 h-full flex flex-col">
          <WindowManager />
          <ContactButton />
          <Taskbar />
        </div>
      </div>
    </WindowProvider>
  );
};

export default Desktop;