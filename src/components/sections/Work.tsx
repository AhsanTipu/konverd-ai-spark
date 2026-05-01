import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const projects = [
  { tag: "AI Automation", title: "Sales agent for B2B SaaS", desc: "Autonomous outbound + qualification pipeline that books 3x more demos.", color: "from-primary/20 to-primary/5" },
  { tag: "Web Platform", title: "Fintech dashboard rebuild", desc: "Reimagined product UX, lifting activation by 47% in eight weeks.", color: "from-ink/20 to-ink/5" },
  { tag: "Cloud", title: "Multi-region infra migration", desc: "Cut latency 60% and cloud spend 32% with a clean, observable stack.", color: "from-primary/30 to-primary-glow/10" },
  { tag: "Marketing", title: "DTC growth engine", desc: "Paid + content + lifecycle program scaled revenue from $0 to $1.2M.", color: "from-primary/15 to-ink/10" },
];

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Selected work</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink">
                Outcomes that speak for themselves.
              </h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
              Start your project <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card hover:border-primary/30 hover:shadow-card hover:-translate-y-1 transition-all duration-500">
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.color} overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-32 w-32 rounded-full bg-gradient-primary opacity-40 blur-2xl group-hover:opacity-70 group-hover:scale-125 transition-all duration-700" />
                  </div>
                </div>
                <div className="p-7 flex items-start justify-between gap-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{p.tag}</span>
                    <h3 className="mt-3 font-display text-2xl text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm text-ink-soft/80">{p.desc}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
