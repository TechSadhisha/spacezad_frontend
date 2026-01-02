const HeadlineBanner = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <p className="luxury-subheading text-muted-foreground mb-4">
          Recognized Excellence
        </p>
        <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Austin's #1 Luxury Real Estate Agent
        </h2>
        <p className="text-xl md:text-2xl font-serif font-light text-muted-foreground mb-8">
          The Last 5 Consecutive Years
        </p>
        <div className="w-16 h-px bg-border mx-auto mb-8" />
        <p className="luxury-body text-muted-foreground max-w-3xl mx-auto text-lg">
          With an unwavering commitment to excellence and a deep understanding of Austin's 
          most prestigious neighborhoods, we deliver unparalleled service to discerning 
          clients seeking extraordinary properties.
        </p>
      </div>
    </section>
  );
};

export default HeadlineBanner;
