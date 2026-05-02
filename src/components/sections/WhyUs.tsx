import { Brain, Gauge, Layers, Sparkles, ShieldCheck, Workflow } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useReveal } from "@/hooks/use-reveal";
import { useCounter } from "@/hooks/use-counter";

const counters = [
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 180, suffix: "+", label: "Happy Clients" },
  { value: 40, suffix: "+", label: "Team Expertise" },
];

const items = [
  { icon: Workflow, title: "End-to-end digital solutions", desc: "Tailored to your business goals from strategy to launch and beyond." },
  { icon: Layers, title: "Built to scale", desc: "Secure, future-ready systems designed for performance at every stage." },
  { icon: Brain, title: "Tech meets business", desc: "Deep technical expertise combined with sharp business understanding." },
  { icon: ShieldCheck, title: "Transparent delivery", desc: "Clear communication, consistent execution, and measurable results." },
];

const Counter = ({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) => {
  const { ref, revealed } = useReveal<HTMLDivElement>({ threshold: 0.3 });
  const value = useCounter(target, 1800, revealed);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`p-7 rounded-2xl bg-background border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-500 ${revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="font-display text-5xl md:text-6xl text-gradient tabular-nums">
        {value}
        <span>{suffix}</span>
      </div>
      <div className="mt-3 text-sm text-ink-soft/75">{label}</div>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section id="why" className="py-24 md:py-32 relative overflow-hidden bg-muted/30 border-y border-border">
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none opacity-70" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary-glow/10 blur-3xl pointer-events-none" />

      <div className="container relative">
        <Reveal>
          <div className="max-w-3xl mb-14 md:mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why choose us</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink">
              More than a partner — your{" "}
              <span className="text-gradient">growth engine</span>.
            </h2>
            <p className="mt-6 text-lg text-ink-soft/80">
              Konverd is more than a technology partner — we are a growth-driven digital
              transformation company focused on building scalable solutions in AI automation,
              web & app development, digital marketing, and cloud infrastructure services.
            </p>
            <p className="mt-4 text-base text-ink-soft/70">
              We combine strategy, innovation, and engineering excellence to help businesses
              solve complex challenges, improve performance, and achieve measurable results.
              Every solution we deliver is built with a focus on scalability, efficiency, and
              long-term success.
            </p>
          </div>
        </Reveal>

        {/* Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16 md:mb-20">
          {counters.map((c, i) => (
            <Counter key={c.label} target={c.value} suffix={c.suffix} label={c.label} delay={i * 80} />
          ))}
        </div>

        {/* What sets us apart */}
        <Reveal>
          <h3 className="font-display text-2xl md:text-3xl text-ink mb-8">What sets us apart</h3>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((i, idx) => (
            <Reveal key={i.title} delay={idx * 80} variant="scale">
              <div className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-glow transition-all duration-500 h-full">
                <div className="h-11 w-11 rounded-xl bg-ink text-primary-foreground flex items-center justify-center group-hover:bg-gradient-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <i.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">{i.title}</h3>
                <p className="mt-2 text-sm text-ink-soft/80 leading-relaxed">{i.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
