import { motion } from "framer-motion";

const WorkWindow = () => {
  const workExperiences = [
    {
      company: "Office of Off Campus Student Life @UNC",
      position: "Product Manager - New Software Projects",
      duration: "Sep '25 - May '26",
      items: [
        "Creating and iterating on proposed software solution for party registration process at university for client office at UNC to support >15000 students residing off campus",
        "Detailed design and feature research for product, along with constant review of technical design and sketching out user experience , along with recruiting frontend and backend developers from talented student pool for project",
        "Developing and assisting developer experience in Next.JS, FastAPI, Postgres, SQLAlchemy."
      ]
    },
    {
      company: "UNC School of Data Science",
      position: "Teaching Assistant",
      duration: "August '25 - May '26",
      items: [
        "planned out intuitive sessions to review essential python and data science concepts"
        "1 on 1 corrections, review, debugging sessions offered to support student success"
        "helped create and grade a foundationally solid and technical data science curriculum"
      ]
    },
    
    {
      company: "Research Lab",
      position: "Undergraduate Researcher",
      duration: "2023 - Present",
      items: [
        "conducted research on machine learning applications in data analysis",
        "published findings and presented at undergraduate research symposium",
        "collaborated with graduate students and faculty on ongoing projects"
      ]
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
          Work Experience
        </motion.h2>
        
        <div className="space-y-4">
          {workExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg p-4 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-blue-navy">
                    {experience.position}
                  </h3>
                  <p className="text-blue-navy font-medium">
                    {experience.company}
                  </p>
                </div>
                <span className="text-sm text-white bg-white/20 px-2 py-1 rounded whitespace-nowrap">
                  {experience.duration}
                </span>
              </div>
              
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="space-y-1 text-sm text-black"
              >
                {experience.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.6 + index * 0.1 + itemIndex * 0.1 
                    }}
                    className="flex items-start space-x-2 hover:text-carolina-blue transition-colors duration-200"
                  >
                    <span className="text-carolina-blue mt-1.5 text-xs">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 p-4 bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg"
        >
          <h3 className="text-lg font-semibold text-blue-navy mb-2">Looking Forward</h3>
          <p className="text-sm text-black">
            I'm actively seeking internship opportunities for Summer 2025 in software engineering,
            data science, or machine learning roles where I can apply my skills and continue learning
            from experienced professionals.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WorkWindow;
