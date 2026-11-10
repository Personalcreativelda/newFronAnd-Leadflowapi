import { Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SIGNUP_URL = "https://app.leadsflowapi.com/signup";

const messages = [
  { from: "lead", text: "Boa tarde! Ainda têm horário esta semana?" },
  { from: "ai", text: "Olá! Tenho sexta às 10h ou às 15h. Qual prefere?" },
  { from: "lead", text: "Sexta às 15h." },
  { from: "ai", text: "Marcado para sexta às 15h ✅ Envio-lhe um lembrete na véspera." },
];

export const AIHighlight = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4" style={{ maxWidth: 1280 }}>
        <div className="max-w-5xl mx-auto stripe-card p-5 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: copy */}
            <div>
              <span className="stripe-badge-info mb-4" style={{ display: "inline-block" }}>
                Agentes de vendas IA
              </span>
              <h2 className="stripe-h2 mb-4 md:mb-6" style={{ color: "hsl(var(--foreground))" }}>
                Uma equipa de vendas <span className="gradient-text">sempre online</span>
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground mb-6 md:mb-8" style={{ lineHeight: 1.55 }}>
                <p><strong className="text-foreground">6 especialistas</strong>: primeiro contacto, fecho, marcações, recuperação, pós-venda e cobranças.</p>
                <p>Passam a conversa entre si, fazem follow-ups e marcam no <strong className="text-foreground">Google Calendar</strong>.</p>
              </div>
              <Button variant="default" size="lg" className="group w-full sm:w-auto" onClick={() => window.location.href = SIGNUP_URL}>
                Criar o meu agente
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
              <div className="p-4 md:p-5 space-y-3">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === "lead" ? "justify-end" : "justify-start"}`}>
                    <div
                      className="max-w-[88%] md:max-w-[80%] px-3 md:px-4 py-2.5 text-sm leading-relaxed"
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
