import React from "react";
import { useLanguage } from "../Layout";
import { getT } from "@/i18n/translations";
import HeroSection from "@/components/clinic/HeroSection";
import ProblemSection from "@/components/clinic/ProblemSection";
import AdvantagesSection from "@/components/clinic/AdvantagesSection";
import UseCasesSection from "@/components/clinic/UseCasesSection";
import ProductSection from "@/components/clinic/ProductSection";
import AboutSection from "@/components/clinic/AboutSection";

export default function Home() {
  const { language } = useLanguage();
  const t = getT(language);

  return (
    <div className="min-h-screen">
      <HeroSection t={t.hero} />
      <ProblemSection t={t.problem} />
      <AdvantagesSection t={t.advantages} />
      <UseCasesSection t={t.useCases} />
      <ProductSection t={t.product} />
      <AboutSection t={t.about} />
    </div>
  );
}