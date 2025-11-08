
import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Trash2, Skull, Droplets, Snowflake, TrendingDown, XCircle, DollarSign } from "lucide-react";

export default function Problem() {
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
              The Problem
            </h1>
          </div>
          <p className="text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
            The cold chain industry is stuck with unsustainable options
          </p>
        </motion.div>

        {/* The Scale of the Problem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl shadow-2xl p-12 text-center">
            <AlertTriangle className="w-16 h-16 text-white mx-auto mb-6" strokeWidth={2} />
            <div className="text-9xl font-bold neo-text text-white mb-4">1B</div>
            <p className="text-3xl font-bold text-white mb-2">
              Ice packs in circulation
            </p>
            <p className="text-xl text-white/90">
              In North America alone, every single year
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
            Today's Options
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Every existing solution has critical flaws
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* SAP Ice Packs */}
            <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 text-center border-b border-red-100">
                <Skull className="w-12 h-12 text-red-500 mx-auto mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900">SAP Ice Packs</h3>
                <p className="text-gray-600 text-sm mt-2">Plastic-based polymers</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-900 font-semibold">Good performance</span>
                  </div>
                  <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-900 font-semibold">Long lasting</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Toxic to nature</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Clogs sewage plants</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Ends up in landfills</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Takes 100+ years to decompose</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Water Ice Packs */}
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center border-b border-blue-100">
                <Droplets className="w-12 h-12 text-blue-500 mx-auto mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900">Water Packs</h3>
                <p className="text-gray-600 text-sm mt-2">100% water based</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-900 font-semibold">Eco-friendly</span>
                  </div>
                  <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-900 font-semibold">Safe disposal</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Much slower to freeze</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Poor retention time</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Can't meet cold chain standards</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Requires cutting and separating for disposal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Inefficient for businesses</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Eco Packs */}
            <div className="bg-white rounded-2xl shadow-xl border border-amber-100 overflow-hidden">
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 text-center border-b border-amber-100">
                <DollarSign className="w-12 h-12 text-amber-500 mx-auto mb-3" strokeWidth={2.5} />
                <h3 className="text-2xl font-bold text-gray-900">Other Eco-Gels</h3>
                <p className="text-gray-600 text-sm mt-2">Alternative solutions</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-900 font-semibold">Biodegradable</span>
                  </div>
                  <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-900 font-semibold">Sustainable materials</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Too expensive</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Don't last as long as SAP</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Requires cutting and separating for disposal</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Limited availability</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-700 font-medium">Hard to scale</span>
                  </div>
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
            The Environmental Cost
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
              <div className="text-6xl font-bold neo-text text-orange-500 mb-3">100+</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Years to Decompose</p>
              <p className="text-gray-600">SAP packs persist in landfills for generations</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
              <div className="text-6xl font-bold neo-text text-amber-500 mb-3">$M</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">In Cleanup Costs</p>
              <p className="text-gray-600">Municipal sewage damage and landfill management</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200">
              <div className="text-6xl font-bold neo-text text-gray-500 mb-3">∞</div>
              <p className="text-lg font-semibold text-gray-900 mb-2">Lasting Damage</p>
              <p className="text-gray-600">Microplastics and toxins contaminate ecosystems</p>
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
              The Industry is Stuck
            </h2>
            <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Companies must choose between environmental responsibility and operational efficiency
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-orange-200 mb-3">Choose Performance?</h3>
                <p className="text-white/80">Harm the environment with plastic SAP packs</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-blue-200 mb-3">Choose Sustainability?</h3>
                <p className="text-white/80">Sacrifice efficiency and increase costs</p>
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
              But What If You Didn't Have to Choose?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover how eaureco delivers superior performance, sustainability, and affordability — all in one solution.
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/Solution';
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-xl font-bold text-lg text-gray-900 hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Discover Our Solution →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
