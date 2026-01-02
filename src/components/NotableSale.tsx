import { Button } from "@/components/ui/button";

const NotableSale = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1887&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
          Recent Notable Sale
        </h2>
        <p className="luxury-subheading text-primary-foreground/80 mb-12">
          Austin, TX Modern Masterpiece
        </p>
        <p className="luxury-body text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Nestled within the pristine confines of Tarrytown's only privately gated enclave, 
          this opulent estate stands as one of just five exclusive residences. Emanating an 
          aura of unparalleled luxury, it boasts an abundance of space for gracious living 
          and grand entertainment.
        </p>
        <Button
          variant="outline"
          className="px-10 py-6 text-sm tracking-[0.2em] uppercase border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 bg-transparent"
        >
          Discover Property
        </Button>
      </div>
    </section>
  );
};

export default NotableSale;
