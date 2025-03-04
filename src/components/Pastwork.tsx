const Pastwork = () => {
  return (
    <section className="py-12 bg-gray-50 px-4 flex flex-col items-center" id="Pastwork">
      <h2 className="text-3xl font-bold text-unc-navy mb-12 text-left w-full max-w-2xl">Work Exp</h2>
      <div className="border-l-4 border-carolina-blue pl-6 w-full max-w-2xl space-y-8">
        <div>
          <h3 className="text-2xl font-bold text-unc-navy">student research intern</h3>
          <p className="text-carolina-blue text-lg mt-2">UNC School of Data Science and Society</p>
          <ul className="mt-4 text-gray-700 list-disc pl-4 space-y-2">
            <li>AI alignment research</li>
            <li>exploring the intersectionality of LLM's with human rights principles</li>
            <li>assisted in developing ethical frameworks for AI deployment</li>
            <li>collaborated with cross-disciplinary teams on data justice initiatives</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-unc-navy">web development intern</h3>
          <p className="text-carolina-blue text-lg mt-2">YM Global IT</p>
          <ul className="mt-4 text-gray-700 list-disc pl-4 space-y-2">
            <li>developed responsive web applications using React and TypeScript</li>
            <li>collaborated with UI/UX designers to implement pixel-perfect designs</li>
            <li>optimized website performance and accessibility</li>
            <li>participated in code reviews and agile development processes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pastwork;
