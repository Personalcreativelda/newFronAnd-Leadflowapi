import { DoubleCheck } from "./DoubleCheck";

const targets = [
  "É infoprodutor e quer converter mais leads",
  "É vendedor e quer responder mais depressa",
  "É afiliado e quer escalar campanhas",
  "É pequeno empresário e quer gerir tudo sem contratar equipa",
  "É agência e quer centralizar os seus clientes",
];

const VIDEO_ID = "IyZXXVLKKXY";

export const TargetAudience = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container mx-auto px-4" style={{ maxWidth: 1280 }}>
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">

          {/* Vídeo do YouTube, 16:9 */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-border" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?si=bCrrHzW0EdlZmm7H&rel=0&modestbranding=1`}
              title="LeadsFlow: veja como funciona"
              loading="lazy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div>
            <h2 className="stripe-h2 mb-6 md:mb-8">A LeadsFlow é para si se</h2>
            <ul className="space-y-4">
              {targets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <DoubleCheck className="mt-1.5" />
                  <span className="text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
