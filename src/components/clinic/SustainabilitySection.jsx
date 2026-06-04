import React from "react";
import { motion } from "framer-motion";
import { Waves, FlaskConical, Sparkles, Leaf } from "lucide-react";

const stepIcons = [Waves, FlaskConical, Sparkles];

export default function SustainabilitySection({ t }) {
  return (
    <section id="sustainability" className="section-deep py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(40rem_30rem_at_15%_20%,rgba(52,211,153,0.12),transparent_60%)] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-300 bg-emerald-400/10 border border-emerald-300/25 rounded-full px-3.5 py-1.5">
            <Leaf className="w-3.5 h-3.5" />
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mt-6 leading-tight">
            {t.title}
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mt-6">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {t.steps.map((s, i) => {
            const Icon = stepIcons[i] || Sparkles;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl bg-white/[0.06] border border-white/10 p-7 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex p-3 rounded-xl bg-emerald-400/15 border border-emerald-300/25 text-emerald-200">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <span className="font-display text-2xl text-white/25">{s.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-white/65 text-[15px] leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-px mt-12 rounded-2xl overflow-hidden border border-white/10 bg-white/10">
          {t.stats.map((stat, i) => (
            <div key={i} className="bg-[#08322d]/60 px-6 py-8 text-center">
              <div className="font-display text-3xl md:text-4xl text-emerald-300 mb-2">{stat.value}</div>
              <div className="text-white/60 text-sm leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
