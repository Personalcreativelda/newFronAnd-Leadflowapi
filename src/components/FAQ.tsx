import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o período de teste gratuito?",
    answer: "Você tem acesso completo a todas as funcionalidades por 14 dias, sem necessidade de cartão de crédito. Ao final do período, pode escolher o plano que melhor se adapta às suas necessidades.",
  },
  {
    question: "Posso integrar com meu CRM atual?",
    answer: "Sim! Oferecemos integrações nativas com os principais CRMs do mercado, além de nossa API completa que permite integração com qualquer sistema.",
  },
  {
    question: "Os dados estão seguros?",
    answer: "Absolutamente. Utilizamos criptografia de ponta, servidores no Brasil e estamos em total conformidade com a LGPD. Seus dados são seu patrimônio e tratamos com máxima segurança.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim, não há fidelidade ou multa. Você pode cancelar seu plano quando quiser diretamente pelo painel, sem burocracia.",
  },
  {
    question: "Vocês oferecem suporte em português?",
    answer: "Sim! Todo nosso suporte é feito em português, 24 horas por dia, 7 dias por semana. Você pode nos contatar por chat, email ou WhatsApp.",
  },
  {
    question: "Quantos leads posso gerenciar?",
    answer: "Depende do plano escolhido. O plano Gratuito suporta até 500 leads/mês, o Business até 3.000 e o Enterprise oferece leads ilimitados.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas{" "}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossa plataforma.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
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
