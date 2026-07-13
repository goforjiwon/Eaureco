import React, { useState, useEffect, createContext, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Globe, Menu, X, Mail, MapPin } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { getT } from "@/i18n/translations";
import logoUrl from "@/assets/brand/eaureco-logo.png";

export const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState(() => localStorage.getItem("language") === "ko" ? "ko" : "en");
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);
  useEffect(() => {
    const targetId = location.hash.replace("#", "");
    if (!targetId) {
      window.scrollTo(0, 0);
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
      const sections = ["home", "problem", "sustainability", "advantages", "usecases", "product", "about"];
      const position = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= position) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${sectionId}`);
    }
    setMobileOpen(false);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen bg-background">
        <nav className={`sticky top-0 z-50 nav-glass ${scrolled ? "shadow-soft" : ""}`}>
          <div className="site-shell h-[76px] flex items-center justify-between">
            <button onClick={() => scrollToSection("home")} className="flex items-center gap-4 group" aria-label="Eaureco home">
              <img src={logoUrl} alt="eaureco" width="916" height="220" decoding="async" className="h-8 w-auto" />
              <span className="hidden sm:block h-5 w-px bg-border" />
              <span className="hidden sm:block text-[9px] text-muted-foreground font-semibold tracking-[0.22em] uppercase">
                Engineered from Nature
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <button key={item.sectionId} onClick={() => scrollToSection(item.sectionId)} className={`relative py-7 text-[13px] transition-colors ${activeSection === item.sectionId ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`}>
                    {item.name}
                    {activeSection === item.sectionId && <span className="absolute bottom-0 inset-x-0 h-[2px] bg-primary" />}
                  </button>
                ))}
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground" aria-label="Change language">
                    <Globe className="w-4 h-4" /> {language === "ko" ? "KR" : "EN"}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("ko")}>한국어</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="mailto:goforjiwon@kaist.ac.kr" className="btn-primary !min-h-[46px] !px-5 !py-2.5">
                {t.cta}<ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <button className="lg:hidden p-2 text-foreground" aria-label="Toggle menu" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden bg-white border-t border-border px-4 py-4 shadow-xl">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <button key={item.sectionId} onClick={() => scrollToSection(item.sectionId)} className={`text-left px-3 py-3 rounded-lg text-sm ${activeSection === item.sectionId ? "bg-secondary text-primary font-semibold" : "text-muted-foreground"}`}>
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between gap-4 mt-4 pt-4 border-t border-border">
                <div className="flex gap-3 text-sm">
                  <button onClick={() => setLanguage("en")} className={language === "en" ? "font-bold" : "text-muted-foreground"}>EN</button>
                  <button onClick={() => setLanguage("ko")} className={language === "ko" ? "font-bold" : "text-muted-foreground"}>KR</button>
                </div>
                <a href="mailto:goforjiwon@kaist.ac.kr" className="btn-primary !min-h-[44px] !py-2">{t.cta}</a>
              </div>
            </div>
          )}
        </nav>

        <main>{children}</main>

        <footer className="section-deep border-t border-white/10">
          <div className="site-shell py-12">
            <div className="grid lg:grid-cols-[1.35fr_.8fr_1fr] gap-10 items-start">
              <div>
                <img src={logoUrl} alt="eaureco" width="916" height="220" loading="lazy" decoding="async" className="h-9 w-auto brightness-0 invert" />
                <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                  {language === "ko" ? "침입성 해조류를 회수해, 얼려도 부드러운 차세대 냉찜질 소재로 되살립니다." : "We recover invasive seaweed and transform it into next-generation cold therapy that stays soft when frozen."}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-white/40 mb-4">Explore</p>
                <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                  {navItems.map((item) => <button key={item.sectionId} onClick={() => scrollToSection(item.sectionId)} className="text-left text-sm text-white/65 hover:text-white">{item.name}</button>)}
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/65">
                <a href="mailto:goforjiwon@kaist.ac.kr" className="flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4" />goforjiwon@kaist.ac.kr</a>
                <p className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />KAIST, Daejeon, Republic of Korea</p>
              </div>
            </div>
            <div className="eco-divider my-8" />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
              <p>© {new Date().getFullYear()} eaureco. All rights reserved.</p>
              <p>{language === "ko" ? "사업자등록번호 109-34-09676 · 대표자 박지원" : "Korean patent filed · Business No. 109-34-09676"}</p>
            </div>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
}
