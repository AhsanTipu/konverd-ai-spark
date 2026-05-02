import {
  Bot,
  Megaphone,
  Globe,
  Smartphone,
  Blocks,
  Cloud,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Bot,
    title: "AI & Automation Solutions",
    desc: "Custom AI agents, intelligent workflows, and automation that eliminate manual work and unlock 24/7 operations.",
    points: ["Custom AI agents", "Workflow automation", "Data pipelines"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Services",
    desc: "Performance marketing, SEO and content engines engineered around measurable ROI and sustainable growth.",
    points: ["Paid acquisition", "SEO & content", "Lifecycle marketing"],
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "Fast, accessible, conversion-focused websites built on modern stacks with pixel-perfect design.",
    points: ["Next-gen web", "Headless CMS", "Design systems"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile apps engineered for performance, reliability, and delightful UX.",
    points: ["iOS & Android", "React Native", "Backend APIs"],
  },
  {
    icon: Blocks,
    title: "Low Code Development",
    desc: "Ship internal tools, dashboards, and MVPs in days using modern low-code platforms — without sacrificing quality.",
    points: ["Internal tools", "Rapid MVPs", "Integrations"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Services",
    desc: "Secure, scalable cloud architectures with CI/CD, observability and end-to-end cost control.",
    points: ["AWS / GCP / Azure", "DevOps & CI/CD", "Cost optimization"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-gradient-tint">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary-glow/15 blur-3xl pointer-events-none" />

      <div className="container relative">
        <Reveal>
          <div className="max-w-3xl mb-14 md:mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our services
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink">
              Fueling Ambitious Businesses with{" "}
              <span className="text-gradient">High-Impact Digital Services</span>
            </h2>
            <p className="mt-6 text-lg text-ink-soft/80">
              We focus on building solutions that create real impact — enhancing
              efficiency, driving automation, and delivering scalable digital
              growth for ambitious businesses worldwide. Our approach combines
              innovation, strategy, and technology to solve real business
              challenges and unlock new opportunities.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="group relative h-full p-7 rounded-2xl border border-border bg-card shadow-soft hover:shadow-glow hover:-translate-y-2 hover:border-primary/40 transition-all duration-500 overflow-hidden">
                {/* Animated border gradient on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-primary-glow/10" />
                {/* Corner glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="relative h-14 w-14 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <s.icon className="h-6 w-6 transition-transform duration-500 group-hover:-rotate-6" />
                      <span className="absolute inset-0 rounded-xl ring-1 ring-primary/20 group-hover:ring-primary/40 transition" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-ink group-hover:text-primary transition-colors">
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
        </div>
      </div>
    </section>
  );
};

export default Services;
