import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplets, Recycle, Snowflake, CheckCircle, Sparkles, TrendingUp, Trash2, Globe, TrendingDown } from "lucide-react";
import { useLanguage } from "../Layout";
import { getT } from "@/i18n/translations";

export default function Solution() {
  const { language } = useLanguage();
  const t = getT(language).solution;

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        














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
                    </div>);

                })}
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 rounded-3xl blur-2xl opacity-60"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/a4014366f_KakaoTalk_20260208_211839501.jpg"
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
            <div>
              <div className="relative group h-80 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/9b61b3b66_KakaoTalk_20260208_211707818_01.jpg"
                    alt="eaureco ice pack small"
                    className="w-full h-auto" />
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold neo-text text-gray-900 mb-2">{t.sizes.small.name}</h3>
                <p className="text-3xl font-bold text-teal-600 mb-3">{t.sizes.small.weight}</p>
                <p className="text-sm text-gray-600 leading-relaxed mx-auto">{t.sizes.small.desc}</p>
              </div>
            </div>
            <div>
              <div className="relative group h-80 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/740f67239_KakaoTalk_20260208_211707818_02.jpg"
                    alt="eaureco ice pack medium"
                    className="w-full h-auto" />
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold neo-text text-gray-900 mb-2">{t.sizes.medium.name}</h3>
                <p className="text-3xl font-bold text-cyan-600 mb-3">{t.sizes.medium.weight}</p>
                <p className="text-sm text-gray-600 leading-relaxed mx-auto">{t.sizes.medium.desc}</p>
              </div>
            </div>
            <div>
              <div className="relative group h-80 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/148b2f9b8_KakaoTalk_20260208_211707818_03.jpg"
                    alt="eaureco ice pack large"
                    className="w-full h-auto" />
                </div>
              </div>
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold neo-text text-gray-900 mb-2">{t.sizes.large.name}</h3>
                <p className="text-3xl font-bold text-emerald-600 mb-3">{t.sizes.large.weight}</p>
                <p className="text-sm text-gray-600 leading-relaxed mx-auto">{t.sizes.large.desc}</p>
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



        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20">

          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-2 rounded-full mb-8 shadow-md">
            <h2 className="text-lg font-bold text-gray-900 tracking-wider">{t.benefits.badge}</h2>
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
              <h2 className="text-4xl md:text-5xl font-bold neo-text text-white mb-4">Eaureco effect

              </h2>

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
                <h2 className="text-2xl md:text-3xl font-bold neo-text mb-8 leading-normal">
                  {t.esg.title}
                </h2>

                <div className="space-y-3 mb-8">
                  {t.esg.benefits.map((benefit, idx) =>
                  <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-lg font-medium">{benefit}</span>
                    </div>
                  )}
                </div>

                <div className="bg-white/20 backdrop-blur rounded-2xl p-6 border border-white/30 mb-6">
                  <p className="text-xl md:text-2xl font-bold leading-relaxed">
                    "{t.esg.quote}"
                  </p>
                </div>

                <p className="text-base md:text-lg font-semibold opacity-90">
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
    </div>);

}