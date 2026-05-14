import React, { useEffect, useState } from "react";

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
  const [displayValue, setDisplayValue] = useState(0);
  const circumference = 2 * Math.PI * 45; // Increased radius
  const offset = circumference - (displayValue / 100) * circumference;
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = value;
          const duration = 1000; // Animation duration in ms
          const increment = end / (duration / 16); // ~60fps

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setDisplayValue(end);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.ceil(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value]);

  return (
    <div ref={ref} className="text-center flex flex-col items-center gap-4" style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 5, padding: 32, boxShadow: "0px 1px 2px rgba(0,0,0,0.04)" }}>
      {/* SVG ring */}
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            className="text-secondary"
          />
          <circle
            cx="50" cy="50" r="45"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1s ease-out" }}
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#533AFD" />
              <stop offset="100%" stopColor="#FF6118" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-foreground">{displayValue}%</span>
        </div>
      </div>

      <div className="font-semibold text-foreground text-base">{label}</div>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export const WhyUs = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: "hsl(var(--secondary))" }}>
      <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: 1280 }}>
        <div className="max-w-5xl mx-auto">
          {/* Top copy */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
            <h2 className="stripe-h2" style={{ color: "hsl(var(--foreground))" }}>
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
            {stats.map((s, index) => (
              <div key={s.label} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}>
                <CircleStat {...s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
