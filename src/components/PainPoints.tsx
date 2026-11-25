import { X } from "lucide-react";

const painPoints = [
  "Chegam leads e ninguém responde a tempo",
  "Clientes perdidos por falta de follow-up",
  "Contactos espalhados por folhas de cálculo e chats",
  "Não sabe de onde vêm os leads que compram",
  "Atendimento manual que não acompanha o crescimento",
  "Um CRM caro, complicado ou que ninguém usa",
];

export const PainPoints = () => {
  return (
    <section className="relative py-16 md:py-24" style={{ background: "hsl(var(--secondary))" }}>
      <div className="container mx-auto px-4" style={{ maxWidth: 1280 }}>

        <h2 className="stripe-h2 mx-auto mb-8 max-w-2xl text-center md:mb-12">
          Algum destes problemas
          <span className="title-quiet block">acontece na sua empresa?</span>
        </h2>

        <div className="stripe-card mx-auto max-w-4xl p-6 md:p-8">
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <X className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-base text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
