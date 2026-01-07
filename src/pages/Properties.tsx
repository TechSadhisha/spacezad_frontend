import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WorkWithSpacezad from "@/components/WorkWithSpacezad";

const Properties = () => {
  const properties = [
    {
      id: 1,
      image: "/assets/property_images/pondicherry/mattur.jpg",

      badgeColor: "bg-accent/90",
      price: "₹1,199/sqft",
      title: "Mathur Property, Pondicherry",
      address: "Pondicherry",
      sqft: "1,200",
    },
    {
      id: 2,

      image: "/assets/property_images/pondicherry/beach_land.jpg",

      badgeColor: "bg-accent/90",
      price: "₹375/sqft",
      title: "Beach Land, Pondicherry",
      address: "Pondicherry",
      sqft: "19,500",
    },
    {
      id: 3,
      image: "/assets/property_images/pondicherry/ariyankuppam.jpg",

      badgeColor: "bg-accent/90",
      price: "3,750/sqft",
      title: "Ariyankuppam Plot Land, Pondicherry",
      address: "Pondicherry",
      sqft: "1,800",
    },
    {
      id: 4,
      image: "/assets/property_images/pondicherry/oyo_purple.jpeg",

      badgeColor: "bg-accent/90",
      price: "₹1,199/sqft",
      title: "OYO Purple Lake View, Pondicherry",
      address: "Pondicherry",
      sqft: "1,200",
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
          <p className="text-lg md:text-xl font-sans font-light tracking-wide opacity-90">
            Spacezad Wilcoxon features property, houses, land & homes for sale
            in Mumbai, Delhi, Goa & beyond.
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
