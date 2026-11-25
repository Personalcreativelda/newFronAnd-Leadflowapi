import { Zap } from "lucide-react";
import { SiFacebook, SiInstagram } from "@icons-pack/react-simple-icons";

// As páginas legais e a documentação vivem no app (as mesmas que a Meta verifica)
const APP_URL = "https://app.leadsflowapi.com";
const SUPPORT_EMAIL = "suporte@leadsflowapi.com";

const footerLinks = {
  Produto: [
    { name: "Recursos", href: "#recursos" },
    { name: "Planos", href: "#planos" },
    { name: "Perguntas frequentes", href: "#faq" },
    { name: "Entrar", href: `${APP_URL}/login` },
  ],
  Empresa: [
    { name: "Quem somos", href: `${APP_URL}/privacidade#quem-somos` },
    { name: "Contacto", href: `mailto:${SUPPORT_EMAIL}` },
  ],
  Legal: [
    { name: "Política de privacidade", href: `${APP_URL}/privacidade` },
    { name: "Termos de utilização", href: `${APP_URL}/termos` },
    { name: "Eliminação de dados", href: `${APP_URL}/privacidade#eliminacao-de-dados` },
    { name: "Segurança", href: `${APP_URL}/privacidade#seguranca` },
  ],
  Suporte: [
    { name: "Documentação da API", href: `${APP_URL}/docs` },
    { name: "Falar com o suporte", href: `mailto:${SUPPORT_EMAIL}` },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/leadsflowapi", Icon: SiInstagram },
  { name: "Facebook", href: "https://www.facebook.com/leadsflowapi", Icon: SiFacebook },
];

const FooterLink = ({ name, href, className }: { name: string; href: string; className: string }) => {
  // Secção desta página: desliza até lá
  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        {name}
      </a>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} className={className} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {name}
    </a>
  );
};

export const Footer = () => {
  return (
    <footer style={{ background: "hsl(var(--card))", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      {/* pb-24 no telemóvel: o botão flutuante do chat não tapa os últimos links */}
      <div className="container mx-auto px-4 sm:px-6 pt-12 pb-24 md:py-20" style={{ maxWidth: 1280 }}>

        {/* Main grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">

          {/* Brand col */}
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <a href="#hero" aria-label="LeadsFlow, voltar ao início" className="inline-flex items-center gap-2.5 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "#533AFD" }}>
                <Zap className="h-4.5 w-4.5 text-white" style={{ width: 18, height: 18 }} />
              </div>
              <span className="text-base font-semibold" style={{ color: "#FFFFFF" }}>LeadsFlow</span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 200 }}>
              Inbox, funil e agentes de IA para transformar leads em clientes.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-medium text-white">
                {category}
              </h4>
              <ul className="md:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <FooterLink
                      name={link.name}
                      href={link.href}
                      className="inline-block py-3 text-sm text-white/60 transition-colors duration-150 hover:text-[#A899FF] md:py-0"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 md:mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-sm order-2 sm:order-1" style={{ color: "rgba(255,255,255,0.55)" }}>
            © {new Date().getFullYear()} LeadsFlow API. Todos os direitos reservados.
          </p>

          <ul className="order-1 flex items-center gap-2 sm:order-2" aria-label="Redes sociais">
            {socialLinks.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`LeadsFlow no ${name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-colors duration-150 hover:border-white/20 hover:text-white"
                >
                  <Icon size={18} color="currentColor" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
