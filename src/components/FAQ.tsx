import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Não sou bom com tecnologia. Vou conseguir usar a LeadsFlow API?",
    answer: "Sim. A plataforma é simples e nossa equipe de suporte configura tudo em menos de 48h.",
  },
  {
    question: "Como conecto meus canais à plataforma?",
    answer: "No painel, abra Integrações, escolha o canal e siga o passo a passo. Para WhatsApp, basta escanear o QR Code.",
  },
  {
    question: "Meu computador precisa ficar ligado?",
    answer: "Não. A LeadsFlow API roda 100% na nuvem, 24h por dia.",
  },
  {
    question: "Quantos leads a IA atende ao mesmo tempo?",
    answer: "Sem limite. A Ava atende centenas de leads em simultâneo, sem fila.",
  },
  {
    question: "Quantos utilizadores podem aceder na mesma conta?",
    answer: "Os planos incluem 1 utilizador. Para equipas maiores, entre em contacto.",
  },
  {
    question: "Se eu não gostar, como cancelo?",
    answer: "Cancele no painel com 1 clique, a qualquer momento e sem multa. Mantém o acesso até o fim do período pago.",
  },
];


export const FAQ = () => {
  return (
    <section id="faq" className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: 1280 }}>
        <div className="text-center mb-8 md:mb-10">
          <h2 className="stripe-h2" style={{ color: "hsl(var(--foreground))" }}>
            Ainda com{" "}
            <span className="gradient-text">dúvidas?</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="animate-fade-in-up px-4 md:px-6"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid #D4DEE9",
                  borderRadius: 5,
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both',
                }}
              >
                <AccordionTrigger className="text-left text-foreground hover:text-[#533AFD] hover:no-underline py-4 md:py-5 text-sm font-normal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5" style={{ lineHeight: 1.55 }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
