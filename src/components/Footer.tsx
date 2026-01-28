import { Zap } from "lucide-react";

const footerLinks = {
  Produto: [
    { name: "Recursos", id: "recursos" },
    { name: "Integrações", id: "recursos" },
    { name: "Preços", id: "planos" },
    { name: "Changelog", id: null },
  ],
  Empresa: [
    { name: "Sobre", id: null },
    { name: "Blog", id: null },
    { name: "Carreiras", id: null },
    { name: "Contato", id: null },
  ],
  Legal: [
    { name: "Privacidade", id: null },
    { name: "Termos", id: null },
    { name: "LGPD", id: null },
    { name: "Segurança", id: null },
  ],
  Suporte: [
    { name: "Central de Ajuda", id: null },
    { name: "Documentação", id: null },
    { name: "API", id: null },
    { name: "Status", id: null },
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
                    <button
                      onClick={() => scrollToSection(link.id)}
                      disabled={!link.id}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors disabled:cursor-default disabled:hover:text-muted-foreground text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 LeadsFlow API. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
