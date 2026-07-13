import React from "react";
import { useLanguage } from "../Layout";
import { getT } from "@/i18n/translations";
import ProductSection from "@/components/clinic/ProductSection";
import AboutSection from "@/components/clinic/AboutSection";

export default function Contact() {
  const { language } = useLanguage();
  const t = getT(language);

  return (
    <div className="min-h-screen overflow-x-clip">
      <ProductSection t={t.product} />
      <AboutSection t={t.about} />
    </div>
  );
}
