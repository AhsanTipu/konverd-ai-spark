import {
  Bot,
  Megaphone,
  Code2,
  Clapperboard,
  Cloud,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Bot,
    title: "AI Automations",
    desc: "Custom agents and workflows that eliminate repetitive work and unlock 24/7 operations.",
    points: ["Custom GPT agents", "Workflow automation", "Data pipelines"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Performance-driven campaigns, SEO and content engines built around measurable ROI.",
    points: ["Paid acquisition", "SEO & content", "Lifecycle"],
  },
  {
    icon: Code2,
    title: "Web & App Development",
    desc: "Fast, accessible, conversion-focused websites and mobile apps with modern stacks.",
    points: ["Next-gen web", "iOS & Android", "Design systems"],
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    desc: "Cinematic edits, ads, and short-form content that capture attention and convert.",
    points: ["Short-form ads", "Brand films", "Motion design"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Secure, scalable cloud architectures with CI/CD, observability and cost control.",
    points: ["AWS / GCP / Azure", "DevOps & CI/CD", "Cost optimization"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="container relative">
        <Reveal>
          <div className="max-w-2xl mb-14 md:mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Services
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink">
              Everything you need to scale, in one team.
            </h2>
            <p className="mt-5 text-lg text-ink-soft/80">
              From intelligent automation to pixel-perfect interfaces — we build
              the systems that move your business forward.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group relative h-full p-7 rounded-2xl border border-border bg-card shadow-soft hover:shadow-card hover:-translate-y-1.5 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                {/* Hover wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Corner glow */}
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-500">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft/80">
                    {s.desc}
                  </p>

                  <ul className="mt-5 pt-5 border-t border-border/70 space-y-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-xs text-ink-soft/80"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={services.length * 80}>
            <article className="relative h-full p-7 rounded-2xl bg-ink text-primary-foreground overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-primary opacity-30" />
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-primary-glow/40 blur-3xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative h-full flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">
                  End-to-end
                </span>
                <h3 className="mt-4 font-display text-2xl">
                  Strategy, build & growth — under one roof.
                </h3>
                <p className="mt-3 text-sm text-primary-foreground/70">
                  One partner. One vision. Faster execution.
                </p>
                <div className="mt-auto pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-foreground hover:gap-2.5 transition-all"
                  >
                    Start a project <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Services;
