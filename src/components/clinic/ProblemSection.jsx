import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { IconIce, IconHardPack } from "./OrganicIcons";

const Accent = () => (
  <span className="block w-7 h-[3px] rounded-full bg-[hsl(var(--brand-leaf)/0.45)] mb-6" />
);

export default function ProblemSection({ t }) {
  return (
    <section id="problem" className="py-28 px-4 section-muted">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <span className="accent-pill mb-5">The problem</span>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground tracking-tight max-w-2xl mx-auto leading-tight">
            {t.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="content-card p-9">
            <IconIce className="w-8 h-8 text-[hsl(var(--brand-sea))] mb-5" strokeWidth={1.6} />
            <Accent />
            <h3 className="text-lg font-semibold text-foreground mb-3">{t.ice.name}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">{t.ice.desc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.08 }}
            className="content-card p-9">
            <IconHardPack className="w-8 h-8 text-[hsl(var(--brand-sea))] mb-5" strokeWidth={1.6} />
            <Accent />
            <h3 className="text-lg font-semibold text-foreground mb-3">{t.sap.name}</h3>
            <p className="text-muted-foreground text-base leading-relaxed">{t.sap.desc}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center">
          <div className="highlight-card flex items-start gap-4 max-w-2xl text-left">
            <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.75} />
            <p className="text-lg font-medium text-foreground leading-relaxed">
              {t.bottom.includes('오래') ? (
                <>
                  {t.bottom.split('오래')[0]}<br />오래{t.bottom.split('오래')[1]}
                </>
              ) : t.bottom}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}