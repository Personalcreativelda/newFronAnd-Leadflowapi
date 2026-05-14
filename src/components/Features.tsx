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
    description: "Nossa IA faz a qualificação, responde dúvidas e empurra o lead para a compra: 24h por dia, sem salário, sem desculpa.",
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

export const Features = () => {
  return (
    <section id="recursos" className="py-16 md:py-24 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: 1280 }}>
        <div className="text-center mb-10">
          <span className="section-pill">O fim das limitações</span>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-2" style={{ lineHeight: 1.55 }}>
            LeadsFlow API entrega ferramentas que grandes empresas usam, com a facilidade
            que pequenas e médias precisam para escalar sem contratar mais ninguém.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group stripe-card animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
                padding: 24,
              }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm mb-4"
                style={{ background: "rgba(83,58,253,0.08)" }}>
                <feature.icon className="h-6 w-6" style={{ color: "#533AFD" }} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-[#533AFD] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── YouTube player ── */}
        <div className="mt-16 w-full max-w-6xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/IyZXXVLKKXY?si=bCrrHzW0EdlZmm7H&rel=0&modestbranding=1"
              title="LeadsFlow — veja como funciona"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
