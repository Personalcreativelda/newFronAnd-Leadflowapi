import React, { useEffect, useState } from "react";

const stats = [
  {
    value: 47,
    label: "mais conversão",
    description: "Face a antes da LeadsFlow. Leads qualificados e abordados no momento certo.",
  },
  {
    value: 62,
    label: "menos custos operacionais",
    description: "Face a antes da LeadsFlow. A IA faz o trabalho repetitivo.",
  },
  {
    value: 94,
    label: "dos leads resolvidos sem intervenção",
    description: "A IA qualifica e responde, mesmo de madrugada.",
  },
];

// Número que conta até ao valor quando entra no ecrã
const CountUp = ({ value }: { value: number }) => {
  const [display, setDisplay] = useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplay(value);
          return;
        }
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 900, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref}>{display}%</span>;
};

export const WhyUs = () => {
  return (
    <section className="relative py-16 md:py-24" style={{ background: "hsl(var(--secondary))" }}>
      <div className="container mx-auto px-4" style={{ maxWidth: 1280 }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 grid items-end gap-4 md:mb-12 md:grid-cols-2 md:gap-8">
            <h2 className="stripe-h2">Porquê a LeadsFlow API?</h2>
            <p className="text-base text-muted-foreground">
              <strong className="font-medium text-foreground">Em menos de 48h</strong>, a sua operação fica pronta para vender 24 horas por dia.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="stripe-card p-6 md:p-8">
                <div className="text-5xl font-normal tabular-nums tracking-tight text-foreground md:text-6xl">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-2 text-base font-medium text-foreground">{s.label}</div>
                <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
