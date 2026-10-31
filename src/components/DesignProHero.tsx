import { ArrowRight } from "lucide-react";
import { ShinyText } from "./ShinyText";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

export const DesignProHero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen min-h-[100svh] w-full overflow-hidden bg-black font-sans"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Video background */}
      <video
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content — pt-20 offsets the fixed h-14 header */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 pb-6 pt-20 text-center md:px-8">

        {/* Badge */}
        <p className="mb-4 text-[11px] uppercase tracking-tight text-white/80 sm:text-xs md:mb-6 md:text-sm">
          + de 3.000 Empresas já confiam na LeadsFlow
        </p>

        {/* Main heading — clamp scales smoothly from 320px to 1440px */}
        <h1 className="tracking-tighter text-white" style={{ lineHeight: 0.9 }}>
          <span className="block font-medium text-[clamp(2.4rem,12vw,5rem)] md:text-[clamp(2.4rem,10vw,9rem)]">
            Multiplica
          </span>
          <span className="block font-medium text-[clamp(2.4rem,12vw,5rem)] md:text-[clamp(2.4rem,10vw,9rem)]">
            <ShinyText
              text="as tuas Vendas."
              baseColor="#64CEFB"
              shineColor="#ffffff"
              speed={3}
              spread={100}
            />
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-5 max-w-md px-2 text-base text-white/70 sm:max-w-lg md:mt-8 md:px-0">
          A nossa IA qualifica, nutre e converte os teus leads automaticamente.
        </p>

        {/* CTA */}
        <button
          className="group mt-7 flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85 md:mt-8 md:px-8 md:py-4 md:text-base"
          style={{ background: "#533AFD" }}
          onClick={() => (window.location.href = "https://app.leadsflowapi.com/signup")}
        >
          Começar Grátis
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};
