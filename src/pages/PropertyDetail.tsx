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

const propertiesData = [
  {
    id: 1,
    heroImage: "/assets/property_images/pondicherry/oyo_purple.jpeg",
    images: ["/assets/property_images/pondicherry/oyo_purple.jpeg"],
    title: "OYO Purple Lake View, Pondicherry",
    location: "Pondicherry",
    price: "₹1,199/sqft",
    beds: "-",
    baths: "-",
    builtArea: "-",
    plotArea: "1,200",
    description: `Beautiful plot with a potential lake view. Excellent investment opportunity in a growing area.

    This plot is situated in a scenic location, ideal for those who love nature. The surrounding area is developing, ensuring good returns on investment in the future.`,
    youtubeId: "",
    agent: {
      name: "Spacezad Agent",
      title: "Property Consultant",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    },
    aboutLocation: {
      title: "About Lake Area",
      paragraphs: [
        "The lake area offers a cool and pleasant climate. It is a favorite spot for morning walks and bird watching. The neighborhood is peaceful and safe.",
      ],
    },
    faqs: [
      {
        q: "Is it a gated community?",
        a: "It is a private layout with good security.",
      },
    ],
  },
  {
    id: 2,
    heroImage: "/assets/property_images/pondicherry/beach_land.jpg",
    images: ["/assets/property_images/pondicherry/beach_land.jpg"],
    title: "Beach Land, Pondicherry",
    location: "Pondicherry",
    price: "₹375/sqft",
    beds: "-",
    baths: "-",
    builtArea: "-",
    plotArea: "19,500",
    description: `Expansive beach land perfect for a resort or large private estate. Enjoy the coastal breeze and potential for high appreciation.

    This property offers direct access to the beach and is located in a prime area known for its tourism potential. It is an excellent opportunity for developers and investors.`,
    youtubeId: "",
    agent: {
      name: "Spacezad Agent",
      title: "Property Consultant",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    },
    aboutLocation: {
      title: "About Pondicherry Coast",
      paragraphs: [
        "The coastline of Pondicherry is famous for its pristine beaches and scenic beauty. It attracts tourists from all over the world, making it a hotspot for hospitality and residential projects.",
        "Living near the beach offers a relaxed lifestyle with fresh air and stunning views. The area is also seeing infrastructure development, further boosting property values.",
      ],
    },
    faqs: [
      {
        q: "Is it close to the city?",
        a: "It is a short drive from the main city center.",
      },
    ],
  },
  {
    id: 3,
    heroImage: "/assets/property_images/pondicherry/ariyankuppam.jpg",
    images: ["/assets/property_images/pondicherry/ariyankuppam.jpg"],
    title: "Ariyankuppam Plot Land",
    location: "Pondicherry",
    price: "₹3,750/sqft",
    beds: "-",
    baths: "-",
    builtArea: "-",
    plotArea: "1,800",
    description: `Prime residential plot in Ariyankuppam. Close to city amenities while maintaining a peaceful environment.

    Ariyankuppam is a rapidly developing suburb of Pondicherry, offering a good balance of urban convenience and suburban quiet. The plot is suitable for constructing a spacious independent house.`,
    youtubeId: "",
    agent: {
      name: "Spacezad Agent",
      title: "Property Consultant",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    },
    aboutLocation: {
      title: "About Ariyankuppam",
      paragraphs: [
        "Ariyankuppam is located just south of Pondicherry city. It is known for its bridge, church, and archaeological site. It is a well-established residential area with schools, hospitals, and markets nearby.",
      ],
    },
    faqs: [
      {
        q: "Is water available?",
        a: "Yes, there is good ground water availability.",
      },
    ],
  },
  {
    id: 4,
    heroImage: "/assets/property_images/pondicherry/mattur.jpg",
    images: ["/assets/property_images/pondicherry/mattur.jpg"],
    title: "Mathur Property, Pondicherry",
    location: "Pondicherry",
    price: "₹1,199/sqft",
    beds: "-",
    baths: "-",
    builtArea: "-",
    plotArea: "1,200",
    description: `Exclusive plot available in Mathur, Pondicherry. Ideal for investment or building your dream home in a serene location.

    Enjoy the peace and tranquility of this developing area, perfect for a retirement home or a weekend getaway. The plot is well-connected to the main road and has easy access to essential amenities.`,
    youtubeId: "", // Placeholder or remove if not needed
    agent: {
      name: "Spacezad Agent",
      title: "Property Consultant",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    },
    aboutLocation: {
      title: "About Pondicherry",
      paragraphs: [
        "Pondicherry is a vibrant city with a rich French heritage, offering a unique blend of culture and tranquility. Known for its promenade, temples, and churches, it is a popular tourist destination.",
        "The real estate market in Pondicherry is growing steadily, making it a great place for investment. Whether you are looking for a plot, a villa, or an apartment, Pondicherry has something to offer for everyone.",
      ],
    },
    faqs: [
      {
        q: "Is the title clear?",
        a: "Yes, all our properties have clear titles and are ready for registration.",
      },
      {
        q: "Can I get a loan?",
        a: "Loan facilities are available from major banks.",
      },
    ],
  },
];

const PropertyDetail = () => {
  const { id } = useParams();
  const propertyId = parseInt(id || "1");
  const foundProperty = propertiesData.find((p) => p.id === propertyId);

  if (!foundProperty) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Property not found
      </div>
    );
  }

  const similarProperties = propertiesData
    .filter((p) => p.id !== propertyId)
    .slice(0, 3)
    .map((p) => ({
      id: p.id,
      image: p.heroImage,
      location: p.location,
      title: p.title,
      price: p.price,
      beds: p.beds,
      baths: p.baths,
      builtArea: p.builtArea,
      plotArea: p.plotArea,
    }));

  const property = { ...foundProperty, similarProperties };

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
