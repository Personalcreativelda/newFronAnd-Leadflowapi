import { Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const footerLinks = {
  Produto: [
    { name: "Recursos", id: "recursos", href: null },
    { name: "Integrações", id: "recursos", href: null },
    { name: "Preços", id: "planos", href: null },
    { name: "Changelog", id: null, href: null },
  ],
  Empresa: [
    { name: "Sobre", id: null, href: null },
    { name: "Blog", id: null, href: null },
    { name: "Carreiras", id: null, href: null },
    { name: "Contato", id: null, href: null },
  ],
  Legal: [
    { name: "Privacidade", id: null, href: "/politica" },
    { name: "Termos", id: null, href: "/termos" },
    { name: "LGPD", id: null, href: "/politica" },
    { name: "Segurança", id: null, href: null },
  ],
  Suporte: [
    { name: "Central de Ajuda", id: null, href: null },
    { name: "Documentação", id: null, href: null },
    { name: "API", id: null, href: null },
    { name: "Status", id: null, href: null },
  ],
};

const scrollToSection = (id: string | null) => {
  if (!id) return;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-border/50 bg-card/50 dark:bg-card/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">LeadsFlow</span>
            </a>
            <p className="text-sm text-muted-foreground">
              Transformando leads em clientes com o poder da IA.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href ? (
                      <button
                        onClick={() => navigate(link.href!)}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.id)}
                        disabled={!link.id}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors disabled:cursor-default disabled:hover:text-muted-foreground text-left"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LeadsFlow API. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => navigate("/politica")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacidade
            </button>
            <button onClick={() => navigate("/termos")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Termos
            </button>
            <a href="https://www.instagram.com/leadsflowapi" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="https://www.facebook.com/leadsflowapi" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
