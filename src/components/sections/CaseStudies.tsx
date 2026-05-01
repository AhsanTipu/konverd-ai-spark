import { TrendingUp, Users, Zap, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const cases = [
  {
    client: "NorthPeak Fintech",
    industry: "B2B SaaS · Fintech",
    challenge:
      "Stagnant activation and a checkout funnel leaking 60% of qualified signups.",
    solution:
      "Rebuilt the onboarding flow, shipped an AI assistant for KYC, and instrumented every step.",
    metrics: [
      { icon: TrendingUp, label: "Activation", value: "+47%" },
      { icon: Users, label: "MAU growth", value: "3.2x" },
      { icon: Zap, label: "Time-to-value", value: "−68%" },
    ],
    accent: "from-primary/25 via-primary/10 to-transparent",
  },
  {
    client: "Lumen DTC",
    industry: "E-commerce · Lifestyle",
    challenge:
      "Launching a new brand with zero pipeline and a 90-day window to revenue.",
    solution:
      "Stood up the storefront, ran paid + influencer campaigns, and automated lifecycle email and SMS.",
    metrics: [
      { icon: TrendingUp, label: "Revenue", value: "$1.2M" },
      { icon: Users, label: "ROAS", value: "4.8x" },
      { icon: Zap, label: "CAC", value: "−41%" },
    ],
    accent: "from-ink/15 via-primary/10 to-transparent",
  },
  {
    client: "Helix Health",
    industry: "Healthcare · AI",
    challenge:
      "Manual triage burning 30+ clinician hours weekly and slowing patient response.",
    solution:
      "Deployed an AI triage agent, integrated EHR, and built a real-time ops dashboard.",
    metrics: [
      { icon: TrendingUp, label: "Throughput", value: "+220%" },
      { icon: Users, label: "Hours saved", value: "40/wk" },
      { icon: Zap, label: "Response", value: "<2 min" },
    ],
    accent: "from-primary-glow/25 via-primary/10 to-transparent",
  },
];

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="py-24 md:py-32 bg-muted/30 border-y border-border relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Case studies
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink">
                Real teams. <span className="text-gradient">Real outcomes.</span>
              </h2>
            </div>
            <p className="md:max-w-sm text-base text-ink-soft/80">
              A glimpse at recent engagements — from zero-to-one launches to
              complex AI transformations.
            </p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 100}>
              <article className="group relative grid md:grid-cols-12 gap-0 rounded-3xl border border-border bg-background overflow-hidden hover:border-primary/30 hover:shadow-card transition-all duration-500">
                {/* Visual side */}
                <div
                  className={`relative md:col-span-5 aspect-[4/3] md:aspect-auto bg-gradient-to-br ${c.accent} overflow-hidden`}
                >
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-44 w-44 rounded-full bg-gradient-primary opacity-30 blur-3xl group-hover:scale-125 group-hover:opacity-50 transition-all duration-700" />
                  </div>
                  <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                        Case study · 0{i + 1}
                      </span>
                      <h3 className="mt-2 font-display text-2xl md:text-3xl text-ink">
                        {c.client}
                      </h3>
                      <p className="mt-1 text-xs text-ink-soft/70">
                        {c.industry}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Challenge
                      </span>
                      <p className="mt-2 text-sm text-ink-soft/85 leading-relaxed">
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Solution
                      </span>
                      <p className="mt-2 text-sm text-ink-soft/85 leading-relaxed">
                        {c.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <m.icon className="h-3.5 w-3.5" />
                          <span className="text-[10px] uppercase tracking-wider">
                            {m.label}
                          </span>
                        </div>
                        <div className="mt-1.5 font-display text-2xl md:text-3xl text-gradient">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-end">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all"
                    >
                      Read the story <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
