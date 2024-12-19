const Skills = () => {
  const skills = [
    { 
      category: "Statistical Software", 
      items: ["R", "SAS", "STATA", "SPSS"] 
    },
    { 
      category: "Programming", 
      items: ["Python", "SQL", "MATLAB", "Java"] 
    },
    { 
      category: "Data Analysis", 
      items: ["Regression Analysis", "Time Series Analysis", "Machine Learning", "Data Visualization"] 
    },
    { 
      category: "Tools & Technologies", 
      items: ["Git", "LaTeX", "Tableau", "Power BI"] 
    },
  ];

  return (
    <section className="py-24 bg-gray-50 px-4" id="skills">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-unc-navy mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-carolina-blue mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((item) => (
                  <li key={item} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;