import React from "react";
import { motion } from "framer-motion";
import { IconFlexCurve, IconFlowTime, IconFrost } from "./OrganicIcons";

export default function AdvantagesSection({ t }) {
  const items = [
    { Icon: IconFlexCurve, ...t.flexible },
    { Icon: IconFlowTime, ...t.lasting },
    { Icon: IconFrost, ...t.fast },
  ];
  const isKorean = t.title === "세 가지 장점";

  return (
    <section id="advantages" className="section-surface py-20 lg:py-24 border-b border-border">
      <div className="site-shell grid lg:grid-cols-[.8fr_2.2fr] gap-12 lg:gap-16 items-start">
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-4xl md:text-5xl leading-[1.02]">
          {isKorean ? <>세 가지 장점.<br />더 나은 냉찜질.</> : <>Three Advantages.<br />One better cold therapy.</>}
        </motion.h2>
        <div className="grid md:grid-cols-3 border-y border-border">
          {items.map(({ Icon, title, desc }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="py-7 md:px-7 first:pl-0 md:border-r last:border-0 border-border">
              <Icon className="w-10 h-10 text-primary" strokeWidth={1.45} />
              <h3 className="mt-6 font-semibold text-base">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
