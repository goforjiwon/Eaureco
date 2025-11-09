
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplets, Recycle, Snowflake, CheckCircle, Sparkles, TrendingUp, Trash2 } from "lucide-react";
import { useLanguage } from "../Layout";

export default function Solution() {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      header: {
        title: "Our Solution",
        subtitle: "Revolutionizing cold chain by transforming ocean waste"
      },
      hero: {
        badge: "Meet Eaureco",
        title: "Your sustainable cooling solution",
        features: [
          { title: "Organic Ice Pack", desc: "100% biodegradable, both content and packaging" },
          { title: "Better Thermal Properties", desc: "Superior cooling performance that lasts longer" },
          { title: "From Ocean Waste", desc: "Made from sargassum seaweed collected from beaches" }
        ]
      },
      performance: {
        title: "Superior Performance",
        freezing: "Freezing Time",
        retention: "Stays Cool for Longer",
        water: "Water",
        sap: "SAP (Plastic)",
        note: "* Experiments conducted in laboratory conditions using 4% solution for SAP and eaureco"
      },
      turnover: {
        title: "Higher Turnover Rate",
        // The original text had specific words bolded with <span> tags.
        // For accurate translation and styling, these would ideally be structured differently
        // (e.g., separate keys for bolded parts or using a rich text component).
        // Adhering strictly to the provided outline, the desc string here
        // does not contain those <span> tags.
        desc: "4x faster freezing means your ice packs are ready quicker. Process more orders and boost efficiency without extra freezer space."
      },
      disposal: {
        title: "Simple Disposal",
        // Same note as turnover.desc regarding <span> tags.
        desc: "100% biodegradable from gel to outer package — no cutting, no separating. Just toss it away and let nature do the rest."
      },
      sargassum: {
        badge: "From Waste to Wonder",
        title: "Millions of tons washed up, millions of wasted tax for disposal",
        desc: "Sargassum seaweed is a massive environmental problem. It washes up on beaches in enormous quantities, costing communities millions in cleanup and disposal. We transform this waste into a valuable resource."
      },
      benefits: {
        badge: "Why Choose Eaureco",
        biodegradable: "Biodegradable",
        biodegradableDesc: "100% biodegradable materials that break down naturally without harming the environment",
        sustainable: "Sustainable",
        sustainableDesc: "Made from renewable ocean waste, helping clean up beaches while creating value",
        costEfficient: "Cost-Efficient",
        costEfficientDesc: "Competitive pricing that doesn't compromise on performance or sustainability"
      }
    },
    es: {
      header: {
        title: "Nuestra Solución",
        subtitle: "Revolucionando la cadena de frío transformando residuos oceánicos"
      },
      hero: {
        badge: "Conoce Eaureco",
        title: "Tu solución de enfriamiento sostenible",
        features: [
          { title: "Paquete de Hielo Orgánico", desc: "100% biodegradable, tanto contenido como empaque" },
          { title: "Mejores Propiedades Térmicas", desc: "Rendimiento de enfriamiento superior que dura más" },
          { title: "De Residuos Oceánicos", desc: "Hecho de algas sargazo recolectadas de las playas" }
        ]
      },
      performance: {
        title: "Rendimiento Superior",
        freezing: "Tiempo de Congelación",
        retention: "Se Mantiene Frío por Más Tiempo",
        water: "Agua",
        sap: "SAP (Plástico)",
        note: "* Experimentos realizados en condiciones de laboratorio usando solución al 4% para SAP y eaureco"
      },
      turnover: {
        title: "Mayor Tasa de Rotación",
        desc: "La congelación 4 veces más rápida significa que tus paquetes de hielo están listos más rápido. Procesa más pedidos y aumenta la eficiencia sin espacio adicional en el congelador."
      },
      disposal: {
        title: "Eliminación Simple",
        desc: "100% biodegradable desde el gel hasta el paquete exterior — sin cortar, sin separar. Solo deséchalo y deja que la naturaleza haga el resto."
      },
      sargassum: {
        badge: "De Residuo a Maravilla",
        title: "Millones de toneladas arrastradas, millones de impuestos desperdiciados en eliminación",
        desc: "Las algas sargazo son un problema ambiental masivo. Llegan a las playas en cantidades enormes, costando a las comunidades millones en limpieza y eliminación. Transformamos estos residuos en un recurso valioso."
      },
      benefits: {
        badge: "Por Qué Elegir Eaureco",
        biodegradable: "Biodegradable",
        biodegradableDesc: "Materiales 100% biodegradables que se descomponen naturalmente sin dañar el medio ambiente",
        sustainable: "Sostenible",
        sustainableDesc: "Hecho de residuos oceánicos renovables, ayudando a limpiar las playas mientras se crea valor",
        costEfficient: "Costo-Eficiente",
        costEfficientDesc: "Precios competitivos que no comprometen el rendimiento ni la sostenibilidad"
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
          className="text-center mb-16">

          <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 rounded-full mb-6 shadow-lg">
            <h1 className="text-5xl md:text-6xl font-bold neo-text text-white">
              {t.header.title}
            </h1>
          </div>
          <p className="text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
            {t.header.subtitle}
          </p>
        </motion.div>

        {/* Hero Product Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20">

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-gradient-to-r from-lime-400 to-emerald-400 px-6 py-2 rounded-full mb-6 shadow-md">
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{t.hero.badge}</h2>
              </div>
              
              <h3 className="text-5xl font-bold neo-text text-gray-900 mb-6 leading-tight">
                {t.hero.title}
              </h3>

              <div className="space-y-4 mb-8">
                {t.hero.features.map((feature, idx) => {
                  const icons = [Leaf, Snowflake, Recycle];
                  const colors = ['emerald', 'cyan', 'teal'];
                  const Icon = icons[idx];
                  const color = colors[idx];
                  
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className={`w-10 h-10 bg-gradient-to-br from-${color}-400 to-${color}-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{feature.title}</h4>
                        <p className="text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 rounded-3xl blur-2xl opacity-60"></div>
                <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-2xl">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/37847a2b9_image.png"
                    alt="eaureco ice pack - Stay cool, Stay green"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" />

                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20">

          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <h2 className="text-4xl font-bold neo-text text-gray-900 mb-8 text-center">
              {t.performance.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Freezes Faster */}
              <div>
                <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                  {t.performance.freezing}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">{t.performance.water}</span>
                      <span className="text-lg font-bold text-gray-900">1.0</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="h-full bg-gray-400 rounded-r-lg" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">{t.performance.sap}</span>
                      <span className="text-lg font-bold text-gray-900">0.76</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="h-full bg-gray-400 rounded-r-lg" style={{ width: '76%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-emerald-600">eaureco</span>
                      <span className="text-lg font-bold text-emerald-600">0.25</span>
                    </div>
                    <div className="h-8 bg-emerald-100 rounded-lg overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-r-lg shadow-inner" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stays Cool Longer */}
              <div>
                <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-6">
                  {t.performance.retention}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">{t.performance.water}</span>
                      <span className="text-lg font-bold text-gray-900">180 min</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="h-full bg-gray-400 rounded-r-lg" style={{ width: '69%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">{t.performance.sap}</span>
                      <span className="text-lg font-bold text-gray-900">220 min</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="h-full bg-gray-400 rounded-r-lg" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-cyan-600">eaureco</span>
                      <span className="text-lg font-bold text-cyan-600">260 min</span>
                    </div>
                    <div className="h-8 bg-cyan-100 rounded-lg overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-r-lg shadow-inner" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center mt-6">
              {t.performance.note}
            </p>
          </div>
        </motion.div>

        {/* Business Benefit - Higher Turnover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20">

          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl shadow-2xl p-10 border border-indigo-100">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl font-bold neo-text text-gray-900 mb-4">
                {t.turnover.title}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                {/* Note: The original had span tags for bolding. Following the outline,
                    the translation strings do not contain them, so bolding is lost here. */}
                {t.turnover.desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Easy Disposal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20">

          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl shadow-2xl p-10 border border-emerald-100">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Trash2 className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl font-bold neo-text text-gray-900 mb-4">
                {t.disposal.title}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                 {/* Note: The original had span tags for bolding. Following the outline,
                    the translation strings do not contain them, so bolding is lost here. */}
                {t.disposal.desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Sargassum Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20">

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-gradient-to-r from-teal-400 to-cyan-400 px-6 py-2 rounded-full mb-6 shadow-md">
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">{t.sargassum.badge}</h2>
              </div>
              
              <h3 className="text-4xl font-bold neo-text text-gray-900 mb-6">
                {t.sargassum.title}
              </h3>

              <p className="text-xl text-gray-600 mb-8">
                {t.sargassum.desc}
              </p>
            </div>

            <div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-3xl transform group-hover:scale-105 transition-transform"></div>
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/51931e2c4_image.png"
                  alt="Sargassum seaweed on beach"
                  className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl" />

              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>

          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-2 rounded-full mb-8 shadow-md">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider">{t.benefits.badge}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <span className="text-3xl">♻️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t.benefits.biodegradable}</h3>
              <p className="text-gray-600">
                {t.benefits.biodegradableDesc}
              </p>
            </div>

            <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t.benefits.sustainable}</h3>
              <p className="text-gray-600">
                {t.benefits.sustainableDesc}
              </p>
            </div>

            <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{t.benefits.costEfficient}</h3>
              <p className="text-gray-600">
                {t.benefits.costEfficientDesc}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
