import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Não sou bom com tecnologia. Vou conseguir usar a LeadsFlow API?",
    answer: "Sim, sem problema. A plataforma foi construída para ser simples e intuitiva — mesmo para quem nunca usou um CRM. Além disso, nossa equipe de suporte configura tudo pra você em menos de 48h e você começa a usar sem precisar entender de tecnologia.",
  },
  {
    question: "Como conecto meus canais (WhatsApp, Instagram, formulários) à plataforma?",
    answer: "É simples: no painel, acesse a secção de Integrações, escolha o canal desejado e siga o passo a passo. Para WhatsApp, basta escanear o QR Code. Para formulários e outros canais, disponibilizamos um link ou snippet para copiar e colar.",
  },
  {
    question: "Quantas fontes de leads posso conectar?",
    answer: "Depende do plano. No Business e Enterprise pode conectar fontes ilimitadas — WhatsApp, Instagram, Facebook, formulários, landing pages, webhooks e muito mais. Todos os leads entram centralizados num único dashboard.",
  },
  {
    question: "Meu computador precisa ficar ligado para as automações funcionarem?",
    answer: "Não. A LeadsFlow API roda 100% na nuvem. As automações, a IA e os fluxos funcionam 24h por dia mesmo com seu computador desligado. Basta configurar uma vez e o sistema trabalha por você.",
  },
  {
    question: "O que é um fluxo de automação?",
    answer: "Um fluxo é uma sequência de ações automáticas que acontecem quando um lead entra na plataforma. Por exemplo: lead chega → IA responde → qualifica interesse → agenda follow-up → move para a etapa correta no CRM. Tudo sem intervenção manual.",
  },
  {
    question: "Quantos fluxos de automação posso criar?",
    answer: "No plano Business e Enterprise, os fluxos são ilimitados. Você pode criar fluxos diferentes para cada canal, campanha ou perfil de cliente — sem restrição.",
  },
  {
    question: "Quantos leads a IA consegue atender ao mesmo tempo?",
    answer: "Sem limite. A Ava, nossa IA, atende centenas de leads simultaneamente sem perder qualidade ou tempo de resposta. Não há fila, não há atraso.",
  },
  {
    question: "O que são etiquetas e como funcionam?",
    answer: "Etiquetas são marcadores que você (ou a IA) aplica automaticamente nos leads para classificá-los: 'quente', 'frio', 'aguardando proposta', etc. Elas permitem filtrar, segmentar e disparar automações específicas para cada grupo.",
  },
  {
    question: "Quantos utilizadores podem aceder à plataforma na mesma conta?",
    answer: "Os planos atuais incluem 1 utilizador por padrão. Para equipas maiores, entre em contacto — temos condições especiais para múltiplos acessos com permissões por função.",
  },
  {
    question: "Como funciona a biblioteca de automações prontas?",
    answer: "A LeadsFlow disponibiliza fluxos e automações prontos para os casos de uso mais comuns: follow-up pós lead, recuperação de carrinho, qualificação por setor, entre outros. É só importar, personalizar com os dados da sua empresa e ativar.",
  },
  {
    question: "Se eu não gostar, como cancelo?",
    answer: "Sem burocracia. Cancele diretamente no painel com 1 clique, a qualquer momento. Sem multa, sem ligação para atendimento, sem fidelidade. Se cancelar, mantém acesso até o fim do período pago.",
  },
];


export const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ainda com{" "}
            <span className="gradient-text">dúvidas?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respondemos as perguntas mais comuns. Se ainda tiver dúvida, fale com a gente — estamos a 1 mensagem de distância.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card px-6 border-none animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
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
