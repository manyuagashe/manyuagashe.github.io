
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Pastwork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const workExperiences = [
    {
      title: "data management summer intern",
      company: "UBS Group AG",
      items: [
        "building custom analytics software for data issues at the bank",
        "machine learning powered forecasting and categorization of issues",
        "built automated workflows for speeding up vendor contract management processes",
        "built a tool for automatic vulnerability remediation within the terminal"
      ]
    },
    {
      title: "student research intern",
      company: "UNC School of Data Science and Society",
      items: [
        "AI alignment research",
        "exploring the intersectionality of LLM's with human rights principles",
        "assisted in developing ethical frameworks for AI deployment",
        "collaborated with cross-disciplinary teams on data justice initiatives"
      ]
    },
    {
      title: "app development intern",
      company: "YM Global IT",
      items: [
        "built flutter frontend for sports promotions app for client",
        "worked with Django + SQLITE for backend",
        "product management skills via leading frontend idea-to-feature pipeline"
        
      ]
    }
   
  ];

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className="py-8 bg-gray-50 px-2 flex flex-col items-start hover:bg-gray-100 transition-colors duration-700" 
      id="Pastwork"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg font-bold text-unc-navy mb-6 text-left w-full max-w-xl hover:text-carolina-blue transition-colors duration-500"
      >
        Work Ex
      </motion.h2>
      <div className="border-l-4 border-carolina-blue pl-4 w-full max-w-xl space-y-6">
        {workExperiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 30, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="hover:shadow-lg hover:scale-[1.01] transition-all duration-500 hover:bg-white/50 p-3 rounded-lg"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-base font-bold text-unc-navy hover:text-carolina-blue transition-colors duration-300"
            >
              {experience.title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-carolina-blue text-sm mt-1 hover:text-unc-navy transition-colors duration-300"
            >
              {experience.company}
            </motion.p>
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="mt-2 text-gray-700 list-disc pl-4 space-y-1 text-xs"
            >
              {experience.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 + itemIndex * 0.05 }}
                  className="hover:text-unc-navy transition-colors duration-300"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Pastwork;
