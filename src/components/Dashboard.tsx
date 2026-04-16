import { useState } from "react";
import { Activity, LayoutDashboard, GitBranch, Inbox } from "lucide-react";

const tabs = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    img: "/dashboard.png",
    alt: "LeadsFlow Dashboard com métricas de leads em tempo real",
    badge: "Tempo Real",
    description: "Todas as métricas dos seus leads, conversões e campanhas num único painel atualizado ao segundo.",
  },
  {
    id: "funil",
    label: "Funil de Vendas",
    icon: GitBranch,
    img: "/funil-de-vendas.png",
    alt: "Funil de Vendas Kanban com leads por etapa",
    badge: "CRM Kanban",
    description: "Drag & drop entre etapas: Novos → Contatados → Qualificados → Negociação → Convertidos. Tudo visual, tudo automático.",
  },
  {
    id: "inbox",
    label: "Caixas de Entrada",
    icon: Inbox,
    img: "/caixas-de-entrada.png",
    alt: "Configuração de canais: WhatsApp, Instagram, Facebook, Telegram e mais",
    badge: "Multi-canal",
    description: "Conecte WhatsApp, Instagram, Facebook, Telegram, Email e muito mais — tudo centralizado numa única plataforma.",
  },
];

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Activity className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Plataforma completa</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tudo que acontece com seus leads
            <span className="block gradient-text">em tempo real</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chega de adivinhar. Veja exatamente de onde vêm seus melhores clientes,
            qual campanha está convertendo e qual está desperdiçando seu dinheiro.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Screenshot showcase */}
        <div className="max-w-6xl mx-auto">
          {/* Floating context badge */}
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium">{active.badge}</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-md text-right hidden sm:block">
              {active.description}
            </p>
          </div>

          {/* Image frame with glow + float */}
          <div
            key={activeTab}
            className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl glow-primary
                       animate-fade-up"
            style={{ animationDuration: "0.5s" }}
          >
            {/* Subtle top bar chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-card/90 border-b border-border/50 backdrop-blur-sm">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-secondary/60 rounded-full text-xs text-muted-foreground">
                  app.leadsflowapi.com
                </div>
              </div>
            </div>

            {/* Product screenshot */}
            <img
              src={active.img}
              alt={active.alt}
              className="w-full h-auto block object-cover"
              loading="lazy"
            />

            {/* Subtle gradient overlay at bottom edges */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>

          {/* Mobile description */}
          <p className="sm:hidden text-sm text-muted-foreground text-center mt-4 px-4">
            {active.description}
          </p>

          {/* Floating stat chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { label: "57 Leads activos", color: "text-primary" },
              { label: "Taxa: 32.5%", color: "text-green-500" },
              { label: "Actualizado agora", color: "text-accent" },
            ].map((chip) => (
              <div key={chip.label} className="glass-card px-4 py-2 flex items-center gap-2">
                <div className={`h-2 w-2 rounded-full ${chip.color} bg-current animate-pulse`} />
                <span className={`text-xs font-medium ${chip.color}`}>{chip.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
