"use client";

import { motion } from "framer-motion";

export default function Education({ education }) {
  return (
    <motion.section
      id="education"
      className="scroll-mt-24 space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center border-b border-rule pb-2">
        <h2 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-muted">
          Education
        </h2>
      </div>

      <div className="relative border-l border-rule pl-6 ml-2 space-y-10">
        {education.map((edu, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-parchment border-2 border-rule group-hover:border-accent transition-colors duration-300" />

            <div className="space-y-1">
              <span className="font-mono text-[10px] text-muted">{edu.duration}</span>
              <h3 className="font-display font-bold text-base text-ink group-hover:text-accent transition-colors duration-300">
                {edu.degree}
              </h3>
              <p className="text-sm text-ink/80">{edu.institution}</p>
              <div className="inline-block font-mono text-[10px] bg-accent-lt text-accent px-2 py-0.5 mt-2">
                {edu.score}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
