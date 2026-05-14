import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const SIGNUP_URL = "https://app.leadsflowapi.com/signup";
const DASHBOARD_URL = "https://app.leadsflowapi.com/dashboard";

const plans = [
  {
    name: "Free",
    description: "Plano de entrada",
    price: "0",
    popular: false,
    current: true,
    ctaLabel: "Plano Gratuito",
    ctaDisabled: true,
    ctaUrl: DASHBOARD_URL,
    features: [
      "Até 100 leads",
      "100 mensagens individuais/mês",
      "50 campanhas em massa/mês",
      "1 canal conectado",
      "Painel básico de métricas",
      "Suporte por email (48h)",
    ],
  },
  {
    name: "Business",
    description: "Para crescimento acelerado",
    price: "20",
    popular: true,
    current: false,
    ctaLabel: "Selecionar Plano",
    ctaDisabled: false,
    ctaUrl: SIGNUP_URL,
    features: [
      "Até 2.000 leads",
      "1.000 mensagens/mês",
      "5.000 campanhas em massa/mês",
      "Até 5 canais conectados",
      "Assistentes de IA (marketplace + 3 custom)",
      "1 agente de voz",
      "Painel completo e personalizável",
      "Relatórios em tempo real",
      "Todas as integrações",
      "API de acesso e HTTP endpoint",
      "Suporte prioritário (4h)",
    ],
  },
  {
    name: "Enterprise",
    description: "Para operações de alta escala",
    price: "40",
    popular: false,
    current: false,
    ctaLabel: "Selecionar Plano",
    ctaDisabled: false,
    ctaUrl: SIGNUP_URL,
    features: [
      "Leads ilimitados",
      "Mensagens individuais ilimitadas",
      "Campanhas em massa ilimitadas",
      "Canais ilimitados",
      "Tudo do Business, mais:",
      "Agentes de voz ilimitados",
      "Gerente de sucesso dedicado",
      "SLA garantido 99.9%",
      "Suporte prioritário 24/7",
      "Onboarding personalizado",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="planos" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(255,97,24,0.04) 0%, rgba(83,58,253,0.04) 100%)" }}
      />

      <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: 1280 }}>
        <div className="text-center mb-10">
          <span className="section-pill">Planos e Preços</span>
          <h2 className="stripe-h2 mb-4">
            Invista menos do que um funcionário.
            <span className="block gradient-text">Produza muito mais.</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto" style={{ lineHeight: 1.55 }}>
            Comece grátis, sem cartão de crédito. Faça upgrade quando quiser ou cancele com 1 clique.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="relative flex flex-col animate-fade-in-up"
              style={{
                background: plan.popular ? "rgba(83,58,253,0.08)" : "hsl(var(--card))",
                border: plan.popular ? "1px solid rgba(83,58,253,0.5)" : "1px solid hsl(var(--border))",
                borderRadius: 8,
                padding: "32px",
                boxShadow: plan.popular
                  ? "0 0 32px rgba(83, 58, 253, 0.15)"
                  : "0 1px 3px rgba(0,0,0,0.3)",
                animationDelay: `${index * 150}ms`,
                animationFillMode: "both",
              }}
            >
              {plan.current && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="stripe-badge-info">Plano Atual</div>
                </div>
              )}

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white"
                    style={{ background: "linear-gradient(135deg, #533AFD 0%, #FF6118 100%)", borderRadius: 4 }}>
                    <Sparkles className="h-4 w-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">USD</span>
                  <span className="text-5xl font-light text-white">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
                      style={{ background: "rgba(83,58,253,0.15)", borderRadius: "50%" }}>
                      <Check className="h-3 w-3" style={{ color: "#A899FF" }} />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                size="lg"
                disabled={plan.ctaDisabled}
                onClick={() => window.location.href = plan.ctaUrl}
              >
                {plan.ctaLabel}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
