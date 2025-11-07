import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Trash2, TrendingUp } from "lucide-react";

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
            Traditional ice packs are creating an environmental crisis
          </p>
        </motion.div>

        {/* Main Problem Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl shadow-2xl p-12 border border-red-100">
            <div className="text-center">
              <div className="inline-flex items-center gap-4 mb-6">
                <AlertTriangle className="w-16 h-16 text-red-600" strokeWidth={2} />
                <h2 className="text-6xl md:text-7xl font-bold neo-text text-red-600">Bad</h2>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                SAP Ice Packs = Bad
              </p>
              <p className="text-xl text-gray-600">
                Super Absorbent Polymer (SAP) ice packs are made from plastic-based materials
              </p>
            </div>
          </div>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="nav-glass rounded-2xl shadow-xl p-10 h-full hover:shadow-2xl transition-shadow">
              <Trash2 className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={2} />
              <h3 className="text-7xl font-bold neo-text bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">1B</h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">Ice packs in circulation</p>
              <p className="text-lg text-gray-600">
                Every year, 1 billion ice packs are used globally
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="nav-glass rounded-2xl shadow-xl p-10 h-full bg-gradient-to-br from-red-50 to-orange-50 hover:shadow-2xl transition-shadow">
              <AlertTriangle className="w-12 h-12 text-red-600 mb-4" strokeWidth={2} />
              <h3 className="text-3xl font-bold text-red-600 mb-4">Most end up in</h3>
              <p className="text-6xl font-bold neo-text text-gray-900 mb-2">Landfills</p>
              <p className="text-lg text-gray-600">
                These plastic-based packs take hundreds of years to decompose
              </p>
            </div>
          </motion.div>
        </div>

        {/* Growing Demand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <TrendingUp className="w-12 h-12 text-cyan-600" strokeWidth={2} />
              <h2 className="text-4xl font-bold neo-text text-gray-900">
                Demand is Growing
              </h2>
            </div>
            <p className="text-xl text-gray-700 mb-8">
              Online food delivery is exploding, creating unprecedented demand for ice packs
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl shadow-md p-6 border border-cyan-100">
                <p className="text-sm font-semibold text-gray-600 mb-2">2020</p>
                <p className="text-4xl font-bold neo-text text-cyan-700">$150B</p>
                <p className="text-sm text-gray-600 mt-2">US Food Delivery Market</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl shadow-md p-6 border border-teal-100">
                <p className="text-sm font-semibold text-gray-600 mb-2">2025</p>
                <p className="text-4xl font-bold neo-text text-teal-700">$430B</p>
                <p className="text-sm text-gray-600 mt-2">Projected Growth</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-xl shadow-md p-6 border border-emerald-100">
                <p className="text-sm font-semibold text-gray-600 mb-2">2030</p>
                <p className="text-4xl font-bold neo-text text-emerald-700">$602B</p>
                <p className="text-sm text-gray-600 mt-2">Future Demand</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Issues */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-2 rounded-full mb-8 shadow-md">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Key Issues</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-red-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <span className="text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Plastic Pollution</h3>
              <p className="text-gray-600">
                SAP ice packs contain plastic polymers that contribute to environmental pollution
              </p>
            </div>

            <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <span className="text-3xl">⏳</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Non-Biodegradable</h3>
              <p className="text-gray-600">
                Traditional ice packs take centuries to break down in landfills
              </p>
            </div>

            <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <span className="text-3xl">🌊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ocean Impact</h3>
              <p className="text-gray-600">
                Improper disposal leads to plastic waste entering our oceans and waterways
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold neo-text text-white mb-6">
              It's Time for a Better Solution
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We need sustainable alternatives that perform better without harming the planet
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