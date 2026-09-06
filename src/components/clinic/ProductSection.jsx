import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BrandImage from "./BrandImage";

export default function ProductSection({ t, priority = false }) {
  const specs = [
    { label: t.contents, value: t.contentsValue },
    { label: t.packaging, value: t.packagingValue },
    { label: t.sizes, value: t.sizesValue },
    { label: t.patent, value: t.patentValue },
  ];
  const isKorean = t.title === "제품 정보";

  return (
    <section id="product" className="section-surface py-24 lg:py-32">
      <div className="site-shell">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative aspect-[4/3] overflow-hidden rounded-[1.15rem] bg-[hsl(var(--mist))] image-lift">
            <BrandImage kind="product" priority={priority} alt="Eaureco product specifications" className="absolute inset-0 w-full h-full object-cover object-center" />
          </motion.div>
          <div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-5xl md:text-7xl leading-none">
              {isKorean ? "제품 사양" : "Product Specifications"}
            </motion.h2>
            <p className="mt-5 text-muted-foreground">{isKorean ? "자연에서 시작해, 클리닉 현장에 맞게 설계했습니다." : "Thoughtfully made. Built for clinic use."}</p>
            <div className="mt-10 border-y border-border divide-y divide-border">
              {specs.map((spec) => (
                <div key={spec.label} className="grid sm:grid-cols-[9rem_1fr] gap-2 sm:gap-6 py-5">
                  <span className="text-xs font-bold uppercase tracking-[.12em] text-foreground/65">{spec.label}</span>
                  <span className="text-sm leading-6 text-muted-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">{t.disclaimer}</p>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a href={`mailto:${t.email}`} className="btn-primary group">{isKorean ? "샘플 요청" : "Request Samples"}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></a>
              <a href={`mailto:${t.email}`} className="text-sm font-medium text-primary hover:underline">{t.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}