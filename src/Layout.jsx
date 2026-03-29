import React, { useState, useEffect, createContext, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Waves, Leaf, Scale, Mail, Globe } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Language Context
export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en';
  });
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'problem', 'solution', 'comparison', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLabels = {
    en: {
      home: "Home",
      problem: "Problem",
      solution: "Solution",
      comparison: "Comparison",
      contact: "Contact"
    },
    es: {
      home: "Inicio",
      problem: "El Problema",
      solution: "Nuestra Solución",
      comparison: "Comparación",
      contact: "Contacto"
    },
    ko: {
      home: "홈",
      problem: "문제점",
      solution: "솔루션",
      comparison: "비교",
      contact: "연락처"
    }
  };

  const navItems = [
  { name: navLabels[language].home, sectionId: "home", icon: Waves },
  { name: navLabels[language].problem, sectionId: "problem", icon: Leaf },
  { name: navLabels[language].solution, sectionId: "solution", icon: Leaf },
  { name: navLabels[language].comparison, sectionId: "comparison", icon: Scale },
  { name: navLabels[language].contact, sectionId: "contact", icon: Mail }];


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="min-h-screen bg-slate-50">
        <style>{`
          @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

          :root {
            --neo-green: #10b981;
            --neo-lime: #84cc16;
            --neo-teal: #14b8a6;
            --neo-dark: #065f46;
            --neo-light: #d1fae5;
          }

          * {
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
          }

          .nav-glass {
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid #e5e7eb;
          }

          .neo-shadow {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          .neo-text {
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
            letter-spacing: -0.02em;
          }

          .section-surface {
            background: #ffffff;
            border-top: 1px solid #e5e7eb;
            border-bottom: 1px solid #e5e7eb;
          }

          .section-muted {
            background: #f8fafc;
            border-top: 1px solid #e5e7eb;
            border-bottom: 1px solid #e5e7eb;
          }

          .content-card {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 1rem;
            box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
          }

          .highlight-card {
            background: #ecfdf5;
            border: 1px solid #a7f3d0;
            border-radius: 1rem;
            box-shadow: 0 8px 24px rgba(16, 185, 129, 0.12);
          }

          .accent-pill {
            display: inline-block;
            background: #dcfce7;
            color: #065f46;
            border: 1px solid #a7f3d0;
            border-radius: 9999px;
            padding: 0.35rem 0.9rem;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }
        `}</style>

        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/95 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
                




                <div>
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/19088c638_KakaoTalk_20260203_182916893_02.png"
                    alt="eaureco"
                    className="h-6 w-auto mb-0.5" />

                  <p className="text-xs text-emerald-600 font-medium">
                    Stay Cool, Stay Green
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.sectionId;
                  return (
                    <button
                      key={item.sectionId}
                      onClick={() => scrollToSection(item.sectionId)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      isActive ?
                      "bg-emerald-600 text-white shadow-sm" :
                      "text-gray-700 hover:bg-gray-100"}`
                      }>

                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" strokeWidth={2} />
                        {item.name}
                      </div>
                    </button>);

                })}
                
                {/* Language Toggle Button */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="ml-2 px-4 py-2 rounded-lg font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all flex items-center gap-2">
                      <Globe className="w-4 h-4" strokeWidth={2} />
                      <span className="font-bold">{language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'KO'}</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setLanguage('en')}>
                      English (EN)
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage('es')}>
                      Español (ES)
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage('ko')}>
                      한국어 (KO)
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold">
                {language === 'en' ? 'Menu' : 'Menú'}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.sectionId;
                return (
                  <button
                    key={item.sectionId}
                    onClick={() => scrollToSection(item.sectionId)}
                    className={`px-3 py-2 rounded-lg font-semibold text-sm ${
                    isActive ?
                    "bg-emerald-600 text-white" :
                    "bg-gray-100 text-gray-700"}`
                    }>

                    <div className="flex items-center gap-2 justify-center">
                      <Icon className="w-4 h-4" strokeWidth={2} />
                      {item.name}
                    </div>
                  </button>);

              })}
              
              {/* Mobile Language Toggle */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="px-3 py-2 rounded-lg font-semibold text-sm bg-gray-100 text-gray-700 flex items-center gap-2 justify-center">
                    <Globe className="w-4 h-4" strokeWidth={2} />
                    {language === 'en' ? 'EN' : language === 'es' ? 'ES' : 'KO'}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('es')}>Español</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('ko')}>한국어</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pb-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-emerald-700 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/802916f9d_KakaoTalk_20260203_182916893_03.png"
              alt="eaureco"
              className="h-12 w-auto mx-auto mb-2" />

            <p className="text-white/90 font-medium text-lg mb-1">
              Stay Cool, Stay Green
            </p>
            <p className="text-white/75 text-sm">
              {language === 'en' ?
              'Transforming ocean waste into sustainable cooling solutions' :
              language === 'es' ?
              'Transformando residuos oceánicos en soluciones de enfriamiento sostenibles' :
              '해양 폐기물을 지속 가능한 냉각 솔루션으로 전환'}
            </p>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>);

}
