import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Heart,
  Share2,
  Bed,
  Bath,
  Maximize,
  Grid3X3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const properties = [
  {
    id: 1,
    heroImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920",
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
    ],
    title: "VILLA SERENA ON LAKE AUSTIN | A WATERFRONT SANCTUARY",
    location: "Lake Austin",
    price: "$8.5M",
    beds: 8,
    baths: 10,
    builtArea: "7,803",
    plotArea: "12,500",
    description: `Poised above the tranquil waters of Lake Austin, this villa is a masterpiece of modern design. This absolute waterfront sanctuary blends architectural artistry with a serene coastal lifestyle where sunrise over the lake becomes a daily spectacle and the sound of nature drifts through open pavilions.

The villa's soaring vaulted living pavilion opens onto a grand terrace overlooking a 30-metre infinity pool with a swim-up bar, alfresco dining sala, and expansive lawns that step directly onto the waterfront. Crafted with timeless materials and contemporary elegance, interiors feature hand-carved sculptures, artworks, and curated furnishings that exude calm sophistication.

Each of the eight ensuite bedrooms — including a private master suite — offers panoramic lake views through floor-to-ceiling glass, while the versatile media room can serve as a ninth bedroom or children's den. Thoughtful touches include smart entertainment systems, a fully equipped chef's kitchen, and seamless indoor-outdoor flow designed for entertaining or quiet retreat.`,
    youtubeId: "dQw4w9WgXcQ",
    agent: {
      name: "Spacezad Wilcoxon",
      title: "LUXURY REAL ESTATE SPECIALIST",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    },
    aboutLocation: {
      title: "About Lake Austin",
      paragraphs: [
        "Lake Austin is one of Austin's most private and exclusive residential areas. Located on the Colorado River, it's known for its luxury estates, water views, and peaceful setting. Unlike the busy downtown area, Lake Austin offers a calm, secluded lifestyle — perfect for those who want privacy but still want to be close to top schools, hospitals, and the airport.",
        "The area is surrounded by the calm waters of Lake Austin. It's a great spot for kayaking, boating, or just enjoying the views. While there's no large commercial scene here, some properties offer private docks, boat moorings, and large outdoor spaces made for entertaining. This makes it popular with high-end buyers who value peace, space, and comfort over crowds and nightlife.",
        "Most homes in Lake Austin are large, custom estates with open layouts, water-facing terraces, and high-end finishes. Many include infinity pools, gyms, wine cellars, and staff quarters. They sit on oversized plots, offering rare privacy. Architecture blends modern design with Texas elements — clean lines, high ceilings, and natural materials like stone and wood.",
        "The community is quiet and upscale. Residents are mostly executives, business owners, or seasonal homeowners who value discretion and space. Security is strong, with gated communities and private roads. Concierge and property management services are available for those abroad.",
      ],
    },
    faqs: [
      {
        q: "Where is the best place to buy properties in Lake Austin?",
        a: "The most sought-after areas are along the waterfront, particularly in gated communities that offer privacy and direct water access.",
      },
      {
        q: "Is it worth buying a property in Lake Austin?",
        a: "Yes, Lake Austin properties tend to appreciate well due to limited inventory and high demand for waterfront living.",
      },
      {
        q: "Where do most executives live in Lake Austin?",
        a: "Most executives prefer the gated estates along the western shore, known for larger lots and enhanced privacy.",
      },
      {
        q: "Can foreigners buy properties in Lake Austin?",
        a: "Yes, there are no restrictions on foreign ownership of residential property in Texas.",
      },
      {
        q: "Where do the wealthy live in Lake Austin?",
        a: "Ultra-high-net-worth individuals typically reside in the exclusive waterfront compounds with private docks.",
      },
      {
        q: "What is the property tax in Lake Austin?",
        a: "Property taxes in Austin typically range from 1.8% to 2.2% of the assessed value annually.",
      },
      {
        q: "How much does it cost to live comfortably in Lake Austin?",
        a: "Comfortable living in Lake Austin typically requires an annual budget of $200,000+ excluding mortgage payments.",
      },
      {
        q: "What is the average cost to buy a property in Lake Austin?",
        a: "Waterfront properties in Lake Austin typically range from $3M to $25M depending on size and location.",
      },
    ],
    similarProperties: [
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        location: "Lake Austin, Texas",
        title: "Exclusive Waterfront Villa in the Lake Austin area",
        price: "$19M",
        beds: 6,
        baths: 6,
        builtArea: "2,500",
        plotArea: "3,994",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
        location: "Lake Austin, Texas",
        title: "10 Bedrooms Luxury Stunning Lake View Villa",
        price: "$18M",
        beds: 10,
        baths: 12,
        builtArea: "3,845",
        plotArea: "10,954",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        location: "Lake Austin, Texas",
        title: "A Luxury Waterfront Villa Nestled in Lake Austin",
        price: "$18M",
        beds: 6,
        baths: 6,
        builtArea: "3,280",
        plotArea: "6,990",
      },
    ],
  },
];

// Generate data for all property IDs
const generatePropertyData = (id: number) => {
  const baseProperty = properties[0];
  return {
    ...baseProperty,
    id,
    title: `LUXURY ESTATE ${id} | EXCLUSIVE WATERFRONT PROPERTY`,
  };
};

