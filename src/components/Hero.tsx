const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/70" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-primary-foreground tracking-wide mb-6">
            SPACEZAD
          </h1>
          <div className="w-24 h-px bg-primary-foreground/50 mx-auto mb-6" />
          <p className="text-primary-foreground/90 text-lg md:text-xl font-sans font-light tracking-[0.2em] uppercase">
            Luxury Real Estate
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
