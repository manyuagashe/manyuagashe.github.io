
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const NUM_STARS = 22;

const Hero = () => {
  const [stars, setStars] = useState<
    { x: number; y: number; delay: number; scale: number }[]
  >([]);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Define the bounding box for text area in absolute px, based on the rendered text box
    if (!textRef.current) return;

    const textRect = textRef.current.getBoundingClientRect();

    // Helper to check if x%,y% would fall inside the text area (on any screen size)
    const isInTextArea = (xPct: number, yPct: number) => {
      // get parent size
      const parent = textRef.current?.parentElement;
      if (!parent) return false;
      const parentRect = parent.getBoundingClientRect();

      const absX = parentRect.left + (xPct / 100) * parentRect.width;
      const absY = parentRect.top + (yPct / 100) * parentRect.height;

      // Slightly enlarge text rect for margin
      const marginPx = 18;
      return (
        absX >= textRect.left - marginPx &&
        absX <= textRect.right + marginPx &&
        absY >= textRect.top - marginPx &&
        absY <= textRect.bottom + marginPx
      );
    };

    // Generate a star absolutely *not* in text area
    const generateStarPosition = () => {
      let x, y, tries = 0;
      do {
        x = Math.random() * 100; // 0-100%
        y = Math.random() * 100;
        tries++;
        // Avoid infinite loop: after some tries, just spread further out
        if (tries > 20) {
          // place stars outside top/bottom/text, prioritizing Y
          if (Math.random() > 0.5) {
            y = Math.random() > 0.5 ? -8 : 108; // above or below visible box
          } else {
            x = Math.random() > 0.5 ? -8 : 108; // left or right of visible box
          }
        }
      } while (isInTextArea(x, y));
      return {
        x,
        y,
        delay: Math.random() * 2.5,
        scale: 0.3 + Math.random() * 0.7,
      };
    };

    const newStars = [];
    for (let i = 0; i < NUM_STARS; i++) {
      newStars.push(generateStarPosition());
    }
    setStars(newStars);
    // eslint-disable-next-line
  }, []);

  return (
    <section className="min-h-[38vh] flex items-center bg-white text-unc-navy px-2 pt-6 relative overflow-hidden text-left">
      {/* Stars */}
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="star absolute z-0"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            transform: `scale(${star.scale})`,
          }}
          animate={{
            opacity: [1, 0.5, 1],
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3 + star.delay / 2,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      <div
        ref={textRef}
        className="py-2 px-2 rounded-lg text-left w-full max-w-xl m-0 z-10 relative"
      >
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold mb-3"
        >
          abhimanyu "manyu" agashe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-carolina-blue text-base md:text-lg mb-5"
        >
          statistics+computer science student, dev, (hopeful) builder
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-gray-600 text-sm max-w-2xl"
        >
          university of north carolina at chapel hill
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
