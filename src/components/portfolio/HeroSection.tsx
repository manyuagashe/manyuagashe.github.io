import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-4"
        >
          portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-serif font-normal mb-4 leading-tight"
        >
          Abhimanyu<br />
          <span className="text-accent">Agashe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-sm text-muted-foreground mb-2 max-w-md leading-relaxed"
        >
          Statistics & CS student at UNC Chapel Hill. I build things at the intersection of
          data, systems, and the people who use them.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-xs text-muted-foreground/70 mb-8"
        >
          ML research · full-stack dev · product thinking
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          <button
            onClick={() => scrollTo("experience")}
            className="text-xs px-4 py-2 border border-border rounded-full hover:border-accent hover:text-accent transition-all duration-200"
          >
            experience
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="text-xs px-4 py-2 border border-border rounded-full hover:border-accent hover:text-accent transition-all duration-200"
          >
            projects
          </button>
          <a
            href="mailto:abhimanyu.agashe@gmail.com"
            className="text-xs px-4 py-2 bg-accent text-background rounded-full hover:bg-accent/80 transition-all duration-200"
          >
            get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-0"
      >
        <button
          onClick={() => scrollTo("experience")}
          className="flex flex-col items-center gap-1 text-muted-foreground/40 hover:text-muted-foreground transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widest">scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-6 bg-current"
          />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
