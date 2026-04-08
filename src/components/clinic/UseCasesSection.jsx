import React from "react";
import { motion } from "framer-motion";
import { Smile, CircleDot, Bone } from "lucide-react";

export default function UseCasesSection({ t }) {
  const cases = [
    { icon: Smile, ...t.plastic, color: "text-pink-600 bg-pink-50 border-pink-100" },
    { icon: CircleDot, ...t.dental, color: "text-sky-600 bg-sky-50 border-sky-100" },
    { icon: Bone, ...t.ortho, color: "text-orange-600 bg-orange-50 border-orange-100" },
  ];

  return (
    <section id="usecases" className="py-24 px-4 section-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 neo-text">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                <div className={`inline-flex p-3.5 rounded-xl border mb-5 ${item.color}`}>
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}