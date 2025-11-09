
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { base44 } from "@/api/base44Client";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using the SendEmail integration
    await base44.integrations.Core.SendEmail({
      from_name: "Eaureco Contact Form",
      to: "goforjiwon@kaist.ac.kr",
      subject: `New Contact Form Message from ${formData.name}`,
      body: `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}

Message:
${formData.message}
      `
    });
    
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16">

          <div className="inline-block bg-gradient-to-r from-lime-400 to-emerald-400 px-8 py-3 rounded-full mb-6 shadow-lg">
            <h1 className="text-5xl md:text-6xl font-bold neo-text text-gray-900">
              Contact Us
            </h1>
          </div>
          <p className="text-2xl font-medium text-gray-700 max-w-3xl mx-auto">
            Ready to make the switch to sustainable cooling? Let's talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}>

            <div className="nav-glass rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 px-5 py-2 rounded-full mb-6 shadow-md">
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">Send us a Message</h2>
              </div>

              {submitted ?
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-2xl p-8 text-center border border-emerald-200">

                  <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" strokeWidth={2} />
                  <h3 className="text-2xl font-bold neo-text text-emerald-600 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-700 font-medium">
                    We'll get back to you as soon as possible.
                  </p>
                </motion.div> :

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-semibold mb-2 text-gray-900">Your Name</label>
                    <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="border-2 border-gray-200 focus:border-emerald-500 rounded-xl bg-white font-medium"
                    placeholder="John Doe" />

                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-900">Email Address</label>
                    <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="border-2 border-gray-200 focus:border-emerald-500 rounded-xl bg-white font-medium"
                    placeholder="john@company.com" />

                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-900">Company Name</label>
                    <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="border-2 border-gray-200 focus:border-emerald-500 rounded-xl bg-white font-medium"
                    placeholder="Your Company" />

                  </div>

                  <div>
                    <label className="block font-semibold mb-2 text-gray-900">Message</label>
                    <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="border-2 border-gray-200 focus:border-emerald-500 rounded-xl bg-white font-medium resize-none"
                    placeholder="Tell us about your cooling needs..." />

                  </div>

                  <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-xl font-bold text-lg py-6 text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50">

                    <Send className="w-5 h-5 mr-2" strokeWidth={2.5} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              }
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8">

            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="inline-block bg-gradient-to-r from-cyan-400 to-teal-400 px-5 py-2 rounded-full mb-6 shadow-md">
                <h2 className="text-sm font-bold text-white uppercase tracking-wider">Get in Touch</h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:goforjiwon@kaist.ac.kr"
                      className="text-gray-600 font-medium hover:text-emerald-600 transition-colors">

                      goforjiwon@kaist.ac.kr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-gray-600 font-medium">Texas, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="nav-glass rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="inline-block bg-gradient-to-r from-lime-400 to-emerald-400 px-5 py-2 rounded-full mb-6 shadow-md">
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Why Work With Us</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
                  <h4 className="font-bold mb-2">🌱 Sustainable Solution</h4>
                  <p className="text-sm text-gray-600">
                    100% biodegradable ice packs that help clean our oceans
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
                  <h4 className="font-bold mb-2">⚡ Better Performance</h4>
                  <p className="text-sm text-gray-600">
                    Superior cooling that lasts longer and freezes faster
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
                  <h4 className="font-bold mb-2">💰 Cost Effective</h4>
                  <p className="text-sm text-gray-600">
                    Competitive pricing without compromising quality
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-3xl font-bold neo-text text-white mb-4">
                Ready to Go Green?
              </h3>
              <p className="text-white/90 font-medium text-lg">
                Join us in revolutionizing sustainable cooling solutions
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20">

          <div className="bg-gradient-to-br from-lime-50 to-emerald-50 rounded-3xl shadow-xl p-12 text-center border border-emerald-100">
            <h2 className="text-4xl font-bold neo-text text-gray-900 mb-2">
              eaureco
            </h2>
            <p className="text-2xl font-bold text-emerald-600 mb-4">Stay Cool, Stay Green</p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Let's work together to create a green future 
for food delivery and cold chain logistics.

            </p>
          </div>
        </motion.div>
      </div>
    </div>);

}
