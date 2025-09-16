import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const NUM_STARS = 48;

const Hero = () => {
  const [stars, setStars] = useState<
    { x: number; y: number; delay: number; scale: number; twinkle: number }[]
  >([]);
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0.5]);
  const moonY = useTransform(scrollYProgress, [0, 1], [0, -30]);

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
      const marginPx = 25;
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
        y = Math.random() * 70; // Focus stars in upper 70% for sky effect
        tries++;
        // Avoid infinite loop: after some tries, just spread further out
        if (tries > 30) {
          // place stars outside top/bottom/text, prioritizing Y
          if (Math.random() > 0.5) {
            y = Math.random() * 30; // upper area
          } else {
            x = Math.random() > 0.5 ? Math.random() * 20 : 80 + Math.random() * 20; // left or right edges
          }
        }
      } while (isInTextArea(x, y));
      return {
        x,
        y,
        delay: Math.random() * 4,
        scale: 0.2 + Math.random() * 0.8,
        twinkle: 2 + Math.random() * 3,
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
    <motion.section 
      ref={sectionRef}
      style={{ y, opacity }}
      className="min-h-[34vh] flex items-center bg-white text-unc-navy px-2 pt-6 relative overflow-hidden text-left"
    >
      {/* Landscape Background */}
      <div className="absolute inset-0 z-0">
        {/* Mountain Silhouettes */}
        <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path 
            d="M0,200 L0,120 Q150,80 300,100 T600,90 Q750,70 900,85 T1200,75 L1200,200 Z" 
            fill="#13294B" 
            opacity="0.15"
          />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-24" viewBox="0 0 1200 150" preserveAspectRatio="none">
          <path 
            d="M0,150 L0,90 Q200,60 400,80 T800,70 Q1000,50 1200,65 L1200,150 Z" 
            fill="#13294B" 
            opacity="0.25"
          />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-16" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path 
            d="M0,100 L0,60 Q300,40 600,55 T1200,50 L1200,100 Z" 
            fill="#13294B" 
            opacity="0.4"
          />
        </svg>
      </div>

      {/* Dark Moon */}
      <motion.div
        style={{ y: moonY }}
        className="absolute top-8 right-12 z-1"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-unc-navy opacity-20 relative">
          {/* Moon craters */}
          <div className="absolute top-2 left-3 w-2 h-2 rounded-full bg-unc-navy opacity-30"></div>
          <div className="absolute bottom-3 right-2 w-1.5 h-1.5 rounded-full bg-unc-navy opacity-40"></div>
          <div className="absolute top-6 right-4 w-1 h-1 rounded-full bg-unc-navy opacity-25"></div>
        </div>
      </motion.div>

      {/* Enhanced Stars */}
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="star absolute z-2"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            transform: `scale(${star.scale})`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [star.scale * 0.8, star.scale, star.scale * 0.8],
          }}
          transition={{
            duration: star.twinkle,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Atmospheric particles */}
      <div className="absolute inset-0 z-1">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-unc-navy rounded-full opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Text Content */}
      <div
        ref={textRef}
        className="py-4 px-2 rounded-lg text-left w-full max-w-xl m-0 z-20 relative backdrop-blur-[1px]"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-2xl md:text-3xl font-bold mb-3 hover:text-carolina-blue transition-colors duration-500 drop-shadow-sm"
        >
          abhimanyu "manyu" agashe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-carolina-blue text-base md:text-lg mb-5 hover:scale-[1.033] transition-transform duration-500 drop-shadow-sm"
        >
          statistics+computer science student, dev, (hopeful) builder
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="text-gray-600 text-sm max-w-2xl hover:text-unc-navy transition-colors duration-500 drop-shadow-sm"
        >
          university of north carolina at chapel hill
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;