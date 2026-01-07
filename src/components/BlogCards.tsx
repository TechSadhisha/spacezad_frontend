import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const blogs = [
    {
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80",
      title:
        "How to Determine Your Non-Negotiables When Buying a Luxury Property",
      author: "Spacezad",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      title: "Lake India Things to Do",
      author: "Spacezad",
      excerpt:
        "Water activities and picturesque hikes on this popular reservoir.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1053&q=80",
      title: "India's Most Prestigious Neighborhoods Explained",
      author: "Spacezad",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-muted pb-20 lg:pb-28">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="rounded-full border-foreground/30 hover:bg-foreground hover:text-background h-12 w-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="rounded-full border-foreground/30 hover:bg-foreground hover:text-background h-12 w-12"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Blog Cards Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[600px] snap-center group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden mb-6">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-serif font-light text-foreground mb-3 uppercase tracking-wide leading-tight">
                {blog.title}
              </h3>
              <p className="text-sm font-sans uppercase tracking-wider text-muted-foreground mb-2">
                {blog.author}
              </p>
              {blog.excerpt && (
                <p className="text-muted-foreground font-sans text-sm">
                  {blog.excerpt}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
