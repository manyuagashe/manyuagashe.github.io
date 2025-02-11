const Contact = () => {
  return (
    <section className="py-24 bg-white px-4" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-unc-navy mb-8">Contact</h2>
        <div className="space-y-4 text-lg">
          <p className="text-gray-700">
            Email: <a href="mailto:manyu@unc.edu" className="text-carolina-blue hover:underline">manyu@unc.edu</a>
          </p>
          <p className="text-gray-700">
            LinkedIn: <a href="https://www.linkedin.com/in/abhimanyu-agashe-95598622a/" target="_blank" rel="noopener noreferrer" className="text-carolina-blue hover:underline">my linkedin</a>
          </p>
          <p className="text-gray-700">
            GitHub: <a href="https://github.com/manyuagashe" target="_blank" rel="noopener noreferrer" className="text-carolina-blue hover:underline">my github</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
