import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SIGNUP_URL = "https://app.leadsflowapi.com/signup";

const scrollToPlans = () => {
  document.getElementById("planos")?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const CTA = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4" style={{ maxWidth: 1280 }}>
        <div className="stripe-card mx-auto max-w-4xl p-8 text-center md:p-16">
          <h2 className="stripe-h2 mx-auto mb-4 max-w-xl">Pronto para deixar de perder leads?</h2>
          <p className="mx-auto mb-8 max-w-md text-base text-muted-foreground md:mb-10">
            Ligue o WhatsApp e os outros canais e deixe a IA responder desde o primeiro dia.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" className="group w-full sm:w-auto" onClick={() => (window.location.href = SIGNUP_URL)}>
              Começar grátis
              <ArrowRight className="transition-transform duration-150 group-hover:translate-x-0.5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={scrollToPlans}>
              Ver planos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
