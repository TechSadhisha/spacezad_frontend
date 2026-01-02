import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WorkWithSpacezad from "@/components/WorkWithSpacezad";


const Properties = () => {
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      badge: "PRIVATE LISTING",
      badgeColor: "bg-accent/90",
      price: "PRICE UPON REQUEST",
      title: "VILLA SERENA ON LAKE AUSTIN | A WATERFRONT SANCTUARY",
      address: "PRIVATE ADDRESS",
      beds: 8,
      baths: 10,
      sqft: "7,803",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      badge: "NOW TAKING RESERVATIONS",
      badgeColor: "bg-accent/90",
      price: "PRICE UPON REQUEST",
      title: "SIXTH&BLANCO, AUSTIN, TX 78703",
      address: "",
      beds: null,
      baths: null,
      sqft: null,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      badge: "POCKET LISTING",
      badgeColor: "bg-accent/90",
      price: "PRICE UPON REQUEST",
      title: "STRATFORD HILLS ARCHITECTURAL LANDMARK",
      address: "PRIVATE ADDRESS",
      beds: 6,
      baths: 8,
      sqft: "7,178",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      badge: "PRIVATE LISTING",
      badgeColor: "bg-accent/90",
      price: "PRICE UPON REQUEST",
      title: "CONTEMPORARY ESTATE IN WESTLAKE",
      address: "PRIVATE ADDRESS",
      beds: 5,
      baths: 6,
      sqft: "6,500",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      badge: "FOR SALE",
      badgeColor: "bg-accent/90",
      price: "$14,950,000",
      title: "8818 BIG VIEW DRIVE, AUSTIN, TX 78730",
      address: "",
      beds: 5,
      baths: 5,
      sqft: "7,159",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      badge: "FOR SALE",
      badgeColor: "bg-accent/90",
      price: "$14,750,000",
      title: "1508 WILDCAT HOLLOW, AUSTIN, TX 78746",
      address: "",
      beds: 6,
      baths: 10,
      sqft: "8,051",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      badge: "FOR SALE",
      badgeColor: "bg-accent/90",
      price: "PRICE UPON REQUEST",
      title: "THE TIMELESS TARRYTOWN SANCTUARY: ONE-OF-A-KIND GATED COMPOUND",
      address: "PRIVATE ADDRESS",
      beds: 6,
      baths: 9,
      sqft: "7,497",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
      badge: "FOR SALE",
      badgeColor: "bg-accent/90",
      price: "$12,500,000",
      title: "HILL COUNTRY VINEYARD ESTATE",
      address: "DRIPPING SPRINGS, TX",
      beds: 4,
      baths: 5,
      sqft: "5,800",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
      badge: "FOR SALE",
      badgeColor: "bg-accent/90",
      price: "$9,800,000",
      title: "PANORAMIC VIEWS OF DOWNTOWN",
      address: "AUSTIN, TX 78746",
      beds: 5,
      baths: 6,
      sqft: "6,200",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light italic tracking-wide mb-6">
            EXPLORE SPACEZAD'S
            <br />
            EXCLUSIVE LISTINGS
          </h1>
          <p className="text-lg md:text-xl font-sans font-light tracking-wide opacity-90">
            Spacezad Wilcoxon features property, houses, land & homes for sale
            in Lake Austin, Westlake, Tarrytown, TX & beyond.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 px-6 lg:px-12 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Link
                to={`/property/${property.id}`}
                key={property.id}
                className="group cursor-pointer block"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badge */}
                  <div
                    className={`absolute top-4 right-4 ${property.badgeColor} px-4 py-2`}
                  >
                    <span className="text-primary text-xs tracking-widest font-sans font-medium">
                      {property.badge}
                    </span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="space-y-2">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground tracking-wide">
                    {property.price}
                  </h3>
                  <p className="font-sans text-sm tracking-[0.15em] text-muted-foreground uppercase">
                    {property.title}
                  </p>
                  {property.address && (
                    <p className="font-sans text-sm tracking-[0.15em] text-muted-foreground uppercase">
                      {property.address}
                    </p>
                  )}
                  {property.beds && (
                    <p className="font-sans text-sm tracking-wider text-muted-foreground">
                      {property.beds} BEDS | {property.baths} BATHS |{" "}
                      {property.sqft} SQ.FT.
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WorkWithSpacezad />

      <Footer />
    </div>
  );
};

export default Properties;
