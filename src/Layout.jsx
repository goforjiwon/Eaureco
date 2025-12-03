
import React, { useState, useEffect, createContext, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Waves, Leaf, Scale, Mail, Globe } from "lucide-react";

// Language Context
export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const navItems = [
    { name: language === 'en' ? "Home" : "Inicio", path: "Home", icon: Waves },
    { name: language === 'en' ? "The Problem" : "El Problema", path: "Problem", icon: Leaf },
    { name: language === 'en' ? "Our Solution" : "Nuestra Solución", path: "Solution", icon: Leaf },
    { name: language === 'en' ? "Comparison" : "Comparación", path: "Comparison", icon: Scale },
    { name: language === 'en' ? "Contact" : "Contacto", path: "Contact", icon: Mail },
  ];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap');
          
          :root {
            --neo-green: #10b981;
            --neo-lime: #84cc16;
            --neo-teal: #14b8a6;
            --neo-dark: #065f46;
            --neo-light: #d1fae5;
          }
          
          .nav-glass {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.5);
          }
          
          .neo-shadow {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          
          .neo-text {
            font-family: 'Space Grotesk', sans-serif;
            letter-spacing: -0.02em;
          }
        `}</style>

        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <Waves className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h1 className="text-xl font-bold neo-text text-gray-900">eaureco</h1>
                  <p className="text-xs text-emerald-600 font-medium">
                    {language === 'en' ? 'Stay Cool, Stay Green' : 'Mantente Fresco, Mantente Verde'}
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === createPageUrl(item.path) || (item.path === "Home" && location.pathname === "/");
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={createPageUrl(item.path)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" strokeWidth={2} />
                        {item.name}
                      </div>
                    </Link>
                  );
                })}
                
                {/* Language Toggle Button */}
                <button
                  onClick={toggleLanguage}
                  className="ml-2 px-4 py-2 rounded-lg font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all flex items-center gap-2"
                  title={language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
                >
                  <Globe className="w-4 h-4" strokeWidth={2} />
                  <span className="font-bold">{language === 'en' ? 'ES' : 'EN'}</span>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold">
                {language === 'en' ? 'Menu' : 'Menú'}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === createPageUrl(item.path) || (item.path === "Home" && location.pathname === "/");
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={createPageUrl(item.path)}
                    className={`px-3 py-2 rounded-lg font-semibold text-sm ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    <div className="flex items-center gap-2 justify-center">
                      <Icon className="w-4 h-4" strokeWidth={2} />
                      {item.name}
                    </div>
                  </Link>
                );
              })}
              
              {/* Mobile Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 rounded-lg font-semibold text-sm bg-gray-100 text-gray-700 flex items-center gap-2 justify-center"
              >
                <Globe className="w-4 h-4" strokeWidth={2} />
                {language === 'en' ? 'Español' : 'English'}
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pb-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gradient-to-r from-emerald-600 to-teal-600 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold neo-text text-white mb-2">eaureco</h2>
            <p className="text-white/90 font-medium text-lg mb-1">
              {language === 'en' ? 'Stay Cool, Stay Green' : 'Mantente Fresco, Mantente Verde'}
            </p>
            <p className="text-white/75 text-sm">
              {language === 'en' 
                ? 'Transforming ocean waste into sustainable cooling solutions'
                : 'Transformando residuos oceánicos en soluciones de enfriamiento sostenibles'}
            </p>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
}
