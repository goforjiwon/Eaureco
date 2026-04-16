import React from "react";
import { motion } from "framer-motion";

export default function ProblemSection({ t }) {
  return (
    <section id="problem" className="py-32 px-4 section-muted">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="content-card p-10">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 tracking-wide">{t.ice.name}</h3>
            <div className="w-6 h-px bg-slate-300 mb-6"></div>
            <p className="text-slate-500 text-base leading-relaxed">{t.ice.desc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="content-card p-10">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 tracking-wide">{t.sap.name}</h3>
            <div className="w-6 h-px bg-slate-300 mb-6"></div>
            <p className="text-slate-500 text-base leading-relaxed">{t.sap.desc}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center">
          <div className="highlight-card inline-block max-w-2xl text-left">
            <p className="text-lg font-medium text-slate-700 leading-relaxed">
              {t.bottom.includes('오래') ? (
                <>
                  {t.bottom.split('오래')[0]}<br />오래{t.bottom.split('오래')[1]}
                </>
              ) : t.bottom}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}