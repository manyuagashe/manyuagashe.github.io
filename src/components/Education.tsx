const Education = () => {
  return (
    <section className="py-24 bg-white px-4" id="education">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-unc-navy mb-12">Education</h2>
        <div className="space-y-12">
          <div className="border-l-4 border-carolina-blue pl-6">
            <h3 className="text-2xl font-bold text-unc-navy">Master of Science in Statistics</h3>
            <p className="text-carolina-blue text-lg mt-2">Expected [Graduation Year]</p>
            <p className="text-gray-600 mt-1">University of North Carolina at Chapel Hill</p>
            <ul className="mt-4 text-gray-700 list-disc pl-4 space-y-2">
              <li>Relevant Coursework: [Course 1], [Course 2], [Course 3]</li>
              <li>Research Focus: [Your Research Area]</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-carolina-blue pl-6">
            <h3 className="text-2xl font-bold text-unc-navy">Bachelor of Science in Statistics</h3>
            <p className="text-carolina-blue text-lg mt-2">Expected [Graduation Year]</p>
            <p className="text-gray-600 mt-1">University of North Carolina at Chapel Hill</p>
            <ul className="mt-4 text-gray-700 list-disc pl-4 space-y-2">
              <li>Major GPA: [Your GPA]</li>
              <li>Key Courses: [Course 1], [Course 2], [Course 3]</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;