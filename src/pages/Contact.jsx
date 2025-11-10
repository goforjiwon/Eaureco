
import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
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
        phone: "Call Us",
        phoneValue: "+82 10 9404 1548",
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
      approach: {
        badge: "How We Work",
        consultation: "Free Consultation",
        consultationDesc: "We'll discuss your cooling needs and challenges",
        custom: "Custom Solution",
        customDesc: "We tailor our ice packs to your specific requirements",
        support: "Ongoing Support",
        supportDesc: "We're here to help you succeed with sustainable cooling"
      },
      cta: {
        title: "Ready to Go Green?",
        subtitle: "Reach out to us at goforjiwon@kaist.ac.kr or call +82 10 9404 1548 to start your sustainable cooling journey"
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
        phone: "Llámanos",
        phoneValue: "+82 10 9404 1548",
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
      approach: {
        badge: "Cómo Trabajamos",
        consultation: "Consulta Gratis",
        consultationDesc: "Discutiremos tus necesidades y desafíos de enfriamiento",
        custom: "Solución Personalizada",
        customDesc: "Adaptamos nuestros paquetes de hielo a tus requisitos específicos",
        support: "Soporte Continuo",
        supportDesc: "Estamos aquí para ayudarte a tener éxito con el enfriamiento sostenible"
      },
      cta: {
        title: "¿Listo para Ser Ecológico?",
        subtitle: "Contáctanos en goforjiwon@kaist.ac.kr o llama al +82 10 9404 1548 para comenzar tu viaje de enfriamiento sostenible"
      },
      bottom: {
        tagline: "Mantente Fresco, Mantente Verde",
        desc: "Trabajemos juntos para crear un futuro verde para la entrega de alimentos y la logística de cadena de frío."
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
          <div className="inline-block bg-gradient-to-r from-lime-400 to-emerald-400 px-8 py-3 rounded-full mb-6 shadow-lg">
            <h1 className="text-5xl md:text-6xl font-bold neo-text text-gray-900">
              {t.header.title}
            </h1>
          </div>
          <p className="text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
            {t.header.subtitle}
          </p>
        </motion.div>

        {/* Main Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 h-full hover:shadow-3xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-bold neo-text text-gray-900 mb-4 text-center">
                {t.info.phone}
              </h2>
              <a
                href="tel:+821094041548"
                className="block text-center text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {t.info.phoneValue}
              </a>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
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

        {/* How We Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-cyan-400 to-teal-400 px-6 py-2 rounded-full mb-8 shadow-md">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">{t.approach.badge}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">{t.approach.consultation}</h3>
              <p className="text-gray-600">
                {t.approach.consultationDesc}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">{t.approach.custom}</h3>
              <p className="text-gray-600">
                {t.approach.customDesc}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">{t.approach.support}</h3>
              <p className="text-gray-600">
                {t.approach.supportDesc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold neo-text text-white mb-6">
              {t.cta.title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t.cta.subtitle}
            </p>
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
