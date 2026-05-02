import Reveal from "@/components/Reveal";

const clients = [
  "NorthPeak", "Lumen", "Helix", "Vertex", "Aurora", "Kairos",
  "Nimbus", "Quanta", "Solace", "Orbit", "Zenith", "Pulsar",
];

const Row = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="flex w-max gap-12 md:gap-16" style={{ animation: `marquee ${reverse ? "40s" : "35s"} linear infinite`, animationDirection: reverse ? "reverse" : "normal" }}>
    {[...clients, ...clients].map((c, i) => (
      <div
        key={`${c}-${i}`}
        className="flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-background/60 backdrop-blur shrink-0 hover:border-primary/40 hover:text-primary transition"
      >
        <span className="h-2 w-2 rounded-full bg-primary/70" />
        <span className="font-display text-xl md:text-2xl tracking-tight text-ink-soft whitespace-nowrap">
          {c}
        </span>
      </div>
    ))}
  </div>
);

const Clients = () => {
  return (
    <section id="clients" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mb-12 md:mb-16 text-center mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our clients
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink">
              Trusted by{" "}
              <span className="text-gradient">Forward Thinking Businesses</span>{" "}
              Worldwide
            </h2>
            <p className="mt-5 text-base md:text-lg text-ink-soft/80">
              Our client partnerships are built on trust, innovation, and consistent
              delivery of high-quality digital solutions that drive real business growth.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="overflow-hidden py-3">
            <Row />
          </div>
          <div className="overflow-hidden py-3 mt-4">
            <Row reverse />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Clients;
