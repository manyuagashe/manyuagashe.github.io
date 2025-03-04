const Education = () => {
  return (
    <section className="py-12 bg-white px-4 flex flex-col items-center" id="education">
      <h2 className="text-3xl font-bold text-unc-navy mb-12 text-left w-full max-w-2xl">Education</h2>
      <div className="border-l-4 border-carolina-blue pl-6 w-full max-w-2xl">
        <h3 className="text-2xl font-bold text-unc-navy">B.S. statistics/operations research, expected 2026</h3>
        <p className="text-carolina-blue text-lg mt-2">compsci minor, parr center for ethics member</p>
        
        <ul className="mt-4 text-gray-700 list-disc pl-4 space-y-2">
          <li><b>gpa</b>: 3.77, dean's list</li>
          <li>key courses: probability theory, theory and methods for machine learning, optimization, design patterns of code, systems fundamentals</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
