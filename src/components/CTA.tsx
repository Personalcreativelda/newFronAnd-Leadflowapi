import { useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ContactFormDialog";

const SIGNUP_URL = "https://app.leadsflowapi.com/signup";

export const CTA = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl opacity-50" />
          
          <div className="relative glass-card p-12 md:p-16 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-8">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Pronto para <span className="gradient-text">transformar</span> suas vendas?
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                Junte-se a mais de 3.000 empresas que já estão maximizando seus resultados com LeadsFlow API.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="gradient" size="lg" className="group w-full sm:w-auto sm:px-8" onClick={() => window.location.href = SIGNUP_URL}>
                  Começar Gratuitamente
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="glass" size="lg" className="w-full sm:w-auto" onClick={() => setDialogOpen(true)}>
                  Falar com Especialista
                </Button>
              </div>

              <ContactFormDialog open={dialogOpen} onOpenChange={setDialogOpen} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
