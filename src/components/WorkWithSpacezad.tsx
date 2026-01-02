import { Button } from "@/components/ui/button";

const WorkWithSpacezad = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
          Work With Spacezad
        </h2>
        <p className="luxury-subheading text-primary-foreground/80 mb-12">
          Global Connections. Local Expertise. World Class Marketing.
        </p>
        <p className="luxury-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Whether buying or selling, Spacezad delivers service beyond
          comparison. Spacezad works closely with each of her clients to find
          their ultimate property in the most premier locations, and secures the
          best deal. When listing real estate, Spacezad maximizes each
          property's market value with her unmatched marketing strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            className="px-10 py-6 text-sm tracking-[0.2em] uppercase border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 bg-transparent"
          >
            Contact
          </Button>
          <Button className="px-10 py-6 text-sm tracking-[0.2em] uppercase bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300">
            Home Search
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkWithSpacezad;
