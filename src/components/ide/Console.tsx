import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const consoleMessages = [
  { type: 'info', text: '> Portfolio initialized successfully' },
  { type: 'success', text: '✓ All skills loaded' },
  { type: 'success', text: '✓ Experience data compiled' },
  { type: 'success', text: '✓ Contact information available' },
  { type: 'info', text: '> Ready to connect!' },
];

export function Console() {
  const [messages, setMessages] = useState<typeof consoleMessages>([]);

  useEffect(() => {
    consoleMessages.forEach((msg, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, msg]);
      }, index * 400);
    });
  }, []);

  return (
    <div className="h-full flex flex-col bg-card border-t border-border">
      {/* Console Header */}
      <div className="flex items-center justify-between h-8 px-3 bg-background border-b border-border">
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Terminal className="h-3 w-3" />
          <span>OUTPUT</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="h-5 w-5 flex items-center justify-center hover:bg-muted rounded text-muted-foreground">
            <span className="text-xs">×</span>
          </button>
        </div>
      </div>

      {/* Console Content */}
      <div className="flex-1 overflow-auto p-3 font-mono text-xs">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`leading-6 ${
              msg.type === 'success' 
                ? 'text-green-400' 
                : msg.type === 'error'
                ? 'text-red-400'
                : 'text-primary'
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-primary ml-1"
        />
      </div>
    </div>
  );
}
