import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavigationProps {
  variant?: "light" | "dark";
}

const Navigation = ({ variant = "light" }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const textColor =
    variant === "dark" ? "text-primary" : "text-primary-foreground";

  const hoverColor =
    variant === "dark"
      ? "hover:text-primary/80"
      : "hover:text-primary-foreground";

  const navItems = [
    {
      label: "Luxury Properties",
      href: "/properties",
      isLink: true,
      hasDropdown: false,
    },
    { label: "Value Properties", href: "/value-properties", isLink: true },
    { label: "About", href: "/about", isLink: true },
    { label: "Let's Connect", href: "/lets-connect", isLink: true },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span
              className={`text-2xl font-serif font-light tracking-[0.15em] ${textColor}`}
            >
              SPACEZAD
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isLink ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center ${textColor}/90 ${hoverColor} text-sm tracking-wider uppercase font-sans font-medium transition-colors`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center ${textColor}/90 ${hoverColor} text-sm tracking-wider uppercase font-sans font-medium transition-colors`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${textColor} hover:bg-primary/10`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) =>
                item.isLink ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`${textColor}/90 ${hoverColor} text-sm tracking-wider uppercase font-sans font-medium transition-colors py-2`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`${textColor}/90 ${hoverColor} text-sm tracking-wider uppercase font-sans font-medium transition-colors py-2`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