const PropertyDetail = () => {
  const { id } = useParams();
  const propertyId = parseInt(id || "1");
  const property =
    properties.find((p) => p.id === propertyId) ||
    generatePropertyData(propertyId);

  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen">
        <img
          src={property.heroImage}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
        <button className="absolute bottom-8 left-8 text-primary-foreground font-sans text-sm tracking-widest hover:underline">
          VIEW GALLERY
        </button>
      </section>

      {/* Property Info Section */}
      <section className="py-12 px-6 lg:px-12 bg-background">
        <div className="container mx-auto">
          {/* Title & Location */}
          <div className="text-center mb-8">
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground tracking-wide mb-4">
              {property.title}
            </h1>
            <p className="font-sans text-lg text-muted-foreground">
              {property.location} | {property.price}
            </p>
          </div>

          {/* Property Stats & Actions */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-border pb-8 mb-12">
            {/* Stats */}
            <div className="flex flex-wrap gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5" />
                <span className="font-sans text-sm">
                  {property.beds} Bedrooms
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5" />
                <span className="font-sans text-sm">
                  {property.baths} Bathrooms
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="w-5 h-5" />
                <span className="font-sans text-sm">
                  {property.builtArea} m² Built Area
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Grid3X3 className="w-5 h-5" />
                <span className="font-sans text-sm">
                  {property.plotArea} m² Plot Area
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
                DOWNLOAD BROCHURE
              </Button>
              <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
                <Heart className="w-5 h-5 text-foreground" />
              </button>
              <button className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
                <Share2 className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Gallery & Description */}
            <div className="lg:col-span-2 space-y-12">
              {/* Image Gallery */}
              <div>
                <h2 className="font-sans text-sm tracking-widest text-muted-foreground mb-6">
                  DEDICATED AGENT
                </h2>
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-sans font-medium text-foreground">
                      {property.agent.name}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      {property.agent.title}
                    </p>
                  </div>
                </div>

                {/* Main Image */}
                <div className="relative aspect-[16/10] mb-4 overflow-hidden">
                  <img
                    src={property.images[selectedImage]}
                    alt={`Property view ${selectedImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-6 gap-2">
                  {property.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-square overflow-hidden ${
                        selectedImage === idx ? "ring-2 ring-foreground" : ""
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Video Section */}
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${property.youtubeId}`}
                  title="Property Video Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Description */}
              <div>
                <h2 className="font-sans text-sm tracking-widest text-muted-foreground mb-6">
                  DESCRIPTION
                </h2>
                <div className="font-sans text-foreground leading-relaxed whitespace-pre-line text-justify">
                  {property.description}
                </div>
              </div>

              {/* About Location */}
              <div className="bg-secondary/30 p-8 lg:p-12">
                <h2 className="font-serif text-2xl text-foreground mb-8">
                  {property.aboutLocation.title}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {property.aboutLocation.paragraphs
                      .slice(0, 2)
                      .map((p, idx) => (
                        <p
                          key={idx}
                          className="font-sans text-muted-foreground leading-relaxed text-justify"
                        >
                          {p}
                        </p>
                      ))}
                  </div>
                  <div className="space-y-4">
                    <img
                      src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
                      alt={property.aboutLocation.title}
                      className="w-full aspect-[4/3] object-cover mb-4"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"
                    alt="Aerial view"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="space-y-4">
                    {property.aboutLocation.paragraphs
                      .slice(2)
                      .map((p, idx) => (
                        <p
                          key={idx}
                          className="font-sans text-muted-foreground leading-relaxed text-justify"
                        >
                          {p}
                        </p>
                      ))}
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="font-serif text-xl text-foreground mb-6">
                  Explore Common Questions About {property.location}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {property.faqs.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`item-${idx}`}
                      className="border-b border-border"
                    >
                      <AccordionTrigger className="font-sans text-foreground hover:no-underline py-6">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-sans text-muted-foreground pb-6">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Right Column - Inquiry Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="font-sans text-sm tracking-widest text-muted-foreground mb-6">
                  INQUIRE ABOUT THIS PROPERTY
                </h2>
                <form className="space-y-4">
                  <Input
                    placeholder="Name *"
                    className="bg-background border-border rounded-none h-12"
                  />
                  <Input
                    type="email"
                    placeholder="E-Mail *"
                    className="bg-background border-border rounded-none h-12"
                  />
                  <Input
                    type="tel"
                    placeholder="+1"
                    className="bg-background border-border rounded-none h-12"
                  />
                  <Textarea
                    placeholder="I am interested in receiving more information about this property. Thank you"
                    className="bg-background border-border rounded-none min-h-[120px] resize-none"
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <label
                      htmlFor="newsletter"
                      className="font-sans text-sm text-muted-foreground"
                    >
                      Sign up for newsletter
                    </label>
                  </div>
                  <Button
                    type="submit"
                    variant="outline"
                    className="w-full rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background h-12"
                  >
                    SUBMIT
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Listings */}
      <section className="py-16 px-6 lg:px-12 bg-background">
        <div className="container mx-auto">
          <h2 className="font-sans text-sm tracking-widest text-muted-foreground mb-12">
            SIMILAR LISTINGS FROM {property.location.toUpperCase()}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {property.similarProperties.map((prop) => (
              <Link to={`/property/${prop.id}`} key={prop.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-foreground/40 transition-colors">
                    <Heart className="w-5 h-5 text-primary-foreground" />
                  </button>
                </div>
                <p className="font-sans text-sm text-muted-foreground mb-1">
                  {prop.location}
                </p>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {prop.title}
                </h3>
                <p className="font-serif text-xl text-foreground mb-2">
                  {prop.price}
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  {prop.beds} Beds – {prop.baths} Baths – {prop.builtArea} m²
                  Built – {prop.plotArea} m² Plot
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
