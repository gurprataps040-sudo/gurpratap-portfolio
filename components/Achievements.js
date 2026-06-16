"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Achievements({ achievements }) {
  return (
    <motion.section
      id="achievements"
      className="scroll-mt-24 space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center border-b border-rule pb-2">
        <h2 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-muted">
          Achievements & Awards
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            className="border border-rule hover:border-accent p-6 flex flex-col justify-between transition-all duration-300 group bg-parchment hover:bg-accent-lt/10"
            whileHover={{ y: -4 }}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-2 bg-accent-lt text-accent rounded-full group-hover:bg-accent group-hover:text-parchment transition-colors duration-300">
                  <Award className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs text-muted">{item.date}</span>
              </div>
              <h3 className="font-display font-bold text-sm text-ink group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
            </div>
            <p className="text-xs text-ink/70 mt-3 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
