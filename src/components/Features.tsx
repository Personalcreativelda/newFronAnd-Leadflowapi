import {
  Inbox,
  LayoutDashboard,
  Megaphone,
  RefreshCw,
  Bot,
  Phone,
  CalendarCheck,
  LineChart,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Inbox,
    title: "Inbox multicanal",
    description: "WhatsApp Business, Instagram, Facebook, Telegram, email e chat do site numa só caixa.",
  },
  {
    icon: LayoutDashboard,
    title: "Funil de vendas",
    description: "Kanban com o valor de cada negócio, atualizado pela IA durante a conversa.",
  },
  {
    icon: Megaphone,
    title: "Campanhas",
    description: "WhatsApp, email e SMS em massa, com agendamento.",
  },
  {
    icon: RefreshCw,
    title: "Remarketing automático",
    description: "Fluxos que recuperam leads parados e respondem a quem volta a falar.",
  },
  {
    icon: Bot,
    title: "Agentes de vendas IA",
    description: "Respondem, qualificam, fazem follow-up e trabalham em equipa.",
  },
  {
    icon: Phone,
    title: "Agentes de voz",
    description: "Chamadas automáticas e respostas em áudio com voz natural.",
  },
  {
    icon: CalendarCheck,
    title: "Tarefas e agenda",
    description: "Marcações, lembretes e Google Calendar sincronizados.",
  },
  {
    icon: LineChart,
    title: "Relatórios",
    description: "Saiba que canal e campanha trazem mais vendas.",
  },
  {
    icon: Smartphone,
    title: "App, API e webhooks",
    description: "App Android que funciona sem rede, API pública e webhooks.",
  },
];

export const Features = () => {
  return (
    <section id="recursos" className="relative py-16 md:py-24">
      <div className="container mx-auto px-4" style={{ maxWidth: 1280 }}>
        <h2 className="stripe-h2 mb-8 text-center md:mb-12">Tudo num só lugar</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="stripe-card flex items-start gap-4 p-6 sm:block">
              <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-secondary sm:mb-5">
                <feature.icon className="h-[18px] w-[18px] text-[#A899FF]" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h3 className="mb-1 text-base font-medium text-foreground sm:mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
