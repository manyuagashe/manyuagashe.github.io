const Pastwork = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <h2 className="text-2xl font-bold text-unc-navy text-center">work exp</h2>
      <section className="py-12 bg-white px-4 flex flex-col items-center text-center" id="Pastwork">
        <div className="border-l-4 border-carolina-blue pl-6 max-w-2xl">
          <h3 className="text-2xl font-bold text-unc-navy">student research intern</h3>
          <p className="text-carolina-blue text-lg mt-2">UNC School of Data Science and Society</p>

          <ul className="mt-4 text-gray-700 list-disc pl-4 space-y-2 text-left">
            <li>AI alignment research</li>
            <li>exploring the intersectionality of LLM's with human rights principles</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Pastwork;
