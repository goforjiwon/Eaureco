import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Waves, Leaf, Scale, Mail } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "Home", icon: Waves },
    { name: "The Problem", path: "Problem", icon: Leaf },
    { name: "Our Solution", path: "Solution", icon: Leaf },
    { name: "Comparison", path: "Comparison", icon: Scale },
    { name: "Contact", path: "Contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Inter:wght@400;500;600&display=swap');
        
        :root {
          --neo-green: #10b981;
          --neo-lime: #84cc16;
          --neo-teal: #14b8a6;
          --neo-dark: #065f46;
          --neo-light: #d1fae5;
        }
        
        .nav-glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .neo-shadow {
          box-shadow: 8px 8px 0px rgba(16, 185, 129, 0.4);
        }
        
        .neo-text {
          font-family: 'Space Grotesk', sans-serif;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-4 z-50 mx-4 md:mx-8 mt-4">
        <div className="nav-glass rounded-none border-4 border-black neo-shadow max-w-7xl mx-auto">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to={createPageUrl("Home")} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 border-4 border-black transform -rotate-3">
                  <div className="w-full h-full flex items-center justify-center transform rotate-3">
                    <Waves className="w-6 h-6 text-black" strokeWidth={3} />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold neo-text text-black">eaureco</h1>
                  <p className="text-xs text-emerald-700 font-medium">Stay Cool, Stay Green.</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === createPageUrl(item.path);
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={createPageUrl(item.path)}
                      className={`px-4 py-2 border-3 border-black font-semibold transition-all transform hover:translate-y-[-2px] ${
                        isActive
                          ? "bg-lime-400 text-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                          : "bg-white text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" strokeWidth={2.5} />
                        {item.name}
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden px-4 py-2 bg-lime-400 border-3 border-black font-bold">
                MENU
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden mt-4 pt-4 border-t-3 border-black grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === createPageUrl(item.path);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={createPageUrl(item.path)}
                    className={`px-3 py-2 border-3 border-black font-semibold text-sm ${
                      isActive
                        ? "bg-lime-400 text-black"
                        : "bg-white text-black"
                    }`}
                  >
                    <div className="flex items-center gap-2 justify-center">
                      <Icon className="w-4 h-4" strokeWidth={2.5} />
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pb-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-gradient-to-r from-emerald-500 to-teal-500 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold neo-text text-white mb-2">eaureco</h2>
          <p className="text-white font-semibold text-lg mb-4">STAY COOL, STAY GREEN.</p>
          <p className="text-white/90">Transforming ocean waste into sustainable cooling solutions</p>
        </div>
      </footer>
    </div>
  );
}