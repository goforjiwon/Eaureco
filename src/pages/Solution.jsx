import React from "react";
import { useLanguage } from "../Layout";
import { getT } from "@/i18n/translations";
import SustainabilitySection from "@/components/clinic/SustainabilitySection";
import AdvantagesSection from "@/components/clinic/AdvantagesSection";
import ProductSection from "@/components/clinic/ProductSection";

export default function Solution() {
  const { language } = useLanguage();
  const t = getT(language);

  return (
    <div className="min-h-screen overflow-x-clip">
      <SustainabilitySection t={t.sustainability} />
      <AdvantagesSection t={t.advantages} />
      <ProductSection t={t.product} />
    </div>
  );
}
