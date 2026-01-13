import { Phone, MessageCircle, MapPin, Clock, Shield } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";

const Hero = () => {
  const phoneNumber = "0511250501";
  const whatsappLink = `https://wa.me/966${phoneNumber.slice(1)}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-dark opacity-95" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFB800' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Clock size={18} />
              <span className="font-medium">متوفرون على مدار الساعة</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              خدمة سطحات
              <span className="block text-gradient mt-2">سريعة وموثوقة</span>
              في الشرايع ومكة
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              نقدم خدمة نقل السيارات على مدار الساعة بأحدث السطحات وأفضل الأسعار. 
              اتصل بنا الآن ونصلك في أسرع وقت.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/90">
                <Shield className="text-primary" size={20} />
                <span>مرخصون ومؤمنون</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="text-primary" size={20} />
                <span>تغطية شاملة</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary text-secondary font-bold text-lg px-8 py-6 shadow-gold hover:opacity-90 transition-opacity"
              >
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="ml-2" size={24} />
                  اتصل الآن: {phoneNumber}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold text-lg px-8 py-6"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="ml-2" size={24} />
                  تواصل واتساب
                </a>
              </Button>
            </div>
          </div>

          {/* Logo/Visual */}
          <div className="hidden lg:flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150" />
              <div className="relative bg-card/10 backdrop-blur-sm p-12 rounded-3xl border border-white/10">
                <Logo size="large" />
                <div className="mt-8 text-center">
                  <p className="text-white/60 text-sm mb-2">للطوارئ اتصل على</p>
                  <p className="text-primary text-3xl font-bold tracking-wider">{phoneNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
