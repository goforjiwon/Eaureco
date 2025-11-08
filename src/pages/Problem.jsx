import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Trash2, Skull, Droplets, Snowflake, TrendingDown } from "lucide-react";

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
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 px-8 py-3 rounded-full mb-6 shadow-lg">
            <h1 className="text-5xl md:text-6xl font-bold neo-text text-white">
              The Problem
            </h1>
          </div>
          <p className="text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
            SAP ice packs are destroying our environment
          </p>
        </motion.div>

        {/* Main Problem Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl shadow-2xl p-12 border-2 border-red-200">
            <div className="text-center">
              <div className="inline-flex items-center gap-4 mb-6">
                <AlertTriangle className="w-20 h-20 text-red-600" strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold neo-text text-gray-900 mb-6">
                Super Absorbent Polymer (SAP) Ice Packs
              </h2>
              <p className="text-2xl font-bold text-red-600 mb-4">
                Made from plastic-based materials that are harming our planet
              </p>
              <div className="bg-white rounded-2xl shadow-xl p-8 mt-8 max-w-2xl mx-auto">
                <div className="text-8xl font-bold neo-text bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
                  1 Billion
                </div>
                <p className="text-xl font-semibold text-gray-900">
                  SAP ice packs in circulation in North America alone
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Environmental Issues Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="inline-block bg-gradient-to-r from-red-400 to-orange-400 px-6 py-2 rounded-full mb-8 shadow-md">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">Environmental Hazards</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Toxic to Nature */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-red-100 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Skull className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Toxic to Nature</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                SAP contains harmful chemicals that leach into soil and water systems. 
                When disposed of improperly, these toxins contaminate ecosystems and harm wildlife.
              </p>
            </div>

            {/* Blocks Sewage Treatment */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-100 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Droplets className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Clogs Treatment Plants</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                When SAP gel is flushed down drains, it expands and blocks sewage treatment plants, 
                causing expensive damage to municipal water systems and infrastructure.
              </p>
            </div>

            {/* Poor Performance */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-yellow-100 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Snowflake className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Slow Freezing</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                SAP ice packs take significantly longer to freeze compared to alternatives, 
                wasting energy and reducing operational efficiency for businesses.
              </p>
            </div>

            {/* Landfill Crisis */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Trash2 className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Landfill Crisis</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Most SAP ice packs end up in landfills where they take hundreds of years to decompose, 
                releasing microplastics and pollutants into the environment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Cycle of Waste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-12 text-center">
            <TrendingDown className="w-20 h-20 text-red-400 mx-auto mb-6" strokeWidth={2} />
            <h2 className="text-4xl md:text-5xl font-bold neo-text text-white mb-6">
              The Vicious Cycle
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Every day, millions of SAP ice packs are used once and discarded. They pile up in landfills, 
              leach toxins into our water supply, clog our sewage systems, and persist in the environment 
              for generations. This is not sustainable.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <p className="text-5xl font-bold text-red-400 mb-2">100+</p>
                <p className="text-white font-semibold">Years to Decompose</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <p className="text-5xl font-bold text-orange-400 mb-2">1B</p>
                <p className="text-white font-semibold">Used Annually</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <p className="text-5xl font-bold text-yellow-400 mb-2">$M</p>
                <p className="text-white font-semibold">In Cleanup Costs</p>
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
              There's a Better Way
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We don't have to sacrifice performance for sustainability. 
              Discover how eaureco is revolutionizing ice packs with a solution that's better for business and the planet.
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