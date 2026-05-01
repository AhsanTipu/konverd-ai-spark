import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-border py-14">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Logo className="h-9 w-auto" />
            <p className="mt-5 text-sm text-ink-soft/70 max-w-sm">
              AI-powered IT services for founders and teams who want to move faster and ship sharper.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft/80">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-primary transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft/80">
              <li><a href="mailto:hello@konverd.com" className="hover:text-primary transition-colors">hello@konverd.com</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Book a call</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} KONVERD. All rights reserved.</p>
          <p>Designed and built with intelligence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
