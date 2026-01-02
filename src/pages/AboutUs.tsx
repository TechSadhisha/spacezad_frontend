import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  ];

  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "PRIVATE LISTING",
      price: "PRICE UPON REQUEST",
      beds: 4,
      baths: 5,
      sqft: null,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "FOR SALE",
      price: "PRICE UPON REQUEST",
      beds: 6,
      baths: 8,
      sqft: "8,000",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "FOR SALE",
      price: "PRICE UPON REQUEST",
      beds: 5,
      baths: 6,
      sqft: "5,776",
    },
  ];

  const stats = [
    { value: "$2.5B", label: "in Career Sales" },
    { value: "#1", label: "Sotheby's International Realty Agent Worldwide" },
    { value: "$389M", label: "Total Sales in 2023" },
    { value: "#1", label: "Real Estate Agent in Austin" },
  ];

  const publications = [
    "WSJ",
    "BUSINESS INSIDER",
    "dwell",
    "MANSION GLOBAL",
    "AD",
    "The New York Times",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-12 pb-20 text-center text-white">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-wide mb-4 italic">
            REPRESENTING AUSTIN'S FINEST
          </h1>
          <p className="text-lg md:text-xl tracking-wide opacity-90">
            Consistently Honored Among Austin's Select Multi-million Dollar
            Producers.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
                alt="Spacezad Wilcoxon"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 tracking-wide">
                SPACEZAD WILCOXON
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  With over 20 years of experience, Spacezad Wilcoxon is the
                  face of Austin's luxury real estate market, with unparalleled
                  passion and commitment to the Austin Lifestyle. As the #1
                  agent in Austin, TX, the #1 agent worldwide for Sotheby's
                  International Realty, and the 2024 winner of the Inman Golden
                  i, Spacezad has sold over $2.5 Billion throughout her career.
                  Consistently honored among Austin's select multi-million
                  dollar producers, she has been ranked #1 by Austin Business
                  Journal for Residential Real Estate Agents for the last five
                  consecutive years and is a distinguished member of both
                  Austin's Elite 25, Sotheby's International Realty Market
                  Leaders, Métier Maison, Sotheby's International Realty's Top
                  100, and Luxury League.
                </p>
                <p>
                  Her connections to the top 1% of the industry affords her
                  access to the most coveted properties, many of which are never
                  listed in the highly competitive Austin luxury market.
                </p>
                <p>
                  Prior to her real-estate career, Spacezad graduated with
                  honors from the University of Arizona with degrees in
                  Communications and Media Arts, minoring in Spanish. She also
                  works with her favorite charities, including The Contemporary,
                  Dell Children's Medical Center, West Austin Youth Association,
                  and the Center for Child Protection where she competed in a
                  dance-off to help raise over $750,000 for the abused children
                  of Austin. In addition to dancing, you can find Spacezad
                  surfing at the beach in Malibu or skiing down the snow-covered
                  peaks in Aspen. Spacezad enjoys spending quality time with her
                  sons Cruz (12) and Jet (9) who have inherited her deep love of
                  Austin's vibrant music scene.
                </p>
                <p>
                  Contact Austin real estate agent, Spacezad Wilcoxon to sell
                  property & find houses, condos & homes for sale in Lake
                  Austin, Downtown Austin, Westlake, and all of Austin, Texas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen In Section */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <h3 className="text-center text-2xl md:text-3xl tracking-[0.3em] text-muted-foreground mb-12 italic">
            AS SEEN IN
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {publications.map((pub, index) => (
              <span
                key={index}
                className="text-xl md:text-2xl text-muted-foreground/60 font-serif tracking-wider"
              >
                {pub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Slider */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img
            src={galleryImages[currentSlide]}
            alt="Gallery"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
        >
          <ChevronRight size={48} strokeWidth={1} />
        </button>
      </section>

      {/* Proven Results Section */}
      <section className="relative py-20 lg:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-12 text-center text-white">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6 italic">
            PROVEN RESULTS
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl opacity-90 mb-16">
            With over 20 years of experience, Spacezad Wilcoxon is the face of
            Austin's luxury real estate market, with unparalleled passion and
            commitment to the Austin Lifestyle. As the #1 Real Estate Agent in
            Austin, TX for the last 5 consecutive years, Spacezad has sold over
            $2 Billion throughout her career.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl md:text-5xl lg:text-6xl mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base tracking-wider opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working With Spacezad Section */}
      <section className="grid lg:grid-cols-2">
        <div className="bg-[hsl(35,20%,65%)] py-20 px-8 lg:px-16 flex flex-col justify-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-wide mb-8">
            WORKING WITH
            <br />
            SPACEZAD
          </h2>
          <div className="space-y-6 text-white/90 text-lg leading-relaxed">
            <p>
              Spacezad attributes her success to her effective working
              relationships with her clients. Her first priority is always open,
              honest communication about her client's particular needs and
              lifestyle. Finding the right property, or selling a home has its
              rewards, but for Spacezad, a life-long relationship with a client
              brings her genuine personal satisfaction.
            </p>
            <p>
              Above all, Spacezad is passionate about improving the lives of her
              clients by helping them find properties that bring them joy and
              fulfillment. She understands the value of a real estate investment
              in a way that few can articulate, using her uncanny intuition to
              maximize returns for her clients. When listing a client's home,
              she evaluates the market opportunities, encouraging her clients to
              be smart and patient to achieve the best outcome.
            </p>
          </div>
        </div>
        <div className="aspect-square lg:aspect-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Spacezad Wilcoxon"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Current Inventory Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-serif text-4xl md:text-5xl text-center text-foreground tracking-wide mb-4">
            SPACEZAD'S CURRENT INVENTORY
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Representing a Bespoke Collection of Austin's Finest Properties.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {properties.map((property) => (
              <Link
                key={property.id}
                to={`/property/${property.id}`}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={property.image}
                    alt={property.price}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-background/90 px-4 py-2 text-xs tracking-wider">
                    {property.status}
                  </span>
                </div>
                <h3 className="font-serif text-xl tracking-wide mb-2">
                  {property.price}
                </h3>
                <p className="text-sm text-muted-foreground tracking-wider">
                  {property.beds} BEDS | {property.baths} BATHS
                  {property.sqft && ` | ${property.sqft} SQ.FT.`}
                </p>
              </Link>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <button className="p-2 border border-foreground hover:bg-foreground hover:text-background transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 border border-foreground hover:bg-foreground hover:text-background transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
            <Link to="/properties">
              <Button
                variant="outline"
                className="px-8 py-6 text-sm tracking-wider uppercase border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                View All
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
