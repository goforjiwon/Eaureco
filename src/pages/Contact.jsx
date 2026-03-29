import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "../Layout";
import { getT } from "@/i18n/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = getT(language).contact;

        return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
            {t.header.subtitle}
          </p>
        </motion.div>

        {/* Main Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 h-full hover:shadow-3xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-bold text-display text-gray-900 mb-4 text-center">
                {t.info.email}
              </h2>
              <a
                href="mailto:goforjiwon@kaist.ac.kr"
                className="block text-center text-xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                {t.info.emailValue}
              </a>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 h-full hover:shadow-3xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-bold text-display text-gray-900 mb-4 text-center">
                {t.info.location}
              </h2>
              <p className="text-center text-xl font-bold text-cyan-600 mb-4">
                {t.info.locationValue}
              </p>
              <p className="text-center text-gray-600 font-medium">
                {t.info.locationDesc}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Why Work With Us */}


        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-3xl shadow-xl p-12 text-center border border-emerald-100">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/19088c638_KakaoTalk_20260203_182916893_02.png" 
              alt="eaureco" 
              className="h-16 md:h-20 w-auto mx-auto mb-4"
            />
            <p className="text-2xl font-bold text-emerald-600 mb-4">{t.bottom.tagline}</p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">{t.bottom.desc}</p>
          </div>
          
          {/* Copyright Notice */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              © 2025 eaureco. All rights reserved. Content may not be copied or reproduced without permission.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}