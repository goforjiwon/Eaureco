import React from "react";
import { motion } from "framer-motion";
import { IconFaceProfile, IconTooth, IconJoint } from "./OrganicIcons";

const Accent = () => (
  <span className="block w-7 h-[3px] rounded-full bg-[hsl(var(--brand-leaf)/0.45)] mb-6" />
);

export default function UseCasesSection({ t }) {
  const cases = [
    { Icon: IconFaceProfile, ...t.plastic },
    { Icon: IconTooth, ...t.dental },
    { Icon: IconJoint, ...t.ortho },
  ];

  return (
    <section id="usecases" className="py-28 px-4 section-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="accent-pill mb-5">Where it helps</span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground leading-tight">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item, i) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="content-card p-8">
                <Icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.6} />
                <Accent />
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}