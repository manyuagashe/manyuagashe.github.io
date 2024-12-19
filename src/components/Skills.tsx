const Skills = () => {
  const skills = [
    { category: "Statistical Software", items: ["R", "SAS", "STATA"] },
    { category: "Programming", items: ["Python", "SQL", "MATLAB"] },
    { category: "Analysis", items: ["Regression Analysis", "Time Series", "Machine Learning"] },
    { category: "Tools", items: ["Git", "LaTeX", "Tableau"] },
  ];

  return (
    <section className="py-20 bg-white px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-unc-navy mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-gray-50 p-6 rounded-lg">
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