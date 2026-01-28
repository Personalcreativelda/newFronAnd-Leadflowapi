import { ArrowRight, Play, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const SIGNUP_URL = "https://app.leadsflowapi.com/signup";
const DEMO_URL = "https://www.youtube.com/watch?v=CwZdUoe1LZQ";

const benefits = [
  "Sem cartão de crédito necessário",
  "Configure em menos de 5 minutos",
  "Suporte 24/7 em português",
];

const stats = [
  { value: "3k+", label: "Clientes" },
  { value: "95%", label: "Satisfação" },
  { value: "24/7", label: "Suporte" },
];

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 hero-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Confiado por mais de 3.000 empresas
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up delay-100">
            Maximize vendas com
            <span className="block gradient-text mt-2">LeadsFlow API</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up delay-200">
            Automatize seu funil de vendas, acompanhe cada interação e converta
            mais leads com o poder da inteligência artificial.
          </p>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-10 animate-fade-up delay-300">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-16 animate-fade-up delay-400 px-4 sm:px-0">
            <Button variant="gradient" size="lg" className="group w-full sm:w-auto" onClick={() => window.location.href = SIGNUP_URL}>
              Começar Gratuitamente
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="glass" size="lg" className="group w-full sm:w-auto" onClick={() => window.location.href = DEMO_URL}>
              <Play className="h-5 w-5" />
              Assistir Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 sm:gap-12 md:gap-20 animate-fade-up delay-500">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
