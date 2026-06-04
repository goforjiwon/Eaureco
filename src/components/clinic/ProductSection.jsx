import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProductSection({ t }) {
  const specs = [
    { label: t.contents, value: t.contentsValue },
    { label: t.packaging, value: t.packagingValue },
    { label: t.sizes, value: t.sizesValue },
    { label: t.patent, value: t.patentValue },
  ];

  return (
    <section id="product" className="py-28 px-4 section-surface">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center">
          <span className="accent-pill mb-5">{t.title}</span>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground">Product Specifications</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="content-card overflow-hidden border-t-4 border-t-primary">
          <div className="divide-y divide-border">
            {specs.map((spec, i) => (
              <div key={i} className="flex flex-col sm:flex-row px-8 py-6">
                <span className="font-semibold text-foreground sm:w-48 flex-shrink-0 mb-1 sm:mb-0 text-sm tracking-wide">
                  {spec.label}
                </span>
                <span className="text-muted-foreground text-[15px] leading-relaxed">
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
          className="mt-14 highlight-card text-center flex flex-col items-center">
          <p className="text-base font-medium text-foreground mb-5">{t.contactLabel}</p>
          <a href={`mailto:${t.email}`} className="btn-primary group">
            {t.email}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
