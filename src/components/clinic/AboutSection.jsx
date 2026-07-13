import React from "react";
import { motion } from "framer-motion";
import { IconFlask, IconOcean, IconPulseHeart } from "./OrganicIcons";

const pillarIcons = [IconFlask, IconOcean, IconPulseHeart];

export default function AboutSection({ t }) {
  return (
    <section id="about" className="section-surface py-24 lg:py-32">
      <div className="site-shell">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-5xl md:text-7xl leading-[.98] max-w-[12ch]">{t.title}</motion.h2>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-lg leading-8 text-muted-foreground">{t.desc}</p>
            <div className="mt-10 border-y border-border divide-y divide-border">
              {t.pillars.map((pillar, index) => {
                const Icon = pillarIcons[index] || IconFlask;
                return (
                  <div key={pillar.title} className="grid grid-cols-[48px_1fr] gap-5 py-6">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.4} />
                    <div><h3 className="font-semibold">{pillar.title}</h3><p className="mt-1.5 text-sm leading-6 text-muted-foreground">{pillar.desc}</p></div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
