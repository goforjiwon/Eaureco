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
      problem: "문제",
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
            background: rgba(248, 250, 252, 0.88);
            border: 1px solid rgba(148, 163, 184, 0.2);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }

          .neo-shadow {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }

          .neo-text {
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
            letter-spacing: -0.02em;
          }

          .section-surface {
            background:
              radial-gradient(circle at 20% -15%, rgba(20, 184, 166, 0.07), transparent 45%),
              radial-gradient(circle at 90% 0%, rgba(16, 185, 129, 0.08), transparent 42%),
              #ffffff;
            border-top: 1px solid rgba(226, 232, 240, 0.9);
            border-bottom: 1px solid rgba(226, 232, 240, 0.9);
          }

          .section-muted {
            background:
              linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
            border-top: 1px solid rgba(226, 232, 240, 0.9);
            border-bottom: 1px solid rgba(226, 232, 240, 0.9);
          }

          .content-card {
            background: linear-gradient(180deg, #ffffff 0%, #fcfefe 100%);
            border: 1px solid #e2e8f0;
            border-radius: 1rem;
            box-shadow: 0 14px 30px rgba(15, 23, 42, 0.07);
          }

          .highlight-card {
            background: linear-gradient(135deg, #ecfdf5 0%, #ccfbf1 100%);
            border: 1px solid #99f6e4;
            border-radius: 1rem;
            box-shadow: 0 20px 44px rgba(13, 148, 136, 0.16);
          }

          .accent-pill {
            display: inline-block;
            background: linear-gradient(180deg, #f0fdf4 0%, #dcfce7 100%);
            color: #065f46;
            border: 1px solid #86efac;
            border-radius: 9999px;
            padding: 0.35rem 0.9rem;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }
        `}</style>

        {/* Navigation */}
        <nav className="sticky top-0 z-50 nav-glass border-b border-slate-200/80">
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
                      "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md" :
                      "text-slate-700 hover:bg-slate-100"}`
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
                    <button className="ml-2 px-4 py-2 rounded-lg font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all flex items-center gap-2 border border-slate-200">
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
        <footer className="border-t border-emerald-900/40 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 py-12">
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
              '바다를 덮는 해조류가 아이스팩이 됩니다'}
            </p>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>);

}