const stats = [
  {
    value: 47,
    label: "Aumento na conversão",
    description:
      "Leads qualificados automaticamente e abordados no momento certo — por uma IA que entende de resultado.",
  },
  {
    value: 62,
    label: "Redução de custos operacionais",
    description:
      "Reduza seu time de atendimento sem perder performance. Automatize o que ninguém consegue escalar no braço.",
  },
  {
    value: 94,
    label: "Leads resolvidos automaticamente",
    description:
      "Enquanto você dorme, a LeadsFlow está qualificando, respondendo e aquecendo leads. Sem salário. Sem desculpa.",
  },
];

const CircleStat = ({ value, label, description }: { value: number; label: string; description: string }) => {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="glass-card p-6 text-center flex flex-col items-center gap-3">
      {/* SVG ring */}
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-secondary"
          />
          <circle
            cx="50" cy="50" r="40"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-foreground">{value}%</span>
        </div>
      </div>

      <div className="font-semibold text-foreground text-sm">{label}</div>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-card/50 dark:bg-card/30">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Top copy */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Por que a <span className="gradient-text">LeadsFlow API</span>
              <span className="block">é a escolha definitiva</span>
              <span className="block">para quem quer crescer?</span>
            </h2>
            <div className="space-y-5 text-muted-foreground">
              <p>
                Somos a plataforma mais completa para captura, qualificação e conversão de leads com IA.
              </p>
              <p>
                Criamos um <strong className="text-foreground">sistema que automatiza de verdade</strong> — sem gambiarra,
                sem planilha, sem depender de alguém lembrando de fazer follow-up.
              </p>
              <p>
                Você tem suporte especializado que configura tudo em tempo recorde.{" "}
                <strong className="text-foreground">Em menos de 48h sua operação vira uma máquina de conversão</strong> — pronta para vender 24h por dia.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <CircleStat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
