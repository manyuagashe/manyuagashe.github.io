const Contact = () => {
  return (
    <section className="py-24 bg-white px-4" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-unc-navy mb-8">Contact</h2>
        <div className="space-y-4 text-lg">
          <p className="text-gray-700">
            Email: <a href="mailto:[your-email]" className="text-carolina-blue hover:underline">[your-email]</a>
          </p>
          <p className="text-gray-700">
            LinkedIn: <a href="[linkedin-url]" target="_blank" rel="noopener noreferrer" className="text-carolina-blue hover:underline">[Your LinkedIn]</a>
          </p>
          <p className="text-gray-700">
            GitHub: <a href="[github-url]" target="_blank" rel="noopener noreferrer" className="text-carolina-blue hover:underline">[Your GitHub]</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;