"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="mt-20 pt-8 border-t border-rule flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] sm:text-xs text-muted uppercase tracking-wider"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        © {currentYear} GURPRATAP SINGH. ALL RIGHTS RESERVED.
      </div>
      <div className="flex gap-4">
        <a href="#" className="hover:text-accent transition-colors duration-200">BACK TO TOP ↑</a>
      </div>
    </motion.footer>
  );
}
