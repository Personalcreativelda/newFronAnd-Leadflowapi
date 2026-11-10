import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Não sou bom com tecnologia. Vou conseguir usar a LeadsFlow API?",
    answer: "Sim. A plataforma é simples e a nossa equipa de suporte ajuda a configurar tudo em menos de 48h.",
  },
  {
    question: "Como ligo os meus canais?",
    answer: "No painel, abra Canais e escolha o canal. WhatsApp Business, Instagram e Facebook ligam-se com o login da Meta.",
  },
  {
    question: "Os agentes de IA podem marcar e desmarcar?",
    answer: "Sim. Consultam a agenda (incluindo o Google Calendar) antes de propor horários e criam a tarefa sozinhos.",
  },
  {
    question: "Posso ter vários agentes no mesmo canal?",
    answer: "Sim. Trabalham em equipa: cada conversa fica com um, que a passa ao colega certo quando é preciso.",
  },
  {
    question: "Tem app para telemóvel?",
    answer: "Sim, app Android incluído. Continua a funcionar sem rede e envia tudo quando a ligação volta.",
  },
  {
    question: "Posso ligar o meu sistema?",
    answer: "Sim. API pública com tokens, webhooks e documentação em app.leadsflowapi.com/docs.",
  },
  {
    question: "Se eu não gostar, como cancelo?",
    answer: "Cancele no painel com 1 clique, a qualquer momento e sem multa. Mantém o acesso até ao fim do período pago.",
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
