import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplets, Recycle, Snowflake, CheckCircle, Sparkles, TrendingUp, Trash2, Globe, TrendingDown } from "lucide-react";
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
        desc: "4x faster freezing means your ice packs are ready quicker. Process more orders and boost efficiency without extra freezer space."
      },
      disposal: {
        title: "Simple Disposal",
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
      },
      impact: {
        badge: "Environmental Impact",
        title: "The Power of Switching to Eaureco",
        subtitle: "By replacing just 50% of ice packs in North America",
        co2: "CO₂-equivalent/year",
        credit: "Carbon Credit",
        desc: "Join the movement towards a sustainable future",
        emissions: "Lower Cold-Chain Emissions",
        emissionsDesc: "vs. traditional LDPE/Water ice packs"
      },
      esg: {
        badge: "ESG COMPLIANCE",
        title: "Eaureco reduces your cooling emissions by more than half, with zero changes to your operations.",
        benefits: [
          "Made from advanced biodegradable bio-materials",
          "Breaks down naturally in <45 days",
          "No microplastics, no toxic residues",
          "Safe disposal options",
          "Supports Scope 3 reductions and corporate ESG metrics"
        ],
        quote: "Switching to Eaureco saves as much CO₂ as planting 3 trees, for every 1,000 deliveries.",
        subtitle: "Lower carbon. Lower cost. Zero operational trade-offs.",
        saved: "187 kg CO₂e",
        savedDesc: "Saved by 1,000 eaureco ice pack"
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
      },
      impact: {
        badge: "Impacto Ambiental",
        title: "El Poder de Cambiar a Eaureco",
        subtitle: "Al reemplazar solo el 50% de los paquetes de hielo en América del Norte",
        co2: "equivalente-CO₂/año",
        credit: "Crédito de Carbono",
        desc: "Únete al movimiento hacia un futuro sostenible",
        emissions: "Menores Emisiones de Cadena de Frío",
        emissionsDesc: "vs. paquetes de hielo tradicionales LDPE/Agua"
      },
      esg: {
        badge: "CUMPLIMIENTO ESG",
        title: "Eaureco reduce tus emisiones de enfriamiento en más de la mitad, sin cambios en tus operaciones.",
        benefits: [
          "Hecho de biomateriales biodegradables avanzados",
          "Se descompone naturalmente en <45 días",
          "Sin microplásticos, sin residuos tóxicos",
          "Opciones de eliminación seguras",
          "Apoya las reducciones de Alcance 3 y las métricas ESG corporativas"
        ],
        quote: "Cambiar a Eaureco ahorra tanto CO₂ como plantar 3 árboles, por cada 1,000 entregas.",
        subtitle: "Menor carbono. Menor costo. Cero compromisos operacionales.",
        saved: "187 kg CO₂e",
        savedDesc: "Ahorrado por 1,000 paquetes de hielo eaureco"
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

        {/* Product Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/fdcd6e7b3_KakaoTalk_20251116_233030585_09.png"
                  alt="eaureco ice pack"
                  className="w-full h-auto" />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/70751ff34_KakaoTalk_20251116_233030585_07.png"
                  alt="eaureco ice pack gel"
                  className="w-full h-auto" />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/c7bdeb15b_KakaoTalk_20251116_233030585_06.png"
                  alt="eaureco ice pack varieties"
                  className="w-full h-auto" />
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
          viewport={{ once: true }}
          className="mb-20">

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

        {/* Environmental Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>

          <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-400 px-6 py-2 rounded-full mb-8 shadow-md">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">{t.impact.badge}</h2>
          </div>

          <div 
            className="relative rounded-3xl shadow-2xl overflow-hidden"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1511497584788-876760111969?w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-green-900/85 to-teal-900/90"></div>
            
            <div className="relative z-10 p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold neo-text text-white mb-4">
                {t.impact.title}
              </h2>
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                {t.impact.subtitle}
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="text-6xl md:text-7xl font-bold neo-text text-white mb-2">2.54M</div>
                  <p className="text-xl font-semibold text-white/90 mb-1">tons</p>
                  <p className="text-base text-white/80">{t.impact.co2}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="text-5xl md:text-6xl font-bold neo-text text-lime-300 mb-3">US$ 12.7M</div>
                  <p className="text-xl font-semibold text-white/90">{t.impact.credit}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <TrendingDown className="w-12 h-12 text-lime-300 mx-auto mb-3" strokeWidth={2.5} />
                  <div className="text-6xl md:text-7xl font-bold neo-text text-white mb-2">63.4%</div>
                  <p className="text-xl font-semibold text-white/90 mb-1">{t.impact.emissions}</p>
                  <p className="text-sm text-white/80">{t.impact.emissionsDesc}</p>
                </div>
              </div>

              <p className="text-xl text-white/90 font-medium">
                {t.impact.desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ESG Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-6xl mx-auto">

          <div className="bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center p-12">
              {/* Left Content */}
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold neo-text mb-8 leading-tight">
                  {t.esg.title}
                </h2>

                <div className="space-y-3 mb-8">
                  {t.esg.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-lg font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/20 backdrop-blur rounded-2xl p-6 border border-white/30 mb-6">
                  <p className="text-2xl font-bold leading-relaxed">
                    "{t.esg.quote}"
                  </p>
                </div>

                <p className="text-lg font-semibold opacity-90">
                  {t.esg.subtitle}
                </p>
              </div>

              {/* Right Content - Trees Illustration */}
              <div className="relative">
                <div className="text-center mb-8">
                  <div className="inline-block bg-white/20 backdrop-blur rounded-2xl px-8 py-6 border border-white/30">
                    <div className="text-6xl font-bold neo-text text-white mb-2">
                      {t.esg.saved}
                    </div>
                    <p className="text-white font-semibold text-lg">
                      {t.esg.savedDesc}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center items-end gap-4">
                  <div className="text-8xl opacity-90">🌳</div>
                  <div className="text-8xl">🌳</div>
                  <div className="text-8xl opacity-90">🌳</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}