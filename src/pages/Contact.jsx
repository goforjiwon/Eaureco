import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "../Layout";

export default function Contact() {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      header: {
        title: "Contact Us",
        subtitle: "Ready to make the switch to sustainable cooling? Let's talk!"
      },
      info: {
        badge: "Get in Touch",
        email: "Email Us",
        emailValue: "goforjiwon@kaist.ac.kr",
        location: "Location",
        locationValue: "Daejeon, South Korea",
        locationDesc: "Visit us at KAIST campus"
      },

      why: {
        badge: "Why Work With Us",
        sustainable: "Sustainable Solution",
        sustainableDesc: "100% biodegradable ice packs that help clean our oceans",
        performance: "Better Performance",
        performanceDesc: "Superior cooling that lasts longer and freezes faster",
        cost: "Cost Effective",
        costDesc: "Competitive pricing without compromising quality"
      },
      bottom: {
        tagline: "Stay Cool, Stay Green",
        desc: "Let's work together to create a green future for food delivery and cold chain logistics."
      }
    },
    es: {
      header: {
        title: "Contáctanos",
        subtitle: "¿Listo para cambiar a enfriamiento sostenible? ¡Hablemos!"
      },
      info: {
        badge: "Ponte en Contacto",
        email: "Envíanos un Email",
        emailValue: "goforjiwon@kaist.ac.kr",
        location: "Ubicación",
        locationValue: "Daejeon, Corea del Sur",
        locationDesc: "Visítanos en el campus KAIST"
      },

      why: {
        badge: "Por Qué Trabajar Con Nosotros",
        sustainable: "Solución Sostenible",
        sustainableDesc: "Paquetes de hielo 100% biodegradables que ayudan a limpiar nuestros océanos",
        performance: "Mejor Rendimiento",
        performanceDesc: "Enfriamiento superior que dura más y se congela más rápido",
        cost: "Costo Efectivo",
        costDesc: "Precios competitivos sin comprometer la calidad"
      },
      bottom: {
        tagline: "Mantente Fresco, Mantente Verde",
        desc: "Trabajemos juntos para crear un futuro verde para la entrega de alimentos y la logística de cadena de frío."
      }
      },
      ko: {
      header: {
        title: "연락처",
        subtitle: "지속 가능한 냉각으로 전환할 준비가 되셨나요? 상담해 드리겠습니다!"
      },
      info: {
        badge: "문의하기",
        email: "이메일 보내기",
        emailValue: "goforjiwon@kaist.ac.kr",
        location: "위치",
        locationValue: "대전, 대한민국",
        locationDesc: "KAIST 캠퍼스 방문"
      },

      why: {
        badge: "우리와 함께 일하는 이유",
        sustainable: "지속 가능한 솔루션",
        sustainableDesc: "해양을 정화하는 데 도움이 되는 100% 생분해성 아이스팩",
        performance: "더 나은 성능",
        performanceDesc: "더 오래 지속되고 더 빠르게 얼어붙는 우수한 냉각",
        cost: "비용 효율적",
        costDesc: "품질을 타협하지 않는 경쟁력 있는 가격"
      },
      bottom: {
        tagline: "Stay Cool, Stay Green",
        desc: "식품 배송 및 콜드체인 물류를 위한 친환경 미래를 함께 만들어갑시다."
      }
      }
      };

      const t = translations[language];

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
              <h2 className="text-3xl font-bold neo-text text-gray-900 mb-4 text-center">
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
              <h2 className="text-3xl font-bold neo-text text-gray-900 mb-4 text-center">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-lime-400 to-emerald-400 px-6 py-2 rounded-full mb-8 shadow-md">
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider">{t.why.badge}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🌱</div>
              <h3 className="text-xl font-bold mb-3 text-center">{t.why.sustainable}</h3>
              <p className="text-gray-600 text-center">
                {t.why.sustainableDesc}
              </p>
            </div>

            <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-center">{t.why.performance}</h3>
              <p className="text-gray-600 text-center">
                {t.why.performanceDesc}
              </p>
            </div>

            <div className="nav-glass rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4 text-center">💰</div>
              <h3 className="text-xl font-bold mb-3 text-center">{t.why.cost}</h3>
              <p className="text-gray-600 text-center">
                {t.why.costDesc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-3xl shadow-xl p-12 text-center border border-emerald-100">
            <h2 className="text-4xl font-bold neo-text text-gray-900 mb-2">
              eaureco
            </h2>
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