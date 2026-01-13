import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "+500", label: "عميل سعيد" },
  { icon: Award, value: "+5", label: "سنوات خبرة" },
  { icon: TrendingUp, value: "24/7", label: "خدمة متواصلة" },
];

const features = [
  "سطحات حديثة ومجهزة بالكامل",
  "سائقون محترفون ومدربون",
  "أسعار منافسة وشفافة",
  "سرعة في الوصول والتنفيذ",
  "تغطية تأمينية شاملة",
  "خدمة عملاء متميزة",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              من نحن
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
              قصة <span className="text-primary">سطحة الشرايع</span>
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-6 leading-relaxed">
              بدأنا رحلتنا في خدمة أهالي الشرايع ومكة المكرمة بهدف واحد: تقديم خدمة سطحة احترافية 
              تليق بثقة عملائنا. على مدار السنوات، بنينا سمعة قوية قائمة على الموثوقية والسرعة والأمانة.
            </p>
            <p className="text-secondary-foreground/80 text-lg mb-8 leading-relaxed">
              نفتخر بأننا الخيار الأول لآلاف العملاء في المنطقة، ونسعى دائماً لتطوير خدماتنا 
              لنكون على قدر توقعاتكم.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="text-secondary-foreground/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
            <div className="relative bg-secondary-foreground/5 backdrop-blur-sm rounded-3xl p-8 border border-secondary-foreground/10">
              <div className="grid gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 p-4 rounded-2xl hover:bg-secondary-foreground/5 transition-colors"
                  >
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-gold">
                      <stat.icon size={32} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-4xl font-black text-primary">{stat.value}</p>
                      <p className="text-secondary-foreground/70 font-medium">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="mt-8 p-6 bg-gradient-primary rounded-2xl text-center">
                <p className="text-secondary font-bold text-xl">نحن هنا لخدمتك</p>
                <p className="text-secondary/80">على مدار الساعة، طوال أيام الأسبوع</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
