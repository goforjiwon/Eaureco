import React, { useState, useEffect, createContext, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { House, AlertTriangle, Sparkles, Stethoscope, Package, Info, Globe } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { getT } from "@/i18n/translations";

export const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem('language');
    return stored === 'ko' ? 'ko' : 'en';
  });
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'problem', 'advantages', 'usecases', 'product', 'about'];
      const scrollPosition = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = getT(language).nav;

  const navItems = [
    { name: t.home, sectionId: "home", icon: House },
    { name: t.problem, sectionId: "problem", icon: AlertTriangle },
    { name: t.advantages, sectionId: "advantages", icon: Sparkles },
    { name: t.useCases, sectionId: "usecases", icon: Stethoscope },
    { name: t.product, sectionId: "product", icon: Package },
    { name: t.about, sectionId: "about", icon: Info },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen bg-white">
        <style>{`
          .nav-glass {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          }

          .section-surface {
            background: radial-gradient(circle at top center, rgba(20, 184, 166, 0.02), transparent 70%), #ffffff;
            border-bottom: 1px solid #f8fafc;
          }

          .section-muted {
            background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
            border-bottom: 1px solid #e2e8f0;
          }

          .content-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.03);
          }

          .highlight-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-left: 4px solid #0f766e;
            padding: 2rem;
            box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.04);
          }

          .accent-pill {
            display: inline-block;
            color: #0f766e;
            background: #f0fdfa;
            border: 1px solid #ccfbf1;
            padding: 0.25rem 0.75rem;
            border-radius: 999px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
        `}</style>

        <nav className="sticky top-0 z-50 nav-glass">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 group">
                <div>
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/19088c638_KakaoTalk_20260203_182916893_02.png"
                    alt="eaureco"
                    className="h-5 w-auto mb-1 opacity-90 grayscale contrast-200" />
                  <p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                    Engineered from Nature
                  </p>
                </div>
              </button>

              <div className="hidden lg:flex items-center gap-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.sectionId;
                  return (
                    <button
                      key={item.sectionId}
                      onClick={() => scrollToSection(item.sectionId)}
                      className={`text-sm transition-colors ${
                        isActive
                          ? "text-teal-800 font-semibold"
                          : "text-slate-500 hover:text-slate-900"
                      }`}>
                      {item.name}
                    </button>
                  );
                })}

                <div className="w-px h-4 bg-slate-200 mx-2"></div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-sm text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1.5">
                      <Globe className="w-4 h-4" strokeWidth={1.5} />
                      <span>{language === 'ko' ? 'KR' : 'EN'}</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage('ko')}>한국어</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <button
                className="lg:hidden text-slate-600 p-2"
                onClick={() => setMobileOpen(!mobileOpen)}>
                {language === 'ko' ? '메뉴' : 'Menu'}
              </button>
            </div>

            {mobileOpen && (
              <div className="lg:hidden mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4 pb-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.sectionId;
                  return (
                    <button
                      key={item.sectionId}
                      onClick={() => scrollToSection(item.sectionId)}
                      className={`text-left text-sm ${
                        isActive ? "text-teal-800 font-semibold" : "text-slate-600"
                      }`}>
                      {item.name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        <main>{children}</main>

        <footer className="bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/802916f9d_KakaoTalk_20260203_182916893_03.png"
              alt="eaureco"
              className="h-8 w-auto mx-auto mb-4 opacity-50 grayscale" />
            <p className="text-slate-400 text-sm tracking-wide mb-8">
              {language === 'ko'
                ? '해양 폐기물로부터 새로운 냉찜질 소재를 만듭니다.'
                : 'New cold therapy materials from ocean waste.'}
            </p>
            <div className="w-12 h-px bg-slate-800 mx-auto mb-8"></div>
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} eaureco. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
}