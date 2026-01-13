import { Phone, MessageCircle, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const phoneNumber = "0511250501";
  const whatsappLink = `https://wa.me/966${phoneNumber.slice(1)}`;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Logo size="small" />
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              خدمة سطحات احترافية في الشرايع ومكة المكرمة. نقل السيارات بأمان وسرعة على مدار الساعة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">روابط سريعة</h4>
            <nav className="flex flex-col gap-2">
              <a href="#home" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                الرئيسية
              </a>
              <a href="#services" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                خدماتنا
              </a>
              <a href="#about" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                من نحن
              </a>
              <a href="#contact" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                تواصل معنا
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">تواصل معنا</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone size={18} />
                {phoneNumber}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
              >
                <MessageCircle size={18} />
                واتساب
              </a>
              <div className="flex items-center gap-2 text-secondary-foreground/70">
                <MapPin size={18} />
                الشرايع - مكة المكرمة
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/10 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            جميع الحقوق محفوظة © {currentYear} سطحة الشرايع
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
