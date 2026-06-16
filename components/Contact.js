"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, MessageSquare } from "lucide-react";

export default function Contact({ profile }) {
  const { email, whatsapp, linkedin, github } = profile;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="scroll-mt-24 space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center border-b border-rule pb-2">
        <h2 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-muted">
          Contact Me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Form Column */}
        <div className="md:col-span-7 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase text-muted">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Gurpratap Singh"
                  className="w-full bg-transparent border border-rule focus:border-accent text-ink px-4 py-3 text-sm focus:outline-none transition-colors duration-300"
                />
              </div>
              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase text-muted">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="gurprataps040@gmail.com"
                  className="w-full bg-transparent border border-rule focus:border-accent text-ink px-4 py-3 text-sm focus:outline-none transition-colors duration-300"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase text-muted">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Let's build something amazing together..."
                className="w-full bg-transparent border border-rule focus:border-accent text-ink px-4 py-3 text-sm focus:outline-none transition-colors duration-300 resize-none"
              />
            </div>

            {status.type && (
              <div
                className={`p-4 flex items-center gap-3 text-xs font-mono border ${
                  status.type === "success"
                    ? "bg-accent-lt/30 border-accent text-accent"
                    : "bg-red-500/10 border-red-500/50 text-red-700"
                }`}
              >
                {status.type === "success" ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="font-mono text-xs uppercase tracking-wider bg-ink hover:bg-accent text-parchment hover:text-parchment px-6 py-3.5 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 select-none"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-5 flex flex-col justify-between py-2 space-y-6">
          <div className="space-y-4">
            <h3 className="font-display font-medium text-xs uppercase tracking-widest text-muted">
              Get in Touch Directly
            </h3>
            <p className="text-xs text-ink/75 leading-relaxed">
              If you have a quick question or project suggestion, feel free to use the form or reach out through my direct socials below.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {whatsapp && (
              <a
                href={whatsapp}
                className="font-mono text-xs border border-rule hover:border-accent bg-parchment hover:bg-accent-lt/20 text-ink px-4 py-3 flex items-center justify-between transition-all duration-300 group"
                target="_blank"
                rel="noreferrer"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <span>WhatsApp Chat</span>
                </span>
                <span className="text-[10px] text-muted group-hover:text-accent font-semibold">DIRECT &rarr;</span>
              </a>
            )}

            <div className="grid grid-cols-2 gap-3">
              {linkedin && (
                <a
                  href={linkedin}
                  className="font-mono text-[10px] sm:text-xs border border-rule hover:border-accent p-3 text-center transition-all duration-300 text-muted hover:text-accent font-medium uppercase"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              )}
              {github && (
                <a
                  href={github}
                  className="font-mono text-[10px] sm:text-xs border border-rule hover:border-accent p-3 text-center transition-all duration-300 text-muted hover:text-accent font-medium uppercase"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
