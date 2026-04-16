import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  LineChart,
  Zap,
  Bot,
  Link2,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "CRM com Kanban",
    description: "Cada lead avança no funil automaticamente. Visualize o pipeline, rotule contacts e feche mais negócios sem esforço manual.",
  },
  {
    icon: LineChart,
    title: "Analytics em Tempo Real",
    description: "Saiba exatamente qual canal, campanha e fonte gera mais receita. Dados atualizados ao segundo, exportáveis com 1 clique.",
  },
  {
    icon: Zap,
    title: "Automação de Funil",
    description: "Configure fluxos com gatilhos, condições e follow-ups automáticos. Seus leads são nutridos mesmo quando você está dormindo.",
  },
  {
    icon: Bot,
    title: "IA que Vende por Você",
    description: "Nossa IA faz a qualificação, responde dúvidas e empurra o lead para a compra — 24h por dia, sem salário, sem desculpa.",
  },
  {
    icon: Link2,
    title: "Integrações Nativas",
    description: "Conecte com WhatsApp, Instagram, Facebook, webhooks e mais de 100 ferramentas. Seus dados centralizados em 1 lugar.",
  },
  {
    icon: Shield,
    title: "100% LGPD Compliant",
    description: "Criptografia de ponta a ponta, servidores no Brasil e total conformidade legal. Seus dados são seu patrimônio.",
  },
  {
    icon: Smartphone,
    title: "App Mobile Incluso",
    description: "Acompanhe seus leads, responda clientes e veja métricas de qualquer lugar. Seu negócio no bolso, sem custo extra.",
  },
  {
    icon: Users,
    title: "Gestão de Equipe",
    description: "Distribua leads automaticamente, defina metas por vendedor e acompanhe quem está performando e quem precisa de suporte.",
  },
];

const screenshots = [
  {
    image: "/funil-de-vendas.png",
    alt: "Funil de Vendas Kanban da LeadsFlow API",
    title: "Funil de Vendas Visual",
    description: "Cada lead avança automaticamente entre as etapas. Drag & drop em tempo real.",
    tag: "CRM",
    tagColor: "primary",
  },
  {
    image: "/caixas-de-entrada.png",
    alt: "Caixas de Entrada multi-canal da LeadsFlow API",
    title: "Integrações Multi-canal",
    description: "WhatsApp, Instagram, Facebook, Telegram, Email, SMS e API personalizada — tudo num só lugar.",
    tag: "API",
    tagColor: "accent",
  },
  {
    image: "/dashboard.png",
    alt: "Dashboard de Analytics da LeadsFlow API",
    title: "Analytics em Tempo Real",
    description: "Saiba exatamente qual canal, campanha e fonte gera mais receita. Dados atualizados ao segundo.",
    tag: "DATA",
    tagColor: "green",
  }
];

export const Features = () => {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="recursos" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            O fim das limitações
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Não é só mais um CRM.
            <span className="block gradient-text">É o seu time de vendas completo.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            LeadsFlow API entrega ferramentas que grandes empresas usam — com a facilidade
            que pequenas e médias precisam para escalar sem contratar mais ninguém.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Product screenshots slideshow ── */}
        <div className="mt-16 relative w-full max-w-6xl mx-auto">
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            {screenshots.map((shot, index) => (
              <div
                key={shot.title}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{
                  opacity: activeScreenshot === index ? 1 : 0,
                  zIndex: activeScreenshot === index ? 1 : 0,
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                  {/* Titlebar */}
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-card/90 border-b border-border/50">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <span className="text-xs text-muted-foreground">{shot.title}</span>
                    </div>
                  </div>
                  {/* Image */}
                  <img
                    src={shot.image}
                    alt={shot.alt}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  {/* Caption overlay at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-5 flex items-end gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 backdrop-blur flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{shot.tag}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{shot.title}</h4>
                      <p className="text-xs text-white/70 mt-0.5">{shot.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveScreenshot(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeScreenshot === index ? "bg-primary scale-125" : "bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
