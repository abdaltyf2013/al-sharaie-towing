import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "أبو محمد",
    location: "الشرايع",
    rating: 5,
    text: "خدمة ممتازة وسريعة جداً. اتصلت عليهم الساعة 2 الفجر ووصلوا خلال 20 دقيقة. أنصح الجميع بهم.",
  },
  {
    name: "خالد العتيبي",
    location: "مكة المكرمة",
    rating: 5,
    text: "تعاملت معهم أكثر من مرة وكل مرة الخدمة ممتازة. أسعارهم معقولة والسائقين محترمين.",
  },
  {
    name: "سعود الحربي",
    location: "العوالي",
    rating: 5,
    text: "سيارتي تعطلت على الطريق السريع وكنت خايف. اتصلت عليهم وطمنوني ووصلوا بسرعة. شكراً لكم.",
  },
  {
    name: "فهد الزهراني",
    location: "الشرايع",
    rating: 4,
    text: "خدمة جيدة جداً ونقلوا سيارتي بأمان. أسعارهم مناسبة مقارنة بغيرهم.",
  },
  {
    name: "عبدالله المالكي",
    location: "النوارية",
    rating: 5,
    text: "أفضل سطحة تعاملت معها. السطحة نظيفة وحديثة والسائق محترف. بارك الله فيهم.",
  },
  {
    name: "ماجد القرشي",
    location: "الزاهر",
    rating: 5,
    text: "سرعة في الوصول واحترافية في العمل. أوصي بهم بشدة لكل من يحتاج خدمة سطحة.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            آراء العملاء
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            ماذا يقول عملاؤنا عنا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نفتخر بثقة عملائنا ونسعى دائماً لتقديم أفضل خدمة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-dark transition-all duration-500 border-border hover:border-primary/30"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="text-primary/30" size={32} />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < testimonial.rating
                          ? "fill-primary text-primary"
                          : "text-muted-foreground/30"
                      }
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/80 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-secondary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-dark rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">4.9</p>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-white/70">تقييم العملاء</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">+500</p>
              <p className="text-white/70">عميل راضي</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">+1000</p>
              <p className="text-white/70">رحلة ناجحة</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">15 د</p>
              <p className="text-white/70">متوسط الوصول</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
