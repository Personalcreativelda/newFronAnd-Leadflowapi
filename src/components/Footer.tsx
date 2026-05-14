import { Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const footerLinks = {
  Produto: [
    { name: "Recursos",    id: "recursos", href: null },
    { name: "Integrações", id: "recursos", href: null },
    { name: "Preços",      id: "planos",   href: null },
    { name: "Changelog",   id: null,       href: null },
  ],
  Empresa: [
    { name: "Sobre",     id: null, href: null },
    { name: "Blog",      id: null, href: null },
    { name: "Carreiras", id: null, href: null },
    { name: "Contato",   id: null, href: null },
  ],
  Legal: [
    { name: "Privacidade", id: null, href: "/politica" },
    { name: "Termos",      id: null, href: "/termos" },
    { name: "LGPD",        id: null, href: "/politica" },
    { name: "Segurança",   id: null, href: null },
  ],
  Suporte: [
    { name: "Central de Ajuda", id: null, href: null },
    { name: "Documentação",     id: null, href: null },
    { name: "API",              id: null, href: null },
    { name: "Status",           id: null, href: null },
  ],
};

const scrollToSection = (id: string | null) => {
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer style={{ background: "hsl(var(--card))", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20" style={{ maxWidth: 1280 }}>

        {/* Main grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <a href="#" className="inline-flex items-center gap-2.5 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-md" style={{ background: "#533AFD" }}>
                <Zap className="h-4.5 w-4.5 text-white" style={{ width: 18, height: 18 }} />
              </div>
              <span className="text-base font-semibold" style={{ color: "#FFFFFF" }}>LeadsFlow</span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)", maxWidth: 200 }}>
              Transformando leads em clientes com o poder da IA.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#FFFFFF", letterSpacing: "0.08em" }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href ? (
                      <button
                        onClick={() => navigate(link.href!)}
                        className="text-sm text-left transition-colors duration-150"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#A899FF")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                      >
                        {link.name}
                      </button>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.id)}
                        disabled={!link.id}
                        className="text-sm text-left transition-colors duration-150 disabled:cursor-default"
                        style={{ color: "#6B7280" }}
                        onMouseEnter={e => { if (link.id) e.currentTarget.style.color = "#A899FF"; }}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
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

        {/* Bottom bar */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-sm order-2 sm:order-1" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} LeadsFlow API. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6 order-1 sm:order-2">
            {[
              { label: "Privacidade", action: () => navigate("/politica") },
              { label: "Termos",      action: () => navigate("/termos") },
            ].map(item => (
              <button
                key={item.label}
                onClick={item.action}
                className="text-sm transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#A899FF")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >
                {item.label}
              </button>
            ))}
            {[
              { label: "Instagram", href: "https://www.instagram.com/leadsflowapi" },
              { label: "Facebook",  href: "https://www.facebook.com/leadsflowapi" },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#A899FF")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
