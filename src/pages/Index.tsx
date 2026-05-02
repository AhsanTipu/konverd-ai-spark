import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import CaseStudies from "@/components/sections/CaseStudies";
import Clients from "@/components/sections/Clients";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Work />
        <CaseStudies />
        <Clients />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
