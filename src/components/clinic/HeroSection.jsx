import React from "react";
import { motion } from "framer-motion";
import { Leaf, ArrowRight, Check } from "lucide-react";

const HERO_BG =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/0885b584e_image.png";

export default function HeroSection({ t }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="home" className="relative min-h-[94vh] flex items-center justify-center px-4 py-28 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${HERO_BG}')` }}>
        {/* Soft light overlay — fades the photo lighter for dark-text legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-[#e7f3ee]/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(64rem_40rem_at_50%_120%,rgba(16,185,129,0.10),transparent_62%)]"></div>
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>

          <div className="mb-7 flex justify-center">
            <span className="inline-flex items-center gap-2 text-[13px] font-medium text-emerald-50 bg-white/[0.08] border border-white/25 backdrop-blur-sm rounded-full px-4 py-1.5">
              <Leaf className="w-3.5 h-3.5 text-emerald-300" strokeWidth={1.75} />
              {t.badge}
            </span>
          </div>

          <h1 className="font-display text-[2.6rem] leading-[1.04] md:text-6xl lg:text-[4.4rem] font-medium text-white mb-7">
            {t.title.includes('얼려도 부드럽게,') ? (
              <>
                얼려도 부드럽게,<br />
                <span className="text-emerald-50/95">{t.title.replace('얼려도 부드럽게, ', '')}</span>
              </>
            ) : t.title}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-lg md:text-xl text-white/85 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="mailto:goforjiwon@kaist.ac.kr" className="btn-primary group w-full sm:w-auto">
            {t.cta}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            onClick={() => scrollTo("sustainability")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-[0.85rem] rounded-full text-sm font-semibold text-white border border-white/35 hover:bg-white/10 transition-colors">
            {t.ctaSecondary}
          </button>
        </motion.div>

        {Array.isArray(t.trust) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {t.trust.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm font-medium text-white/80">
                <Check className="w-4 h-4 text-emerald-300" strokeWidth={2.5} />
                {item}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}