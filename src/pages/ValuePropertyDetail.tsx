import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  Download,
  MapPin,
  Building,
  Calendar,
  Info,
  Phone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ValuePropertyDetail = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);

  const property = {
    id: Number(id),
    title: "Brigade Horizon",
    location: "Mysore Road, Bangalore",
    type: "Apartments",
    bhk: "1, 2, 3 & 4 BHK",
    sqft: "1013 Sq.ft.* Onwards",
    price: "₹ 45 Lakhs Onwards",
    possession: "December, 2026",
    status: "Under Construction",
    reraId: "PRM/KA/RERA/1251/310/PR/190722/005086",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200",
    ],
    description: `Brigade Horizon is a premium residential project located on Mysore Road, Bangalore. This under-construction project offers a range of 1, 2, 3 & 4 BHK apartments designed for modern living.

The project features world-class amenities including a swimming pool, gymnasium, clubhouse, children's play area, landscaped gardens, and 24/7 security. The strategic location provides excellent connectivity to major IT hubs, educational institutions, and healthcare facilities.

With RERA-approved plans and Brigade Group's reputation for quality construction, Brigade Horizon promises to be your dream home in Bangalore's rapidly developing corridor.`,
    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Clubhouse",
      "Children's Play Area",
      "Landscaped Gardens",
      "24/7 Security",
      "Power Backup",
      "Covered Parking",
    ],
    aboutLocation: {
      title: "About Mysore Road, Bangalore",
      description: `Mysore Road is one of the most promising residential corridors in Bangalore, offering excellent connectivity and infrastructure development. The area is well-connected to the city center via the NICE Ring Road and upcoming metro line.

Key highlights of the location include proximity to major IT parks, reputed schools and colleges, hospitals, shopping centers, and entertainment zones. The Kengeri satellite town and surrounding areas are witnessing rapid development, making it an ideal investment destination.`,
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800",
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800",
      ],
    },
    faqs: [
      {
        question: "What is the possession date for Brigade Horizon?",
        answer:
          "The expected possession date is December 2026. However, please contact our sales team for the latest updates.",
      },
      {
        question: "What are the available unit configurations?",
        answer:
          "Brigade Horizon offers 1 BHK, 2 BHK, 3 BHK, and 4 BHK apartments to suit different family sizes and requirements.",
      },
      {
        question: "Is the project RERA approved?",
        answer:
          "Yes, Brigade Horizon is RERA approved with registration number PRM/KA/RERA/1251/310/PR/190722/005086.",
      },
      {
        question: "What are the payment options available?",
        answer:
          "We offer flexible payment plans including construction-linked plans, down payment schemes, and home loan assistance from leading banks.",
      },
    ],
    agent: {
      name: "Spacezad Wilcoxon",
      title: "Senior Property Consultant",
      phone: "+91 98765 43210",
      email: "spacezad@properties.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
    },
    similarListings: [
      {
        id: 2,
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
        title: "Brigade Oasis Phase 3",
        location: "Devanahalli, Bangalore",
        price: "₹ 1.09 Cr* Onwards",
      },
      {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
        title: "Brigade Meadows",
        location: "Kanakapura Road, Bangalore",
        price: "₹ 65 Lakhs Onwards",
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
        title: "Brigade Cornerstone",
        location: "Electronic City, Bangalore",
        price: "₹ 55 Lakhs Onwards",
      },
    ],
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${property.images[0]}')` }}
        />
        <div className="absolute inset-0 bg-primary/50" />
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="font-sans text-3xl md:text-4xl font-bold tracking-wide mb-4">
            {property.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/value-properties" className="hover:underline">
              Our Projects
            </Link>
            <span>/</span>
            <span>{property.title}</span>
          </div>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="py-12 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Property Header */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div>
                  <div className="inline-block bg-accent text-primary text-xs font-medium px-3 py-1 rounded mb-3">
                    {property.status}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
                    {property.title}
                  </h2>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {property.location}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon">
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                  <Button className="bg-accent text-primary hover:bg-accent/90">
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                </div>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-muted/30 rounded-lg">
                <div className="text-center">
                  <Building className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm text-muted-foreground">Type</p>
                  <p className="font-semibold">{property.type}</p>
                </div>
                <div className="text-center">
                  <Info className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm text-muted-foreground">Configuration</p>
                  <p className="font-semibold">{property.bhk}</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm text-muted-foreground">Area</p>
                  <p className="font-semibold">{property.sqft}</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm text-muted-foreground">Possession</p>
                  <p className="font-semibold">{property.possession}</p>
                </div>
              </div>

              {/* Price & RERA */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 bg-accent/10 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Starting Price
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {property.price}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">RERA ID</p>
                  <p className="font-medium text-foreground">
                    {property.reraId}
                  </p>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-foreground">Gallery</h3>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img
                    src={property.images[currentImage]}
                    alt={`Property view ${currentImage + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {property.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        currentImage === idx
                          ? "border-accent"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-foreground">
                  About {property.title}
                </h3>
                <div className="prose prose-gray max-w-none">
                  {property.description.split("\n\n").map((para, idx) => (
                    <p
                      key={idx}
                      className="text-muted-foreground leading-relaxed mb-4"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-foreground">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {property.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* About Location */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-foreground">
                  {property.aboutLocation.title}
                </h3>
                <div className="prose prose-gray max-w-none">
                  {property.aboutLocation.description
                    .split("\n\n")
                    .map((para, idx) => (
                      <p
                        key={idx}
                        className="text-muted-foreground leading-relaxed mb-4"
                      >
                        {para}
                      </p>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.aboutLocation.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-video rounded-lg overflow-hidden"
                    >
                      <img
                        src={img}
                        alt="Location"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-foreground">
                  Frequently Asked Questions
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {property.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Right Column - Inquiry Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Agent Card */}
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{property.agent.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {property.agent.title}
                      </p>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Get Call Back
                  </Button>
                </div>

                {/* Inquiry Form */}
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="font-serif text-xl mb-4">Enquire Now</h4>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input placeholder="Email Address" type="email" />
                    <Input placeholder="Phone Number" type="tel" />
                    <Textarea placeholder="Your Message" rows={4} />
                    <Button className="w-full bg-accent text-primary hover:bg-accent/90">
                      Submit Enquiry
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Listings */}
          <div className="mt-16 space-y-8">
            <h3 className="font-serif text-2xl text-foreground">
              Similar Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {property.similarListings.map((listing) => (
                <Link
                  to={`/value-property/${listing.id}`}
                  key={listing.id}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-1">{listing.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {listing.location}
                    </p>
                    <p className="font-bold text-accent">{listing.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ValuePropertyDetail;
