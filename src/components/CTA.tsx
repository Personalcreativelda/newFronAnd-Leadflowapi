import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const DASHBOARD_URL = "https://app.leadsflowapi.com/dashboard";

const scrollToPlans = () => {
  const element = document.getElementById("planos");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const CTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl opacity-50" />
          
          <div className="relative glass-card p-8 md:p-12 text-center overflow-hidden animate-fade-in-up">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-8">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Pronto para parar de{" "}
                <span className="gradient-text">perder leads</span>
                <span className="block">e começar a fechar mais?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                Mais de 3.000 empresas já pararam de depender de sorte — e passaram a usar dados, automação e IA para crescer. A sua vez.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="gradient" size="lg" className="group w-full sm:w-auto sm:px-8" onClick={scrollToPlans}>
                  Contratar Plano!
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="glass" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = DASHBOARD_URL}>
                  Teste grátis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
