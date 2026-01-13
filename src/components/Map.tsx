import { MapPin, Phone, Clock } from "lucide-react";

const coverageAreas = [
  "الشرايع",
  "العوالي", 
  "النوارية",
  "الزاهر",
  "العزيزية",
  "الرصيفة",
  "الكعكية",
  "الشوقية",
  "الحمراء",
  "المسفلة",
];

const Map = () => {
  const phoneNumber = "0511250501";

  return (
    <section id="map" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            موقعنا
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            مناطق التغطية
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نغطي الشرايع ومكة المكرمة وجميع المناطق المحيطة بخدمة سريعة وموثوقة
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-dark h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59547.97926142462!2d39.88888088896483!3d21.42847370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c269!2sAl%20Sharai%2C%20Mecca%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sar!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع سطحة الشرايع"
              />
            </div>
          </div>

          {/* Coverage Areas */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <MapPin className="text-primary" size={24} />
                معلومات الموقع
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium text-foreground">العنوان</p>
                    <p className="text-muted-foreground">الشرايع - مكة المكرمة</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium text-foreground">الهاتف</p>
                    <a href={`tel:${phoneNumber}`} className="text-primary hover:underline">
                      {phoneNumber}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="font-medium text-foreground">ساعات العمل</p>
                    <p className="text-muted-foreground">24 ساعة - 7 أيام</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas List */}
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">
                المناطق التي نغطيها
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {coverageAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground border-t border-border pt-4">
                * نغطي أيضاً المناطق الأخرى حسب الطلب
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
