
const Education = () => {
  return (
    <section className="py-8 bg-white px-2 flex flex-col items-start" id="education">
      <h2 className="text-lg font-bold text-unc-navy mb-6 text-left w-full max-w-xl">Education</h2>
      <div className="border-l-4 border-carolina-blue pl-4 w-full max-w-xl">
        <h3 className="text-base font-bold text-unc-navy">B.S. statistics/operations research, expected 2026</h3>
        <p className="text-carolina-blue text-sm mt-1">compsci minor, parr center for ethics member</p>
        <ul className="mt-2 text-gray-700 list-disc pl-4 space-y-1 text-xs">
          <li><b>gpa</b>: 3.77, dean's list</li>
          <li>key courses: probability theory, theory and methods for machine learning, optimization, design patterns of code, systems fundamentals</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
