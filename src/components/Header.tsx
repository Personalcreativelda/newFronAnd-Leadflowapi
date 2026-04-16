import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const LOGIN_URL = "https://app.leadsflowapi.com/login";
const SIGNUP_URL = "https://app.leadsflowapi.com/signup";

const navLinks = [
  { name: "Início", id: "hero" },
  { name: "Recursos", id: "recursos" },
  { name: "Planos", id: "planos" },
  { name: "FAQ", id: "faq" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 md:top-2 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollToSection("hero")} className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              LeadsFlow
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="default" onClick={() => window.location.href = LOGIN_URL}>
              Entrar
            </Button>
            <Button variant="gradient" size="default" onClick={() => window.location.href = SIGNUP_URL}>
              Começar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    scrollToSection(link.id);
                    setIsOpen(false);
                  }}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <span className="text-base text-muted-foreground">Tema</span>
                  <ThemeToggle />
                </div>
                <Button variant="ghost" size="default" onClick={() => window.location.href = LOGIN_URL}>
                  Entrar
                </Button>
                <Button variant="gradient" size="default" onClick={() => window.location.href = SIGNUP_URL}>
                  Começar Grátis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
