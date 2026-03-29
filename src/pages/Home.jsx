import React, { useState } from "react";
import { motion } from "framer-motion";
import { Recycle, Snowflake, TrendingDown, Trash2, Droplets, XCircle, DollarSign, Mail, MapPin, TrendingUp, Scale, Leaf, Thermometer, CheckCircle } from "lucide-react";
import { useLanguage } from "../Layout";
import { getT } from "@/i18n/translations";
import { base44 } from "@/api/base44Client";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const { language } = useLanguage();
  const t = getT(language).home;
  const iconPresets = {
    bullet: { className: "w-4 h-4 mt-0.5 flex-shrink-0", strokeWidth: 2 },
    feature: { className: "w-5 h-5 flex-shrink-0", strokeWidth: 2 },
    stat: { className: "w-10 h-10 mx-auto mb-4 text-gray-700", strokeWidth: 2 },
    metadata: { className: "w-7 h-7 text-white", strokeWidth: 2.25 }
  };

  const comparisonData = [
  {
    feature: t.comparison.table.biodegradable,
    eaureco: true,
    sap: false,
    water: false,
    compost: "(Plastic package)"
  },
  {
    feature: t.comparison.table.freezing,
    eaureco: "0.25",
    sap: "0.76",
    water: "1.0",
    compost: ">1"
  },
  {
    feature: t.comparison.table.retention,
    eaureco: "260 min",
    sap: "220 min",
    water: "180 min",
    compost: "200 min"
  },
  {
    feature: t.comparison.table.cost,
    eaureco: true,
    sap: true,
    water: true,
    compost: false
  },
  {
    feature: t.comparison.table.impact,
    eaureco: t.comparison.table.positive,
    sap: t.comparison.table.negative,
    water: t.comparison.table.neutral,
    compost: t.comparison.table.positive
  }];


  const OptionCard = ({ icon, title, subtitle, pros, cons, theme }) =>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="content-card p-6">

      <div className={`inline-flex p-3 rounded-lg mb-4 ${theme === 'red' ? 'bg-rose-100' : theme === 'blue' ? 'bg-blue-100' : 'bg-teal-100'}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-4">{subtitle}</p>
      
      <div className="space-y-3">
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Pros</p>
          {pros.map((pro, i) =>
        <div key={i} className="flex items-start gap-2 mb-1">
              <CheckCircle {...iconPresets.bullet} className={`${iconPresets.bullet.className} text-emerald-500`} />
              <p className="text-sm text-gray-700">{pro}</p>
            </div>
        )}
        </div>
        
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Cons</p>
          {cons.map((con, i) =>
        <div key={i} className="flex items-start gap-2 mb-1">
              <XCircle {...iconPresets.bullet} className={`${iconPresets.bullet.className} text-rose-500`} />
              <p className="text-sm text-gray-700">{con}</p>
            </div>
        )}
        </div>
      </div>
    </motion.div>;


  return (
    <div className="min-h-screen">
      {/* HOME SECTION */}
      <section id="home" className="relative min-h-[85vh] flex items-center justify-center px-4 py-20 overflow-hidden section-surface">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/0885b584e_image.png')"
          }}>
          <div className="absolute inset-0 bg-emerald-950/75"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <div className="mb-6 flex justify-center">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/802916f9d_KakaoTalk_20260203_182916893_03.png"
                alt="eaureco"
                className="h-24 md:h-32 w-auto" />

            </div>
            <div className="inline-block bg-emerald-300 px-8 py-4 rounded-2xl mb-8">
              <p className="text-2xl md:text-4xl font-bold neo-text text-gray-900">
                {t.hero.tagline}
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/95 font-medium mb-12 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      




















































      {/* Why Eaureco Section */}
      <section className="py-20 px-4 section-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <div className="space-y-6">
                <div className="relative group">
                  
                  <div className="relative content-card p-8">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/d8c04ec5c_KakaoTalk_20260208_211839501.jpg"
                      alt="eaureco ice pack"
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <div className="accent-pill mb-6">
                <h2 className="text-sm font-bold neo-text text-gray-900 uppercase tracking-wider">{t.why.badge}</h2>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold neo-text text-gray-900 mb-6 leading-tight">
                {t.why.title}
              </h3>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t.why.description}
              </p>

              <div className="space-y-4">
                <div className="nav-glass rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2.5">
                    <Leaf {...iconPresets.feature} className={`${iconPresets.feature.className} text-emerald-600`} /> {t.why.sustainable}
                  </h4>
                  <p className="text-gray-700">{t.why.sustainableDesc}</p>
                </div>
                <div className="nav-glass rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2.5">
                    <Snowflake {...iconPresets.feature} className={`${iconPresets.feature.className} text-cyan-600`} /> {t.why.performance}
                  </h4>
                  <p className="text-gray-700">{t.why.performanceDesc}</p>
                </div>
                <div className="nav-glass rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2.5">
                    <Scale {...iconPresets.feature} className={`${iconPresets.feature.className} text-lime-600`} /> {t.why.costEffective}
                <div className="content-card p-5">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <span className="text-emerald-600">♻️</span> {t.why.sustainable}
                  </h4>
                  <p className="text-gray-700">{t.why.sustainableDesc}</p>
                </div>
                <div className="content-card p-5">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <span className="text-cyan-600">❄️</span> {t.why.performance}
                  </h4>
                  <p className="text-gray-700">{t.why.performanceDesc}</p>
                </div>
                <div className="content-card p-5">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <span className="text-lime-600">$</span> {t.why.costEffective}
                  </h4>
                  <p className="text-gray-700">{t.why.costEffectiveDesc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section id="problem" className="min-h-screen section-surface text-gray-900 font-sans">
        {/* Hero Section */}
        <section className="py-24 px-6 md:px-12 border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8">

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900 leading-tight">
                {t.problem.header.title}
              </h1>
              <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                {t.problem.header.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Scale Statistic */}
        <section className="py-20 px-6 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10">

            <div className="flex flex-col items-center justify-center gap-4">
              <Thermometer className="w-10 h-10 text-orange-400 mb-2" strokeWidth={2} />
              <span className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                {t.problem.scale.line1}
              </span>
              <span className="text-lg md:text-xl text-gray-400 font-medium tracking-wide uppercase">
                {t.problem.scale.line2}
              </span>
            </div>
          </motion.div>
        </section>

        {/* Current Options Grid */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold mb-4">{t.problem.options.title}</h2>
              <p className="text-gray-500">{t.problem.options.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <OptionCard
                icon={<Scale className="w-8 h-8 text-rose-500" strokeWidth={2} />}
                title={t.problem.options.sap.title}
                subtitle={t.problem.options.sap.subtitle}
                pros={t.problem.options.sap.pros}
                cons={t.problem.options.sap.cons}
                theme="red" />

              <OptionCard
                icon={<Droplets className="w-8 h-8 text-blue-500" />}
                title={t.problem.options.water.title}
                subtitle={t.problem.options.water.subtitle}
                pros={t.problem.options.water.pros}
                cons={t.problem.options.water.cons}
                theme="blue" />

              <OptionCard
                icon={<Snowflake className="w-8 h-8 text-teal-500" />}
                title={t.problem.options.eco.title}
                subtitle={t.problem.options.eco.subtitle}
                pros={t.problem.options.eco.pros}
                cons={t.problem.options.eco.cons}
                theme="teal" />

            </div>
          </div>
        </section>

        {/* The Hidden Cost */}
        <section className="py-24 px-6 section-muted">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.problem.impact.title}</h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="content-card p-8 text-center">

              <Trash2 {...iconPresets.stat} />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{t.problem.impact.years}</h3>
              <p className="text-gray-600">{t.problem.impact.yearsDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="content-card p-8 text-center">

              <DollarSign {...iconPresets.stat} />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{t.problem.impact.costs}</h3>
              <p className="text-gray-600">{t.problem.impact.costsDesc}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="content-card p-8 text-center">

              <Leaf {...iconPresets.stat} />
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{t.problem.impact.damage}</h3>
              <p className="text-gray-600">{t.problem.impact.damageDesc}</p>
            </motion.div>
          </div>
        </section>

        {/* Zero-Sum Game */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">{t.problem.stuck.title}</h2>
            <p className="text-xl text-gray-500 mb-12">{t.problem.stuck.subtitle}</p>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="content-card p-8">

                <h3 className="text-2xl font-bold mb-3">{t.problem.stuck.performance}</h3>
                <p className="text-gray-600">{t.problem.stuck.performanceDesc}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="content-card p-8">

                <h3 className="text-2xl font-bold mb-3">{t.problem.stuck.sustainability}</h3>
                <p className="text-gray-600">{t.problem.stuck.sustainabilityDesc}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Breakthrough Transition */}
        <section className="relative py-32 px-6 overflow-hidden section-muted">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {t.problem.breakthrough.title}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-medium mb-10 max-w-3xl mx-auto">
              {t.problem.breakthrough.subtitle}
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex justify-center">

              


            </motion.div>
          </motion.div>
        </section>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solution" className="py-16 px-4 section-surface">
        <div className="max-w-7xl mx-auto">
          {/* Hero Product Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20">
            <div className="highlight-card p-12 text-center">
              <div className="accent-pill mb-6">
                <p className="text-sm font-bold uppercase tracking-wider">{t.solution.hero.badge}</p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 neo-text text-emerald-900">{t.solution.hero.title}</h1>
              <p className="text-2xl font-medium mb-8 max-w-3xl mx-auto text-emerald-900/80">
                {t.solution.hero.tagline}
              </p>
            </div>
          </motion.div>

          {/* Performance Comparison */}
          <div className="grid md:grid-cols-1 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <div className="content-card p-8 h-full">
                <CheckCircle className="w-12 h-12 text-lime-600 mb-4" strokeWidth={2} />
                <h3 className="text-2xl font-bold neo-text text-emerald-700 mb-3">
                  {t.solution.performance.green}
                </h3>
                <p className="text-3xl font-bold neo-text text-gray-900 mb-2">{t.solution.performance.greenTitle}</p>
                <p className="text-gray-600 font-medium">
                  {t.solution.performance.greenDesc}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Business Benefits */}
          <div className="grid md:grid-cols-1 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <div className="content-card p-10 h-full">
                <Recycle className="w-10 h-10 text-cyan-600 mb-4" strokeWidth={2} />
                <h3 className="text-2xl font-bold neo-text text-gray-900 mb-4">
                  {t.solution.benefits.disposal.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t.solution.benefits.disposal.desc}
                </p>
              </div>
            </motion.div>
          </div>

          {/* General Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20">
            <div className="accent-pill mb-8">
              <h2 className="text-sm font-bold neo-text text-gray-900 uppercase tracking-wider">{t.solution.general.badge}</h2>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold neo-text text-gray-900 mb-12">{t.solution.general.title}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="content-card p-6">
                <h3 className="font-bold text-lg mb-2">{t.solution.general.perf}</h3>
                <p className="text-gray-600 text-sm">{t.solution.general.perfDesc}</p>
              </div>
              <div className="content-card p-6">
                <h3 className="font-bold text-lg mb-2">{t.solution.general.cost}</h3>
                <p className="text-gray-600 text-sm">{t.solution.general.costDesc}</p>
              </div>
              <div className="content-card p-6">
                <h3 className="font-bold text-lg mb-2">{t.solution.general.eco}</h3>
                <p className="text-gray-600 text-sm">{t.solution.general.ecoDesc}</p>
              </div>
              <div className="content-card p-6">
                <h3 className="font-bold text-lg mb-2">{t.solution.general.safe}</h3>
                <p className="text-gray-600 text-sm">{t.solution.general.safeDesc}</p>
              </div>
            </div>
          </motion.div>

          {/* Environmental Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20">
            <div className="content-card p-12">
              <div className="accent-pill mb-8">
                <h2 className="text-sm font-bold uppercase tracking-wider">{t.solution.impact.badge}</h2>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold neo-text text-gray-900 mb-4">{t.solution.impact.title}</h2>
              <p className="text-xl text-gray-700 mb-12 max-w-3xl">{t.solution.impact.subtitle}</p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trash2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.solution.impact.waste}</h3>
                  <p className="text-gray-600">{t.solution.impact.wasteDesc}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.solution.impact.ocean}</h3>
                  <p className="text-gray-600">{t.solution.impact.oceanDesc}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingDown className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.solution.impact.carbon}</h3>
                  <p className="text-gray-600">{t.solution.impact.carbonDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ESG Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <div className="content-card p-12 text-center">
              <div className="accent-pill mb-6">
                <h2 className="text-sm font-bold uppercase tracking-wider">{t.solution.esg.badge}</h2>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 neo-text">{t.solution.esg.title}</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
                {t.solution.esg.subtitle}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section id="comparison" className="py-16 px-4 section-muted">
        <div className="max-w-7xl mx-auto">
          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16">
            <div className="content-card p-12">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold neo-text text-gray-900 mb-6">
                  {t.comparison.value.title}
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  {t.comparison.value.subtitle}
                </p>
                
                <div className="content-card p-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <DollarSign className="w-12 h-12 text-emerald-600 mx-auto mb-3" strokeWidth={2} />
                      <p className="text-3xl font-bold neo-text text-emerald-600">{t.comparison.value.cheap}</p>
                    </div>
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-cyan-600 mx-auto mb-3" strokeWidth={2} />
                      <p className="text-3xl font-bold neo-text text-cyan-600">{t.comparison.value.effective}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Detailed Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16">
            <div className="accent-pill mb-8">
              <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider">{t.comparison.table.badge}</h2>
            </div>

            <div className="content-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="px-6 py-5 text-left bg-gray-50">
                        <span className="font-bold text-lg text-gray-900">{t.comparison.table.feature}</span>
                      </th>
                      <th className="px-6 py-5 text-center bg-emerald-50 border-l border-gray-200">
                        <div className="font-bold text-xl neo-text text-emerald-600">Eaureco</div>
                      </th>
                      <th className="px-6 py-5 text-center bg-gray-50 border-l border-gray-200">
                        <div className="font-semibold text-gray-900">SAP ({language === 'en' ? 'Plastic' : language === 'es' ? 'Plástico' : '플라스틱'})</div>
                      </th>
                      <th className="px-6 py-5 text-center bg-gray-50 border-l border-gray-200">
                        <div className="font-semibold text-gray-900">{language === 'en' ? 'Water' : language === 'es' ? 'Agua' : '물'}</div>
                      </th>
                      <th className="px-6 py-5 text-center bg-gray-50 border-l border-gray-200">
                        <div className="font-semibold text-gray-900">{language === 'en' ? 'Compost' : language === 'es' ? 'Composta' : '기타 친환경 아이스팩'}</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) =>
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center bg-emerald-50/50 border-l border-gray-200">
                          {typeof row.eaureco === 'boolean' ?
                        row.eaureco ?
                        <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} /> :
                        <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} /> :
                        <span className="font-bold text-lg text-emerald-600">{row.eaureco}</span>
                        }
                        </td>
                        <td className="px-6 py-4 text-center border-l border-gray-200">
                          {typeof row.sap === 'boolean' ?
                        row.sap ?
                        <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} /> :
                        <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} /> :
                        <span className="font-medium text-gray-700">{row.sap}</span>
                        }
                        </td>
                        <td className="px-6 py-4 text-center border-l border-gray-200">
                          {typeof row.water === 'boolean' ?
                        row.water ?
                        <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} /> :
                        <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} /> :
                        <span className="font-medium text-gray-700">{row.water}</span>
                        }
                        </td>
                        <td className="px-6 py-4 text-center border-l border-gray-200">
                          {typeof row.compost === 'boolean' ?
                        row.compost ?
                        <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} /> :
                        <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} /> :
                        <span className="font-medium text-gray-700">{row.compost}</span>
                        }
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <div className="content-card p-12 text-center">
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                {t.comparison.summary.subtitle}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 px-4 section-surface">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">

            <p className="text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
              {t.contact.header.subtitle}
            </p>
          </motion.div>

          {/* Contact Form */}
          <ContactForm t={t} language={language} />

          {/* Main Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}>

              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 h-full hover:shadow-3xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Mail {...iconPresets.metadata} />
              <div className="content-card p-10 h-full">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-bold neo-text text-gray-900 mb-4 text-center">
                  {t.contact.info.email}
                </h2>
                <a
                  href="mailto:goforjiwon@kaist.ac.kr"
                  className="block text-center text-xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors">

                  {t.contact.info.emailValue}
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}>

              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 h-full hover:shadow-3xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin {...iconPresets.metadata} />
              <div className="content-card p-10 h-full">
                <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-bold neo-text text-gray-900 mb-4 text-center">
                  {t.contact.info.location}
                </h2>
                <p className="text-center text-xl font-bold text-cyan-600 mb-4">
                  {t.contact.info.locationValue}
                </p>
                <p className="text-center text-gray-600 font-medium">
                  {t.contact.info.locationDesc}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <div className="highlight-card p-12 text-center">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/19088c638_KakaoTalk_20260203_182916893_02.png"
                alt="eaureco"
                className="h-16 md:h-20 w-auto mx-auto mb-4" />

              <p className="text-2xl font-bold text-emerald-600 mb-4">{t.contact.bottom.tagline}</p>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">{t.contact.bottom.desc}</p>
            </div>
            
            {/* Copyright Notice */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                © 2025 eaureco. All rights reserved. Content may not be copied or reproduced without permission.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>);

}
