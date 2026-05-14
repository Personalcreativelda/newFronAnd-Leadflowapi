import { ArrowRight } from "lucide-react";
import { ShinyText } from "./ShinyText";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

export const DesignProHero = () => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-black font-sans"
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

      {/* Content — pt-14 offsets the fixed h-14 header */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-14 text-center md:px-8">

        {/* Badge */}
        <p className="mb-4 text-[10px] uppercase tracking-tight text-white/80 sm:text-xs md:mb-6 md:text-sm">
          + de 3.000 Empresas já confiam na LeadsFlow
        </p>

        {/* Main heading — clamp scales smoothly from 320px to 1440px */}
        <h1 className="tracking-tighter text-white" style={{ lineHeight: 0.9 }}>
          <span className="block font-medium" style={{ fontSize: "clamp(2.4rem, 10vw, 9rem)" }}>
            Multiplica
          </span>
          <span className="block font-medium" style={{ fontSize: "clamp(2.4rem, 10vw, 9rem)" }}>
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
        <p className="mt-5 max-w-md px-2 text-sm text-white/70 sm:max-w-lg sm:text-base md:mt-8 md:px-0">
          A nossa IA qualifica, nutre e converte os teus leads automaticamente —
          para que te focuses apenas em fechar negócios.
        </p>

        {/* CTA */}
        <button
          className="group mt-7 flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-gray-900 md:mt-8 md:px-8 md:py-4 md:text-base"
          onClick={() => (window.location.href = "https://app.leadsflowapi.com/signup")}
        >
          Começar Grátis
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};
