import { Zap, Bot, GitBranch, LayoutGrid, RefreshCcw, Layers } from "lucide-react";

const chips = [
  { icon: Zap,         label: "Automação",       color: "text-primary",    border: "border-primary/30",    side: "left",  top: "8%"  },
  { icon: Bot,         label: "IA 24/7",          color: "text-accent",     border: "border-accent/30",     side: "right", top: "8%"  },
  { icon: GitBranch,   label: "Funil de Vendas",  color: "text-orange-400", border: "border-orange-400/30", side: "left",  top: "38%" },
  { icon: LayoutGrid,  label: "CRM Kanban",       color: "text-purple-400", border: "border-purple-400/30", side: "right", top: "38%" },
  { icon: RefreshCcw,  label: "Remarketing",      color: "text-blue-400",   border: "border-blue-400/30",   side: "left",  top: "68%" },
  { icon: Layers,      label: "Multi-canal",      color: "text-pink-400",   border: "border-pink-400/30",   side: "right", top: "68%" },
];

export const PhoneShowcase = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: 1280 }}>
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="stripe-h2 mb-3" style={{ color: "hsl(var(--foreground))" }}>
            Tudo o que precisas,{" "}
            <span className="gradient-text">numa só plataforma</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto" style={{ lineHeight: 1.55 }}>
            Da captação ao fecho — automatizado, em tempo real, no teu bolso.
          </p>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-[680px] flex items-center justify-center" style={{ minHeight: 580 }}>

            {/* Left chips */}
            {chips.filter(c => c.side === "left").map((chip) => {
              const Icon = chip.icon;
              return (
                <div
                  key={chip.label}
                  className={`absolute left-0 flex items-center gap-2 px-4 py-2.5 shadow-lg animate-fade-up`}
                  style={{ top: chip.top, transform: "translateY(-50%)", background: "hsl(var(--card))", border: "1px solid #D4DEE9", borderRadius: 20 }}
                >
                  <Icon className={`h-4 w-4 flex-shrink-0 ${chip.color}`} />
                  <span className={`text-sm font-medium whitespace-nowrap ${chip.color}`}>{chip.label}</span>
                </div>
              );
            })}

            {/* Right chips */}
            {chips.filter(c => c.side === "right").map((chip) => {
              const Icon = chip.icon;
              return (
                <div
                  key={chip.label}
                  className={`absolute right-0 flex items-center gap-2 px-4 py-2.5 shadow-lg animate-fade-up`}
                  style={{ top: chip.top, transform: "translateY(-50%)", background: "hsl(var(--card))", border: "1px solid #D4DEE9", borderRadius: 20 }}
                >
                  <Icon className={`h-4 w-4 flex-shrink-0 ${chip.color}`} />
                  <span className={`text-sm font-medium whitespace-nowrap ${chip.color}`}>{chip.label}</span>
                </div>
              );
            })}

            {/* Phone mockup */}
            <div className="relative float-animation">
              <div className="absolute -inset-6 rounded-[60px] blur-2xl" style={{ background: "linear-gradient(180deg, rgba(83,58,253,0.15), rgba(255,97,24,0.08), transparent)" }} />

              {/* Phone shell */}
              <div className="relative w-[220px] rounded-[44px] bg-neutral-950 p-[10px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_32px_64px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
                {/* Dynamic island */}
                <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[80px] h-[28px] bg-neutral-950 rounded-full z-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-neutral-800 ring-1 ring-white/10" />
                </div>

                {/* Power button */}
                <div className="absolute -right-[3px] top-[100px] w-[3px] h-14 bg-neutral-800 rounded-r-sm" />
                {/* Volume buttons */}
                <div className="absolute -left-[3px] top-[80px] w-[3px] h-8 bg-neutral-800 rounded-l-sm" />
                <div className="absolute -left-[3px] top-[120px] w-[3px] h-10 bg-neutral-800 rounded-l-sm" />

                {/* Screen */}
                <div className="rounded-[36px] overflow-hidden bg-white pt-9">
                  <img
                    src="/dashboard.png"
                    alt="LeadsFlow API — dashboard no mobile"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* Phone */}
          <div className="relative float-animation">
            <div className="absolute -inset-4 rounded-[60px] blur-2xl" style={{ background: "linear-gradient(180deg, rgba(83,58,253,0.15), rgba(255,97,24,0.08), transparent)" }} />
            <div className="relative w-[200px] rounded-[44px] bg-neutral-950 p-[10px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_32px_64px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
              <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[72px] h-[26px] bg-neutral-950 rounded-full z-20" />
              <div className="absolute -right-[3px] top-[90px] w-[3px] h-12 bg-neutral-800 rounded-r-sm" />
              <div className="absolute -left-[3px] top-[72px] w-[3px] h-7 bg-neutral-800 rounded-l-sm" />
              <div className="absolute -left-[3px] top-[108px] w-[3px] h-9 bg-neutral-800 rounded-l-sm" />
              <div className="rounded-[36px] overflow-hidden bg-white pt-8">
                <img src="/dashboard.png" alt="LeadsFlow API dashboard" className="w-full h-auto block" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Chips grid */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
            {chips.map((chip) => {
              const Icon = chip.icon;
              return (
                <div
                  key={chip.label}
                  className={`flex items-center gap-2 px-3 py-2 shadow`}
                  style={{ background: "hsl(var(--card))", border: "1px solid #D4DEE9", borderRadius: 20 }}
                >
                  <Icon className={`h-3.5 w-3.5 flex-shrink-0 ${chip.color}`} />
                  <span className={`text-xs font-medium ${chip.color}`}>{chip.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

        {/* Phone + chips wrapper */}
        {/* On desktop: chips float left/right of the phone using absolute positioning */}
        {/* On mobile: phone full-width, chips in a 2-col grid below */}

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-[680px] flex items-center justify-center" style={{ minHeight: 580 }}>

            {/* Left chips */}
            {chips.filter(c => c.side === "left").map((chip) => {
              const Icon = chip.icon;
              return (
                <div
                  key={chip.label}
                  className={`absolute left-0 flex items-center gap-2 px-4 py-2.5 rounded-full glass-card border ${chip.border} shadow-lg animate-fade-up`}
                  style={{ top: chip.top, transform: "translateY(-50%)" }}
                >
                  <Icon className={`h-4 w-4 flex-shrink-0 ${chip.color}`} />
                  <span className={`text-sm font-medium whitespace-nowrap ${chip.color}`}>{chip.label}</span>
                </div>
              );
            })}

            {/* Right chips */}
            {chips.filter(c => c.side === "right").map((chip) => {
              const Icon = chip.icon;
              return (
                <div
                  key={chip.label}
                  className={`absolute right-0 flex items-center gap-2 px-4 py-2.5 rounded-full glass-card border ${chip.border} shadow-lg animate-fade-up`}
                  style={{ top: chip.top, transform: "translateY(-50%)" }}
                >
                  <Icon className={`h-4 w-4 flex-shrink-0 ${chip.color}`} />
                  <span className={`text-sm font-medium whitespace-nowrap ${chip.color}`}>{chip.label}</span>
                </div>
              );
            })}

            {/* ── Phone mockup ── */}
            <div className="relative float-animation">
              {/* Glow halo */}
              <div className="absolute -inset-6 bg-gradient-to-b from-primary/20 via-accent/10 to-transparent rounded-[60px] blur-2xl" />

              {/* Phone shell */}
              <div className="relative w-[220px] rounded-[44px] bg-neutral-950 p-[10px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_32px_64px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
                {/* Dynamic island */}
                <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[80px] h-[28px] bg-neutral-950 rounded-full z-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-neutral-800 ring-1 ring-white/10" />
                </div>

                {/* Power button */}
                <div className="absolute -right-[3px] top-[100px] w-[3px] h-14 bg-neutral-800 rounded-r-sm" />
                {/* Volume buttons */}
                <div className="absolute -left-[3px] top-[80px] w-[3px] h-8 bg-neutral-800 rounded-l-sm" />
                <div className="absolute -left-[3px] top-[120px] w-[3px] h-10 bg-neutral-800 rounded-l-sm" />

                {/* Screen */}
                <div className="rounded-[36px] overflow-hidden bg-white pt-9">
                  <img
                    src="/dashboard.png"
                    alt="LeadsFlow API — dashboard no mobile"
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout: phone + chips grid */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* Phone */}
          <div className="relative float-animation">
            <div className="absolute -inset-4 bg-gradient-to-b from-primary/20 via-accent/10 to-transparent rounded-[60px] blur-2xl" />
            <div className="relative w-[200px] rounded-[44px] bg-neutral-950 p-[10px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_32px_64px_rgba(0,0,0,0.6)] ring-1 ring-white/5">
              <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[72px] h-[26px] bg-neutral-950 rounded-full z-20" />
              <div className="absolute -right-[3px] top-[90px] w-[3px] h-12 bg-neutral-800 rounded-r-sm" />
              <div className="absolute -left-[3px] top-[72px] w-[3px] h-7 bg-neutral-800 rounded-l-sm" />
              <div className="absolute -left-[3px] top-[108px] w-[3px] h-9 bg-neutral-800 rounded-l-sm" />
              <div className="rounded-[36px] overflow-hidden bg-white pt-8">
                <img src="/dashboard.png" alt="LeadsFlow API dashboard" className="w-full h-auto block" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Chips grid */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
            {chips.map((chip) => {
              const Icon = chip.icon;
              return (
                <div
                  key={chip.label}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full glass-card border ${chip.border} shadow`}
                >
                  <Icon className={`h-3.5 w-3.5 flex-shrink-0 ${chip.color}`} />
                  <span className={`text-xs font-medium ${chip.color}`}>{chip.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
