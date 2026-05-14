import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const DASHBOARD_URL = "https://app.leadsflowapi.com/dashboard";

const scrollToPlans = () => {
  const element = document.getElementById("planos");
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const benefits = [
  "Sem cartão de crédito necessário",
  "Ativo em menos de 5 minutos",
  "Suporte 24/7 em português",
];

const stats = [
  { value: "3k+", label: "EMPRESAS" },
  { value: "95%", label: "SATISFAÇÃO" },
  { value: "24/7", label: "SUPORTE" },
];

const heroSlides = [
  "/celular.png",
  "/celular%202.png",
  "/celular%203.png",
  "/celular%204.png",
  "/celular%205.png",
];

export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        background: "hsl(var(--background))",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        paddingTop: "clamp(96px, 11vh, 144px)",
        paddingBottom: "clamp(40px, 7vh, 88px)",
      }}
    >
      {/* Background: Stripe 135deg diagonal overlay */}
      <div
        className="hero-bg-glow"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(83,58,253,0.10) 0%, rgba(255,97,24,0.07) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Keyframes injected inline via style tag */}
      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        .hero-tag {
          animation: hero-float 3s ease-in-out infinite;
        }
        .hero-cta-primary {
          transition: all 0.2s ease;
        }
        .hero-cta-primary:hover {
          background: #4329E8 !important;
          transform: translateY(-1px);
          box-shadow: 0px 8px 24px rgba(83, 58, 253, 0.35) !important;
        }
        .hero-cta-primary:active {
          background: #3720D4 !important;
          transform: scale(0.98);
        }
        .hero-fade-up {
          animation: fade-up 0.9s cubic-bezier(0.2, 0.6, 0.2, 1) forwards;
          opacity: 0;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: opacity 700ms ease-in-out, transform 700ms ease-in-out;
          will-change: opacity, transform;
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-copy {
            grid-row: 1; /* Make text appear first */
            justify-self: center !important;
            text-align: center !important;
            max-width: 600px !important;
            margin: 0 auto !important;
          }
          .hero-title {
            font-size: 44px !important;
          }
          .hero-benefits {
            justify-content: center !important;
          }
          .hero-ctas {
            justify-content: center !important;
          }
          .hero-stats {
            justify-content: center !important;
          }
        }
        @media (max-width: 480px) {
          .hero-title {
            font-size: 36px !important;
          }
          .hero-ctas {
            flex-direction: column;
          }
          .hero-stats {
            gap: 24px !important;
          }
          .hero-stat-value {
            font-size: 32px !important;
          }
        }
        .dark .hero-bg-glow {
          background:
            linear-gradient(135deg, rgba(83,58,253,0.15) 0%, rgba(255,97,24,0.08) 100%) !important;
        }
      `}</style>

      {/* Content grid */}
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 20px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1.1fr 1.4fr",
          gap: 0,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* ── LEFT column ── */}
        <div
          className="hero-copy"
          style={{
            alignSelf: "center",
            justifySelf: "start",
            maxWidth: 600,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#E8E9FF",
              border: "1px solid #C9C3F0",
              borderRadius: 3,
              padding: "4px 12px",
              fontSize: 12,
              fontWeight: 500,
              color: "#533AFD",
              marginBottom: 28,
            }}
            className="hero-fade-up"
          >
            <span style={{ fontSize: 10 }}>✦</span>
            Confiado por mais de 3.000 empresas
          </div>

          {/* Headline */}
          <h1
            className="hero-title hero-fade-up"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: 24,
              letterSpacing: "0px",
              color: "hsl(var(--foreground))",
            }}
          >
            <span style={{ display: "block" }}>Automatize seu funil, Multiplique</span>
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #533AFD 0%, #FF6118 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginTop: 8,
              }}
            >
              suas vendas.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-subtitle hero-fade-up"
            style={{
              fontSize: 16,
              color: "hsl(var(--muted-foreground))",
              lineHeight: 1.55,
              maxWidth: 520,
              marginBottom: 32,
              fontWeight: 400,
            }}
          >
            Nossa IA qualifica, nutre e converte leads para você, 24/7.
          </p>

          {/* Trust badges */}
          <div
            className="hero-benefits hero-fade-up"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginBottom: 32,
              flexWrap: "wrap",
            }}
          >
            {benefits.map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
                <CheckCircle2 style={{ width: 14, height: 14, color: "#533AFD", flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "hsl(var(--muted-foreground))" }}>{b}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="hero-ctas hero-fade-up"
            style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}
          >
            <button
              className="hero-cta-primary"
              onClick={() => (window.location.href = DASHBOARD_URL)}
              style={{
                background: "#533AFD",
                border: "none",
                borderRadius: 4,
                padding: "15.5px 24px 16.5px 24px",
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "16px",
                color: "#FFFFFF",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0px 4px 12px rgba(83, 58, 253, 0.25)",
              }}
            >
              Teste grátis
              <ArrowRight style={{ width: 16, height: 16 }} />
            </button>

            <button
              onClick={scrollToPlans}
              style={{
                background: "transparent",
                border: "none",
                padding: "15.5px 12px 16.5px 12px",
                fontWeight: 400,
                fontSize: 16,
                color: "#533AFD",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#4329E8")}
              onMouseLeave={e => (e.currentTarget.style.color = "#533AFD")}
            >
              <ArrowUpRight style={{ width: 16, height: 16 }} />
              Contratar plano
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 40 }} className="hero-stats hero-fade-up">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat-item">
                <div className="hero-stat-value" style={{ fontSize: 36, fontWeight: 300, color: "hsl(var(--foreground))", lineHeight: 1 }}>{s.value}</div>
                <div className="hero-stat-label" style={{ fontSize: 12, color: "#64748D", textTransform: "uppercase", marginTop: 4, letterSpacing: "0.06em", fontWeight: 400 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT column: phone ── */}
        <div
          className="hero-phone-col"
          style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {/* Glow halo */}
          <div
            style={{
              position: "absolute",
              width: "min(1200px, 95vw)",
              height: "min(900px, 80vh)",
              background: "radial-gradient(ellipse at center, rgba(83,58,253,0.15) 0%, rgba(255,97,24,0.10) 50%, transparent 75%)",
              borderRadius: 120,
              filter: "blur(60px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Dashboard slideshow */}
          <div
            className="hero-slideshow"
            style={{
              position: "relative",
              width: "min(900px, 82vw)",
              aspectRatio: "4 / 3",
              maxWidth: "none",
              zIndex: 1,
              animation: "hero-float 6s ease-in-out infinite",
            }}
          >
            {heroSlides.map((src, index) => (
              <img
                key={src}
                src={src}
                alt="LeadsFlow API dashboard mockup"
                width={2000}
                height={1500}
                className="hero-slide"
                style={{
                  opacity: activeSlide === index ? 1 : 0,
                  transform: activeSlide === index ? "scale(1)" : "scale(1.01)",
                }}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile responsive overrides */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-section {
            min-height: auto !important;
            padding-top: 112px !important;
            padding-bottom: 56px !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 0 24px !important;
            gap: 24px !important;
            align-items: start !important;
          }
          .hero-copy {
            max-width: 720px !important;
            justify-self: center !important;
            text-align: center !important;
          }
          .hero-title,
          .hero-subtitle {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-benefits,
          .hero-ctas,
          .hero-stats {
            justify-content: center !important;
          }
          .hero-phone-col {
            display: flex !important;
            margin-top: 6px;
          }
          .hero-slideshow {
            width: min(760px, 88vw) !important;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            min-height: auto !important;
            padding-top: 104px !important;
            padding-bottom: 48px !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 0 16px !important;
            gap: 28px !important;
            align-items: start !important;
          }
          .hero-copy {
            max-width: 100% !important;
          }
          .hero-title { font-size: 36px !important; }
          .hero-ctas {
            flex-direction: column;
            align-items: center !important;
          }
          .hero-slideshow {
            width: min(560px, 92vw) !important;
          }
          .hero-stats {
            width: 100%;
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
            align-items: start !important;
          }
          .hero-stat-item {
            min-width: 0;
            text-align: center;
          }
          .hero-stat-value {
            font-size: clamp(32px, 8vw, 42px) !important;
            line-height: 1.02 !important;
            white-space: normal;
            overflow-wrap: anywhere;
            word-break: break-word;
          }
          .hero-stat-label {
            font-size: 11px !important;
            letter-spacing: 0.05em !important;
          }
        }
      `}</style>
    </section>
  );
};


