import { useState, useRef, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { useWindows } from "./WindowContext";

interface WindowProps {
  id: string;
  title: string;
  children: ReactNode;
  isMaximized: boolean;
}

const Window = ({ id, title, children, isMaximized }: WindowProps) => {
  const { closeWindow, minimizeWindow, maximizeWindow, bringToFront, updateWindowPosition } = useWindows();
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [windowStart, setWindowStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMaximized) return;
    
    setIsDragging(true);
    bringToFront(id);
    setDragStart({ x: e.clientX, y: e.clientY });
    
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      setWindowStart({ x: rect.left, y: rect.top });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || isMaximized) return;
      
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      
      const newX = Math.max(0, windowStart.x + deltaX);
      const newY = Math.max(0, windowStart.y + deltaY);
      
      updateWindowPosition(id, newX, newY);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart, windowStart, id, updateWindowPosition, isMaximized]);

  const handleClick = () => {
    bringToFront(id);
  };

  return (
    <motion.div
      ref={windowRef}
      onClick={handleClick}
      className="bg-black border border-gray-700 overflow-hidden select-none h-full flex flex-col"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Window Header */}
      <div
        className="bg-black border-b border-gray-700 px-4 py-2 flex items-center justify-between cursor-move font-mono text-xs"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center space-x-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            className="text-red-500 hover:text-red-400 transition-colors"
          >
            [X]
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            className="text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            [_]
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              maximizeWindow(id);
            }}
            className="text-green-500 hover:text-green-400 transition-colors"
          >
            [□]
          </button>
        </div>
        
        <h3 className="text-sm font-medium text-blue-navy truncate mx-4">{title}</h3>
        
        <div className="w-20"></div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;