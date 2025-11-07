import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Recycle, Snowflake, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-teal-900/70 to-cyan-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-bold neo-text text-white mb-6 transform -rotate-1">
              eaureco
            </h1>
            <div className="inline-block bg-lime-400 border-4 border-black px-8 py-4 transform rotate-1 neo-shadow mb-8">
              <p className="text-2xl md:text-4xl font-bold neo-text text-black">
                STAY COOL, STAY GREEN.
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white font-semibold mb-12 max-w-3xl mx-auto"
          >
            Transforming sargassum waste into sustainable ice packs for a greener future
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to={createPageUrl("Solution")}
              className="inline-flex items-center gap-3 px-8 py-4 bg-lime-400 border-4 border-black font-bold text-lg neo-text hover:bg-lime-300 transition-all transform hover:translate-y-[-4px] shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_rgba(0,0,0,1)]"
            >
              DISCOVER OUR SOLUTION
              <ArrowRight className="w-6 h-6" strokeWidth={3} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white border-y-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="nav-glass border-4 border-black p-8 transform rotate-1">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-emerald-400 border-4 border-black flex items-center justify-center">
                  <Recycle className="w-8 h-8 text-black" strokeWidth={3} />
                </div>
                <h3 className="text-5xl font-bold neo-text text-emerald-600 mb-2 mt-4">100%</h3>
                <p className="text-lg font-semibold text-gray-800">Biodegradable</p>
                <p className="text-sm text-gray-600 mt-2">Both content and packaging</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="nav-glass border-4 border-black p-8 transform -rotate-1">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-cyan-400 border-4 border-black flex items-center justify-center">
                  <Snowflake className="w-8 h-8 text-black" strokeWidth={3} />
                </div>
                <h3 className="text-5xl font-bold neo-text text-cyan-600 mb-2 mt-4">4x</h3>
                <p className="text-lg font-semibold text-gray-800">Faster Freezing</p>
                <p className="text-sm text-gray-600 mt-2">Compared to water-based packs</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="nav-glass border-4 border-black p-8 transform rotate-1">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-lime-400 border-4 border-black flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-black" strokeWidth={3} />
                </div>
                <h3 className="text-5xl font-bold neo-text text-lime-600 mb-2 mt-4">260</h3>
                <p className="text-lg font-semibold text-gray-800">Minutes Cooling</p>
                <p className="text-sm text-gray-600 mt-2">Longer retention time</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Eaureco Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 border-4 border-black p-2 transform -rotate-2 neo-shadow">
                <img
                  src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&q=80"
                  alt="Sargassum seaweed on beach"
                  className="w-full h-[400px] object-cover border-2 border-black"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-lime-400 border-4 border-black px-6 py-3 mb-6 transform -rotate-1">
                <h2 className="text-xl font-bold neo-text text-black">WHY EAURECO?</h2>
              </div>
              
              <h3 className="text-5xl font-bold neo-text text-gray-900 mb-6 leading-tight">
                We turn trash into treasure
              </h3>
              
              <p className="text-xl text-gray-700 font-medium mb-6 leading-relaxed">
                Millions of tons of sargassum seaweed wash up on beaches, costing millions 
                in disposal fees. We transform this ocean waste into high-performance, 
                sustainable ice packs.
              </p>

              <div className="space-y-4">
                <div className="nav-glass border-3 border-black p-4">
                  <h4 className="font-bold text-lg mb-2">♻️ Sustainable</h4>
                  <p className="text-gray-700">Made from renewable sargassum waste</p>
                </div>
                <div className="nav-glass border-3 border-black p-4">
                  <h4 className="font-bold text-lg mb-2">❄️ Superior Performance</h4>
                  <p className="text-gray-700">Freezes faster and lasts longer</p>
                </div>
                <div className="nav-glass border-3 border-black p-4">
                  <h4 className="font-bold text-lg mb-2">💚 Cost-Effective</h4>
                  <p className="text-gray-700">Cheaper than traditional alternatives</p>
                </div>
              </div>

              <Link
                to={createPageUrl("Solution")}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-emerald-500 border-3 border-black font-bold text-white hover:bg-emerald-600 transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              >
                LEARN MORE
                <ArrowRight className="w-5 h-5" strokeWidth={3} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 border-y-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold neo-text text-white mb-6">
            READY TO GO GREEN?
          </h2>
          <p className="text-xl text-white font-semibold mb-8">
            Join us in revolutionizing sustainable cooling solutions
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-flex items-center gap-3 px-8 py-4 bg-lime-400 border-4 border-black font-bold text-lg neo-text hover:bg-lime-300 transition-all transform hover:translate-y-[-4px] shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_rgba(0,0,0,1)]"
          >
            GET IN TOUCH
            <ArrowRight className="w-6 h-6" strokeWidth={3} />
          </Link>
        </div>
      </section>
    </div>
  );
}