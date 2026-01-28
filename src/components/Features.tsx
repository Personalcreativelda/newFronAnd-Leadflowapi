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
    title: "Painel Inteligente",
    description: "Visualize todas as métricas importantes em um dashboard personalizável e intuitivo.",
  },
  {
    icon: LineChart,
    title: "Relatórios em Tempo Real",
    description: "Filtre, exporte e analise dados atualizados instantaneamente.",
  },
  {
    icon: Zap,
    title: "Automação Total",
    description: "Configure fluxos automáticos para qualificar e nutrir seus leads.",
  },
  {
    icon: Bot,
    title: "IA Integrada",
    description: "Use inteligência artificial para prever conversões e otimizar campanhas.",
  },
  {
    icon: Link2,
    title: "Integrações",
    description: "Conecte com WhatsApp, Instagram, Facebook e mais de 100 ferramentas.",
  },
  {
    icon: Shield,
    title: "Segurança LGPD",
    description: "Seus dados protegidos com criptografia e conformidade total.",
  },
  {
    icon: Smartphone,
    title: "App Mobile",
    description: "Acesse seus leads e métricas de qualquer lugar, a qualquer hora.",
  },
  {
    icon: Users,
    title: "Gestão de Equipe",
    description: "Distribua leads, defina metas e acompanhe a performance do time.",
  },
];

export const Features = () => {
  return (
    <section id="recursos" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            Recursos Poderosos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tudo que você precisa para{" "}
            <span className="gradient-text">vender mais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            LeadsFlow API oferece ferramentas completas para captar, qualificar
            e converter leads de forma eficiente.
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
      </div>
    </section>
  );
};
