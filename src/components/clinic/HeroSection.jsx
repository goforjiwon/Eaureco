import React from "react";
import { motion } from "framer-motion";

export default function HeroSection({ t }) {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center px-4 py-24 overflow-hidden">

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/0885b584e_image.png')"
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-900/78 to-teal-950/72"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>

          <div className="mb-12 flex justify-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/19088c638_KakaoTalk_20260203_182916893_02.png"
              alt="eaureco"
              className="h-12 md:h-16 w-auto brightness-0 invert opacity-90" />
          </div>

          <p className="text-sm text-teal-300 font-semibold tracking-widest uppercase mb-6">
            {t.tagline}
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight tracking-tight">
            {t.title}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-white/70 font-normal mb-14 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}>
          <a
            href="mailto:goforjiwon@kaist.ac.kr"
            className="inline-block px-10 py-4 bg-white text-slate-900 font-medium text-sm tracking-wide rounded-sm hover:bg-teal-50 transition-colors">
            {t.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}