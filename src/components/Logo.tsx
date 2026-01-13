import { Truck } from "lucide-react";

const Logo = ({ size = "default" }: { size?: "small" | "default" | "large" }) => {
  const sizes = {
    small: { icon: 24, text: "text-xl" },
    default: { icon: 40, text: "text-3xl" },
    large: { icon: 64, text: "text-5xl" },
  };

  const currentSize = sizes[size];

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="bg-gradient-primary p-3 rounded-2xl shadow-gold">
          <Truck size={currentSize.icon} className="text-secondary" strokeWidth={2.5} />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full border-2 border-primary animate-pulse" />
      </div>
      <div className="flex flex-col">
        <span className={`${currentSize.text} font-black text-secondary leading-tight`}>
          سطحة
        </span>
        <span className="text-primary font-bold text-lg tracking-wider">
          الشرايع
        </span>
      </div>
    </div>
  );
};

export default Logo;
