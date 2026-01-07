import { useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const LetsConnect = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      toast({
        title: "Agreement Required",
        description: "Please agree to be contacted before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setAgreed(false);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation variant="dark" />

      <div className="pt-20 min-h-screen grid lg:grid-cols-2">
        {/* Left - Form Section */}
        <div className="px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
          <p className="text-muted-foreground mb-8">
            Let me know how I can assist you.
          </p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground tracking-wide mb-12 underline underline-offset-8 decoration-1">
            GET IN TOUCH
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border-border bg-transparent py-6 px-4"
              />
              <Input
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border-border bg-transparent py-6 px-4"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-border bg-transparent py-6 px-4"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-border bg-transparent py-6 px-4"
              />
            </div>

            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="border-border bg-transparent px-4 py-4 resize-y"
            />

            <div className="flex items-start space-x-3">
              <Checkbox
                id="agree"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-1"
              />
              <label
                htmlFor="agree"
                className="text-sm text-muted-foreground leading-relaxed"
              >
                I agree to be contacted by Spacezad Wilcoxon* via call, email,
                and text for real estate services. To opt out, you can reply
                &apos;stop&apos; at any time or reply &apos;help&apos; for
                assistance. You can also click the unsubscribe link in the
                emails. Message and data rates may apply. Message frequency may
                vary.{" "}
                <Link to="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              variant="outline"
              className="w-full py-6 text-sm tracking-wider uppercase border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </form>
        </div>

        {/* Right - Contact Info with Background */}
        <div
          className="relative bg-cover bg-center min-h-[500px] lg:min-h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />

          {/* Close button */}
          <Link
            to="/"
            className="absolute top-8 right-8 text-white hover:opacity-80 transition-opacity z-10"
          >
            <X size={32} strokeWidth={1} />
          </Link>

          <div className="relative z-10 h-full flex flex-col justify-start pt-16 lg:pt-24 px-8 lg:px-16 text-white">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8">
              SPACEZAD WILCOXON
            </h2>

            <div className="space-y-2 mb-8">
              <a
                href="mailto:spacezad@sothebysrealty.com"
                className="block underline hover:opacity-80 transition-opacity"
              >
                spacezad@sothebysrealty.com
              </a>
              <a
                href="tel:512.423.5035"
                className="block underline hover:opacity-80 transition-opacity"
              >
                512.423.5035
              </a>
            </div>

            <div className="mb-8">
              <p>524 N Lamar Blvd #204</p>
              <p>India TX 78703</p>
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LetsConnect;
