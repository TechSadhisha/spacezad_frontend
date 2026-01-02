const Communities = () => {
  const communities = [
    {
      name: "Downtown Austin",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "West Lake Hills",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Old West Austin",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Explore Communities
          </h2>
          <p className="luxury-subheading text-muted-foreground mb-6">
            Austin Real Estate
          </p>
          <p className="luxury-body text-muted-foreground max-w-3xl mx-auto text-lg">
            Searching for Austin Real Estate? Real Estate Agent, Spacezad
            Wilcoxon, finds property, houses, condos & homes for sale in
            Downtown Austin, Old West Austin, Lake Austin, Westlake, Tarrytown &
            nearby.
          </p>
        </div>

        {/* Community Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {communities.map((community, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
            >
              <img
                src={community.image}
                alt={community.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

              {/* Community Name */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl md:text-3xl font-serif font-light text-primary-foreground text-center tracking-wide">
                  {community.name.toUpperCase()}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Communities;
