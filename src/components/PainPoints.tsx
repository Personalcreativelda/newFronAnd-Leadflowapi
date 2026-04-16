import { XCircle } from "lucide-react";

const painPoints = [
  "Leads chegando mas ninguém responde a tempo",
  "Perda de clientes por falta de follow-up",
  "Dados de leads espalhados em planilhas e chats",
  "Time comercial sem visibilidade do funil",
  "Sem ideia de onde vêm os leads que convertem",
  "Campanhas disparadas sem saber o resultado",
  "Atendimento manual que não escala",
  "Dificuldade em prever a receita do mês",
  "CRM caro, complicado ou que ninguém usa",
  "Entre outros...",
];

export const PainPoints = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-card/50 dark:bg-card/30">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-destructive/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Você tem algum desses{" "}
            <span className="gradient-text">desafios</span>
            <span className="block">na sua empresa?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Se marcou pelo menos um, você está deixando dinheiro na mesa todos os dias.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-card p-6 md:p-10">
          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((point, index) => (
              <div key={point} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}>
                <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-muted-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
