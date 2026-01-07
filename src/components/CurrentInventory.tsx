import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CurrentInventory = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const properties = [
    {
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80",
      title: "French Quarter Heritage Home",
      beds: 3,
      baths: 3,
      sqft: "3,100",
      price: "₹6 Cr",
      badge: "For Sale",
      location: "Pondicherry",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Sky Villa in Worli",
      beds: 5,
      baths: 6,
      sqft: "5,500",
      price: "₹45 Cr",
      badge: "For Sale",
      location: "Mumbai",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1053&q=80",
      title: "Sea View Apartment on ECR",
      beds: 4,
      baths: 4,
      sqft: "3,800",
      price: "₹8.5 Cr",
      badge: "For Sale",
      location: "Chennai",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Kalyani Nagar Garden Home",
      beds: 4,
      baths: 5,
      sqft: "4,200",
      price: "₹12 Cr",
      badge: "For Sale",
      location: "Pune",
    },
    {
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      title: "Luxury Beachfront Villa in North Goa",
      beds: 5,
      baths: 6,
      sqft: "6,500",
      price: "₹18 Cr",
      badge: "For Sale",
      location: "Goa",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="luxury-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Spacezad's Current Inventory
          </h2>
          <p className="luxury-subheading text-muted-foreground">
            Representing a Bespoke Collection of India's Finest Properties
          </p>
          <div className="w-24 h-px bg-border mx-auto mt-6" />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="border-foreground/20 hover:bg-foreground hover:text-background"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="border-foreground/20 hover:bg-foreground hover:text-background"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Property Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
        >
          {properties.map((property, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[700px] snap-center group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <h3 className="text-3xl md:text-5xl font-serif font-light text-primary-foreground tracking-widest uppercase">
                    {property.location}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentInventory;
