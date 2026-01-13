import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
  const phoneNumber = "0511250501";
  const whatsappLink = `https://wa.me/966${phoneNumber.slice(1)}`;

  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      value: phoneNumber,
      link: `tel:${phoneNumber}`,
      color: "bg-primary",
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      value: phoneNumber,
      link: whatsappLink,
      color: "bg-green-500",
    },
    {
      icon: MapPin,
      title: "الموقع",
      value: "الشرايع - مكة المكرمة",
      link: null,
      color: "bg-secondary",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "24 ساعة - 7 أيام",
      link: null,
      color: "bg-secondary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            نحن في خدمتك
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            تواصل معنا في أي وقت وسنكون سعداء بخدمتك. نحن متوفرون على مدار الساعة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-dark transition-shadow">
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <info.icon size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-primary hover:underline font-medium"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-dark rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            محتاج سطحة الآن؟
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            لا تتردد في الاتصال بنا. فريقنا جاهز لخدمتك في أي وقت وأي مكان
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary text-secondary font-bold text-lg px-8 py-6 shadow-gold hover:opacity-90"
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="ml-2" size={24} />
                اتصل الآن
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-6"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="ml-2" size={24} />
                راسلنا واتساب
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
