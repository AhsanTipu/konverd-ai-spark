import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import WaveMesh from "@/components/WaveMesh";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-[100vh] flex items-center pt-28 md:pt-32 pb-24 md:pb-32 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-radial pointer-events-none" />

      {/* Animated wave mesh */}
      <div className="absolute inset-0">
        <WaveMesh />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-primary/40 blur-[1px] animate-float-particle"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              width: `${4 + (i % 5)}px`,
              height: `${4 + (i % 5)}px`,
              animationDelay: `${(i % 7) * 0.6}s`,
              animationDuration: `${8 + (i % 6)}s`,
              opacity: 0.25 + ((i % 5) / 10),
            }}
          />
        ))}
      </div>

      {/* Soft fade for legibility */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="container relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-background/70 backdrop-blur text-xs font-medium text-ink-soft animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Digital transformation, reimagined
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.02] tracking-tight text-ink animate-fade-up">
            We <span className="text-gradient">KONVERD</span> Ideas <br className="hidden sm:block" />
            into Impact
          </h1>

          <p className="mt-7 text-lg md:text-xl text-ink-soft/85 max-w-2xl mx-auto animate-fade-up font-medium" style={{ animationDelay: "100ms" }}>
            Turning Ideas into Impact with Intelligent Digital Solutions.
          </p>

          <p className="mt-5 text-base md:text-lg text-ink-soft/70 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
            Konverd is a modern digital transformation company that transforms ideas into powerful digital products through AI automation, web & app development, digital marketing, and cloud infrastructure services. We help startups and enterprises turn concepts into scalable, high-performance solutions that drive real business impact, growth, and innovation in the digital era.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "320ms" }}>
            <Button asChild variant="hero" size="xl" className="group relative overflow-hidden">
              <a href="#contact">
                <span className="relative z-10 flex items-center gap-2">
                  Get started <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#services">Explore services</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-xs uppercase tracking-widest text-muted-foreground animate-fade-in" style={{ animationDelay: "480ms" }}>
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
