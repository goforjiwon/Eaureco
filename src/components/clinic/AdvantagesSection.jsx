import React from "react";
import { motion } from "framer-motion";
import { Hand, Timer, Zap } from "lucide-react";

export default function AdvantagesSection({ t }) {
  const items = [
    { icon: Hand, ...t.flexible },
    { icon: Timer, ...t.lasting },
    { icon: Zap, ...t.fast },
  ];

  return (
    <section id="advantages" className="py-28 px-4 section-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="accent-pill mb-5">Why eaureco</span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-foreground leading-tight">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="content-card p-8">
                <div className="inline-flex p-3.5 rounded-2xl bg-primary/[0.07] border border-primary/10 text-primary mb-6">
                  <Icon className="w-7 h-7" strokeWidth={1.75} />
                </div>
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
