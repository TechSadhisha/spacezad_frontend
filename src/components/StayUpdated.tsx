import { Button } from "@/components/ui/button";

const StayUpdated = () => {
  return (
    <section className="bg-muted py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left - Title */}
          <div className="flex-shrink-0">
            <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground">
              STAY
              <br />
              UPDATED
            </h3>
          </div>

          {/* Center - Text */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <p className="luxury-body text-muted-foreground">
              Spacezad understands the value of a real estate investment in a
              way that few can articulate, using her uncanny intuition to
              maximize returns for her clients. When listing a client's home,
              she evaluates the market opportunities, to be able to encourage
              her clients to be smart and patient to achieve the best outcome.
            </p>
          </div>

          {/* Right - Button */}
          <div className="flex-shrink-0">
            <Button
              variant="outline"
              className="px-8 py-6 text-sm tracking-[0.2em] uppercase border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayUpdated;
