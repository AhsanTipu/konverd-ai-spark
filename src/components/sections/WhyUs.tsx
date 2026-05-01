import { Brain, Gauge, Layers, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const items = [
  { icon: Brain, title: "AI-first by default", desc: "Every workflow we touch is optimized with intelligent automation." },
  { icon: Gauge, title: "Built for speed", desc: "Senior teams + modern tooling means weeks, not quarters." },
  { icon: Layers, title: "Designed to scale", desc: "Clean architectures and observable systems that grow with you." },
  { icon: Sparkles, title: "Creative meets technical", desc: "Engineering rigor fused with design taste and brand sensibility." },
];

const WhyUs = () => {
  return (
    <section id="why" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none opacity-70" />
      <div className="container relative">
        <Reveal>
          <div className="max-w-2xl mb-14 md:mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why KONVERD</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink">
              The advantage of an AI-native partner.
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((i, idx) => (
            <Reveal key={i.title} delay={idx * 80} variant="scale">
              <div className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover:-translate-y-1.5 hover:shadow-card transition-all duration-500 h-full">
                <div className="h-11 w-11 rounded-xl bg-ink text-primary-foreground flex items-center justify-center group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-500">
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
