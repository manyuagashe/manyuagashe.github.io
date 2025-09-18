import { motion, AnimatePresence } from "framer-motion";
import { useWindows } from "./WindowContext";
import Window from "./Window";
import AboutWindow from "./windows/AboutWindow";
import EducationWindow from "./windows/EducationWindow";
import SkillsWindow from "./windows/SkillsWindow";
import WorkWindow from "./windows/WorkWindow";
import ContactWindow from "./windows/ContactWindow";
import TerminalWindow from "./windows/TerminalWindow";

const WindowManager = () => {
  const { windows } = useWindows();

  const renderWindowContent = (component: string) => {
    switch (component) {
      case 'about':
        return <AboutWindow />;
      case 'education':
        return <EducationWindow />;
      case 'skills':
        return <SkillsWindow />;
      case 'work':
        return <WorkWindow />;
      case 'contact':
        return <ContactWindow />;
      case 'terminal':
        return <TerminalWindow />;
      default:
        return <div className="p-4">Unknown window type</div>;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      <AnimatePresence>
        {windows
          .filter(window => window.isOpen && !window.isMinimized)
          .map(window => (
            <motion.div
              key={window.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute pointer-events-auto"
              style={{
                left: window.x,
                top: window.y,
                width: window.width,
                height: window.height,
                zIndex: window.zIndex
              }}
            >
              <Window
                id={window.id}
                title={window.title}
                isMaximized={window.isMaximized}
              >
                {renderWindowContent(window.component)}
              </Window>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default WindowManager;