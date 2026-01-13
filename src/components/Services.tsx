import { Truck, Car, AlertTriangle, Clock, MapPin, Wrench } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Truck,
    title: "نقل السيارات",
    description: "نقل جميع أنواع السيارات بأمان تام باستخدام سطحات حديثة ومجهزة",
  },
  {
    icon: AlertTriangle,
    title: "خدمة الطوارئ",
    description: "متوفرون 24 ساعة للحالات الطارئة. اتصل بنا في أي وقت ونصلك فوراً",
  },
  {
    icon: Car,
    title: "سحب السيارات المعطلة",
    description: "سحب السيارات التي تعرضت لأعطال ميكانيكية أو حوادث بكل احترافية",
  },
  {
    icon: MapPin,
    title: "تغطية واسعة",
    description: "نغطي الشرايع ومكة المكرمة وضواحيها بخدمة سريعة وموثوقة",
  },
  {
    icon: Clock,
    title: "سرعة الوصول",
    description: "نصل إليك في أسرع وقت ممكن مع الحفاظ على جودة الخدمة",
  },
  {
    icon: Wrench,
    title: "مساعدة على الطريق",
    description: "نقدم خدمات المساعدة الأولية على الطريق مثل تبديل الإطارات",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            خدمات سطحة متكاملة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نقدم مجموعة شاملة من خدمات نقل وسحب السيارات بأعلى معايير الجودة والأمان
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-dark transition-all duration-500 border-border hover:border-primary/50 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={28} className="text-secondary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
