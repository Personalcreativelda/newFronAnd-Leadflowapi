import { Header } from "@/components/Header";
import { DesignProHero } from "@/components/DesignProHero";
import { PainPoints } from "@/components/PainPoints";
import { TargetAudience } from "@/components/TargetAudience";
import { WhyUs } from "@/components/WhyUs";
import { Features } from "@/components/Features";
import { AIHighlight } from "@/components/AIHighlight";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DesignProHero />
      <main>
        <PainPoints />
        <TargetAudience />
        <WhyUs />
        <Features />
        <AIHighlight />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
