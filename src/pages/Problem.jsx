import React from "react";
import { useLanguage } from "../Layout";
import { getT } from "@/i18n/translations";
import ProblemSection from "@/components/clinic/ProblemSection";
import SustainabilitySection from "@/components/clinic/SustainabilitySection";

export default function Problem() {
  const { language } = useLanguage();
  const t = getT(language);

  return (
    <div className="min-h-screen overflow-x-clip">
      <ProblemSection t={t.problem} />
      <SustainabilitySection t={t.sustainability} />
    </div>
  );
}
