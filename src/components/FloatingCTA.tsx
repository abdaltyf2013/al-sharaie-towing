import { Phone, MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  const phoneNumber = "0511250501";
  const whatsappLink = `https://wa.me/966${phoneNumber.slice(1)}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="تواصل واتساب"
      >
        <MessageCircle size={28} className="text-white" />
        <span className="absolute right-full mr-3 bg-foreground text-background px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          واتساب
        </span>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="group relative w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-slow"
        aria-label="اتصل الآن"
      >
        <Phone size={28} className="text-secondary" />
        <span className="absolute right-full mr-3 bg-foreground text-background px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          اتصل الآن
        </span>
      </a>
    </div>
  );
};

export default FloatingCTA;
