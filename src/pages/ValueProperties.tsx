import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  MapPin,
  Building,
  Layers,
  Calendar,
  IndianRupee,
  Info,
  Phone,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ValueProperties = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState({
    propertyType: "",
    location: "",
    possession: "",
  });

  const properties = [
    {
      id: 1,
      image: "/assets/property_images/pondicherry/mattur.jpg",
      status: "Private Listing",
      title: "Mathur Property, Pondicherry",
      location: "Pondicherry",
      type: "Plot",
      bhk: "-",
      sqft: "1,200 Sq.ft.",
      price: "₹ 1,199/sqft",
      possession: "Ready to Register",
      reraId: "N/A",
    },
    {
      id: 2,
      image: "/assets/property_images/pondicherry/beach_land.jpg",
      status: "Taking Reservations",
      title: "Beach Land, Pondicherry",
      location: "Pondicherry",
      type: "Land",
      bhk: "-",
      sqft: "19,500 Sq.ft.",
      price: "₹ 375/sqft",
      possession: "Ready to Register",
      reraId: "N/A",
    },
    {
      id: 3,
      image: "/assets/property_images/pondicherry/ariyankuppam.jpg",
      status: "Pocket Listing",
      title: "Ariyankuppam Plot Land",
      location: "Pondicherry",
      type: "Plot",
      bhk: "-",
      sqft: "1,800 Sq.ft.",
      price: "₹ 3,750/sqft",
      possession: "Ready to Register",
      reraId: "N/A",
    },
    {
      id: 4,
      image: "/assets/property_images/pondicherry/oyo_purple.jpeg",
      status: "Private Listing",
      title: "OYO Purple Lake View",
      location: "Pondicherry",
      type: "Plot",
      bhk: "-",
      sqft: "1,200 Sq.ft.",
      price: "₹ 1,199/sqft",
      possession: "Ready to Register",
      reraId: "N/A",
    },
  ];

  const filterOptions = {
    propertyType: [
      "Builder Floors",
      "Commercial",
      "Leased",
      "Pre Leased",
      "Residential",
    ],
    location: ["Bangalore", "Mysore", "Chennai", "Hyderabad", "Mumbai"],
    possession: [
      "Ready to Move",
      "Within 6 Months",
      "Within 1 Year",
      "Within 2 Years",
    ],
  };

  const toggleFilter = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

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
            in Lake India, Westlake, Tarrytown, TX & beyond.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-0 z-40">
        <div className="grid grid-cols-3 bg-gray-500">
          {["propertyType", "location", "possession"].map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`py-4 px-6 text-white font-medium flex items-center justify-center gap-2 transition-all ${
                activeFilter === filter
                  ? "bg-gray-600 ring-2 ring-primary ring-inset"
                  : "hover:bg-gray-600"
              }`}
            >
              {filter === "propertyType" && "Property Type"}
              {filter === "location" && "Location"}
              {filter === "possession" && "Possession"}
              {activeFilter === filter ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          ))}
        </div>

        {/* Filter Dropdown */}
        {activeFilter && (
          <div className="bg-accent py-6">
            <div className="container mx-auto flex flex-wrap justify-center gap-3">
              {filterOptions[activeFilter as keyof typeof filterOptions].map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedFilters((prev) => ({
                        ...prev,
                        [activeFilter]:
                          prev[activeFilter as keyof typeof prev] === option
                            ? ""
                            : option,
                      }));
                    }}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      selectedFilters[
                        activeFilter as keyof typeof selectedFilters
                      ] === option
                        ? "bg-primary text-primary-foreground"
                        : "bg-white text-foreground hover:bg-gray-100"
                    }`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </section>

      {/* Properties List */}
      <section className="py-12 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto space-y-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/3 relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-primary text-xs font-semibold px-3 py-1 rounded">
                    {property.status}
                  </div>
                </div>

                {/* Details */}
                <div className="lg:w-2/3 p-6">
                  <div className="flex flex-col lg:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-foreground mb-2">
                        {property.title}
                      </h3>
                      <p className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4" />
                        {property.location}
                      </p>

                      {/* Property Specs */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {property.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Layers className="w-4 h-4" />
                          {property.bhk}
                        </span>
                        <span className="flex items-center gap-1">
                          <Layers className="w-4 h-4" />
                          {property.sqft}
                        </span>
                        <span className="flex items-center gap-1">
                          <IndianRupee className="w-4 h-4" />
                          {property.price}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {property.possession}
                        </span>
                      </div>

                      {/* RERA Info */}
                      <p className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Info className="w-4 h-4" />
                        Rera ID: {property.reraId}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Whatsapp
                    </Button>
                    <Link to={`/value-property/${property.id}`}>
                      <Button className="bg-accent text-primary hover:bg-accent/90">
                        <Info className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                    <Button className="bg-accent text-primary hover:bg-accent/90">
                      <Phone className="w-4 h-4 mr-2" />
                      Get Call Back
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ValueProperties;
