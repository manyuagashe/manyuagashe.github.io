import { motion } from "framer-motion";

const SkillsWindow = () => {
  const skillGroups = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "TypeScript", "Java", "R", "SQL", "C++"]
    },
    {
      category: "Web Development",
      items: ["React", "Node.js", "HTML/CSS", "Tailwind CSS", "Next.js", "Express.js"]
    },
    {
      category: "Data Science & ML",
      items: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Jupyter"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Linux"]
    }
  ];

  return (
    <div className="p-6 h-full overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-bold text-blue-navy mb-6"
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="grid gap-4">
          {skillGroups.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg p-4 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-navy mb-3">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.4 + index * 0.1 + itemIndex * 0.05 
                    }}
                    className="inline-block bg-white/70 text-blue-navy px-3 py-1 rounded-full text-sm font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 p-4 bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg"
        >
          <h3 className="text-lg font-semibold text-blue-navy mb-2">Currently Learning</h3>
          <div className="flex flex-wrap gap-2">
            {["Rust", "GraphQL", "Kubernetes", "Machine Learning Engineering"].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
                className="inline-block bg-white/70 text-blue-navy px-3 py-1 rounded-full text-sm font-semibold"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillsWindow;