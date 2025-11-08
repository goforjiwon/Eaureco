
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplets, Recycle, Snowflake, CheckCircle, Sparkles } from "lucide-react";

export default function Solution() {
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
              Our Solution
            </h1>
          </div>
          <p className="text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
            Revolutionizing cold chain by transforming ocean waste
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
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Meet Eaureco</h2>
              </div>
              
              <h3 className="text-5xl font-bold neo-text text-gray-900 mb-6 leading-tight">
                Your sustainable cooling solution
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Leaf className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Organic Ice Pack</h4>
                    <p className="text-gray-600">100% biodegradable, both content and packaging</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Snowflake className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Better Thermal Properties</h4>
                    <p className="text-gray-600">Superior cooling performance that lasts longer</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Recycle className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">From Ocean Waste</h4>
                    <p className="text-gray-600">Made from sargassum seaweed collected from beaches</p>
                  </div>
                </div>
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
              Superior Performance
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Freezes Faster */}
              <div>
                <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                  Freezing Time
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">Water</span>
                      <span className="text-lg font-bold text-gray-900">1.0</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="h-full bg-gray-400 rounded-r-lg" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">SAP (Plastic)</span>
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
                  Stays Cool for Longer
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">Water</span>
                      <span className="text-lg font-bold text-gray-900">180 min</span>
                    </div>
                    <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                      <div className="h-full bg-gray-400 rounded-r-lg" style={{ width: '69%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">SAP (Plastic)</span>
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
              * Experiments conducted in laboratory conditions using 4% solution for SAP and eaureco
            </p>
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
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">From Waste to Wonder</h2>
              </div>
              
              <h3 className="text-4xl font-bold neo-text text-gray-900 mb-6">Millions of tons washed up, millions of wasted tax for disposal

              </h3>

              <p className="text-xl text-gray-600 mb-8">
                Sargassum seaweed is a massive environmental problem. It washes up on beaches 
                in enormous quantities, costing communities millions in cleanup and disposal. 
                We transform this waste into a valuable resource.
              </p>

              <div className="space-y-4">
                <div className="nav-glass rounded-xl shadow-md p-4 flex items-start gap-4 hover:shadow-lg transition-shadow">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <div>
                    <h4 className="font-bold mb-1">Free Raw Material</h4>
                    <p className="text-gray-600 text-sm">Collected from beaches at no cost</p>
                  </div>
                </div>

                <div className="nav-glass rounded-xl shadow-md p-4 flex items-start gap-4 hover:shadow-lg transition-shadow">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                  <div>
                    <h4 className="font-bold mb-1">Circular Economy</h4>
                    <p className="text-gray-600 text-sm">Creating value from what was once waste</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-3xl transform group-hover:scale-105 transition-transform"></div>
                <img
                  src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80"
                  alt="Beach cleanup"
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
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Why Choose Eaureco</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <span className="text-3xl">♻️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Biodegradable</h3>
              <p className="text-gray-600">
                100% biodegradable materials that break down naturally without harming the environment
              </p>
            </div>

            <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainable</h3>
              <p className="text-gray-600">
                Made from renewable ocean waste, helping clean up beaches while creating value
              </p>
            </div>

            <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-lime-400 to-lime-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cost-Efficient</h3>
              <p className="text-gray-600">
                Competitive pricing that doesn't compromise on performance or sustainability
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>);

}
