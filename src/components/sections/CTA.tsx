import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-ink p-10 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-primary opacity-25" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary-glow/40 blur-[120px]" />
          <div className="absolute inset-0 grid-bg opacity-20" />

          <div className="relative max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow">Ready when you are</span>
            <h2 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl tracking-tight text-primary-foreground">
              Let's build what's next.
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl mx-auto">
              Tell us about your project. We'll come back within 24 hours with a clear plan and timeline.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild variant="hero" size="xl" className="animate-pulse-glow">
                <a href="mailto:hello@konverd.com">Book a call <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild size="xl" className="bg-background/10 text-primary-foreground border border-primary-foreground/20 hover:bg-background/20 backdrop-blur">
                <a href="mailto:hello@konverd.com">hello@konverd.com</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
