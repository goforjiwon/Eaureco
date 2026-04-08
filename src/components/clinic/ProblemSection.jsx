import React from "react";
import { motion } from "framer-motion";
import { Cuboid, Droplets } from "lucide-react";

export default function ProblemSection({ t }) {
  return (
    <section id="problem" className="py-24 px-4 section-muted">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 neo-text leading-tight">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Ice */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="content-card p-8">
            <div className="inline-flex p-3 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 mb-4">
              <Cuboid className="w-7 h-7" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.ice.name}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{t.ice.desc}</p>
          </motion.div>

          {/* SAP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="content-card p-8">
            <div className="inline-flex p-3 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 mb-4">
              <Droplets className="w-7 h-7" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.sap.name}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{t.sap.desc}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center">
          <div className="highlight-card p-8 inline-block max-w-3xl">
            <p className="text-xl font-semibold text-emerald-900">{t.bottom}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}