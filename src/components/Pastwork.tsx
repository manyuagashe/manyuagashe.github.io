const Pastwork = () => {
  return (
    <div className="flex items-start space-x-4 px-4">
      <h2 className="text-2xl font-bold text-unc-navy">work exp</h2>
      <section className="py-24 bg-white px-4 flex items-center" id="Pastwork">
        <div className="border-l-4 border-carolina-blue pl-6 max-w-2xl">
          <h3 className="text-2xl font-bold text-unc-navy">student research intern</h3>
          <p className="text-carolina-blue text-lg mt-2">UNC School of Data Science and Society</p>

          <ul className="mt-4 text-gray-700 list-disc pl-4 space-y-2">
            <li>AI alignment research</li>
            <li>exploring the intersectionality of LLM's with human rights principles</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Pastwork;
