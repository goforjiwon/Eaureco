import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, XCircle, DollarSign, Timer, Thermometer } from "lucide-react";
import { useLanguage } from "../Layout";
import { createPageUrl } from "@/utils";

export default function Comparison() {
  const { language } = useLanguage();

  const translations = {
    en: {
      header: {
        title: "Comparison",
        subtitle: "See how Eaureco outperforms traditional ice pack solutions"
      },
      value: {
        title: "Eaureco is Cheaper & More Effective",
        subtitle: "Our ice packs deliver superior performance while being better for the environment and your bottom line",
        cheap: "Cheap",
        effective: "Effective"
      },
      metrics: {
        freezes: "Freezes Faster",
        freezesDesc: "Faster freezing than water-based ice packs",
        lasts: "Lasts Longer",
        lastsDesc: "Minutes of cooling retention time",
        green: "100% Green",
        greenTitle: "Biodegradable",
        greenDesc: "Content and packaging both break down naturally"
      },
      table: {
        badge: "Detailed Comparison",
        feature: "Feature",
        biodegradable: "Biodegradable",
        freezing: "Freezing Speed",
        retention: "Retention Time",
        cost: "Cost Effective",
        impact: "Environmental Impact",
        reusable: "Reusable",
        positive: "Positive",
        negative: "Negative",
        neutral: "Neutral"
      },
      summary: {
        title: "The Clear Winner",
        subtitle: "Eaureco outperforms traditional ice packs in every category that matters: performance, cost-effectiveness, and sustainability",
        button: "Get in Touch →"
      }
    },
    es: {
      header: {
        title: "Comparación",
        subtitle: "Ve cómo Eaureco supera a las soluciones tradicionales de paquetes de hielo"
      },
      value: {
        title: "Eaureco es Más Barato y Más Efectivo",
        subtitle: "Nuestros paquetes de hielo ofrecen un rendimiento superior mientras son mejores para el medio ambiente y tu negocio",
        cheap: "Económico",
        effective: "Efectivo"
      },
      metrics: {
        freezes: "Se Congela Más Rápido",
        freezesDesc: "Más rápido que los paquetes de hielo a base de agua",
        lasts: "Dura Más Tiempo",
        lastsDesc: "Minutos de tiempo de retención de enfriamiento",
        green: "100% Verde",
        greenTitle: "Biodegradable",
        greenDesc: "El contenido y el empaque se descomponen naturalmente"
      },
      table: {
        badge: "Comparación Detallada",
        feature: "Característica",
        biodegradable: "Biodegradable",
        freezing: "Velocidad de Congelación",
        retention: "Tiempo de Retención",
        cost: "Costo Efectivo",
        impact: "Impacto Ambiental",
        reusable: "Reutilizable",
        positive: "Positivo",
        negative: "Negativo",
        neutral: "Neutral"
      },
      summary: {
        title: "El Claro Ganador",
        subtitle: "Eaureco supera a los paquetes de hielo tradicionales en todas las categorías que importan: rendimiento, costo-efectividad y sostenibilidad",
        button: "Contáctanos →"
      }
    },
    ko: {
      header: {
        title: "비교",
        subtitle: "Eaureco가 기존 아이스팩 솔루션을 능가하는 방법을 확인하세요"
      },
      value: {
        title: "Eaureco는 더 저렴하고 더 효과적입니다",
        subtitle: "우리의 아이스팩은 환경과 수익에 더 나은 뛰어난 성능을 제공합니다",
        cheap: "저렴함",
        effective: "효과적"
      },
      metrics: {
        freezes: "더 빠르게 얼음",
        freezesDesc: "물 기반 아이스팩보다 빠른 냉동",
        lasts: "더 오래 지속",
        lastsDesc: "냉각 보유 시간(분)",
        green: "100% 친환경",
        greenTitle: "생분해성",
        greenDesc: "내용물과 포장 모두 자연적으로 분해"
      },
      table: {
        badge: "상세 비교",
        feature: "특징",
        biodegradable: "생분해성",
        freezing: "냉동 속도",
        retention: "보냉 시간",
        cost: "비용 효율적",
        impact: "환경 영향",
        reusable: "재사용 가능",
        positive: "긍정적",
        negative: "부정적",
        neutral: "중립"
      },
      summary: {
        title: "명백한 승자",
        subtitle: "성능, 비용 효율성 및 지속 가능성 - Eaureco는 중요한 모든 범주에서 기존 아이스팩을 능가합니다",
        button: "문의하기 →"
      }
    }
  };

  const t = translations[language];

  const comparisonData = [
  {
    feature: t.table.biodegradable,
    eaureco: true,
    sap: false,
    water: false,
    compost: "(Plastic package)"
  },
  {
    feature: t.table.freezing,
    eaureco: "0.25",
    sap: "0.76",
    water: "1.0",
    compost: ">1"
  },
  {
    feature: t.table.retention,
    eaureco: "260 min",
    sap: "220 min",
    water: "180 min",
    compost: "200 min"
  },
  {
    feature: t.table.cost,
    eaureco: true,
    sap: true,
    water: true,
    compost: false
  },
  {
    feature: t.table.impact,
    eaureco: t.table.positive,
    sap: t.table.negative,
    water: t.table.neutral,
    compost: t.table.positive
  }];


  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        














        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16">

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-2xl p-12 border border-emerald-100">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold neo-text text-gray-900 mb-6">
                {t.value.title}
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                {t.value.subtitle}
              </p>
              
              <div className="inline-block bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <DollarSign className="w-12 h-12 text-emerald-600 mx-auto mb-3" strokeWidth={2} />
                    <p className="text-3xl font-bold neo-text text-emerald-600">{t.value.cheap}</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-cyan-600 mx-auto mb-3" strokeWidth={2} />
                    <p className="text-3xl font-bold neo-text text-cyan-600">{t.value.effective}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>

            <div className="nav-glass rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-shadow">
              <Timer className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={2} />
              <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
                {t.metrics.freezes}
              </h3>
              <p className="text-6xl font-bold neo-text text-gray-900 mb-2">4x</p>
              <p className="text-gray-600 font-medium">
                {t.metrics.freezesDesc}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}>

            <div className="nav-glass rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-shadow">
              <Thermometer className="w-12 h-12 text-cyan-600 mb-4" strokeWidth={2} />
              <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-3">
                {t.metrics.lasts}
              </h3>
              <p className="text-6xl font-bold neo-text text-gray-900 mb-2">260</p>
              <p className="text-gray-600 font-medium">
                {t.metrics.lastsDesc}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}>

            <div className="nav-glass rounded-2xl shadow-xl p-8 h-full bg-gradient-to-br from-lime-50 to-emerald-50 hover:shadow-2xl transition-shadow">
              <CheckCircle className="w-12 h-12 text-lime-600 mb-4" strokeWidth={2} />
              <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                {t.metrics.green}
              </h3>
              <p className="text-3xl font-bold neo-text text-gray-900 mb-2">{t.metrics.greenTitle}</p>
              <p className="text-gray-600 font-medium">
                {t.metrics.greenDesc}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Detailed Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16">

          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-2 rounded-full mb-8 shadow-md">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider">{t.table.badge}</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="px-6 py-5 text-left bg-gray-50">
                      <span className="font-bold text-lg text-gray-900">{t.table.feature}</span>
                    </th>
                    <th className="px-6 py-5 text-center bg-gradient-to-br from-emerald-50 to-lime-50 border-l border-gray-200">
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
                      <td className="px-6 py-4 text-center bg-gradient-to-br from-emerald-50/50 to-lime-50/50 border-l border-gray-200">
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

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-center">
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {t.summary.subtitle}
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-xl font-bold text-lg text-gray-900 hover:shadow-2xl transition-all transform hover:scale-105">

              {t.summary.button}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>);

}