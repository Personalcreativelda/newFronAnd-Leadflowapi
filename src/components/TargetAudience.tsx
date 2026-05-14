import { CheckCircle2 } from "lucide-react";

const targets = [
  "É infoprodutor e quer aumentar a conversão dos seus leads",
  "É vendedor e quer atender mais clientes com mais velocidade",
  "É afiliado e precisa de estrutura para escalar campanhas",
  "É microempresário e quer gestão profissional sem custo de equipe",
  "É agência e quer centralizar a operação dos seus clientes",
  "É empreendedor digital e cansou de ferramentas limitadas",
];

const VIDEO_ID = "IyZXXVLKKXY";

export const TargetAudience = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4" style={{ maxWidth: 1280 }}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">

          {/* Left: YouTube player — clean, no frame */}
          <div className="relative">
            {/* 16:9 responsive wrapper */}
            <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?si=bCrrHzW0EdlZmm7H&rel=0&modestbranding=1`}
                title="LeadsFlow — veja como funciona"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 flex items-center gap-2 px-4 py-2 shadow-lg"
              style={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: 8,
              }}
            >
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium">3.000+ empresas activas</span>
            </div>
          </div>

          {/* Right: target list */}
          <div>
            <h2 className="stripe-h2 mb-8">
              LeadsFlow é para você se:
            </h2>
            <ul className="space-y-4">
              {targets.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#533AFD" }} />
                  <span className="text-sm text-muted-foreground" style={{ lineHeight: 1.55 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
