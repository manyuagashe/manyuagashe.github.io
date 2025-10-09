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
      <div className="h-screen bg-black overflow-hidden relative">
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