import { DoubleCheck } from "./DoubleCheck";
import { Button } from "@/components/ui/button";

const SIGNUP_URL = "https://app.leadsflowapi.com/signup";

const plans = [
  {
    name: "Free",
    price: "0",
    popular: false,
    ctaLabel: "Começar grátis",
    ctaDisabled: false,
    ctaUrl: SIGNUP_URL,
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
    price: "20",
    popular: true,
    ctaLabel: "Escolher plano",
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
    price: "40",
    popular: false,
    ctaLabel: "Escolher plano",
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
      "SLA garantido de 99,9%",
      "Suporte prioritário 24/7",
      "Onboarding personalizado",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="planos" className="relative py-16 md:py-24">
      <div className="container mx-auto px-4" style={{ maxWidth: 1280 }}>
        <div className="mb-10 text-center md:mb-12">
          <h2 className="stripe-h2 mb-4">
            Custa menos do que um funcionário
            <span className="title-quiet block">e produz muito mais</span>
          </h2>
          <p className="text-base text-muted-foreground">Comece grátis, sem cartão de crédito</p>
        </div>

        {/* Empilhado até lg, com o plano mais popular primeiro */}
        <div className="mx-auto grid max-w-md gap-6 lg:max-w-5xl lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 lg:p-8 ${
                plan.popular
                  ? "order-first border-[rgba(168,153,255,0.45)] bg-[hsl(240_6%_11%)] lg:order-none"
                  : "border-border bg-card"
              }`}
            >
              <div className="mb-6 lg:mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-foreground">{plan.name}</h3>
                  {plan.popular && (
                    <span className="rounded-md bg-[#533AFD] px-2 py-0.5 text-xs font-medium text-white">Mais popular</span>
                  )}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-5xl font-normal tabular-nums tracking-tight text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">USD/mês</span>
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) =>
                  feature.endsWith(":") ? (
                    // Subtítulo da lista, não um recurso
                    <li key={feature} className="pt-2 text-sm font-medium text-foreground">{feature}</li>
                  ) : (
                    <li key={feature} className="flex items-start gap-3">
                      <DoubleCheck className="mt-1" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  )
                )}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                size="lg"
                disabled={plan.ctaDisabled}
                onClick={() => (window.location.href = plan.ctaUrl)}
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
