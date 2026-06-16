import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Hobbies from "@/components/Hobbies";
import QA from "@/components/QA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

// Data
import profile from "@/data/profile.json";
import education from "@/data/education.json";
import skills from "@/data/skills.json";
import projects from "@/data/projects.json";
import certifications from "@/data/certifications.json";
import achievements from "@/data/achievements.json";
import hobbies from "@/data/hobbies.json";
import qa from "@/data/qa.json";

export default function Home() {
  const navItems = [
    { label: "01. ABOUT", id: "#about" },
    { label: "02. PROJECTS & EXP", id: "#projects-experience" },
    { label: "03. SKILLS", id: "#skills" },
    { label: "04. EDUCATION", id: "#education" },
    { label: "05. CERTIFICATIONS", id: "#certifications" },
    { label: "06. ACHIEVEMENTS", id: "#achievements" },
    { label: "07. PERSONALITY", id: "#personality" },
    { label: "08. Q&A STRIP", id: "#qa" },
    { label: "09. CONTACT", id: "#contact" },
  ];

  return (
    <div className="min-h-screen max-w-6xl mx-auto py-12 lg:py-24 space-y-12 lg:space-y-16">
      {/* Hero Section: Full width at the top */}
      <Hero />

      {/* Grid Section for the rest of the page */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-[var(--rule)] pt-16">
        
        {/* LEFT COLUMN: Nav and Socials (Sticky on desktop) */}
        <aside className="lg:col-span-4 flex flex-col justify-between lg:h-[320px] lg:sticky lg:top-24 px-8 md:px-16">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-6">Index</h2>
            <nav className="hidden lg:block">
              <ul className="space-y-4">
                {navItems.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.id}
                      className="font-mono text-xs text-muted hover:text-accent transition-colors duration-200 uppercase tracking-wider block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="mt-8 pt-8 border-t border-rule lg:border-t-0 flex flex-col gap-4">
            <div className="flex gap-6 font-mono text-xs">
              {profile.github && (
                <a href={profile.github} className="text-muted hover:text-accent transition-colors duration-200" target="_blank" rel="noreferrer">GITHUB</a>
              )}
              {profile.linkedin && (
                <a href={`https://${profile.linkedin}`} className="text-muted hover:text-accent transition-colors duration-200" target="_blank" rel="noreferrer">LINKEDIN</a>
              )}
              <a href={`mailto:${profile.email}`} className="text-muted hover:text-accent transition-colors duration-200">EMAIL</a>
            </div>
            <div className="text-[10px] font-mono text-muted uppercase tracking-wider">
              © {new Date().getFullYear()} {profile.name.first} {profile.name.last}.
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: MAIN CONTENT */}
        <main className="lg:col-span-8 space-y-16 lg:space-y-24">
          <div className="px-8 md:px-16">
            <About profile={profile} />
          </div>
          
          <Projects />
          
          <div className="px-8 md:px-16">
            <Skills skills={skills} />
          </div>
          
          <div className="px-8 md:px-16">
            <Education education={education} />
          </div>
          
          <Certifications />
          
          <div className="px-8 md:px-16">
            <Achievements achievements={achievements} />
          </div>
          
          <Hobbies />
          
          <div className="px-8 md:px-16">
            <QA qa={qa} />
          </div>
          
          <div className="px-8 md:px-16">
            <Contact profile={profile} />
          </div>
          
          <div className="px-8 md:px-16">
            <Footer />
          </div>
        </main>
      </div>
      <ChatWidget />
    </div>
  );
}
