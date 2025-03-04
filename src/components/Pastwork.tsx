
const Pastwork = () => {
  return (
    <section className="py-12 bg-gray-50 px-4 flex flex-col items-center" id="Pastwork">
      <h2 className="text-2xl font-bold text-unc-navy mb-8 text-right w-full max-w-2xl">Work Exp</h2>
      <div className="border-l-4 border-carolina-blue pl-6 w-full max-w-2xl">
        <h3 className="text-2xl font-bold text-unc-navy">student research intern</h3>
        <p className="text-carolina-blue text-lg mt-2">UNC School of Data Science and Society</p>

        <ul className="mt-4 text-gray-700 list-disc pl-4 space-y-2">
          <li>AI alignment research</li>
          <li>exploring the intersectionality of LLM's with human rights principles</li>
          <li>assisted in developing ethical frameworks for AI deployment</li>
          <li>collaborated with cross-disciplinary teams on data justice initiatives</li>
        </ul>
      </div>
    </section>
  );
};

export default Pastwork;
