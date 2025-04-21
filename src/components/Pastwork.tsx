
const Pastwork = () => {
  return (
    <section className="py-8 bg-gray-50 px-2 flex flex-col items-start" id="Pastwork">
      <h2 className="text-lg font-bold text-unc-navy mb-6 text-left w-full max-w-xl">Work Ex</h2>
      <div className="border-l-4 border-carolina-blue pl-4 w-full max-w-xl space-y-6">
        <div>
          <h3 className="text-base font-bold text-unc-navy">student research intern</h3>
          <p className="text-carolina-blue text-sm mt-1">UNC School of Data Science and Society</p>
          <ul className="mt-2 text-gray-700 list-disc pl-4 space-y-1 text-xs">
            <li>AI alignment research</li>
            <li>exploring the intersectionality of LLM's with human rights principles</li>
            <li>assisted in developing ethical frameworks for AI deployment</li>
            <li>collaborated with cross-disciplinary teams on data justice initiatives</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold text-unc-navy">web development intern</h3>
          <p className="text-carolina-blue text-sm mt-1">YM Global IT</p>
          <ul className="mt-2 text-gray-700 list-disc pl-4 space-y-1 text-xs">
            <li>built and maintained internal tools with React and TypeScript</li>
            <li>collaborated with senior devs to modernize legacy modules</li>
            <li>improved automated deployment pipelines and CI/CD</li>
            <li>conducted testing, code reviews, and contributed to API docs</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold text-unc-navy">web development intern</h3>
          <p className="text-carolina-blue text-sm mt-1">YM Global IT</p>
          <ul className="mt-2 text-gray-700 list-disc pl-4 space-y-1 text-xs">
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
