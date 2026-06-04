import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Waves, HeartPulse } from "lucide-react";

const pillarIcons = [FlaskConical, Waves, HeartPulse];

export default function AboutSection({ t }) {
  return (
    <section id="about" className="py-28 px-4 section-muted">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto">
          <span className="accent-pill mb-5">{t.eyebrow}</span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground leading-tight mb-6">{t.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.desc}
          </p>
        </motion.div>

        {Array.isArray(t.pillars) && (
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {t.pillars.map((p, i) => {
              const Icon = pillarIcons[i] || FlaskConical;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="content-card p-7 text-center">
                  <div className="inline-flex p-3.5 rounded-2xl bg-primary/[0.07] border border-primary/10 text-primary mb-5">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
