import { CheckCircle2 } from "lucide-react";

const targets = [
  "É infoprodutor e quer aumentar a conversão dos seus leads",
  "É vendedor e quer atender mais clientes com mais velocidade",
  "É afiliado e precisa de estrutura para escalar campanhas",
  "É microempresário e quer gestão profissional sem custo de equipe",
  "É agência e quer centralizar a operação dos seus clientes",
  "É empreendedor digital e cansou de ferramentas limitadas",
];

export const TargetAudience = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          {/* Left: real dashboard screenshot */}
          <div className="relative float-animation">
            {/* Glow halo */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl" />

            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl glow-primary">
              {/* Browser chrome bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-card/90 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-3 py-0.5 bg-secondary/60 rounded-full text-xs text-muted-foreground">
                    app.leadsflowapi.com
                  </div>
                </div>
              </div>
              <img
                src="/dashboard.png"
                alt="LeadsFlow Dashboard — métricas de leads em tempo real"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 flex items-center gap-2 shadow-lg">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium">3.000+ empresas activas</span>
            </div>
          </div>

          {/* Right: target list */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              LeadsFlow é para você se:
            </h2>
            <ul className="space-y-4">
              {targets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


