import React from "react";
import { motion } from "framer-motion";

export default function HeroSection({ t }) {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center px-4 py-20 overflow-hidden section-surface">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/0885b584e_image.png')"
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/80 to-teal-900/75"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <div className="mb-6 flex justify-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/802916f9d_KakaoTalk_20260203_182916893_03.png"
              alt="eaureco"
              className="h-24 md:h-32 w-auto" />
          </div>
          <p className="text-lg text-emerald-300 font-semibold tracking-wider uppercase mb-6">
            {t.tagline}
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight neo-text">
            {t.title}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
          {t.subtitle}
        </motion.p>

        <motion.a
          href="mailto:goforjiwon@kaist.ac.kr"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block px-8 py-4 bg-white text-emerald-900 font-bold text-lg rounded-xl hover:shadow-2xl transition-all transform hover:scale-105">
          {t.cta}
        </motion.a>
      </div>
    </section>
  );
}