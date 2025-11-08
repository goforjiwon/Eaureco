import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, XCircle, DollarSign, Timer, Thermometer } from "lucide-react";

export default function Comparison() {
  const comparisonData = [
    {
      feature: "Biodegradable",
      eaureco: true,
      sap: false,
      water: false,
      compost: true,
    },
    {
      feature: "Freezing Speed",
      eaureco: "0.10",
      sap: "0.033",
      water: "0.025",
      compost: "0.05",
    },
    {
      feature: "Retention Time",
      eaureco: "260 min",
      sap: "220 min",
      water: "180 min",
      compost: "200 min",
    },
    {
      feature: "Cost Effective",
      eaureco: true,
      sap: false,
      water: true,
      compost: false,
    },
    {
      feature: "Environmental Impact",
      eaureco: "Positive",
      sap: "Negative",
      water: "Neutral",
      compost: "Positive",
    },
    {
      feature: "Reusable",
      eaureco: true,
      sap: true,
      water: true,
      compost: false,
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-3 rounded-full mb-6 shadow-lg">
            <h1 className="text-5xl md:text-6xl font-bold neo-text text-white">
              Comparison
            </h1>
          </div>
          <p className="text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
            See how eaureco outperforms traditional ice pack solutions
          </p>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-2xl p-12 border border-emerald-100">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold neo-text text-gray-900 mb-6">
                Eaureco is Cheaper & More Effective
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Our ice packs deliver superior performance while being better for the environment 
                and your bottom line
              </p>
              
              <div className="inline-block bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <DollarSign className="w-12 h-12 text-emerald-600 mx-auto mb-3" strokeWidth={2} />
                    <p className="text-3xl font-bold neo-text text-emerald-600">Cheap</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-cyan-600 mx-auto mb-3" strokeWidth={2} />
                    <p className="text-3xl font-bold neo-text text-cyan-600">Effective</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="nav-glass rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-shadow">
              <Timer className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={2} />
              <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
                Freezes Faster
              </h3>
              <p className="text-6xl font-bold neo-text text-gray-900 mb-2">4x</p>
              <p className="text-gray-600 font-medium">
                Faster freezing than water-based ice packs
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="nav-glass rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-shadow">
              <Thermometer className="w-12 h-12 text-cyan-600 mb-4" strokeWidth={2} />
              <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-3">
                Lasts Longer
              </h3>
              <p className="text-6xl font-bold neo-text text-gray-900 mb-2">260</p>
              <p className="text-gray-600 font-medium">
                Minutes of cooling retention time
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="nav-glass rounded-2xl shadow-xl p-8 h-full bg-gradient-to-br from-lime-50 to-emerald-50 hover:shadow-2xl transition-shadow">
              <CheckCircle className="w-12 h-12 text-lime-600 mb-4" strokeWidth={2} />
              <h3 className="text-2xl font-bold neo-text bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                100% Green
              </h3>
              <p className="text-3xl font-bold neo-text text-gray-900 mb-2">Biodegradable</p>
              <p className="text-gray-600 font-medium">
                Content and packaging both break down naturally
              </p>
            </div>
          </motion.div>
        </div>

        {/* Detailed Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-2 rounded-full mb-8 shadow-md">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Detailed Comparison</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="px-6 py-5 text-left bg-gray-50">
                      <span className="font-bold text-lg text-gray-900">Feature</span>
                    </th>
                    <th className="px-6 py-5 text-center bg-gradient-to-br from-emerald-50 to-lime-50 border-l border-gray-200">
                      <div className="font-bold text-xl neo-text text-emerald-600">EAURECO</div>
                    </th>
                    <th className="px-6 py-5 text-center bg-gray-50 border-l border-gray-200">
                      <div className="font-semibold text-gray-900">SAP (Plastic)</div>
                    </th>
                    <th className="px-6 py-5 text-center bg-gray-50 border-l border-gray-200">
                      <div className="font-semibold text-gray-900">Water</div>
                    </th>
                    <th className="px-6 py-5 text-center bg-gray-50 border-l border-gray-200">
                      <div className="font-semibold text-gray-900">Compost</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center bg-gradient-to-br from-emerald-50/50 to-lime-50/50 border-l border-gray-200">
                        {typeof row.eaureco === 'boolean' ? (
                          row.eaureco ? (
                            <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} />
                          ) : (
                            <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} />
                          )
                        ) : (
                          <span className="font-bold text-lg text-emerald-600">{row.eaureco}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center border-l border-gray-200">
                        {typeof row.sap === 'boolean' ? (
                          row.sap ? (
                            <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} />
                          ) : (
                            <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} />
                          )
                        ) : (
                          <span className="font-medium text-gray-700">{row.sap}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center border-l border-gray-200">
                        {typeof row.water === 'boolean' ? (
                          row.water ? (
                            <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} />
                          ) : (
                            <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} />
                          )
                        ) : (
                          <span className="font-medium text-gray-700">{row.water}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center border-l border-gray-200">
                        {typeof row.compost === 'boolean' ? (
                          row.compost ? (
                            <CheckCircle className="w-7 h-7 text-emerald-600 mx-auto" strokeWidth={2.5} />
                          ) : (
                            <XCircle className="w-7 h-7 text-red-500 mx-auto" strokeWidth={2.5} />
                          )
                        ) : (
                          <span className="font-medium text-gray-700">{row.compost}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold neo-text text-white mb-6">
              The Clear Winner
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              eaureco outperforms traditional ice packs in every category that matters: 
              sustainability, performance, and cost-effectiveness
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/Contact';
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-xl font-bold text-lg text-gray-900 hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Get in Touch →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}