import { motion } from "framer-motion";
import { useWindows } from "./WindowContext";
import { useState, useEffect } from "react";

const Taskbar = () => {
  const { windows, openWindow, restoreWindow } = useWindows();
  const [currentTime, setCurrentTime] = useState(new Date());

  const apps = [
    { id: 'about', title: 'About Me', component: 'about', ascii: '[@]', color: 'text-unc-navy' },
    { id: 'education', title: 'Education', component: 'education', ascii: '[^]', color: 'text-unc-navy' },
    { id: 'skills', title: 'Skills', component: 'skills', ascii: '</>',  color: 'text-unc-navy' },
    { id: 'work', title: 'Work Experience', component: 'work', ascii: '[#]', color: 'text-unc-navy' },
    { id: 'contact', title: 'Contact', component: 'contact', ascii: '[@]', color: 'text-unc-navy' },
    { id: 'terminal', title: 'Terminal', component: 'terminal', ascii: '>_', color: 'text-unc-navy' },
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
      className="fixed bottom-0 left-0 right-0 h-16 bg-black border-t border-gray-800 z-50"
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
                  relative px-3 py-2 transition-all duration-300 group font-mono text-sm
                  ${isOpen 
                    ? 'bg-gray-800 border border-gray-600' 
                    : 'hover:bg-gray-900 border border-transparent'
                  }
                  ${isMinimized ? 'opacity-60' : ''}
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className={`${app.color}`}>
                  {app.ascii}
                </span>
                
                {/* Active indicator */}
                {isOpen && !isMinimized && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-carolina-blue"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black border border-gray-700 text-white text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
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