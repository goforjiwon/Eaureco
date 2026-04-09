import React from "react";
import { motion } from "framer-motion";

export default function HeroSection({ t }) {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center px-4 py-24 overflow-hidden">
      
      <div className="absolute inset-0 bg-[#f8fafc] -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[70%] bg-teal-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-slate-400/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.2]"></div>
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
              className="h-12 md:h-16 w-auto grayscale contrast-125 opacity-80" />
          </div>

          <p className="text-sm text-teal-800 font-semibold tracking-widest uppercase mb-6">
            {t.tagline}
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mb-8 leading-tight tracking-tight drop-shadow-sm">
            {t.title}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-600 font-normal mb-14 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}>
          <a
            href="mailto:goforjiwon@kaist.ac.kr"
            className="inline-block px-10 py-4 bg-slate-900 text-white font-medium text-sm tracking-wide rounded-sm shadow-xl shadow-slate-900/10 hover:bg-teal-900 transition-colors">
            {t.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}