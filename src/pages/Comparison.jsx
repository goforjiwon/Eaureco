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
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-cyan-400 border-4 border-black px-8 py-4 transform -rotate-1 neo-shadow mb-6">
            <h1 className="text-5xl md:text-7xl font-bold neo-text text-black">
              COMPARISON
            </h1>
          </div>
          <p className="text-2xl font-semibold text-gray-800 max-w-3xl mx-auto">
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
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-4 border-black p-12 transform rotate-1 neo-shadow">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold neo-text text-gray-900 mb-6">
                EAURECO IS CHEAPER & MORE EFFECTIVE
              </h2>
              <p className="text-xl text-gray-700 font-semibold mb-8">
                Our ice packs deliver superior performance while being better for the environment 
                and your bottom line
              </p>
              
              <div className="inline-block bg-white border-4 border-black p-8 transform -rotate-1">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <DollarSign className="w-12 h-12 text-emerald-600 mx-auto mb-3" strokeWidth={3} />
                    <p className="text-3xl font-bold neo-text text-emerald-600">CHEAP</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-cyan-600 mx-auto mb-3" strokeWidth={3} />
                    <p className="text-3xl font-bold neo-text text-cyan-600">EFFECTIVE</p>
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
            <div className="nav-glass border-4 border-black p-8 h-full">
              <Timer className="w-12 h-12 text-emerald-600 mb-4" strokeWidth={3} />
              <h3 className="text-2xl font-bold neo-text text-emerald-600 mb-3">
                FREEZES FASTER
              </h3>
              <p className="text-6xl font-bold neo-text text-gray-900 mb-2">4x</p>
              <p className="text-gray-700 font-semibold">
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
            <div className="nav-glass border-4 border-black p-8 h-full">
              <Thermometer className="w-12 h-12 text-cyan-600 mb-4" strokeWidth={3} />
              <h3 className="text-2xl font-bold neo-text text-cyan-600 mb-3">
                LASTS LONGER
              </h3>
              <p className="text-6xl font-bold neo-text text-gray-900 mb-2">260</p>
              <p className="text-gray-700 font-semibold">
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
            <div className="nav-glass border-4 border-black p-8 h-full bg-gradient-to-br from-lime-50 to-emerald-50">
              <CheckCircle className="w-12 h-12 text-lime-600 mb-4" strokeWidth={3} />
              <h3 className="text-2xl font-bold neo-text text-lime-600 mb-3">
                100% GREEN
              </h3>
              <p className="text-4xl font-bold neo-text text-gray-900 mb-2">BIODEGRADABLE</p>
              <p className="text-gray-700 font-semibold">
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
          <div className="inline-block bg-yellow-400 border-4 border-black px-6 py-3 mb-8 transform rotate-1">
            <h2 className="text-2xl font-bold neo-text text-black">DETAILED COMPARISON</h2>
          </div>

          <div className="bg-white border-4 border-black overflow-hidden transform -rotate-1 neo-shadow">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-4 border-black">
                    <th className="px-6 py-4 text-left bg-gray-100">
                      <span className="font-bold text-lg">Feature</span>
                    </th>
                    <th className="px-6 py-4 text-center bg-gradient-to-br from-emerald-100 to-lime-100 border-l-4 border-black">
                      <div className="font-bold text-xl neo-text text-emerald-600">EAURECO</div>
                    </th>
                    <th className="px-6 py-4 text-center bg-gray-50 border-l-4 border-black">
                      <div className="font-bold text-lg">SAP (Plastic)</div>
                    </th>
                    <th className="px-6 py-4 text-center bg-gray-50 border-l-4 border-black">
                      <div className="font-bold text-lg">Water</div>
                    </th>
                    <th className="px-6 py-4 text-center bg-gray-50 border-l-4 border-black">
                      <div className="font-bold text-lg">Compost</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b-3 border-black">
                      <td className="px-6 py-4 font-semibold bg-gray-50">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center bg-gradient-to-br from-emerald-50 to-lime-50 border-l-4 border-black">
                        {typeof row.eaureco === 'boolean' ? (
                          row.eaureco ? (
                            <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" strokeWidth={3} />
                          ) : (
                            <XCircle className="w-8 h-8 text-red-500 mx-auto" strokeWidth={3} />
                          )
                        ) : (
                          <span className="font-bold text-lg text-emerald-600">{row.eaureco}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center border-l-4 border-black">
                        {typeof row.sap === 'boolean' ? (
                          row.sap ? (
                            <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" strokeWidth={3} />
                          ) : (
                            <XCircle className="w-8 h-8 text-red-500 mx-auto" strokeWidth={3} />
                          )
                        ) : (
                          <span className="font-semibold text-gray-700">{row.sap}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center border-l-4 border-black">
                        {typeof row.water === 'boolean' ? (
                          row.water ? (
                            <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" strokeWidth={3} />
                          ) : (
                            <XCircle className="w-8 h-8 text-red-500 mx-auto" strokeWidth={3} />
                          )
                        ) : (
                          <span className="font-semibold text-gray-700">{row.water}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center border-l-4 border-black">
                        {typeof row.compost === 'boolean' ? (
                          row.compost ? (
                            <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" strokeWidth={3} />
                          ) : (
                            <XCircle className="w-8 h-8 text-red-500 mx-auto" strokeWidth={3} />
                          )
                        ) : (
                          <span className="font-semibold text-gray-700">{row.compost}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Effectiveness Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 border-4 border-black p-10 transform rotate-1 neo-shadow">
            <h2 className="text-3xl font-bold neo-text text-gray-900 mb-8 text-center">
              COST VS EFFECTIVENESS
            </h2>
            
            <div className="bg-white border-3 border-black p-8">
              <div className="relative h-96">
                {/* Axes */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-black"></div>
                
                {/* Labels */}
                <div className="absolute -bottom-8 right-0 text-sm font-bold">Cost →</div>
                <div className="absolute -left-16 top-0 text-sm font-bold transform -rotate-90">Effectiveness →</div>
                
                {/* Data Points */}
                <div className="absolute bottom-[25%] left-[40%] transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gray-400 border-4 border-black rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-center">Water</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[40%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-24 h-24 bg-cyan-400 border-4 border-black rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-center">SAP</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[35%] left-[35%] transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-16 h-16 bg-teal-400 border-4 border-black rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-center">Compost</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[75%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative animate-pulse">
                    <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-lime-400 border-4 border-black rounded-full flex items-center justify-center shadow-[8px_8px_0px_rgba(0,0,0,0.3)]">
                      <span className="text-lg font-bold neo-text text-center">EAURECO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-lg font-semibold text-gray-700 mt-8">
              eaureco delivers the best balance of cost and effectiveness
            </p>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 border-4 border-black p-12 transform -rotate-1 neo-shadow text-center">
            <h2 className="text-4xl md:text-5xl font-bold neo-text text-white mb-6">
              THE CLEAR WINNER
            </h2>
            <p className="text-xl text-white font-semibold mb-8 max-w-3xl mx-auto">
              eaureco outperforms traditional ice packs in every category that matters: 
              sustainability, performance, and cost-effectiveness
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/Contact';
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-lime-400 border-4 border-black font-bold text-lg neo-text hover:bg-lime-300 transition-all transform hover:translate-y-[-4px] shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_rgba(0,0,0,1)]"
            >
              GET IN TOUCH →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}