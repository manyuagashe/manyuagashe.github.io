
const Skills = () => {
  const skills = [
    { 
      category: "Statistics/Data Science", 
      items: ["R", "Pandas", "SKlearn"] 
    },
    { 
      category: "Programming", 
      items: ["Python", "SQL", "Java", "TypeScript"] 
    },
    { 
      category: "Data Analysis", 
      items: ["Regression Analysis", "Machine Learning", "Data Visualization"] 
    },
    { 
      category: "Other Tools for Dev/Non-Dev", 
      items: ["Git(Hub)", "Jira", "Tableau", "Excel", "AMPL"] 
    },
  ];

  return (
    <section className="py-8 bg-gray-50 px-2" id="skills">
      <div className="max-w-xl">
        <h2 className="text-lg font-bold text-unc-navy mb-6 text-left">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-white p-3 rounded shadow-sm">
              <h3 className="text-base font-bold text-carolina-blue mb-2">{skillGroup.category}</h3>
              <ul className="space-y-1">
                {skillGroup.items.map((item) => (
                  <li key={item} className="text-xs text-gray-700">{item}</li>
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
