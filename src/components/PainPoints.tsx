import { XCircle } from "lucide-react";

const painPoints = [
  "Leads chegando mas ninguém responde a tempo",
  "Perda de clientes por falta de follow-up",
  "Dados de leads espalhados em planilhas e chats",
  "Sem ideia de onde vêm os leads que convertem",
  "Atendimento manual que não escala",
  "CRM caro, complicado ou que ninguém usa",
];

export const PainPoints = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden" style={{ background: "hsl(var(--secondary))" }}>
      <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: 1280 }}>

        {/* Title only */}
        <div className="text-center mb-8">
          <h2 className="stripe-h2 mb-0">
            Você tem algum desses{" "}
            <span className="gradient-text">desafios</span>
            <span className="block">na sua empresa?</span>
          </h2>
        </div>

        {/* Pain points card */}
        <div className="max-w-4xl mx-auto stripe-card p-5 md:p-8">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {painPoints.map((point, index) => (
              <div
                key={point}
                className="flex items-start gap-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
              >
                <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#FF6118" }} />
                <span className="text-sm text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
