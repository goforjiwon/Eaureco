import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplets, Recycle, Snowflake, CheckCircle, Sparkles } from "lucide-react";

export default function Solution() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-emerald-400 border-4 border-black px-8 py-4 transform rotate-1 neo-shadow mb-6">
            <h1 className="text-5xl md:text-7xl font-bold neo-text text-black">
              OUR SOLUTION
            </h1>
          </div>
          <p className="text-2xl font-semibold text-gray-800 max-w-3xl mx-auto">
            Revolutionizing cold chain by transforming ocean waste
          </p>
        </motion.div>

        {/* Hero Product Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-lime-400 border-4 border-black px-6 py-3 mb-6 transform -rotate-1">
                <h2 className="text-xl font-bold neo-text text-black">MEET EAURECO</h2>
              </div>
              
              <h3 className="text-5xl font-bold neo-text text-gray-900 mb-6 leading-tight">
                Your sustainable cooling solution
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-400 border-3 border-black flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-black" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Organic Ice Pack</h4>
                    <p className="text-gray-700">100% biodegradable, both content and packaging</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-cyan-400 border-3 border-black flex items-center justify-center flex-shrink-0">
                    <Snowflake className="w-6 h-6 text-black" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Better Thermal Properties</h4>
                    <p className="text-gray-700">Superior cooling performance that lasts longer</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-teal-400 border-3 border-black flex items-center justify-center flex-shrink-0">
                    <Recycle className="w-6 h-6 text-black" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">From Ocean Waste</h4>
                    <p className="text-gray-700">Made from sargassum seaweed collected from beaches</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-emerald-400 to-lime-400 border-4 border-black p-4 transform rotate-2 neo-shadow">
                <div className="bg-emerald-500 border-3 border-black p-8 md:p-12 text-center">
                  <div className="bg-lime-400 border-4 border-black p-6 md:p-8 inline-block transform -rotate-3 mb-4">
                    <Sparkles className="w-16 h-16 md:w-24 md:h-24 text-black" strokeWidth={3} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold neo-text text-white mb-4">
                    eaureco
                  </h3>
                  <p className="text-xl font-bold text-white">Stay cool, Stay green.</p>
                  <div className="mt-6 flex justify-center">
                    <Droplets className="w-12 h-12 text-white/50" strokeWidth={2} />
                  </div>
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
          className="mb-20"
        >
          <div className="bg-white border-4 border-black p-10 transform -rotate-1 neo-shadow">
            <h2 className="text-4xl font-bold neo-text text-gray-900 mb-8 text-center">
              SUPERIOR PERFORMANCE
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Freezes Faster */}
              <div>
                <h3 className="text-2xl font-bold neo-text text-emerald-600 mb-6">
                  FREEZES FASTER
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Water</span>
                      <span className="text-lg font-bold">0.025</span>
                    </div>
                    <div className="h-8 bg-gray-200 border-3 border-black">
                      <div className="h-full bg-gray-400 border-r-3 border-black" style={{ width: '25%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">SAP (Plastic)</span>
                      <span className="text-lg font-bold">0.033</span>
                    </div>
                    <div className="h-8 bg-gray-200 border-3 border-black">
                      <div className="h-full bg-gray-400 border-r-3 border-black" style={{ width: '33%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-emerald-600">eaureco</span>
                      <span className="text-lg font-bold text-emerald-600">0.10</span>
                    </div>
                    <div className="h-8 bg-emerald-200 border-3 border-black">
                      <div className="h-full bg-emerald-500 border-r-3 border-black" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stays Cool Longer */}
              <div>
                <h3 className="text-2xl font-bold neo-text text-cyan-600 mb-6">
                  STAYS COOL FOR LONGER
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">Water</span>
                      <span className="text-lg font-bold">180 min</span>
                    </div>
                    <div className="h-8 bg-gray-200 border-3 border-black">
                      <div className="h-full bg-gray-400 border-r-3 border-black" style={{ width: '69%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">SAP (Plastic)</span>
                      <span className="text-lg font-bold">220 min</span>
                    </div>
                    <div className="h-8 bg-gray-200 border-3 border-black">
                      <div className="h-full bg-gray-400 border-r-3 border-black" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-cyan-600">eaureco</span>
                      <span className="text-lg font-bold text-cyan-600">260 min</span>
                    </div>
                    <div className="h-8 bg-cyan-200 border-3 border-black">
                      <div className="h-full bg-cyan-500 border-r-3 border-black" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* The Sargassum Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-teal-400 border-4 border-black px-6 py-3 mb-6 transform rotate-1">
                <h2 className="text-xl font-bold neo-text text-black">FROM WASTE TO WONDER</h2>
              </div>
              
              <h3 className="text-4xl font-bold neo-text text-gray-900 mb-6">
                Millions of tons washed up, millions of US$ lost for disposal
              </h3>

              <p className="text-xl text-gray-700 font-medium mb-8">
                Sargassum seaweed is a massive environmental problem. It washes up on beaches 
                in enormous quantities, costing communities millions in cleanup and disposal. 
                We transform this waste into a valuable resource.
              </p>

              <div className="space-y-4">
                <div className="nav-glass border-3 border-black p-4 flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" strokeWidth={3} />
                  <div>
                    <h4 className="font-bold mb-1">Free Raw Material</h4>
                    <p className="text-gray-700 text-sm">Collected from beaches at no cost</p>
                  </div>
                </div>

                <div className="nav-glass border-3 border-black p-4 flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" strokeWidth={3} />
                  <div>
                    <h4 className="font-bold mb-1">Environmental Cleanup</h4>
                    <p className="text-gray-700 text-sm">Removing harmful algae blooms from coastlines</p>
                  </div>
                </div>

                <div className="nav-glass border-3 border-black p-4 flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" strokeWidth={3} />
                  <div>
                    <h4 className="font-bold mb-1">Circular Economy</h4>
                    <p className="text-gray-700 text-sm">Creating value from what was once waste</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-cyan-400 to-teal-500 border-4 border-black p-2 transform -rotate-2 neo-shadow">
                <img
                  src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=80"
                  alt="Beach cleanup"
                  className="w-full h-[400px] object-cover border-2 border-black"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-yellow-400 border-4 border-black px-6 py-3 mb-8 transform -rotate-1">
            <h2 className="text-2xl font-bold neo-text text-black">WHY CHOOSE EAURECO</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="nav-glass border-4 border-black p-8 transform rotate-1">
              <div className="w-16 h-16 bg-emerald-400 border-3 border-black flex items-center justify-center mb-6">
                <span className="text-3xl">♻️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Biodegradable</h3>
              <p className="text-gray-700 font-medium">
                100% biodegradable materials that break down naturally without harming the environment
              </p>
            </div>

            <div className="nav-glass border-4 border-black p-8 transform -rotate-1">
              <div className="w-16 h-16 bg-cyan-400 border-3 border-black flex items-center justify-center mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainable</h3>
              <p className="text-gray-700 font-medium">
                Made from renewable ocean waste, helping clean up beaches while creating value
              </p>
            </div>

            <div className="nav-glass border-4 border-black p-8 transform rotate-1">
              <div className="w-16 h-16 bg-lime-400 border-3 border-black flex items-center justify-center mb-6">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cost-Efficient</h3>
              <p className="text-gray-700 font-medium">
                Competitive pricing that doesn't compromise on performance or sustainability
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}