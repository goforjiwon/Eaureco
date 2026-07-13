import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import productFamily from "@/assets/brand/eaureco-product-family.webp";

export default function HeroSection({ t }) {
  const isKorean = t.title.includes("얼려도 부드럽게,");
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="site-shell grid lg:min-h-[calc(100svh-240px)] lg:grid-cols-[.88fr_1.12fr] items-center gap-10 lg:gap-16 py-16 lg:py-8">
        <div className="relative z-10 pt-4 lg:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .75, ease: "easeOut" }}
            className={`font-display text-[hsl(var(--brand-deep))] ${isKorean
              ? "text-[3.2rem] sm:text-6xl lg:text-[3.75rem] leading-[1.08] max-w-full"
              : "text-[3.2rem] sm:text-7xl xl:text-[5.6rem] leading-[.93] max-w-[12ch]"
            }`}
          >
            {t.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .18 }} className="mt-7 max-w-xl text-base md:text-lg leading-8 text-muted-foreground">
            {t.subtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .3 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="mailto:goforjiwon@kaist.ac.kr" className="btn-primary group">
              {t.cta}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button onClick={() => scrollTo("sustainability")} className="btn-ghost group">
              {t.ctaSecondary}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
          {Array.isArray(t.trust) && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .42 }} className="mt-10 grid sm:grid-cols-3 gap-3 border-t border-border pt-5">
              {t.trust.map((item) => (
                <span key={item} className="flex items-center gap-2 text-xs font-semibold text-foreground/75">
                  <Check className="w-4 h-4 text-[hsl(var(--brand-leaf))]" strokeWidth={2.3} />{item}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, ease: "easeOut" }} className="relative min-h-[430px] lg:min-h-[650px] overflow-hidden rounded-[1.25rem] image-lift bg-[#eef3ef]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_12%,rgba(82,156,153,.36),transparent_36%),linear-gradient(145deg,#f4f6f3_0%,#dce8e3_68%,#b8d6d2_100%)]" />
          <div className="absolute right-0 -bottom-24 w-[56%] h-[62%] rounded-full border-[80px] border-white/20" />
          <img src={productFamily} alt="Eaureco seaweed-derived cold therapy product family" className="absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#dce8e3]/75 to-transparent" />
        </motion.div>
      </div>
      <svg className="block w-full h-10 text-[hsl(var(--mist))]" viewBox="0 0 1440 50" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 23C252 48 454 5 703 25c244 20 487-22 737 0v25H0Z" /></svg>
    </section>
  );
}
