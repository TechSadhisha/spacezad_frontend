import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About Spacezad", href: "#about" },
    { label: "Featured Properties", href: "#properties" },
    { label: "Neighborhoods", href: "#communities" },
    { label: "Let's Connect", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const legalLinks = [
    {
      label: "Texas Real Estate Commission Consumer Protection Notice",
      href: "#",
    },
    {
      label:
        "Texas Real Estate Commission Information About Brokerage Services",
      href: "#",
    },
    { label: "TREC Disclaimer", href: "#" },
  ];

  return (
    <footer className="bg-background">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Logo */}

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-2xl font-serif font-light text-foreground mb-4">
              SPACEZAD
            </h4>
            <p className="text-muted-foreground font-sans mb-1">
              <a
                href="tel:512.423.5035"
                className="hover:text-foreground transition-colors underline"
              >
                512.423.5035
              </a>
            </p>
            <p className="text-muted-foreground font-sans">
              <a
                href="mailto:info@spacezad.com"
                className="hover:text-foreground transition-colors underline"
              >
                info@spacezad@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-serif font-light text-foreground mb-4">
              ADDRESS
            </h4>
            <p className="text-muted-foreground font-sans mb-1">
              Anant Enclave, M G Road, Ville Parle
            </p>
            <p className="text-muted-foreground font-sans">Mumbai - India</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 lg:gap-12 items-center justify-between border-t border-border pt-8 mb-8">
          <div className="flex flex-wrap gap-6 lg:gap-10">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-wider font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="space-y-2 mb-8">
          {legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-sans text-muted-foreground hover:text-foreground transition-colors underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Broker Info */}
        <div className="mb-8">
          <p className="text-sm font-sans text-muted-foreground">
            <a
              href="tel:210.822.8602"
              className="underline hover:text-foreground transition-colors"
            >
              Spacezad Realty | 210.822.8602
            </a>
          </p>
          <p className="text-sm font-sans text-muted-foreground">
            Broker Of The Firm | Harry J Kuper Jr.
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs font-sans text-muted-foreground leading-relaxed mb-8">
          Spacezad Realty® and the Spacezad Realty Logo are service marks
          licensed to Spacezad Realty Affiliates LLC and used with permission.
          Spacezad Realty fully supports the principles of the Fair Housing Act
          and the Equal Opportunity Act. Each office is independently owned and
          operated. Any services or products provided by independently owned and
          operated franchisees are not provided by, affiliated with or related
          to Spacezad Realty Affiliates LLC nor any of its affiliated companies.
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-sans text-muted-foreground">
              Powered by{" "}
              <a
                href="#"
                className="underline hover:text-foreground transition-colors"
              >
                Sadhisha
              </a>
            </p>
            <p className="text-sm font-sans text-muted-foreground">
              Copyright © {new Date().getFullYear()} |{" "}
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
