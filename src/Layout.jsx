import React, { useState, useEffect, createContext, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Globe, Menu, X, Mail, Leaf } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { getT } from "@/i18n/translations";

export const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

const LOGO_URL =
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690e0407081d3063332a3e99/19088c638_KakaoTalk_20260203_182916893_02.png";

export default function Layout({ children }) {
  const location = useLocation();
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem('language');
    return stored === 'ko' ? 'ko' : 'en';
  });
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      const sections = ['home', 'problem', 'sustainability', 'advantages', 'usecases', 'product', 'about'];
      const scrollPosition = window.scrollY + 120;
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
    { name: t.problem, sectionId: "problem" },
    { name: t.sustainability, sectionId: "sustainability" },
    { name: t.advantages, sectionId: "advantages" },
    { name: t.useCases, sectionId: "usecases" },
    { name: t.product, sectionId: "product" },
    { name: t.about, sectionId: "about" },
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
      <div className="min-h-screen bg-background">
        <nav className={`sticky top-0 z-50 nav-glass transition-shadow ${scrolled ? 'shadow-soft' : ''}`}>
          <div className="max-w-7xl mx-auto px-6 py-3.5">
            <div className="flex items-center justify-between">
              <button onClick={() => scrollToSection('home')} className="flex items-center gap-2.5 group">
                <img src={LOGO_URL} alt="eaureco" className="h-7 w-auto" />
                <span className="hidden sm:block text-left leading-none">
                  <span className="block text-[10px] text-muted-foreground font-medium tracking-[0.18em] uppercase mt-1">
                    Engineered from Nature
                  </span>
                </span>
              </button>

              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.sectionId;
                  return (
                    <button
                      key={item.sectionId}
                      onClick={() => scrollToSection(item.sectionId)}
                      className={`text-sm px-3 py-2 rounded-full transition-colors ${
                        isActive
                          ? "text-primary font-semibold bg-secondary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                      }`}>
                      {item.name}
                    </button>
                  );
                })}

                <div className="w-px h-5 bg-border mx-2"></div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 px-2 py-2">
                      <Globe className="w-4 h-4" strokeWidth={1.75} />
                      <span>{language === 'ko' ? 'KR' : 'EN'}</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage('ko')}>한국어</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <button onClick={() => scrollToSection('product')} className="btn-primary ml-1 !px-5 !py-2.5 text-sm">
                  {t.cta}
                </button>
              </div>

              <button
                className="lg:hidden text-foreground p-2"
                aria-label="Toggle menu"
                onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {mobileOpen && (
              <div className="lg:hidden mt-3 pt-4 border-t border-border flex flex-col gap-1 pb-3">
                {navItems.map((item) => {
                  const isActive = activeSection === item.sectionId;
                  return (
                    <button
                      key={item.sectionId}
                      onClick={() => scrollToSection(item.sectionId)}
                      className={`text-left text-sm px-3 py-2.5 rounded-lg ${
                        isActive ? "text-primary font-semibold bg-secondary" : "text-muted-foreground"
                      }`}>
                      {item.name}
                    </button>
                  );
                })}
                <div className="flex items-center justify-between mt-2 px-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="w-4 h-4" />
                    <button onClick={() => setLanguage('en')} className={language === 'en' ? 'font-semibold text-foreground' : ''}>EN</button>
                    <span>/</span>
                    <button onClick={() => setLanguage('ko')} className={language === 'ko' ? 'font-semibold text-foreground' : ''}>KR</button>
                  </div>
                  <button onClick={() => scrollToSection('product')} className="btn-primary !px-5 !py-2.5 text-sm">
                    {t.cta}
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        <main>{children}</main>

        <footer className="section-deep">
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
            <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 md:gap-8">
              <div>
                <img src={LOGO_URL} alt="eaureco" className="h-8 w-auto brightness-0 invert mb-5" />
                <p className="text-white/65 text-sm leading-relaxed max-w-sm">
                  {language === 'ko'
                    ? '해양 폐기물이 되는 침입성 해조류를 회수해, 얼려도 부드러운 차세대 냉찜질 소재로 되살립니다.'
                    : 'We recover invasive seaweed before it becomes ocean waste and transform it into a next-generation cold-therapy material that stays soft when frozen.'}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs text-emerald-200/90 bg-white/5 border border-white/10 rounded-full px-3 py-1.5">
                  <Leaf className="w-3.5 h-3.5" />
                  {language === 'ko' ? '천연 해조류 유래 · KAIST 출발' : 'Seaweed-derived · Born at KAIST'}
                </div>
              </div>

              <div>
                <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">
                  {language === 'ko' ? '바로가기' : 'Explore'}
                </h4>
                <ul className="space-y-2.5">
                  {navItems.map((item) => (
                    <li key={item.sectionId}>
                      <button
                        onClick={() => scrollToSection(item.sectionId)}
                        className="text-white/60 hover:text-white text-sm transition-colors">
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">
                  {language === 'ko' ? '문의' : 'Get in touch'}
                </h4>
                <a
                  href="mailto:goforjiwon@kaist.ac.kr"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors mb-3">
                  <Mail className="w-4 h-4" />
                  goforjiwon@kaist.ac.kr
                </a>
                <p className="text-white/50 text-sm leading-relaxed">
                  KAIST, Daejeon, Republic of Korea
                </p>
              </div>
            </div>

            <div className="eco-divider my-9 opacity-40"></div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-white/45 text-xs">
                © {new Date().getFullYear()} eaureco. All rights reserved.
              </p>
              <p className="text-white/45 text-xs">
                {language === 'ko' ? '한국 특허 출원 완료 · 2026' : 'Korean patent filed · 2026'}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
}
