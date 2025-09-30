import { useState, useRef, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { useWindows } from "./WindowContext";
import { X, Minus, Square, Maximize2 } from "lucide-react";

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
      className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg shadow-glass overflow-hidden select-none h-full flex flex-col"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* Window Header */}
      <div
        className="bg-gradient-to-r from-carolina-blue/20 to-blue-medium/20 border-b border-glass-border px-4 py-2 flex items-center justify-between cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        
        <h3 className="text-sm font-medium text-blue-navy truncate mx-4">{title}</h3>
        
        <div className="flex items-center space-x-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            className="p-1 hover:bg-white/10 rounded transition-colors"
          >
            <Minus size={12} className="text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              maximizeWindow(id);
            }}
            className="p-1 hover:bg-white/10 rounded transition-colors"
          >
            {isMaximized ? <Maximize2 size={12} className="text-white" /> : <Square size={12} className="text-white" />}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            className="p-1 hover:bg-red-500/20 rounded transition-colors"
          >
            <X size={12} className="text-white" />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;