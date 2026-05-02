import Reveal from "@/components/Reveal";

const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "40+", label: "Active clients" },
  { value: "8x", label: "Avg. ROI lift" },
  { value: "24/7", label: "AI operations" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-ink text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-primary opacity-20" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-glow/30 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/30 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">About KONVERD</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-primary-foreground">
                A next-generation studio for an <span className="bg-gradient-to-r from-primary-glow to-primary-foreground bg-clip-text text-transparent">AI-native</span> world.
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80">
                We blend engineering, design, and intelligence to ship products that don't just look great — they perform. Built for founders and teams who need outcomes, not deliverables.
              </p>
              <p className="mt-4 text-base text-primary-foreground/65">
                Every project is led by senior talent and powered by automation, so we move faster, ship sharper, and scale further.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} variant="scale">
                <div className="p-7 rounded-2xl bg-background/5 backdrop-blur-md border border-primary-foreground/15 hover:border-primary-glow/40 hover:-translate-y-1 hover:bg-background/10 transition-all duration-500">
                  <div className="font-display text-4xl md:text-5xl bg-gradient-to-r from-primary-foreground to-primary-glow bg-clip-text text-transparent">{s.value}</div>
                  <div className="mt-2 text-sm text-primary-foreground/65">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
