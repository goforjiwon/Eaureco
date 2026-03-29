import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, Trash2, Skull, Droplets, Snowflake, TrendingDown, XCircle, DollarSign, ArrowRight } from "lucide-react";
import { useLanguage } from "../Layout";
import { getT } from "@/i18n/translations";
import { createPageUrl } from "@/utils";

export default function Problem() {
  const { language } = useLanguage();
  const t = getT(language).problem;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gray-900 leading-tight">
              {t.header.title}
            </h1>
            <p className="text-2xl text-gray-500 font-medium max-w-2xl mx-auto">
              {t.header.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scale Statistic */}
      <section className="py-20 px-6 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <AlertTriangle className="w-12 h-12 text-orange-500 mb-2" />
            <span className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              {t.scale.line1}
            </span>
            <span className="text-xl md:text-2xl text-gray-400 font-light tracking-wide uppercase">
              {t.scale.line2}
            </span>
          </div>
        </motion.div>
      </section>

      {/* Current Options Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.options.title}</h2>
            <p className="text-gray-500">{t.options.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* SAP */}
            <OptionCard 
              icon={<Skull className="w-8 h-8 text-rose-500" />}
              title={t.options.sap.title}
              subtitle={t.options.sap.subtitle}
              pros={t.options.sap.pros}
              cons={t.options.sap.cons}
              theme="rose"
            />
            {/* Water */}
            <OptionCard 
              icon={<Droplets className="w-8 h-8 text-blue-500" />}
              title={t.options.water.title}
              subtitle={t.options.water.subtitle}
              pros={t.options.water.pros}
              cons={t.options.water.cons}
              theme="blue"
            />
            {/* Eco */}
            <OptionCard 
              icon={<DollarSign className="w-8 h-8 text-amber-500" />}
              title={t.options.eco.title}
              subtitle={t.options.eco.subtitle}
              pros={t.options.eco.pros}
              cons={t.options.eco.cons}
              theme="amber"
            />
          </div>
        </div>
      </section>

      {/* Impact Bento Grid */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold tracking-tight mb-2">{t.impact.title}</h2>
            <div className="h-1 w-20 bg-gray-900"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2">
              <Trash2 className="w-10 h-10 text-gray-400 mb-6" />
              <h3 className="text-5xl font-bold mb-2 text-gray-900">{t.impact.years}</h3>
              <p className="text-lg text-gray-500">{t.impact.yearsDesc}</p>
            </div>
            
            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
              <DollarSign className="w-10 h-10 text-emerald-400 mb-4" />
              <div>
                <h3 className="text-3xl font-bold mb-2">{t.impact.costs}</h3>
                <p className="text-gray-400 text-sm">{t.impact.costsDesc}</p>
              </div>
            </div>

            <div className="bg-rose-50 p-8 rounded-2xl border border-rose-100 lg:col-span-3 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-rose-100 rounded-full">
                    <XCircle className="w-8 h-8 text-rose-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-rose-900">{t.impact.damage}</h3>
                </div>
                <p className="text-xl text-rose-800/80 max-w-2xl">{t.impact.damageDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Dilemma Split */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.stuck.title}</h2>
          <p className="text-xl text-gray-500">{t.stuck.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-0 border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="bg-gray-50 p-12 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.stuck.performance}</h3>
            <div className="w-12 h-1 bg-gray-300 mb-6"></div>
            <p className="text-gray-600 font-medium">{t.stuck.performanceDesc}</p>
          </div>
          <div className="bg-gray-50 p-12 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-emerald-700 mb-2">{t.stuck.sustainability}</h3>
            <div className="w-12 h-1 bg-emerald-200 mb-6"></div>
            <p className="text-emerald-800 font-medium">{t.stuck.sustainabilityDesc}</p>
          </div>
        </div>
      </section>

      {/* Minimal CTA */}
      <section className="py-32 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            {t.cta.title}
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            {t.cta.subtitle}
          </p>
          <Link
            to={createPageUrl("Solution")}
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-emerald-400 transition-colors duration-300"
          >
            {t.cta.button}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function OptionCard({ icon, title, subtitle, pros, cons, theme }) {
  const themeColors = {
    rose: "bg-rose-50 border-rose-100 text-rose-900",
    blue: "bg-blue-50 border-blue-100 text-blue-900",
    amber: "bg-amber-50 border-amber-100 text-amber-900",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-xl p-5 border ${themeColors[theme].replace('text-', 'border-')} hover:shadow-md transition-all duration-300 bg-white`}
    >
      <div className="mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${themeColors[theme]} bg-opacity-50`}>
          {React.cloneElement(icon, { className: "w-5 h-5" })}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Pros</h4>
          <ul className="space-y-1.5">
            {pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                <span className="text-emerald-500 mt-0.5">●</span> {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-4 border-t border-gray-100">
          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Cons</h4>
          <ul className="space-y-1.5">
            {cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                <span className="text-rose-500 mt-0.5">×</span> {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}