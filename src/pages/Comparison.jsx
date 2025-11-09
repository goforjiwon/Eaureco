import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, XCircle, DollarSign, Timer, Thermometer } from "lucide-react";
import { useLanguage } from "../Layout";

export default function Comparison() {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      header: {
        title: "Comparison",
        subtitle: "See how eaureco outperforms traditional ice pack solutions"
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
        subtitle: "eaureco outperforms traditional ice packs in every category that matters: sustainability, performance, and cost-effectiveness",
        button: "Get in Touch →"
      }
    },
    es: {
      header: {
        title: "Comparación",
        subtitle: "Ve cómo eaureco supera a las soluciones tradicionales de paquetes de hielo"
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
        subtitle: "eaureco supera a los paquetes de hielo tradicionales en todas las categorías que importan: sostenibilidad, rendimiento y costo-efectividad",
        button: "Contáctanos →"
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
      compost: true,
    },
    {
      feature: t.table.freezing,
      eaureco: "0.10",
      sap: "0.033",
      water: "0.025",
      compost: "0.05",
    },
    {
      feature: t.table.retention,
      eaureco: "260 min",
      sap: "220 min",
      water: "180 min",
      compost: "200 min",
    },
    {
      feature: t.table.cost,
      eaureco: true,
      sap: false,
      water: true,
      compost: false,
    },
    {
      feature: t.table.impact,
      eaureco: t.table.positive,
      sap: t.table.negative,
      water: t.table.neutral,
      compost: t.table.positive,
    },
    {
      feature: t.table.reusable,
      eaureco: true,
      sap: true,
      water: true,
      compost: false,
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-3 rounded-full mb-6 shadow-lg">
            <h1 className="text-5xl md:text-6xl font-bold neo-text text-white">
              {t.header.title}
            </h1>
          </div>
          <p className="text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
            {t.header.subtitle}
          </p>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
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
            viewport={{ once: true }}
          >
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
            transition={{ delay: 0.1 }}
          >
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
            transition={{ delay: 0.2 }}
          >
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
          className="mb-16"
        >
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
                      <div className="font-bold text-xl neo-text text-emerald-600">EAURECO</div>
                    </th>
                    <th className="px-6 py-5 text-center bg-gray-50 border-l border-gray-200">
                      <div className="font-semibold text-gray-900">SAP ({language === 'en' ? 'Plastic' : 'Plástico'})</div>
                    </th>
                    <th className="px-6 py-5 text-center bg-gray-50 border-l border-gray-200">
                      <div className="font-semibold text-gray-900">{language === 'en' ? 'Water' : 'Agua'}</div>
                    </th>
                    <th className="px-6 py-5 text-center bg-gray-50 border-l border-gray-200">
                      <div className="font-semibold text-gray-900">{language === 'en' ? 'Compost' : 'Composta'}</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center bg-gradient-to-br from-emerald-50/50 to-lime-50/50 border-l border-gray-200">
                        {typeof row.eaureco === 'boolean' ? (
                          row.eaureco ? (
                            <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} />
                          ) : (
                            <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} />
                          )
                        ) : (
                          <span className="font-bold text-lg text-emerald-600">{row.eaureco}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center border-l border-gray-200">
                        {typeof row.sap === 'boolean' ? (
                          row.sap ? (
                            <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} />
                          ) : (
                            <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} />
                          )
                        ) : (
                          <span className="font-medium text-gray-700">{row.sap}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center border-l border-gray-200">
                        {typeof row.water === 'boolean' ? (
                          row.water ? (
                            <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} />
                          ) : (
                            <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} />
                          )
                        ) : (
                          <span className="font-medium text-gray-700">{row.water}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center border-l border-gray-200">
                        {typeof row.compost === 'boolean' ? (
                          row.compost ? (
                            <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} />
                          ) : (
                            <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} />
                          )
                        ) : (
                          <span className="font-medium text-gray-700">{row.compost}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold neo-text text-white mb-6">
              {t.summary.title}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {t.summary.subtitle}
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/Contact';
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-xl font-bold text-lg text-gray-900 hover:shadow-2xl transition-all transform hover:scale-105"
            >
              {t.summary.button}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}