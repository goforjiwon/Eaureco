import React from "react";
import { motion } from "framer-motion";
import BrandImage from "./BrandImage";

export default function SustainabilitySection({ t }) {
  return (
    <section id="sustainability" className="section-deep overflow-hidden">
      <div className="grid lg:grid-cols-[1.04fr_.96fr] min-h-[760px]">
        <div className="px-6 py-24 lg:py-28 lg:pl-[max(5vw,calc((100vw-84rem)/2))] lg:pr-16 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-5xl md:text-7xl leading-[.98] text-white max-w-[12ch]">{t.title}</h2>
            <p className="mt-7 max-w-2xl text-base md:text-lg leading-8 text-white/68">{t.subtitle}</p>
          </motion.div>

          <div className="mt-14 grid md:grid-cols-3 border-y border-white/15">
            {t.steps.map((step, index) => (
              <motion.article key={step.step} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .09 }} className="py-7 md:px-6 first:pl-0 md:border-r last:border-0 border-white/15">
                <span className="font-display text-2xl text-emerald-300/80">{step.step}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{step.desc}</p>
              </motion.article>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 mt-7">
            {t.stats.map((stat, index) => (
              <div key={stat.label} className="py-4 sm:px-5 first:pl-0 sm:border-r last:border-0 border-white/15">
                <div className="font-display text-3xl text-emerald-200">{stat.value}</div>
                <div className="mt-1 text-xs leading-5 text-white/52">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative min-h-[500px] lg:min-h-full">
          <BrandImage kind="sargassum" alt="Sargassum seaweed underwater" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[hsl(var(--brand-deep))] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
