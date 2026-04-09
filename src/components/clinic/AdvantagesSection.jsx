import React from "react";
import { motion } from "framer-motion";
import { Hand, Timer, Zap } from "lucide-react";

export default function AdvantagesSection({ t }) {
  const items = [
  { icon: Hand, ...t.flexible, theme: "bg-emerald-50 border-emerald-100 text-emerald-600" },
  { icon: Timer, ...t.lasting, theme: "bg-cyan-50 border-cyan-100 text-cyan-600" },
  { icon: Zap, ...t.fast, theme: "bg-amber-50 border-amber-100 text-amber-600" }];


  return (
    <section id="advantages" className="py-24 px-4 section-surface">
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
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="content-card p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl border mb-6 ${item.theme}`}>
                  <Icon className="w-8 h-8" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}