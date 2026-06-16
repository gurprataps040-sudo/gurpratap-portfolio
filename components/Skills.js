"use client";

import { motion } from "framer-motion";

export default function Skills({ skills }) {
  const techSkills = skills.filter((s) => s.category === "Technical");
  const softSkills = skills.filter((s) => s.category === "Soft");

  const getPercent = (level) => {
    switch (level?.toLowerCase()) {
      case "advanced":
        return 100;
      case "intermediate":
        return 66;
      case "beginner":
      default:
        return 33;
    }
  };

  return (
    <motion.section
      id="skills"
      className="scroll-mt-24 space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center border-b border-rule pb-2">
        <h2 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-muted">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Technical Skills */}
        <div className="space-y-6">
          <h3 className="font-display font-medium text-xs uppercase tracking-widest text-muted">
            Technical Proficiency
          </h3>
          <div className="space-y-4">
            {techSkills.map((skill, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="font-bold text-ink">{skill.name}</span>
                  <span className="text-accent uppercase tracking-wider text-[10px]">{skill.level}</span>
                </div>
                <div className="h-1 bg-rule w-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${getPercent(skill.level)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-6">
          <h3 className="font-display font-medium text-xs uppercase tracking-widest text-muted">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="font-mono text-xs border border-rule hover:border-accent bg-parchment hover:bg-accent-lt/20 text-ink px-4 py-2 flex items-center gap-2 transition-all duration-300 select-none"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
