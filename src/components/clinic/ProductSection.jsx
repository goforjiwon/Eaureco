import React from "react";
import { motion } from "framer-motion";
import { Package, Mail } from "lucide-react";

export default function ProductSection({ t }) {
  const specs = [
    { label: t.contents, value: t.contentsValue },
    { label: t.packaging, value: t.packagingValue },
    { label: t.sizes, value: t.sizesValue },
    { label: t.patent, value: t.patentValue },
  ];

  return (
    <section id="product" className="py-24 px-4 section-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <div className="accent-pill mb-4">
            <Package className="w-4 h-4 inline-block mr-1 -mt-0.5" strokeWidth={2.5} />
            <span className="text-sm font-bold uppercase tracking-wider">{t.title}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="content-card overflow-hidden">
          <div className="divide-y divide-gray-100">
            {specs.map((spec, i) => (
              <div key={i} className="flex flex-col sm:flex-row px-8 py-5">
                <span className="font-bold text-gray-900 sm:w-40 flex-shrink-0 mb-1 sm:mb-0">{spec.label}</span>
                <span className="text-gray-600">{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center">
          <p className="text-lg font-semibold text-gray-700 mb-4">{t.contactLabel}</p>
          <a
            href={`mailto:${t.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-bold text-lg rounded-xl hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg">
            <Mail className="w-5 h-5" strokeWidth={2.5} />
            {t.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}