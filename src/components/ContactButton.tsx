import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useWindows } from "./WindowContext";

const ContactButton = () => {
  const { windows, openWindow, restoreWindow } = useWindows();

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
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] w-10 h-10 rounded-full bg-carolina-blue/90 backdrop-blur-glass border-2 border-white/40 shadow-lg flex items-center justify-center hover:bg-carolina-blue hover:shadow-xl transition-all duration-300"
    >
      <Mail size={16} className="text-white" />
    </motion.button>
  );
};

export default ContactButton;
