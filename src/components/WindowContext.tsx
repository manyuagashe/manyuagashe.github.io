import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface WindowState {
  id: string;
  title: string;
  component: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
}

interface WindowContextType {
  windows: WindowState[];
  openWindow: (id: string, title: string, component: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  bringToFront: (id: string) => void;
  updateWindowPosition: (id: string, x: number, y: number) => void;
  updateWindowSize: (id: string, width: number, height: number) => void;
  getNextZIndex: () => number;
}

const WindowContext = createContext<WindowContextType | undefined>(undefined);

export const useWindows = () => {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error('useWindows must be used within a WindowProvider');
  }
  return context;
};

interface WindowProviderProps {
  children: ReactNode;
}

export const WindowProvider: React.FC<WindowProviderProps> = ({ children }) => {
  // Calculate grid layout for 2x2 windows with center gap for contact button
  const gridMargin = 40;
  const gridGap = 48; // Increased for center button space
  const taskbarHeight = 60;
  const windowWidth = (window.innerWidth - gridMargin * 2 - gridGap) / 2;
  const windowHeight = (window.innerHeight - gridMargin * 2 - taskbarHeight - gridGap) / 2;

  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'hero',
      title: 'Welcome',
      component: 'hero',
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      x: gridMargin,
      y: gridMargin,
      width: windowWidth,
      height: windowHeight,
      zIndex: 1001
    },
    {
      id: 'about',
      title: 'About Me',
      component: 'about',
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      x: gridMargin + windowWidth + gridGap,
      y: gridMargin,
      width: windowWidth,
      height: windowHeight,
      zIndex: 1002
    },
    {
      id: 'education',
      title: 'Education',
      component: 'education',
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      x: gridMargin,
      y: gridMargin + windowHeight + gridGap,
      width: windowWidth,
      height: windowHeight,
      zIndex: 1003
    },
    {
      id: 'work',
      title: 'Work Experience',
      component: 'work',
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      x: gridMargin + windowWidth + gridGap,
      y: gridMargin + windowHeight + gridGap,
      width: windowWidth,
      height: windowHeight,
      zIndex: 1004
    }
  ]);
  const [maxZIndex, setMaxZIndex] = useState(1004);

  const getNextZIndex = () => {
    setMaxZIndex(prev => prev + 1);
    return maxZIndex + 1;
  };

  const openWindow = (id: string, title: string, component: string) => {
    setWindows(prev => {
      const existing = prev.find(w => w.id === id);
      if (existing) {
        return prev.map(w => 
          w.id === id 
            ? { ...w, isOpen: true, isMinimized: false, zIndex: getNextZIndex() }
            : w
        );
      }
      
      const newWindow: WindowState = {
        id,
        title,
        component,
        isOpen: true,
        isMinimized: false,
        isMaximized: false,
        x: 100 + (prev.length * 30),
        y: 80 + (prev.length * 30),
        width: 600,
        height: 500,
        zIndex: getNextZIndex()
      };
      
      return [...prev, newWindow];
    });
  };

  const closeWindow = (id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  };

  const maximizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id 
        ? { 
            ...w, 
            isMaximized: !w.isMaximized,
            ...(w.isMaximized ? {} : { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight - 60 })
          } 
        : w
    ));
  };

  const restoreWindow = (id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id 
        ? { ...w, isMinimized: false, zIndex: getNextZIndex() }
        : w
    ));
  };

  const bringToFront = (id: string) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, zIndex: getNextZIndex() } : w
    ));
  };

  const updateWindowPosition = (id: string, x: number, y: number) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, x, y } : w
    ));
  };

  const updateWindowSize = (id: string, width: number, height: number) => {
    setWindows(prev => prev.map(w => 
      w.id === id ? { ...w, width, height } : w
    ));
  };

  return (
    <WindowContext.Provider value={{
      windows,
      openWindow,
      closeWindow,
      minimizeWindow,
      maximizeWindow,
      restoreWindow,
      bringToFront,
      updateWindowPosition,
      updateWindowSize,
      getNextZIndex
    }}>
      {children}
    </WindowContext.Provider>
  );
};