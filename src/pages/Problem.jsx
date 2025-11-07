import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Trash2, TrendingUp } from "lucide-react";

export default function Problem() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-red-400 border-4 border-black px-8 py-4 transform -rotate-1 neo-shadow mb-6">
            <h1 className="text-5xl md:text-7xl font-bold neo-text text-black">
              THE PROBLEM
            </h1>
          </div>
          <p className="text-2xl font-semibold text-gray-800 max-w-3xl mx-auto">
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
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-4 border-black p-12 transform rotate-1 neo-shadow">
            <div className="text-center">
              <div className="inline-flex items-center gap-4 mb-6">
                <AlertTriangle className="w-16 h-16 text-red-600" strokeWidth={3} />
                <h2 className="text-6xl md:text-8xl font-bold neo-text text-red-600">BAD</h2>
              </div>
              <p className="text-3xl md:text-5xl font-bold neo-text text-gray-900 mb-4">
                SAP ICE PACKS = BAD
              </p>
              <p className="text-xl text-gray-700 font-medium">
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
            <div className="nav-glass border-4 border-black p-10 h-full">
              <Trash2 className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={3} />
              <h3 className="text-7xl font-bold neo-text text-emerald-600 mb-4">1B</h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">Ice packs in circulation</p>
              <p className="text-lg text-gray-700 font-medium">
                Every year, 1 billion ice packs are used globally
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="nav-glass border-4 border-black p-10 h-full bg-gradient-to-br from-red-50 to-orange-50">
              <AlertTriangle className="w-12 h-12 text-red-600 mb-4" strokeWidth={3} />
              <h3 className="text-4xl font-bold neo-text text-red-600 mb-4">MOST END UP IN</h3>
              <p className="text-6xl font-bold neo-text text-gray-900 mb-2">LANDFILLS</p>
              <p className="text-lg text-gray-700 font-medium">
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
          <div className="bg-white border-4 border-black p-10 transform -rotate-1 neo-shadow">
            <div className="flex items-center gap-4 mb-8">
              <TrendingUp className="w-12 h-12 text-cyan-600" strokeWidth={3} />
              <h2 className="text-4xl font-bold neo-text text-gray-900">
                DEMAND IS GROWING
              </h2>
            </div>
            <p className="text-xl text-gray-700 font-semibold mb-6">
              Online food delivery is exploding, creating unprecedented demand for ice packs
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-cyan-100 to-teal-100 border-3 border-black p-6">
                <p className="text-sm font-bold text-gray-700 mb-2">2020</p>
                <p className="text-3xl font-bold neo-text text-cyan-700">$150B</p>
                <p className="text-sm text-gray-600 mt-1">US Food Delivery Market</p>
              </div>
              <div className="bg-gradient-to-br from-teal-100 to-emerald-100 border-3 border-black p-6">
                <p className="text-sm font-bold text-gray-700 mb-2">2025</p>
                <p className="text-3xl font-bold neo-text text-teal-700">$430B</p>
                <p className="text-sm text-gray-600 mt-1">Projected Growth</p>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-lime-100 border-3 border-black p-6">
                <p className="text-sm font-bold text-gray-700 mb-2">2030</p>
                <p className="text-3xl font-bold neo-text text-emerald-700">$602B</p>
                <p className="text-sm text-gray-600 mt-1">Future Demand</p>
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
          <div className="inline-block bg-yellow-400 border-4 border-black px-6 py-3 mb-8 transform rotate-1">
            <h2 className="text-2xl font-bold neo-text text-black">KEY ISSUES</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="nav-glass border-4 border-black p-8 transform rotate-1">
              <div className="w-16 h-16 bg-red-400 border-3 border-black flex items-center justify-center mb-6">
                <span className="text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Plastic Pollution</h3>
              <p className="text-gray-700 font-medium">
                SAP ice packs contain plastic polymers that contribute to environmental pollution
              </p>
            </div>

            <div className="nav-glass border-4 border-black p-8 transform -rotate-1">
              <div className="w-16 h-16 bg-orange-400 border-3 border-black flex items-center justify-center mb-6">
                <span className="text-3xl">⏳</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Non-Biodegradable</h3>
              <p className="text-gray-700 font-medium">
                Traditional ice packs take centuries to break down in landfills
              </p>
            </div>

            <div className="nav-glass border-4 border-black p-8 transform rotate-1">
              <div className="w-16 h-16 bg-yellow-400 border-3 border-black flex items-center justify-center mb-6">
                <span className="text-3xl">🌊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ocean Impact</h3>
              <p className="text-gray-700 font-medium">
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
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 border-4 border-black p-12 transform -rotate-1 neo-shadow">
            <h2 className="text-4xl md:text-5xl font-bold neo-text text-white mb-6">
              IT'S TIME FOR A BETTER SOLUTION
            </h2>
            <p className="text-xl text-white font-semibold mb-8 max-w-2xl mx-auto">
              We need sustainable alternatives that perform better without harming the planet
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/Solution';
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-lime-400 border-4 border-black font-bold text-lg neo-text hover:bg-lime-300 transition-all transform hover:translate-y-[-4px] shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_rgba(0,0,0,1)]"
            >
              DISCOVER OUR SOLUTION →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}