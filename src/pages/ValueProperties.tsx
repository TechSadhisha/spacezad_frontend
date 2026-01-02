import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Building, Layers, Calendar, IndianRupee, Info, Phone, ChevronDown, ChevronUp } from "lucide-react";
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
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      status: "Under Construction",
      title: "Brigade Horizon",
      location: "Mysore Road, Bangalore",
      type: "Apartments",
      bhk: "1, 2, 3 & 4 BHK",
      sqft: "1013 Sq.ft.* Onwards",
      price: "₹ 45 Lakhs Onwards",
      possession: "December, 2026",
      reraId: "PRM/KA/RERA/1251/310/PR/190722/005086",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      status: "Under Construction",
      title: "Brigade Oasis Phase 3",
      location: "Devanahalli, Bangalore",
      type: "Luxury Plots",
      bhk: "Plots",
      sqft: "2550 Sq.ft.* Onwards",
      price: "₹ 1.09 Cr* Onwards",
      possession: "June, 2025",
      reraId: "PRM/KA/RERA/1250/303/PR/220124/006562",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      status: "Ready to Move",
      title: "Brigade Meadows",
      location: "Kanakapura Road, Bangalore",
      type: "Apartments",
      bhk: "2 & 3 BHK",
      sqft: "1200 Sq.ft.* Onwards",
      price: "₹ 65 Lakhs Onwards",
      possession: "Ready",
      reraId: "PRM/KA/RERA/1251/309/PR/180521/003421",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      status: "Under Construction",
      title: "Brigade Cornerstone",
      location: "Electronic City, Bangalore",
      type: "Apartments",
      bhk: "1, 2 & 3 BHK",
      sqft: "850 Sq.ft.* Onwards",
      price: "₹ 55 Lakhs Onwards",
      possession: "March, 2027",
      reraId: "PRM/KA/RERA/1251/311/PR/210815/004892",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      status: "Pre Launch",
      title: "Brigade Valencia",
      location: "Hosur Road, Bangalore",
      type: "Villas",
      bhk: "3 & 4 BHK",
      sqft: "2800 Sq.ft.* Onwards",
      price: "₹ 2.5 Cr* Onwards",
      possession: "December, 2028",
      reraId: "PRM/KA/RERA/1251/312/PR/231001/007123",
    },
  ];

  const filterOptions = {
    propertyType: ["Builder Floors", "Commercial", "Leased", "Pre Leased", "Residential"],
    location: ["Bangalore", "Mysore", "Chennai", "Hyderabad", "Mumbai"],
    possession: ["Ready to Move", "Within 6 Months", "Within 1 Year", "Within 2 Years"],
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
            in Lake Austin, Westlake, Tarrytown, TX & beyond.
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
                activeFilter === filter ? "bg-gray-600 ring-2 ring-primary ring-inset" : "hover:bg-gray-600"
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
              {filterOptions[activeFilter as keyof typeof filterOptions].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelectedFilters((prev) => ({
                      ...prev,
                      [activeFilter]: prev[activeFilter as keyof typeof prev] === option ? "" : option,
                    }));
                  }}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedFilters[activeFilter as keyof typeof selectedFilters] === option
                      ? "bg-primary text-primary-foreground"
                      : "bg-white text-foreground hover:bg-gray-100"
                  }`}
                >
                  {option}
                </button>
              ))}
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
