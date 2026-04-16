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
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            Planos e Preços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Invista menos do que um funcionário.
            <span className="block gradient-text">Produza muito mais.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece grátis, sem cartão de crédito. Faça upgrade quando quiser — ou cancele com 1 clique.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-card p-6 md:p-8 ${
                plan.popular
                  ? "border-primary/50 glow-primary md:scale-105 lg:scale-110 z-10"
                  : ""
              }`}
            >
              {plan.current && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-muted text-foreground text-sm font-medium border border-border/70">
                    Plano Atual
                  </div>
                </div>
              )}

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium">
                    <Sparkles className="h-4 w-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">USD</span>
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "gradient" : "outline"}
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
