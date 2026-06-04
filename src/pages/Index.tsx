const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Abhimanyu Agashe</h1>
        <p className="text-lg">UNC Chapel Hill '26 — Statistics / Computer Science / Philosophy</p>
        <p className="text-lg">Incoming SWE @ UBS Group</p>

        <h2 className="text-2xl font-bold mt-10 mb-3">Experience</h2>
        <ul className="list-disc pl-6 space-y-1 text-base">
          <li>Analyst Intern, UBS Group AG — Group Data Management Office (Summer 2025)</li>
          <li>Teaching Assistant, UNC — Intro to Data Science, Ethics of Data Science</li>
          <li>Product Manager, UNC Off Campus Student Life — party registration platform</li>
          <li>Student Researcher, UNC School of Data Science and Society — NLP / AI alignment</li>
          <li>Full-Stack Intern, YM Global IT Technologies (Singapore)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-3">Hackathon Wins</h2>
        <ul className="list-disc pl-6 space-y-1 text-base">
          <li>Win #1 — [details TBD]</li>
          <li>Win #2 — [details TBD]</li>
          <li>Win #3 — [details TBD]</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-3">Research Interests</h2>
        <p className="text-base">
          LLM persuasion and negotiation dynamics, AI alignment red-teaming, evaluation of frontier models.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-3">Hypertrain</h2>
        <p className="text-base">Startup in progress. More soon.</p>

        <h2 className="text-2xl font-bold mt-10 mb-3">Contact</h2>
        <p className="text-base">
          <a href="mailto:agashe@unc.edu" className="underline">agashe@unc.edu</a> ·{" "}
          <a href="https://github.com/manyuagashe" className="underline">GitHub</a> ·{" "}
          <a href="https://linkedin.com/in/abhimanyuagashe" className="underline">LinkedIn</a>
        </p>
      </main>
    </div>
  );
};

export default Index;
