import { Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DoubleCheck } from "./DoubleCheck";

const SIGNUP_URL = "https://app.leadsflowapi.com/signup";

// Uma conversa real de marcação; do lado da empresa (direita) responde a Ava
const messages = [
  { from: "lead", text: "Boa tarde! Ainda têm horário esta semana?", time: "23:14" },
  { from: "ai", text: "Olá! Tenho sexta às 10h ou às 15h. Qual prefere?", time: "23:14" },
  { from: "lead", text: "Sexta às 15h.", time: "23:16" },
  { from: "ai", text: "Marcado para sexta às 15h. Envio-lhe um lembrete na véspera.", time: "23:16" },
];

export const AIHighlight = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4" style={{ maxWidth: 1280 }}>
        <div className="stripe-card mx-auto max-w-5xl p-6 md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">

            <div>
              <p className="mb-4 text-sm font-medium text-[#A899FF]">Agentes de vendas IA</p>
              <h2 className="stripe-h2 mb-6">
                Uma equipa de vendas
                <span className="title-quiet block">sempre online</span>
              </h2>
              <div className="mb-8 space-y-4 text-base text-muted-foreground">
                <p><strong className="font-medium text-foreground">6 especialistas</strong>: primeiro contacto, fecho, marcações, recuperação, pós-venda e cobranças.</p>
                <p>Passam a conversa entre si, fazem follow-ups e marcam no <strong className="font-medium text-foreground">Google Calendar</strong>.</p>
              </div>
              <Button size="lg" className="group w-full sm:w-auto" onClick={() => (window.location.href = SIGNUP_URL)}>
                Criar o meu agente
                <ArrowRight className="transition-transform duration-150 group-hover:translate-x-0.5" />
              </Button>
            </div>

            {/* Conversa de exemplo */}
            <div className="overflow-hidden rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-3 border-b border-border bg-secondary px-5 py-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#533AFD]">
                  <Bot className="h-[18px] w-[18px] text-white" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Ava</div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" aria-hidden="true" />
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 p-4 md:p-5">
                {messages.map((msg, i) => {
                  const ai = msg.from === "ai";
                  return (
                    <div key={i} className={`flex ${ai ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed text-foreground ${
                          ai ? "rounded-br-sm bg-[rgba(83,58,253,0.18)]" : "rounded-bl-sm border border-border bg-secondary"
                        }`}
                      >
                        {msg.text}
                        <span className="ml-3 inline-flex translate-y-0.5 items-center gap-1 align-baseline font-mono text-[11px] tabular-nums text-muted-foreground">
                          {msg.time}
                          {ai && <DoubleCheck className="h-2.5 w-[15px]" />}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
