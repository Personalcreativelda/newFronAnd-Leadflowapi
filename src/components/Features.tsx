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
    <section id="recursos" className="py-12 md:py-24 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: 1280 }}>
        <div className="text-center mb-8 md:mb-10">
          <h2 className="stripe-h2">Tudo num só lugar</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group stripe-card animate-fade-in-up flex items-start gap-4 p-4 sm:block sm:p-6"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 flex-shrink-0 rounded-sm sm:w-12 sm:h-12 sm:mb-4"
                style={{ background: "rgba(83,58,253,0.08)" }}>
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: "#533AFD" }} />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-[#533AFD] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
