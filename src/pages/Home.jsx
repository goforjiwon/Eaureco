import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Recycle, Snowflake, Leaf, Clock, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../Layout";

export default function Home() {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      hero: {
        tagline: "Stay Cool, Stay Green",
        subtitle: "Sustainable ice packs for fresh food delivery and cold chain companies",
        cta: "Discover Our Solution"
      },
      stats: {
        biodegradable: "Biodegradable",
        biodegradableDesc: "Both content and packaging",
        freezing: "Faster Freezing",
        freezingDesc: "Compared to water-based packs",
        retention: "Longer Retention",
        retentionDesc: "Keeps things cool for longer",
        emissions: "Lower Emissions",
        emissionsDesc: "vs. traditional LDPE/Water ice packs"
      },
      why: {
        badge: "Why Eaureco?",
        title: "We turn trash into treasure",
        description: "Millions of tons of sargassum seaweed wash up on beaches, costing millions in disposal fees. We transform this ocean waste into high-performance, sustainable, and cheap ice packs.",
        sustainable: "Sustainable",
        sustainableDesc: "Made from renewable sargassum waste",
        performance: "Superior Performance",
        performanceDesc: "Freezes faster and lasts longer",
        costEffective: "Cost-Effective",
        costEffectiveDesc: "Cheaper than traditional alternatives",
        learnMore: "Learn More"
      },
      cta: {
        title: "Ready to Go Green?",
        subtitle: "Join us in revolutionizing sustainable cooling solutions",
        button: "Get in Touch"
      }
    },
    es: {
      hero: {
        tagline: "Mantente Fresco, Mantente Verde",
        subtitle: "Paquetes de hielo sostenibles para entrega de alimentos frescos y empresas de cadena de frío",
        cta: "Descubre Nuestra Solución"
      },
      stats: {
        biodegradable: "Biodegradable",
        biodegradableDesc: "Tanto contenido como empaque",
        freezing: "Congelación Más Rápida",
        freezingDesc: "Comparado con paquetes a base de agua",
        retention: "Mayor Retención",
        retentionDesc: "Mantiene las cosas frías por más tiempo",
        emissions: "Menores Emisiones",
        emissionsDesc: "vs. paquetes de hielo tradicionales LDPE/Agua"
      },
      why: {
        badge: "¿Por Qué Eaureco?",
        title: "Convertimos basura en tesoro",
        description: "Millones de toneladas de algas sargazo llegan a las playas, costando millones en tarifas de eliminación. Transformamos estos residuos oceánicos en paquetes de hielo sostenibles, de alto rendimiento y económicos.",
        sustainable: "Sostenible",
        sustainableDesc: "Hecho de residuos renovables de sargazo",
        performance: "Rendimiento Superior",
        performanceDesc: "Se congela más rápido y dura más",
        costEffective: "Costo-Efectivo",
        costEffectiveDesc: "Más barato que las alternativas tradicionales",
        learnMore: "Aprende Más"
      },
      cta: {
        title: "¿Listo para Ser Ecológico?",
        subtitle: "Únete a nosotros en la revolución de soluciones de enfriamiento sostenibles",
        button: "Contáctanos"
      }
    }
  };

  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80')"
          }}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-teal-900/75 to-cyan-900/85"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className="text-7xl md:text-9xl font-bold neo-text text-white mb-6">
              eaureco
            </h1>
            <div className="inline-block bg-gradient-to-r from-lime-400 to-emerald-400 px-8 py-4 rounded-2xl shadow-2xl mb-8">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
            <Link
              to={createPageUrl("Solution")}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-xl font-bold text-lg text-gray-900 hover:shadow-2xl transition-all transform hover:scale-105">
              {t.hero.cta}
              <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group">
              <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Recycle className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-5xl font-bold neo-text text-emerald-600 mb-2 mt-4">100%</h3>
                <p className="text-lg font-semibold text-gray-800">{t.stats.biodegradable}</p>
                <p className="text-sm text-gray-600 mt-2">{t.stats.biodegradableDesc}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group">
              <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Snowflake className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-5xl font-bold neo-text text-cyan-600 mb-2 mt-4">4x</h3>
                <p className="text-lg font-semibold text-gray-800">{t.stats.freezing}</p>
                <p className="text-sm text-gray-600 mt-2">{t.stats.freezingDesc}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group">
              <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow flex flex-col justify-center items-center text-center min-h-[200px]">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-lg font-semibold text-gray-800">{t.stats.retention}</p>
                <p className="text-sm text-gray-600 mt-2">{t.stats.retentionDesc}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group">
              <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                  <TrendingDown className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-5xl font-bold neo-text text-teal-600 mb-2 mt-4">63.4%</h3>
                <p className="text-lg font-semibold text-gray-800">{t.stats.emissions}</p>
                <p className="text-sm text-gray-600 mt-2">{t.stats.emissionsDesc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Eaureco Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-blue-100 to-teal-100 rounded-3xl blur-2xl opacity-60"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/5f7b251c8_image.png"
                      alt="Sargassum seaweed on beach"
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 rounded-3xl blur-2xl opacity-60"></div>
                  <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-2xl">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/37847a2b9_image.png"
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
              <div className="inline-block bg-gradient-to-r from-lime-400 to-emerald-400 px-6 py-2 rounded-full mb-6">
                <h2 className="text-sm font-bold neo-text text-gray-900 uppercase tracking-wider">{t.why.badge}</h2>
              </div>
              
              <h3 className="text-5xl font-bold neo-text text-gray-900 mb-6 leading-tight">
                {t.why.title}
              </h3>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t.why.description}
              </p>

              <div className="space-y-4">
                <div className="nav-glass rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <span className="text-emerald-600">♻️</span> {t.why.sustainable}
                  </h4>
                  <p className="text-gray-700">{t.why.sustainableDesc}</p>
                </div>
                <div className="nav-glass rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <span className="text-cyan-600">❄️</span> {t.why.performance}
                  </h4>
                  <p className="text-gray-700">{t.why.performanceDesc}</p>
                </div>
                <div className="nav-glass rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                    <span className="text-lime-600">$</span> {t.why.costEffective}
                  </h4>
                  <p className="text-gray-700">{t.why.costEffectiveDesc}</p>
                </div>
              </div>

              <Link
                to={createPageUrl("Solution")}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-white hover:shadow-xl transition-all">
                {t.why.learnMore}
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold neo-text text-white mb-6">
            {t.cta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t.cta.subtitle}
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-xl font-bold text-lg text-gray-900 hover:shadow-2xl transition-all transform hover:scale-105">
            {t.cta.button}
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}