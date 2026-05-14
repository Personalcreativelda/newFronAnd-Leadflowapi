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
      <div className="container mx-auto px-4" style={{ maxWidth: 1280 }}>
        <div className="relative max-w-4xl mx-auto">
          {/* Glow blur behind card */}
          <div className="absolute inset-0 blur-3xl opacity-30"
            style={{ background: "linear-gradient(135deg, rgba(83,58,253,0.35) 0%, rgba(255,97,24,0.25) 100%)" }} />

          <div className="relative animate-fade-in-up text-center overflow-hidden"
            style={{
              background: "hsl(var(--card))",
              border: "1px solid rgba(83,58,253,0.3)",
              borderRadius: 12,
              padding: "48px",
              boxShadow: "0 0 48px rgba(83,58,253,0.12)",
            }}>
            {/* Corner glows */}
            <div className="absolute top-0 left-0 w-40 h-40 opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(83,58,253,0.4) 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,97,24,0.35) 0%, transparent 70%)" }} />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg mb-8"
                style={{ background: "#533AFD" }}>
                <Zap className="h-8 w-8 text-white" />
              </div>

              <h2 className="stripe-h2 mb-6">
                Pronto para parar de{" "}
                <span className="gradient-text">perder leads</span>
                <span className="block">e começar a fechar mais?</span>
              </h2>

              <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10" style={{ lineHeight: 1.55 }}>
                Mais de 3.000 empresas já pararam de depender de sorte — e passaram a usar dados, automação e IA para crescer. A sua vez.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="default" size="lg" className="group w-full sm:w-auto sm:px-8" onClick={scrollToPlans}>
                  Contratar Plano!
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = DASHBOARD_URL}>
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
