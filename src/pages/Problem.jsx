import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, Trash2, Skull, Droplets, Snowflake, TrendingDown, XCircle, DollarSign, ArrowRight } from "lucide-react";
import { useLanguage } from "../Layout";
import { createPageUrl } from "@/utils";

export default function Problem() {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      header: {
        title: "The Cold Chain Dilemma",
        subtitle: "The industry is forced to choose between sustainability and performance."
      },
      scale: {
        line1: "1 Billion",
        line2: "ice packs landfill annually in North America"
      },
      options: {
        title: "Current Solutions Failed",
        subtitle: "Every existing option comes with a critical compromise.",
        sap: {
          title: "SAP Ice Packs",
          subtitle: "Plastic-based polymers",
          pros: ["Good performance", "Long lasting"],
          cons: ["Toxic microplastics", "Clogs sewage", "100+ years to decompose"]
        },
        water: {
          title: "Water Packs",
          subtitle: "100% Water",
          pros: ["Eco-friendly", "Safe disposal"],
          cons: ["Melts too fast", "Poor retention", "Inefficient logistics"]
        },
        eco: {
          title: "Other Eco-Gels",
          subtitle: "Alternative solutions",
          pros: ["Biodegradable", "Sustainable"],
          cons: ["Prohibitively expensive", "Lower performance", "Hard to scale"]
        }
      },
      impact: {
        title: "The Hidden Cost",
        years: "100+ Years",
        yearsDesc: "Time for SAP packs to decompose in landfills",
        costs: "$ Millions",
        costsDesc: "Spent by cities on sewage repair & cleanup",
        damage: "Irreversible",
        damageDesc: "Microplastics permanently contaminating our oceans"
      },
      stuck: {
        title: "The Zero-Sum Game",
        subtitle: "Until now, you couldn't have both.",
        performance: "Performance",
        performanceDesc: "Means using toxic plastics",
        sustainability: "Sustainability",
        sustainabilityDesc: "Means sacrificing efficiency"
      },
      cta: {
        title: "Stop Compromising",
        subtitle: "Eaureco delivers performance and sustainability in one package.",
        button: "See the Solution"
      }
    },
    es: {
      header: {
        title: "El Dilema de la Cadena de Frío",
        subtitle: "La industria se ve obligada a elegir entre sostenibilidad y rendimiento."
      },
      scale: {
        line1: "1 Billón",
        line2: "de paquetes de hielo en vertederos anualmente en Norteamérica"
      },
      options: {
        title: "Las Soluciones Actuales Fallaron",
        subtitle: "Cada opción existente viene con un compromiso crítico.",
        sap: {
          title: "Paquetes SAP",
          subtitle: "Polímeros plásticos",
          pros: ["Buen rendimiento", "Larga duración"],
          cons: ["Microplásticos tóxicos", "Obstruye desagües", "+100 años en descomponerse"]
        },
        water: {
          title: "Paquetes de Agua",
          subtitle: "100% Agua",
          pros: ["Ecológico", "Eliminación segura"],
          cons: ["Se derrite rápido", "Poca retención", "Logística ineficiente"]
        },
        eco: {
          title: "Otros Eco-Geles",
          subtitle: "Soluciones alternativas",
          pros: ["Biodegradable", "Sostenible"],
          cons: ["Prohibitivamente caro", "Menor rendimiento", "Difícil de escalar"]
        }
      },
      impact: {
        title: "El Costo Oculto",
        years: "+100 Años",
        yearsDesc: "Tiempo para que los paquetes SAP se descompongan",
        costs: "$ Millones",
        costsDesc: "Gastados por ciudades en limpieza y reparaciones",
        damage: "Irreversible",
        damageDesc: "Microplásticos contaminando permanentemente nuestros océanos"
      },
      stuck: {
        title: "El Juego de Suma Cero",
        subtitle: "Hasta ahora, no podías tener ambos.",
        performance: "Rendimiento",
        performanceDesc: "Significa usar plásticos tóxicos",
        sustainability: "Sostenibilidad",
        sustainabilityDesc: "Significa sacrificar eficiencia"
      },
      cta: {
        title: "Deja de Comprometerte",
        subtitle: "Eaureco ofrece rendimiento y sostenibilidad en un solo paquete.",
        button: "Ver la Solución"
      }
    },
    ko: {
      header: {
        title: "콜드체인의 딜레마",
        subtitle: "산업은 지속 가능성과 성능 사이에서 선택을 강요받고 있습니다."
      },
      scale: {
        line1: "10억 개",
        line2: "매년 북미에서 매립되는 아이스팩 수량"
      },
      options: {
        title: "실패한 기존 솔루션",
        subtitle: "모든 기존 옵션에는 치명적인 타협점이 있습니다.",
        sap: {
          title: "SAP 아이스팩",
          subtitle: "플라스틱 기반 폴리머",
          pros: ["좋은 성능", "오래 지속"],
          cons: ["유독성 미세 플라스틱", "하수구 막힘", "분해에 100년 이상"]
        },
        water: {
          title: "물 아이스팩",
          subtitle: "100% 물",
          pros: ["친환경", "안전한 폐기"],
          cons: ["너무 빨리 녹음", "낮은 보냉력", "비효율적인 물류"]
        },
        eco: {
          title: "기타 친환경 젤",
          subtitle: "대안 솔루션",
          pros: ["생분해성", "지속 가능"],
          cons: ["터무니없이 비쌈", "낮은 성능", "확장 어려움"]
        }
      },
      impact: {
        title: "숨겨진 비용",
        years: "100년 이상",
        yearsDesc: "매립지에서 SAP 팩이 분해되는 시간",
        costs: "수백만 달러",
        costsDesc: "하수 처리 및 정화에 지출되는 도시 예산",
        damage: "돌이킬 수 없는",
        damageDesc: "바다를 영구적으로 오염시키는 미세 플라스틱"
      },
      stuck: {
        title: "제로섬 게임",
        subtitle: "지금까지는 두 마리 토끼를 잡을 수 없었습니다.",
        performance: "성능",
        performanceDesc: "유독성 플라스틱 사용을 의미",
        sustainability: "지속 가능성",
        sustainabilityDesc: "효율성 희생을 의미"
      },
      cta: {
        title: "타협하지 마세요",
        subtitle: "Eaureco는 성능과 지속 가능성을 하나의 패키지로 제공합니다.",
        button: "솔루션 보기"
      }
    }
  };

  const t = translations[language];

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

          <div className="grid lg:grid-cols-3 gap-8">
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
      className={`rounded-2xl p-8 border ${themeColors[theme].replace('text-', 'border-')} hover:shadow-lg transition-all duration-300 bg-white`}
    >
      <div className="mb-6">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${themeColors[theme]} bg-opacity-50`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Pros</h4>
          <ul className="space-y-2">
            {pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm font-medium text-gray-700">
                <span className="text-emerald-500 mt-0.5">●</span> {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-6 border-t border-gray-100">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Cons</h4>
          <ul className="space-y-2">
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