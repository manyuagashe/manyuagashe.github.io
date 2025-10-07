import { motion } from "framer-motion";
import { useWindows } from "./WindowContext";
import { useState, useEffect } from "react";
import { 
  User, 
  GraduationCap, 
  Code, 
  Briefcase, 
  Mail, 
  Terminal
} from "lucide-react";

const Taskbar = () => {
  const { windows, openWindow, restoreWindow } = useWindows();
  const [currentTime, setCurrentTime] = useState(new Date());

  const apps = [
    { id: 'about', title: 'About Me', component: 'about', icon: User, color: 'text-unc-navy' },
    { id: 'education', title: 'Education', component: 'education', icon: GraduationCap, color: 'text-unc-navy' },
    { id: 'skills', title: 'Skills', component: 'skills', icon: Code, color: 'text-unc-navy' },
    { id: 'work', title: 'Work Experience', component: 'work', icon: Briefcase, color: 'text-unc-navy' },
    { id: 'contact', title: 'Contact', component: 'contact', icon: Mail, color: 'text-unc-navy' },
    { id: 'terminal', title: 'Terminal', component: 'terminal', icon: Terminal, color: 'text-unc-navy' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAppClick = (app: typeof apps[0]) => {
    const existingWindow = windows.find(w => w.id === app.id);
    if (existingWindow) {
      if (existingWindow.isMinimized) {
        restoreWindow(app.id);
      } else {
        openWindow(app.id, app.title, app.component);
      }
    } else {
      openWindow(app.id, app.title, app.component);
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed bottom-0 left-0 right-0 h-16 bg-glass-bg backdrop-blur-glass border-t border-glass-border shadow-glass z-50"
    >
      <div className="flex items-center justify-center h-full px-4">
        {/* App Icons */}
        <div className="flex items-center space-x-2">
          {apps.map((app, index) => {
            const isOpen = windows.some(w => w.id === app.id && w.isOpen);
            const isMinimized = windows.some(w => w.id === app.id && w.isMinimized);
            
            return (
              <motion.button
                key={app.id}
                onClick={() => handleAppClick(app)}
                className={`
                  relative p-3 rounded-lg transition-all duration-300 group
                  ${isOpen 
                    ? 'bg-carolina-blue/20 border border-carolina-blue/30' 
                    : 'hover:bg-white/10 border border-transparent'
                  }
                  ${isMinimized ? 'opacity-60' : ''}
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <app.icon 
                  size={20} 
                  className={`${app.color} transition-colors duration-300 group-hover:scale-110`} 
                />
                
                {/* Active indicator */}
                {isOpen && !isMinimized && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-carolina-blue rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {app.title}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Time */}
        <div className="ml-auto text-sm text-unc-navy font-mono">
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
      </div>
    </motion.div>
  );
};

export default Taskbar;