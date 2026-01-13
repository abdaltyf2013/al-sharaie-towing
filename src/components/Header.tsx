import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "0511250501";
  const whatsappLink = `https://wa.me/966${phoneNumber.slice(1)}`;

  const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#services", label: "خدماتنا" },
    { href: "#testimonials", label: "آراء العملاء" },
    { href: "#about", label: "من نحن" },
    { href: "#map", label: "الموقع" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo size="small" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="ml-2" size={18} />
                واتساب
              </a>
            </Button>
            <Button asChild className="bg-gradient-primary shadow-gold hover:opacity-90">
              <a href={`tel:${phoneNumber}`}>
                <Phone className="ml-2" size={18} />
                اتصل الآن
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary w-full"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="ml-2" size={18} />
                    واتساب
                  </a>
                </Button>
                <Button asChild className="bg-gradient-primary w-full">
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="ml-2" size={18} />
                    اتصل الآن
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
