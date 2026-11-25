import { ArrowRight } from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

export const DesignProHero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen min-h-[100svh] w-full overflow-hidden bg-black font-sans"
    >
      {/* Vídeo de fundo */}
      <video
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Escurece o vídeo para o texto ler bem */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo; pt-20 compensa o cabeçalho fixo de h-14 */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 pb-8 pt-20 text-center md:px-8">

        <p className="mb-4 text-sm text-white/75 md:mb-6">
          Mais de 3.000 empresas já vendem com a LeadsFlow
        </p>

        <h1 className="font-medium tracking-tighter text-white" style={{ lineHeight: 0.95 }}>
          <span className="block text-[clamp(2.5rem,12vw,5rem)] md:text-[clamp(2.5rem,9vw,8.5rem)]">
            Multiplique
          </span>
          <span className="block text-[clamp(2.5rem,12vw,5rem)] text-[#A899FF] md:text-[clamp(2.5rem,9vw,8.5rem)]">
            as suas vendas
          </span>
        </h1>

        <p className="mt-6 max-w-md px-2 text-base text-white/75 sm:max-w-lg md:mt-8 md:px-0 md:text-lg">
          Agentes de IA respondem, qualificam e marcam reuniões com os seus leads, a qualquer hora.
        </p>

        <a
          href="https://app.leadsflowapi.com/signup"
          className="group mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-[#533AFD] px-6 text-base font-medium text-white transition-colors duration-150 hover:bg-[#4329E8] active:scale-[0.98] md:px-8"
        >
          Começar grátis
          <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
};
