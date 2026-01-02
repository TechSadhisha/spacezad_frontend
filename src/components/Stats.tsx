const Stats = () => {
  const stats = [
    {
      value: "$2.5B",
      label: "Total Sales Volume",
      description: "Career lifetime sales",
    },
    {
      value: "#1",
      label: "Austin Luxury Agent",
      description: "Five consecutive years",
    },
    {
      value: "$389M",
      label: "2023 Sales",
      description: "Annual volume",
    },
  ];

  return (
    <section className="bg-warm py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="luxury-subheading text-warm-foreground/70 mb-4">
              Proven Results
            </p>
            <h2 className="luxury-heading text-4xl md:text-5xl text-warm-foreground mb-8">
              A Track Record of Excellence
            </h2>
            <p className="luxury-body text-warm-foreground/80 text-lg mb-12">
              Numbers tell a story of trust, expertise, and unwavering commitment 
              to achieving exceptional outcomes for every client.
            </p>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <p className="text-4xl md:text-5xl font-serif font-light text-warm-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm uppercase tracking-wider font-sans font-medium text-warm-foreground mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm text-warm-foreground/60 font-sans">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1053&q=80"
                  alt="Luxury property interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Luxury property exterior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
