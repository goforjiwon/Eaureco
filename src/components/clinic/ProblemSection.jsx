import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IconIce, IconHardPack } from "./OrganicIcons";
import productFamily from "@/assets/brand/eaureco-product-family.webp";

export default function ProblemSection({ t }) {
  const isKorean = t.ice.name === "얼음";
  return (
    <section id="problem" className="section-muted py-24 lg:py-32 overflow-hidden">
      <div className="site-shell">
        <div className="grid lg:grid-cols-[.72fr_1.28fr] gap-12 lg:gap-20 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02] max-w-[14ch]">{t.title}</h2>
            <p className="mt-6 max-w-md text-muted-foreground leading-7">
              {isKorean ? "기존 냉찜질은 환자에게 편안함이 가장 필요한 순간에 압박감과 빈틈, 고르지 못한 냉각을 만듭니다." : "Traditional options create pressure, gaps, and inconsistent relief when patients need comfort most."}
            </p>
          </motion.div>

          <div>
            <div className="grid md:grid-cols-[.72fr_.72fr_1fr] border-y border-border">
              {[{ Icon: IconIce, ...t.ice }, { Icon: IconHardPack, ...t.sap }].map(({ Icon, name, desc }, index) => (
                <motion.article key={name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="px-6 py-8 md:border-r border-border">
                  <Icon className="w-9 h-9 text-[hsl(var(--brand-sea))]" strokeWidth={1.5} />
                  <h3 className="mt-8 text-base font-semibold">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
                </motion.article>
              ))}
              <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative min-h-[250px] bg-white overflow-hidden">
                <img src={productFamily} alt="Eaureco flexible cold pack" className="absolute inset-0 w-full h-full object-cover object-[70%_38%]" />
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-7 border-b border-border">
              <p className="font-display text-2xl md:text-4xl leading-tight max-w-2xl">{t.bottom}</p>
              <button onClick={() => document.getElementById("sustainability")?.scrollIntoView({ behavior: "smooth" })} className="btn-ghost shrink-0">
                {isKorean ? "제조 과정 보기" : "See how it’s made"}<ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
