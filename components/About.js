"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function About({ profile }) {
  const { bio_long, location, email, phone, photo } = profile;
  const [imgErr, setImgErr] = useState(false);

  return (
    <motion.section
      id="about"
      className="scroll-mt-24 space-y-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-between items-center border-b border-rule pb-2">
        <h2 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-muted">
          About Me
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Avatar / Picture */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-rule bg-accent-lt/30 shrink-0 group hover:border-accent transition-colors duration-300">
          {!imgErr && photo ? (
            <Image
              src={photo}
              alt="Gurpratap Singh"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgErr(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-display text-4xl font-bold text-accent">
              GS
            </div>
          )}
        </div>

        {/* Bio Text */}
        <div className="space-y-6">
          <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-body">
            {bio_long}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-mono text-xs">
            <div className="flex items-center gap-2 text-muted">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href={`mailto:${email}`} className="hover:text-accent transition-colors duration-200">{email}</a>
            </div>
            <div className="flex items-center gap-2 text-muted sm:col-span-2">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a href={`tel:${phone}`} className="hover:text-accent transition-colors duration-200">{phone}</a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
