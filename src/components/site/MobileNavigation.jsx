import React, { useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function MobileNavigation({ open, onOpenChange, items, activeSection, onNavigate, language, setLanguage, cta }) {
  const ko = language === "ko";
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => { if (media.matches) onOpenChange(false); };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, [onOpenChange]);
  return (
    <div className="flex items-center gap-2 xl:hidden">
      <a href="mailto:goforjiwon@kaist.ac.kr" className="btn-primary !min-h-[44px] !px-3 !py-2 !text-xs">{cta}</a>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetTrigger asChild>
          <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground" aria-label={ko ? "메뉴 열기" : "Open menu"}><Menu className="h-5 w-5" /></button>
        </SheetTrigger>
        <SheetContent className="flex w-[min(90vw,24rem)] flex-col overflow-y-auto" aria-describedby={undefined}>
          <SheetTitle className="border-b border-border pb-5 text-left">{ko ? "둘러보기" : "Explore Eaureco"}</SheetTitle>
          <nav aria-label={ko ? "모바일 메뉴" : "Mobile navigation"} className="grid gap-1">
            {items.map((item) => <button key={item.sectionId} onClick={() => onNavigate(item.sectionId)} aria-current={activeSection === item.sectionId ? "location" : undefined} className={`min-h-12 rounded-lg px-4 py-3 text-left text-base transition-colors ${activeSection === item.sectionId ? "bg-secondary font-semibold text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{item.name}</button>)}
          </nav>
          <div className="mt-auto border-t border-border pt-5">
            <div className="mb-5 flex gap-2" role="group" aria-label={ko ? "언어 선택" : "Select language"}>
              {[{ code: "en", label: "English" }, { code: "ko", label: "한국어" }].map(({ code, label }) => <button key={code} onClick={() => setLanguage(code)} aria-pressed={language === code} className={`min-h-11 flex-1 rounded-lg border px-4 text-sm ${language === code ? "border-primary bg-secondary font-semibold text-primary" : "border-border text-muted-foreground"}`}>{label}</button>)}
            </div>
            <a href="mailto:goforjiwon@kaist.ac.kr" onClick={() => onOpenChange(false)} className="btn-primary w-full">{cta}</a>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}