import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { IconFaceProfile, IconTooth, IconJoint } from "./OrganicIcons";
import clinicalUse from "@/assets/brand/eaureco-clinical-use.webp";

export default function UseCasesSection({ t }) {
  const isKorean = t.title === "사용 분야";
  const cases = [
    { Icon: IconFaceProfile, ...t.plastic },
    { Icon: IconTooth, ...t.dental },
    { Icon: IconJoint, ...t.ortho },
  ];

  return (
    <section id="usecases" className="section-muted">
      <div className="grid lg:grid-cols-[1.08fr_.92fr]">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative min-h-[560px] lg:min-h-[760px] overflow-hidden">
          <img src={clinicalUse} alt="Eaureco cold pack used for facial cold therapy" className="absolute inset-0 w-full h-full object-cover object-left" />
        </motion.div>
        <div className="px-6 py-20 lg:py-24 lg:pl-16 lg:pr-[max(5vw,calc((100vw-84rem)/2))] flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-5xl md:text-7xl">{t.title}</h2>
            <p className="mt-4 text-muted-foreground">{isKorean ? "딱딱한 냉찜질팩이 닿지 못하는 곳까지 부드럽게 밀착됩니다." : "Designed to conform where rigid cold packs cannot."}</p>
          </motion.div>
          <div className="rule-list mt-10 border-y border-border">
            {cases.map(({ Icon, title, desc }, index) => (
              <motion.article key={title} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="grid grid-cols-[48px_1fr_auto] gap-5 py-7 items-start group">
                <Icon className="w-8 h-8 text-primary" strokeWidth={1.45} />
                <div><h3 className="font-semibold text-lg">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground max-w-lg">{desc}</p></div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
