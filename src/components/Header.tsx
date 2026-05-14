import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const LOGIN_URL  = "https://app.leadsflowapi.com/login";
const SIGNUP_URL = "https://app.leadsflowapi.com/signup";

const navLinks = [
  { name: "Início",   id: "hero" },
  { name: "Recursos", id: "recursos" },
  { name: "Planos",   id: "planos" },
  { name: "FAQ",      id: "faq" },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Header = () => {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // check on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "hsl(var(--background))",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="mx-auto flex h-14 items-center justify-between px-4 sm:px-6 md:px-8" style={{ maxWidth: 1280 }}>

        {/* ── Logo ── */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2.5 group flex-shrink-0"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md" style={{ background: "#533AFD" }}>
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-semibold text-white transition-opacity group-hover:opacity-75">
            LeadsFlow
          </span>
        </button>

        {/* ── Desktop nav — pill container ── */}
        <nav className="hidden lg:flex items-center gap-0.5 rounded-full border px-2 py-1.5 transition-all duration-300"
          style={{
            borderColor: scrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.15)",
            background:  scrolled ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.05)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-1.5 rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all duration-150"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* ── Desktop CTAs ── */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <button
            onClick={() => (window.location.href = LOGIN_URL)}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors px-3 py-2"
          >
            Entrar
          </button>
          <Button
            size="default"
            onClick={() => (window.location.href = SIGNUP_URL)}
            style={{ background: "#533AFD" }}
            className="hover:opacity-90 transition-opacity"
          >
            Começar Grátis
          </Button>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {isOpen && (
        <div
          className="lg:hidden px-4 pb-5 pt-2 border-t"
          style={{
            background: "rgba(8,8,13,0.97)",
            backdropFilter: "blur(16px)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => { scrollToSection(link.id); setIsOpen(false); }}
                className="text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all text-left px-3 py-2.5 rounded-lg"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="flex flex-col gap-2 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <button
              onClick={() => (window.location.href = LOGIN_URL)}
              className="text-sm text-white/70 hover:text-white transition-colors text-left px-3 py-2.5"
            >
              Entrar
            </button>
            <Button
              size="default"
              className="w-full"
              onClick={() => (window.location.href = SIGNUP_URL)}
              style={{ background: "#533AFD" }}
            >
              Começar Grátis
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
