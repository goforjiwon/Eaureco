import React from "react";
import { useLanguage } from "../Layout";
import { getT } from "@/i18n/translations";
import ProblemSection from "@/components/clinic/ProblemSection";
import AdvantagesSection from "@/components/clinic/AdvantagesSection";

export default function Comparison() {
  const { language } = useLanguage();
  const t = getT(language);

  return (
    <div className="min-h-screen overflow-x-clip">
      <ProblemSection t={t.problem} />
      <AdvantagesSection t={t.advantages} />
    </div>
  );
}
