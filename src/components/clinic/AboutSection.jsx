import React from "react";
import { motion } from "framer-motion";

export default function AboutSection({ t }) {
  return (
    <section id="about" className="py-24 px-4 section-muted">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 neo-text">{t.title}</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            {t.desc}
          </p>
          <div className="highlight-card p-8 block w-full max-w-2xl mx-auto">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/19088c638_KakaoTalk_20260203_182916893_02.png"
              alt="eaureco"
              className="h-12 w-auto mx-auto mb-3" />
            <p className="text-emerald-700 font-bold text-lg">Engineered from Nature</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}