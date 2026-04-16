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

export const Features = () => {
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
              className="group glass-card p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
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

        {/* ── Product screenshots row ── */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Funil de Vendas */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/15 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-card/90 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-xs text-muted-foreground">Funil de Vendas — CRM Kanban</span>
                </div>
              </div>
              <img
                src="/funil-de-vendas.png"
                alt="Funil de Vendas Kanban da LeadsFlow API"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-primary text-sm font-bold">CRM</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Funil de Vendas Visual</h4>
                <p className="text-xs text-muted-foreground mt-1">Cada lead avança automaticamente entre as etapas. Drag & drop em tempo real.</p>
              </div>
            </div>
          </div>

          {/* Caixas de Entrada */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-accent/15 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-card/90 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 flex justify-center">
                  <span className="text-xs text-muted-foreground">Caixas de Entrada — Canais Conectados</span>
                </div>
              </div>
              <img
                src="/caixas-de-entrada.png"
                alt="Caixas de Entrada multi-canal da LeadsFlow API"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <span className="text-accent text-xs font-bold">API</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Integrações Multi-canal</h4>
                <p className="text-xs text-muted-foreground mt-1">WhatsApp, Instagram, Facebook, Telegram, Email, SMS e API personalizada — tudo num só lugar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
