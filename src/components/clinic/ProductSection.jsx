import React from "react";
import { motion } from "framer-motion";

export default function ProductSection({ t }) {
  const specs = [
    { label: t.contents, value: t.contentsValue },
    { label: t.packaging, value: t.packagingValue },
    { label: t.sizes, value: t.sizesValue },
    { label: t.patent, value: t.patentValue },
  ];

  return (
    <section id="product" className="py-32 px-4 section-surface">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16">
          <div className="accent-pill mb-6">
            {t.title}
          </div>
          <h2 className="text-2xl font-medium text-slate-900">Product Specifications</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="content-card border-t-2 border-t-teal-800">
          <div className="divide-y divide-slate-100">
            {specs.map((spec, i) => (
              <div key={i} className="flex flex-col sm:flex-row px-8 py-6">
                <span className="font-medium text-slate-900 sm:w-48 flex-shrink-0 mb-1 sm:mb-0 text-sm tracking-wide">
                  {spec.label}
                </span>
                <span className="text-slate-500 text-sm">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center">
          <p className="text-sm font-medium text-slate-500 mb-6">{t.contactLabel}</p>
          <a
            href={`mailto:${t.email}`}
            className="inline-block px-10 py-4 bg-white border border-slate-200 text-slate-900 font-medium text-sm tracking-wide rounded-sm hover:border-slate-400 transition-colors">
            {t.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}