import { Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SIGNUP_URL = "https://app.leadsflowapi.com/signup";

const messages = [
  { from: "lead", text: "Boa tarde! Vi o anúncio de vocês. Como funciona?" },
  { from: "ai", text: "Olá! Aqui é a Ava, da LeadsFlow. Vi que você se cadastrou — posso te explicar tudo agora mesmo. O que mais te interessa: automatizar follow-ups ou ter um dashboard completo dos seus leads?" },
  { from: "lead", text: "Os dois, na verdade. Tenho leads caindo em WhatsApp e email e não consigo acompanhar." },
  { from: "ai", text: "Entendo perfectamente. Nós centralizamos tudo e a IA faz a qualificação por você. Você prefere começar com o plano gratuito ou já quer ver o Business com automações ilimitadas?" },
];

export const AIHighlight = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4" style={{ maxWidth: 1280 }}>
        <div className="max-w-5xl mx-auto stripe-card" style={{ padding: "48px" }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: copy */}
            <div>
              <span className="stripe-badge-info mb-4" style={{ display: "inline-block" }}>
                Atendente IA
              </span>
              <h2 className="stripe-h2 mb-6" style={{ color: "hsl(var(--foreground))" }}>
                Conheça a <span className="gradient-text">Ava</span>
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground mb-8" style={{ lineHeight: 1.55 }}>
                <p>Nossa Inteligência Artificial treinada para transformar leads curiosos em clientes compradores.</p>
                <p>Com a Ava, seus leads são qualificados, respondidos e empurrados para a compra — automaticamente, sem você precisar tocar em nada.</p>
                <p>A Ava trabalha <strong className="text-foreground">todos os dias da semana, a qualquer hora</strong>, sem salário, sem férias e sem décimo terceiro.</p>
                <p>Com pouca configuração, a Ava entrega um desempenho até <strong className="text-foreground">11x melhor do que um atendente humano</strong>.</p>
              </div>
              <Button variant="default" size="lg" className="group" onClick={() => window.location.href = SIGNUP_URL}>
                Ativar a Ava Agora
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Right: mock chat */}
            <div className="overflow-hidden" style={{ border: "1px solid hsl(var(--border))", borderRadius: 5 }}>
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4" style={{ background: "hsl(var(--secondary))", borderBottom: "1px solid hsl(var(--border))" }}>
                <div className="flex h-9 w-9 items-center justify-center rounded-sm" style={{ background: "#533AFD" }}>
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Ava</div>
                  <div className="flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#22c55e" }} />
                    <span className="text-xs text-muted-foreground">Online agora</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-3 max-h-72 overflow-y-auto">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === "lead" ? "justify-end" : "justify-start"}`}>
                    <div
                      className="max-w-[80%] px-4 py-2.5 text-sm leading-relaxed"
                      style={{
                        borderRadius: msg.from === "lead" ? "5px 5px 0 5px" : "5px 5px 5px 0",
                        background: msg.from === "lead" ? "rgba(83,58,253,0.12)" : "hsl(var(--secondary))",
                        color: "hsl(var(--foreground))",
                        border: msg.from === "ai" ? "1px solid hsl(var(--border))" : "none",
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                <div className="flex justify-start">
                  <div className="px-4 py-3 flex gap-1" style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))", borderRadius: "5px 5px 5px 0" }}>
                    {[0, 150, 300].map((d) => (
                      <div
                        key={d}
                        className="h-2 w-2 rounded-full animate-bounce"
                        style={{ background: "#533AFD", animationDelay: `${d}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
