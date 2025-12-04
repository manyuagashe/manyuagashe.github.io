import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const workExperiences = [
  {
    title: "AI Powered Translation",
    org: "@UNC CS Department",
    period: "'24-",
    description: "Researching and co-ordinating tasks as a part of Dr. Fuchs's study in AI translation of media. Working with a team of ~20 on independent but coordinated projects."
  },
  {
    title: "Full Stack Web Development",
    org: "@Compass Cntr (UNC CS+SG)",
    period: "'24-",
    description: "Developing web applications to improve internal functions at Compass Center, a nonprofit via the Projects team of UNC's nonprofit web dev consultancy, CS + Social Good."
  },
  {
    title: "Product Manager",
    org: "@Office of Off Campus Student Life",
    period: "'25-'26",
    description: "Creating and iterating on proposed software solution for party registration. Developing in Next.JS, FastAPI, Postgres, SQLAlchemy."
  }
];

const pedagogyResources = [
  {
    title: "Teaching Philosophy",
    description: "My approach to education and learning",
    driveLink: "https://drive.google.com/file/d/1example1/view",
  },
  {
    title: "Course Materials",
    description: "Sample teaching materials and curriculum",
    driveLink: "https://drive.google.com/file/d/1example2/view",
  },
  {
    title: "Educational Research",
    description: "Research on effective teaching methodologies",
    driveLink: "https://drive.google.com/file/d/1example3/view",
  }
];

const convertDriveLinkToEmbed = (link: string): string => {
  const match = link.match(/\/d\/([^\/]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return link;
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="text-accent hover:text-accent/80 transition-colors">me</a>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">work</a>
            <a href="#pedagogy" className="text-muted-foreground hover:text-foreground transition-colors">pedagogy</a>
            <a href="#research" className="text-muted-foreground hover:text-foreground transition-colors">research</a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="mailto:manyu@unc.edu" className="text-sm font-medium text-accent hover:underline">
              manyu@unc.edu
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            <span className="italic text-muted-foreground">hi</span>, <span className="font-bold">manyu here</span>.
          </h1>
          
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            I'm an undergrad at the{" "}
            <span className="text-accent font-medium">University of North Carolina (UNC)</span>{" "}
            <span className="text-accent">@Chapel Hill</span>. Studying{" "}
            <span className="font-bold">statistics</span> and{" "}
            <span className="font-bold">computer science</span> with an intent to minor in{" "}
            <span className="text-accent font-medium">philosophy</span>.
          </p>

          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              <span className="text-accent font-medium">I am interested</span> in the usage of computer science and related fields to build tools that{" "}
              <span className="underline decoration-accent decoration-2 underline-offset-2">further the boundaries of education</span>;
            </p>
            <p>
              <span className="text-accent font-medium">I hope to work on projects</span> that are at the intersection of{" "}
              <span className="font-bold">humans, computing and the educational sciences</span>;
            </p>
            <p>
              <span className="text-accent font-medium">I believe that</span> a prestigious education comes with the duty of using it to pass education of a great quality onto others and
            </p>
            <p>
              <span className="text-accent font-medium">I aspire to pursue a career</span> in making and working at startups that future-proof education and expand access to it.
            </p>
          </div>
        </motion.section>

        {/* Work Section */}
        <motion.section
          id="work"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-t border-border"
        >
          <div className="bg-accent text-accent-foreground py-3 px-6 rounded mb-12">
            <h2 className="text-center text-sm font-medium tracking-wide">recent notable work</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workExperiences.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-accent font-bold text-lg mb-1">{work.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {work.org} ({work.period})
                </p>
                <p className="text-sm leading-relaxed">
                  {work.description.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <span key={i} className="font-bold">{part.slice(2, -2)}</span>;
                    }
                    return part;
                  })}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pedagogy Section */}
        <motion.section
          id="pedagogy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-t border-border"
        >
          <h2 className="text-2xl font-serif font-bold mb-8">Pedagogy</h2>
          <p className="text-muted-foreground mb-8">
            I currently serve as an instructional assistant for <span className="font-bold">STOR120 @UNC</span>. 
            Below are some resources related to my teaching work.
          </p>

          <div className="space-y-8">
            {pedagogyResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-border rounded-lg overflow-hidden"
              >
                <div className="p-4 bg-card">
                  <h3 className="font-bold text-accent mb-1">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{resource.description}</p>
                  <a
                    href={resource.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline"
                  >
                    Open in Google Drive →
                  </a>
                </div>
                <div className="w-full h-[500px] bg-muted">
                  <iframe
                    src={convertDriveLinkToEmbed(resource.driveLink)}
                    className="w-full h-full"
                    title={resource.title}
                    allow="autoplay"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Section */}
        <motion.section
          id="research"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 border-t border-border"
        >
          <h2 className="text-2xl font-serif font-bold mb-4">Research</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-accent mb-6">AI Ethics</h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Exploring the ethical implications of artificial intelligence, including fairness, 
            transparency, accountability, and the societal impact of AI systems.
          </p>
        </motion.section>

        {/* Footer */}
        <footer className="pt-16 border-t border-border text-center text-sm text-muted-foreground">
          <p>abhimanyu dhananjay agashe, c. 2024.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
