import { Bot, Megaphone, Code2, Clapperboard, Cloud, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Bot, title: "AI Automations", desc: "Custom agents and workflows that eliminate repetitive work and unlock 24/7 operations." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Performance-driven campaigns, SEO and content engines built around measurable ROI." },
  { icon: Code2, title: "Web & App Development", desc: "Fast, accessible, conversion-focused websites and mobile apps with modern stacks." },
  { icon: Clapperboard, title: "Video Editing", desc: "Cinematic edits, ads, and short-form content that capture attention and convert." },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Secure, scalable cloud architectures with CI/CD, observability and cost control." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-14 md:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-ink">
            Everything you need to scale, in one team.
          </h2>
          <p className="mt-5 text-lg text-ink-soft/80">
            From intelligent automation to pixel-perfect interfaces — we build the systems that move your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative p-7 rounded-2xl border border-border bg-card shadow-soft hover:shadow-card hover:-translate-y-1 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                  <s.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="mt-6 font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft/80">{s.desc}</p>
            </article>
          ))}

          <article className="relative p-7 rounded-2xl bg-ink text-primary-foreground overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-30" />
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-primary-glow/40 blur-3xl" />
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-glow">End-to-end</span>
              <h3 className="mt-4 font-display text-2xl">Strategy, build & growth — under one roof.</h3>
              <p className="mt-3 text-sm text-primary-foreground/70">One partner. One vision. Faster execution.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
