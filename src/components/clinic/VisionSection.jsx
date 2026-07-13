import React from "react";
import { motion } from "framer-motion";
import { IconOcean, IconFlask, IconPulseHeart } from "./OrganicIcons";
import BrandImage from "./BrandImage";

const pointIcons = [IconOcean, IconFlask, IconPulseHeart];

export default function VisionSection({ t }) {
  return (
    <section id="vision" className="section-deep relative overflow-hidden">
      <BrandImage kind="sargassum" alt="" sizes="(min-width: 1024px) 52vw, 100vw" className="absolute inset-y-0 right-0 w-[52%] h-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-deep))] via-[hsl(var(--brand-deep))] to-transparent" />
      <div className="site-shell relative py-24 lg:py-32">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
          <h2 className="font-display text-5xl md:text-7xl leading-[.98] text-white max-w-[16ch]">{t.title}</h2>
          <p className="mt-7 text-base md:text-lg leading-8 text-white/68 max-w-2xl">{t.desc}</p>
          <p className="mt-7 font-display text-3xl text-emerald-200">{t.tagline}</p>
        </motion.div>
        <div className="mt-14 grid md:grid-cols-3 border-y border-white/15 max-w-5xl">
          {t.points.map((point, index) => {
            const Icon = pointIcons[index] || IconOcean;
            return (
              <motion.div key={point} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="py-7 md:px-6 first:pl-0 md:border-r last:border-0 border-white/15 flex gap-4">
                <Icon className="w-8 h-8 shrink-0 text-emerald-200" strokeWidth={1.4} />
                <p className="text-sm leading-6 text-white/75">{point}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
