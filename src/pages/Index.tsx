const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      <main className="max-w-2xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">abhimanyu agashe</h1>
        <p className="text-lg mb-16">unc chapel hill '26 — statistics / computer science / philosophy</p>

        <h2 className="text-2xl font-bold mb-5">experience</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>software development analyst intern, ubs group ag — group data management office (summer 2025)</li>
          <li>teaching assistant, unc — intro to data science, ethics of data science</li>
          <li>product manager, unc off campus student life — party registration platform</li>
          <li>student researcher, unc school of data science and society — nlp / ai alignment</li>
          <li>full-stack intern, ym global it technologies (singapore)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-16 mb-5">hackathon wins</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>win #1 — ai pentester for smaller startups to handle cybersec needs via a pentesting agent swarm</li>
          <li>win #2 — ai cfo for smb's that proactively calls and texts you and integrates with fintech accounts</li>
          <li>win #3 — quantum solution for last mile delivery optimization problem</li>
        </ul>

        <h2 className="text-2xl font-bold mt-16 mb-5">research interests</h2>
        <p className="text-base">selective inference for ml-interp.</p>

        <h2 className="text-2xl font-bold mt-16 mb-5">stalwart</h2>
        <p className="text-base">startup in progress. more soon.</p>

        <h2 className="text-2xl font-bold mt-16 mb-5">contact</h2>
        <p className="text-base">
          <a href="mailto:agashe@unc.edu" className="underline">agashe@unc.edu</a> ·{" "}
          <a href="https://github.com/manyuagashe" className="underline">github</a> ·{" "}
          <a href="https://linkedin.com/in/abhimanyuagashe" className="underline">linkedin</a>
        </p>
      </main>
    </div>
  );
};

export default Index;
