
const Contact = () => {
  return (
    <section className="py-8 bg-white px-2" id="contact">
      <div className="max-w-xl text-left">
        <h2 className="text-lg font-bold text-unc-navy mb-4">Contact</h2>
        <div className="space-y-2 text-sm">
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
