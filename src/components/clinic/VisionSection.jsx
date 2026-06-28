import React from "react";
import { motion } from "framer-motion";
import { IconOcean, IconFlask, IconPulseHeart } from "./OrganicIcons";

const pointIcons = [IconOcean, IconFlask, IconPulseHeart];

export default function VisionSection({ t }) {
  return (
    <section id="vision" className="py-28 px-4 section-deep">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto">
          <span className="accent-pill mb-5 !text-emerald-200 !bg-white/5 !border-white/20">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white leading-tight mb-6">{t.title}</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            {t.desc}
          </p>
          <p className="mt-6 font-display text-xl md:text-2xl text-emerald-200/90 font-medium">
            {t.tagline}
          </p>
        </motion.div>

        {Array.isArray(t.points) && (
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {t.points.map((point, i) => {
              const Icon = pointIcons[i] || IconOcean;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.06] border border-white/15 rounded-[var(--radius)] p-7 text-center backdrop-blur-sm">
                  <div className="flex justify-center mb-5">
                    <Icon className="w-8 h-8 text-emerald-200" strokeWidth={1.6} />
                  </div>
                  <span className="block w-7 h-[3px] rounded-full bg-white/30 mx-auto mb-5" />
                  <p className="text-white/90 text-[15px] leading-relaxed font-medium">{point}</p>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}