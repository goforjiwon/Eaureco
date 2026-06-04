import React from "react";
import { motion } from "framer-motion";
import { Smile, CircleDot, Bone } from "lucide-react";

export default function UseCasesSection({ t }) {
  const cases = [
    { icon: Smile, ...t.plastic, color: "text-teal-700 bg-teal-50 border-teal-100" },
    { icon: CircleDot, ...t.dental, color: "text-emerald-700 bg-emerald-50 border-emerald-100" },
    { icon: Bone, ...t.ortho, color: "text-cyan-700 bg-cyan-50 border-cyan-100" },
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
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="content-card p-8">
                <div className={`inline-flex p-3.5 rounded-2xl border mb-5 ${item.color}`}>
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
