import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const SIGNUP_URL = "https://app.leadsflowapi.com/signup";

const plans = [
  {
    name: "Gratuito",
    description: "Perfeito para começar",
    price: "0",
    popular: false,
    features: [
      "Até 500 leads/mês",
      "Dashboard básico",
      "Suporte por email",
      "1 usuário",
    ],
  },
  {
    name: "Business",
    description: "Mais popular",
    price: "20",
    popular: true,
    features: [
      "Até 3.000 leads/mês",
      "Dashboard avançado",
      "Todas as integrações",
      "Suporte prioritário",
      "1 usuário",
      "Automações ilimitadas",
      "API completa",
    ],
  },
  {
    name: "Enterprise",
    description: "Para grandes equipes",
    price: "50",
    popular: false,
    features: [
      "Leads ilimitados",
      "Dashboard personalizado",
      "Integrações custom",
      "Gerente de sucesso dedicado",
      "1 usuário",
      "SLA garantido",
      "Treinamento exclusivo",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="planos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-6">
            Planos & Preços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Escolha o plano{" "}
            <span className="gradient-text">ideal para você</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comece grátis por 14 dias. Sem compromisso, cancele quando quiser.
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
                onClick={() => window.location.href = SIGNUP_URL}
              >
                Começar Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
