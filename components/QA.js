"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QA({ qa }) {
  const [openQA, setOpenQA] = useState(null);

  const toggleQA = (idx) => {
    setOpenQA(openQA === idx ? null : idx);
  };

  return (
    <motion.section
      id="qa"
      className="scroll-mt-24 space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center border-b border-rule pb-2">
        <h2 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-muted">
          Q&A Strip
        </h2>
      </div>

      <div className="divide-y divide-rule border-b border-rule">
        {qa.map((item, idx) => {
          const isOpen = openQA === idx;
          return (
            <div key={idx} className="py-4">
              <button
                onClick={() => toggleQA(idx)}
                className="w-full flex justify-between items-start text-left focus:outline-none group"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-accent font-medium pt-0.5">
                    {`0${idx + 1}.`}
                  </span>
                  <span className="font-display font-medium text-sm sm:text-base text-ink group-hover:text-accent transition-colors duration-200">
                    {item.q}
                  </span>
                </div>
                <span className="ml-4 font-mono text-xs text-muted group-hover:text-accent transition-colors duration-200">
                  {isOpen ? "[ - ]" : "[ + ]"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pl-10 text-xs sm:text-sm text-ink/80 leading-relaxed bg-accent-lt/30 p-4 border-l-2 border-accent mt-4">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
