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
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-12 lg:py-24">
      {/* Outer Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* LEFT COLUMN: HERO NAME, TAGLINE, NAV, METADATA (Sticky) */}
        <aside className="lg:col-span-5 flex flex-col justify-between lg:h-[calc(100vh-12rem)] lg:sticky lg:top-24">
          <Hero profile={profile} navItems={navItems} />

          {/* Socials & Meta Info at bottom */}
          <div className="mt-12 lg:mt-0 pt-8 lg:pt-0 border-t border-rule lg:border-t-0 flex flex-col gap-4">
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
              © {new Date().getFullYear()} {profile.name.first} {profile.name.last}. ALL RIGHTS RESERVED.
            </div>
          </div>
        </aside>

        {/* RIGHT COLUMN: MAIN CONTENT */}
        <main className="lg:col-span-7 space-y-20 lg:space-y-32">
          <About profile={profile} />
          <Projects projects={projects} />
          <Skills skills={skills} />
          <Education education={education} />
          <Certifications certifications={certifications} />
          <Achievements achievements={achievements} />
          <Hobbies hobbies={hobbies} />
          <QA qa={qa} />
          <Contact profile={profile} />
          <Footer />
        </main>
      </div>
      <ChatWidget />
    </div>
  );
}
