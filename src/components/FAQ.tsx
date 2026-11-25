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
    question: "Há app para telemóvel?",
    answer: "Sim, a app Android está incluída. Continua a funcionar sem rede e envia tudo quando a ligação volta.",
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
    <section id="faq" className="relative py-16 md:py-24">
      <div className="container mx-auto px-4" style={{ maxWidth: 1280 }}>
        <div className="text-center mb-8 md:mb-10">
          <h2 className="stripe-h2">Ainda com dúvidas?</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-border bg-card px-5 md:px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-[#A899FF] hover:no-underline py-5 text-base font-normal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
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
