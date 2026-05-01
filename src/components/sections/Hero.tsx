import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import WaveMesh from "@/components/WaveMesh";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center pt-28 md:pt-32 pb-24 md:pb-32 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] bg-gradient-radial pointer-events-none" />

      {/* Animated wave mesh */}
      <div className="absolute inset-0">
        <WaveMesh />
      </div>

      {/* Soft fade for legibility at top + bottom */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-background/70 backdrop-blur text-xs font-medium text-ink-soft animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AI-powered IT services
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-ink animate-fade-up">
            Transform your business with{" "}
            <span className="text-gradient">intelligent</span> technology.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-ink-soft/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "120ms" }}>
            KONVERD designs and ships AI automations, modern web & mobile apps,
            cloud infrastructure and creative content — engineered to convert.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <Button asChild variant="hero" size="xl">
              <a href="#contact">Get started <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#services">Explore services</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 text-xs uppercase tracking-widest text-muted-foreground animate-fade-in" style={{ animationDelay: "400ms" }}>
            <span>AI-first</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Scalable</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Premium delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
