const Education = () => {
  return (
    <section className="py-20 bg-gray-50 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-unc-navy mb-12">Education</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-carolina-blue pl-4 py-2">
            <h3 className="text-xl font-bold text-unc-navy">Master of Science in Statistics</h3>
            <p className="text-carolina-blue">Expected [Graduation Year]</p>
            <p className="text-gray-600">University of North Carolina at Chapel Hill</p>
          </div>
          <div className="border-l-4 border-carolina-blue pl-4 py-2">
            <h3 className="text-xl font-bold text-unc-navy">Bachelor of Science in Statistics</h3>
            <p className="text-carolina-blue">Expected [Graduation Year]</p>
            <p className="text-gray-600">University of North Carolina at Chapel Hill</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;