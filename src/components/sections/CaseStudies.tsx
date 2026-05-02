import { useState } from "react";
import { TrendingUp, Users, Zap, ArrowUpRight, X } from "lucide-react";
import Reveal from "@/components/Reveal";

const cases = [
  {
    client: "NorthPeak Fintech",
    industry: "B2B SaaS · Fintech",
    challenge:
      "Stagnant activation and a checkout funnel leaking 60% of qualified signups.",
    solution:
      "Rebuilt the onboarding flow, shipped an AI assistant for KYC, and instrumented every step of the journey.",
    result:
      "Activation more than doubled in 60 days, MAU growth tripled, and time-to-value dropped by two thirds.",
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
    result:
      "Crossed $1.2M revenue in the first quarter with a 4.8x ROAS and a 41% lower CAC than benchmark.",
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
    result:
      "Throughput more than tripled while clinicians reclaimed 40 hours every week and response time fell under 2 minutes.",
    metrics: [
      { icon: TrendingUp, label: "Throughput", value: "+220%" },
      { icon: Users, label: "Hours saved", value: "40/wk" },
      { icon: Zap, label: "Response", value: "<2 min" },
    ],
    accent: "from-primary-glow/25 via-primary/10 to-transparent",
  },
];

const CaseStudies = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

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
                Real Results from{" "}
                <span className="text-gradient">Real Digital Transformations</span>
              </h2>
            </div>
            <p className="md:max-w-sm text-base text-ink-soft/80">
              We showcase how Konverd helps businesses turn complex challenges
              into scalable digital solutions through AI, web & app development,
              digital marketing, and cloud services.
            </p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 100}>
              <article
                onClick={() => setOpenIdx(i)}
                className="group cursor-pointer relative grid md:grid-cols-12 gap-0 rounded-3xl border border-border bg-background overflow-hidden hover:border-primary/40 hover:shadow-glow transition-all duration-500"
              >
                <div
                  className={`relative md:col-span-5 aspect-[4/3] md:aspect-auto bg-gradient-to-br ${c.accent} overflow-hidden`}
                >
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-44 w-44 rounded-full bg-gradient-primary opacity-30 blur-3xl group-hover:scale-150 group-hover:opacity-60 transition-all duration-700" />
                  </div>
                  <div className="absolute top-6 left-6 right-6">
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
                  <div className="absolute bottom-6 left-6 inline-flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    Click to expand <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>

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
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {openIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setOpenIdx(null)}
        >
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-md" />
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-background border border-border p-8 md:p-10 shadow-elevated animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenIdx(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-muted text-ink-soft transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
              Case study · 0{openIdx + 1}
            </span>
            <h3 className="mt-3 font-display text-3xl md:text-4xl text-ink">
              {cases[openIdx].client}
            </h3>
            <p className="text-sm text-ink-soft/70">{cases[openIdx].industry}</p>

            <div className="mt-7 space-y-5">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Challenge</span>
                <p className="mt-2 text-sm text-ink-soft/85 leading-relaxed">{cases[openIdx].challenge}</p>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Solution</span>
                <p className="mt-2 text-sm text-ink-soft/85 leading-relaxed">{cases[openIdx].solution}</p>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Result</span>
                <p className="mt-2 text-sm text-ink-soft/85 leading-relaxed">{cases[openIdx].result}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4">
              {cases[openIdx].metrics.map((m) => (
                <div key={m.label}>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <m.icon className="h-3.5 w-3.5" />
                    <span className="text-[10px] uppercase tracking-wider">{m.label}</span>
                  </div>
                  <div className="mt-1.5 font-display text-2xl md:text-3xl text-gradient">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;
