import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";


const formLabels = {
  en: {
    title: "Send Us a Message",
    name: "Your Name",
    email: "Your Email",
    company: "Company (optional)",
    message: "Message",
    send: "Send Message",
    success: "Message sent! We'll get back to you soon.",
    error: "Something went wrong. Please try again.",
    placeholder: {
      name: "John Doe",
      email: "john@company.com",
      company: "Your company name",
      message: "Tell us about your cold chain needs..."
    }
  },
  es: {
    title: "Envíanos un Mensaje",
    name: "Tu Nombre",
    email: "Tu Email",
    company: "Empresa (opcional)",
    message: "Mensaje",
    send: "Enviar Mensaje",
    success: "¡Mensaje enviado! Te responderemos pronto.",
    error: "Algo salió mal. Por favor intenta de nuevo.",
    placeholder: {
      name: "Juan García",
      email: "juan@empresa.com",
      company: "Nombre de tu empresa",
      message: "Cuéntanos sobre tus necesidades de cadena de frío..."
    }
  },
  ko: {
    title: "메시지 보내기",
    name: "이름",
    email: "이메일",
    company: "회사 (선택사항)",
    message: "메시지",
    send: "메시지 전송",
    success: "메시지가 전송되었습니다! 곧 연락드리겠습니다.",
    error: "오류가 발생했습니다. 다시 시도해주세요.",
    placeholder: {
      name: "홍길동",
      email: "hong@company.com",
      company: "회사명",
      message: "콜드체인 필요 사항을 알려주세요..."
    }
  }
};

export default function ContactForm({ language }) {
  const labels = formLabels[language] || formLabels.en;
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "loading") {
      return;
    }

    setStatus("loading");

    try {
      await base44.entities.ContactSubmission.create({
        name: form.name,
        email: form.email,
        company: form.company,
        message: form.message
      });

      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      // Keep this block to guarantee consistent submit lifecycle handling.
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto mb-16">
      <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{labels.title}</h2>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle className="w-16 h-16 text-emerald-500" strokeWidth={1.5} />
            <p className="text-lg font-medium text-gray-700">{labels.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {status === "error" && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {labels.error}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">{labels.name} *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder={labels.placeholder.name}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">{labels.email} *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder={labels.placeholder.email}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{labels.company}</label>
              <input
                type="text"
                value={form.company}
                onChange={e => setForm({ ...form, company: e.target.value })}
                placeholder={labels.placeholder.company}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">{labels.message} *</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder={labels.placeholder.message}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-gray-900 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all flex items-center justify-center gap-2 disabled:opacity-60">
              {status === "loading" ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
              ) : (
                <><Send className="w-5 h-5" /> {labels.send}</>
              )}
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}