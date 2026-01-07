import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="bg-card">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/assets/bipin.png"
                alt="Spacezad Wilcoxon - Luxury Real Estate Agent"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-border -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="luxury-subheading text-muted-foreground mb-4">
              Meet Your Agent
            </p>
            <h2 className="luxury-heading text-4xl md:text-5xl text-foreground mb-8">
              Bipin Rananaware
            </h2>
            <div className="space-y-6 text-muted-foreground luxury-body text-lg">
              <p>
                As India's premier luxury real estate professional, I bring over
                two decades of experience in representing the city's most
                exceptional properties and discerning clientele.
              </p>
              <p>
                My approach combines intimate market knowledge with a
                personalized, white-glove service that has earned the trust of
                India's most influential families and investors. Whether you're
                seeking a historic estate in Pemberton Heights or a contemporary
                masterpiece in West Lake Hills, I provide the expertise and
                discretion your transaction deserves.
              </p>
              <p>
                Having facilitated over ₹2,000 Crores in sales, I understand
                that luxury real estate is not just about properties—it's about
                lifestyle, legacy, and the art of exceptional living.
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-8 px-8 py-6 text-sm tracking-wider uppercase border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
