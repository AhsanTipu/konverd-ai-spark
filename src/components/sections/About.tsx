import Reveal from "@/components/Reveal";

const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "40+", label: "Active clients" },
  { value: "8x", label: "Avg. ROI lift" },
  { value: "24/7", label: "AI operations" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/40 border-y border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About KONVERD</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink">
                A next-generation studio for an <span className="text-gradient">AI-native</span> world.
              </h2>
              <p className="mt-6 text-lg text-ink-soft/80">
                We blend engineering, design, and intelligence to ship products that don't just look great — they perform. Built for founders and teams who need outcomes, not deliverables.
              </p>
              <p className="mt-4 text-base text-ink-soft/70">
                Every project is led by senior talent and powered by automation, so we move faster, ship sharper, and scale further.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} variant="scale">
                <div className="p-7 rounded-2xl bg-background border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-500">
                  <div className="font-display text-4xl md:text-5xl text-gradient">{s.value}</div>
                  <div className="mt-2 text-sm text-ink-soft/70">{s.label}</div>
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
