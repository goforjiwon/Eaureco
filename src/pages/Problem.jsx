
import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Trash2, Skull, Droplets, Snowflake, TrendingDown, XCircle, DollarSign } from "lucide-react";
import { useLanguage } from "../Layout";

export default function Problem() {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      header: {
        title: "The Problem",
        subtitle: "The cold chain industry is stuck with unsustainable options"
      },
      scale: {
        number: "1 Billion per year",
        title: "Ice packs in circulation",
        subtitle: "In North America alone"
      },
      options: {
        title: "Today's Options",
        subtitle: "Every existing solution has critical flaws",
        sap: {
          title: "SAP Ice Packs",
          subtitle: "Super Absorbent Polymer - Plastic-based polymers",
          pros: ["Good performance", "Long lasting"],
          cons: ["Toxic to nature", "Clogs sewage plants", "Ends up in landfills", "Takes 100+ years to decompose"]
        },
        water: {
          title: "Water Packs",
          subtitle: "100% water based",
          pros: ["Eco-friendly", "Safe disposal"],
          cons: ["Much slower to freeze", "Poor retention time", "Can't meet cold chain standards", "Requires cutting and separating for disposal", "Inefficient for businesses"]
        },
        eco: {
          title: "Other Eco-Gels",
          subtitle: "Alternative solutions",
          pros: ["Biodegradable", "Sustainable materials"],
          cons: ["Too expensive", "Don't last as long as SAP", "Requires cutting and separating for disposal", "Limited availability", "Hard to scale"]
        }
      },
      impact: {
        title: "The Environmental Cost",
        years: "Years to Decompose",
        yearsDesc: "SAP packs persist in landfills for generations",
        costs: "In Cleanup Costs",
        costsDesc: "Municipal sewage damage and landfill management",
        damage: "Lasting Damage",
        damageDesc: "Microplastics and toxins contaminate ecosystems"
      },
      stuck: {
        title: "The Industry is Stuck",
        subtitle: "Companies must choose between environmental responsibility and operational efficiency",
        performance: "Choose Performance?",
        performanceDesc: "Harm the environment with plastic SAP packs",
        sustainability: "Choose Sustainability?",
        sustainabilityDesc: "Sacrifice efficiency and increase costs"
      },
      cta: {
        title: "But What If You Didn't Have to Choose?",
        subtitle: "Discover how eaureco delivers superior performance, sustainability, and affordability — all in one solution.",
        button: "Discover Our Solution →"
      }
    },
    es: {
      header: {
        title: "El Problema",
        subtitle: "La industria de la cadena de frío está atrapada con opciones insostenibles"
      },
      scale: {
        number: "1 Billón por año",
        title: "Paquetes de hielo en circulación",
        subtitle: "Solo en América del Norte"
      },
      options: {
        title: "Opciones Actuales",
        subtitle: "Cada solución existente tiene fallas críticas",
        sap: {
          title: "Paquetes SAP",
          subtitle: "Polímero Superabsorbente - Polímeros a base de plástico",
          pros: ["Buen rendimiento", "Larga duración"],
          cons: ["Tóxico para la naturaleza", "Obstruye plantas de aguas residuales", "Termina en vertederos", "Tarda más de 100 años en descomponerse"]
        },
        water: {
          title: "Paquetes de Agua",
          subtitle: "100% a base de agua",
          pros: ["Ecológico", "Eliminación segura"],
          cons: ["Mucho más lento para congelar", "Bajo tiempo de retención", "No cumple con estándares de cadena de frío", "Requiere cortar y separar para eliminar", "Ineficiente para empresas"]
        },
        eco: {
          title: "Otros Eco-Geles",
          subtitle: "Soluciones alternativas",
          pros: ["Biodegradable", "Materiales sostenibles"],
          cons: ["Demasiado caro", "No duran tanto como SAP", "Requiere cortar y separar para eliminar", "Disponibilidad limitada", "Difícil de escalar"]
        }
      },
      impact: {
        title: "El Costo Ambiental",
        years: "Años para Descomponerse",
        yearsDesc: "Los paquetes SAP persisten en vertederos por generaciones",
        costs: "En Costos de Limpieza",
        costsDesc: "Daño a sistemas de aguas residuales municipales y gestión de vertederos",
        damage: "Daño Permanente",
        damageDesc: "Microplásticos y toxinas contaminan ecosistemas"
      },
      stuck: {
        title: "La Industria Está Atrapada",
        subtitle: "Las empresas deben elegir entre responsabilidad ambiental y eficiencia operativa",
        performance: "¿Elegir Rendimiento?",
        performanceDesc: "Dañar el medio ambiente con paquetes SAP de plástico",
        sustainability: "¿Elegir Sostenibilidad?",
        sustainabilityDesc: "Sacrificar eficiencia y aumentar costos"
      },
      cta: {
        title: "¿Pero Qué Tal Si No Tuvieras Que Elegir?",
        subtitle: "Descubre cómo eaureco ofrece rendimiento superior, sostenibilidad y asequibilidad — todo en una solución.",
        button: "Descubre Nuestra Solución →"
      }
    }
  };

  const t = translations[language];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-orange-400 to-red-400 px-8 py-3 rounded-full mb-6 shadow-lg">
            <h1 className="text-5xl md:text-6xl font-bold neo-text text-white">
              {t.header.title}
            </h1>
          </div>
          <p className="text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
            {t.header.subtitle}
          </p>
        </motion.div>

        {/* The Scale of the Problem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl shadow-2xl p-12 text-center border border-orange-200">
            <AlertTriangle className="w-16 h-16 text-orange-600 mx-auto mb-6" strokeWidth={2} />
            <div className="text-7xl font-bold neo-text text-gray-900 mb-4">{t.scale.number}</div>
            <p className="text-3xl font-bold text-gray-900 mb-2">
              {t.scale.title}
            </p>
            <p className="text-xl text-gray-700">
              {t.scale.subtitle}
            </p>
          </div>
        </motion.div>

        {/* Current Options Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold neo-text text-center mb-4 text-gray-900">
            {t.options.title}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.options.subtitle}
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* SAP Ice Packs */}
            <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden h-full flex flex-col">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 text-center border-b border-red-100 h-[200px] flex flex-col justify-center">
                <Skull className="w-12 h-12 text-red-500 mx-auto mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900">{t.options.sap.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{t.options.sap.subtitle}</p>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 mb-6">
                  {t.options.sap.pros.map((pro, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-900 font-semibold">{pro}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-6 space-y-3">
                  {t.options.sap.cons.map((con, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-gray-700 font-medium">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Water Ice Packs */}
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden h-full flex flex-col">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center border-b border-blue-100 h-[200px] flex flex-col justify-center">
                <Droplets className="w-12 h-12 text-blue-500 mx-auto mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900">{t.options.water.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{t.options.water.subtitle}</p>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 mb-6">
                  {t.options.water.pros.map((pro, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-900 font-semibold">{pro}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-6 space-y-3">
                  {t.options.water.cons.map((con, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-gray-700 font-medium">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Eco Packs */}
            <div className="bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden h-full flex flex-col">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 text-center border-b border-amber-100 h-[200px] flex flex-col justify-center">
                <DollarSign className="w-12 h-12 text-amber-500 mx-auto mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900">{t.options.eco.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{t.options.eco.subtitle}</p>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 mb-6">
                  {t.options.eco.pros.map((pro, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-900 font-semibold">{pro}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-6 space-y-3">
                  {t.options.eco.cons.map((con, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-gray-700 font-medium">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold neo-text text-center mb-12 text-gray-900">
            {t.impact.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
              <div className="text-6xl font-bold neo-text text-orange-500 mb-3">100+</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">{t.impact.years}</p>
              <p className="text-gray-600">{t.impact.yearsDesc}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
              <div className="text-6xl font-bold neo-text text-amber-500 mb-3">$M</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">{t.impact.costs}</p>
              <p className="text-gray-600">{t.impact.costsDesc}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
              <div className="text-6xl font-bold neo-text text-gray-500 mb-3">∞</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">{t.impact.damage}</p>
              <p className="text-gray-600">{t.impact.damageDesc}</p>
            </div>
          </div>
        </motion.div>

        {/* The Impossible Choice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl shadow-2xl p-12 text-center">
            <TrendingDown className="w-16 h-16 text-orange-300 mx-auto mb-6" strokeWidth={2} />
            <h2 className="text-4xl md:text-5xl font-bold neo-text text-white mb-6">
              {t.stuck.title}
            </h2>
            <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.stuck.subtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-orange-200 mb-3">{t.stuck.performance}</h3>
                <p className="text-white/80">{t.stuck.performanceDesc}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-blue-200 mb-3">{t.stuck.sustainability}</h3>
                <p className="text-white/80">{t.stuck.sustainabilityDesc}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold neo-text text-white mb-6">
              {t.cta.title}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t.cta.subtitle}
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/Solution';
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-xl font-bold text-lg text-gray-900 hover:shadow-2xl transition-all transform hover:scale-105"
            >
              {t.cta.button}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
