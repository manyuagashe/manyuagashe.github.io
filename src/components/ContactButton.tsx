import { motion } from "framer-motion";
import { useWindows } from "./WindowContext";
import { useEffect, useState } from "react";

const ContactButton = () => {
  const { windows, openWindow, restoreWindow } = useWindows();
  const [position, setPosition] = useState({ left: '50%', top: '50%' });

  useEffect(() => {
    const calculatePosition = () => {
      const gridMargin = 40;
      const gridGap = 24;
      const taskbarHeight = 60;
      const windowWidth = (window.innerWidth - gridMargin * 2 - gridGap) / 2;
      const windowHeight = (window.innerHeight - gridMargin * 2 - taskbarHeight - gridGap) / 2;
      
      // Center is at gridMargin + windowWidth (horizontal) and gridMargin + windowHeight (vertical)
      const left = gridMargin + windowWidth;
      const top = gridMargin + windowHeight;
      
      setPosition({ left: `${left}px`, top: `${top}px` });
    };

    calculatePosition();
    window.addEventListener('resize', calculatePosition);
    return () => window.removeEventListener('resize', calculatePosition);
  }, []);

  const handleClick = () => {
    const existingWindow = windows.find(w => w.id === 'contact');
    if (existingWindow) {
      if (existingWindow.isMinimized) {
        restoreWindow('contact');
      } else {
        openWindow('contact', 'Contact', 'contact');
      }
    } else {
      openWindow('contact', 'Contact', 'contact');
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      style={{ left: position.left, top: position.top }}
      className="fixed transform -translate-x-1/2 -translate-y-1/2 z-[999] p-0 bg-transparent border-none cursor-pointer font-mono text-2xl text-carolina-blue"
    >
      [@]
    </motion.button>
  );
};

export default ContactButton;
