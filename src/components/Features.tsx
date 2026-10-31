import {
  LayoutDashboard,
  LineChart,
  Zap,
  Link2,
  Shield,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "CRM com Kanban",
    description: "Cada lead avança no funil automaticamente.",
  },
  {
    icon: LineChart,
    title: "Analytics em Tempo Real",
    description: "Saiba qual canal e campanha geram mais receita.",
  },
  {
    icon: Zap,
    title: "Automação de Funil",
    description: "Fluxos com gatilhos e follow-ups automáticos.",
  },
  {
    icon: Link2,
    title: "Integrações Nativas",
    description: "WhatsApp, Instagram, Facebook, webhooks e mais de 100 ferramentas.",
  },
  {
    icon: Shield,
    title: "100% LGPD Compliant",
    description: "Criptografia de ponta a ponta e conformidade legal.",
  },
  {
    icon: Smartphone,
    title: "App Mobile Incluso",
    description: "Leads, clientes e métricas no bolso, sem custo extra.",
  },
];

export const Features = () => {
  return (
    <section id="recursos" className="py-12 md:py-24 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: 1280 }}>
        <div className="text-center mb-8 md:mb-10">
          <h2 className="stripe-h2">O fim das limitações</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group stripe-card animate-fade-in-up flex items-start gap-4 p-4 sm:block sm:p-6"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 flex-shrink-0 rounded-sm sm:w-12 sm:h-12 sm:mb-4"
                style={{ background: "rgba(83,58,253,0.08)" }}>
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: "#533AFD" }} />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-[#533AFD] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
