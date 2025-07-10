import { Button } from "@/components/ui/button";
import { Crown, Gem, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Jewelry Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-float">
        <Gem className="h-8 w-8 text-primary opacity-60" />
      </div>
      <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles className="h-6 w-6 text-primary opacity-80" />
      </div>
      <div className="absolute bottom-32 left-40 animate-float" style={{ animationDelay: '2s' }}>
        <Crown className="h-10 w-10 text-primary opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl text-right" dir="rtl">
          <div className="flex items-center justify-end gap-2 mb-4">
            <span className="text-primary text-sm font-medium">مجموعة حصرية</span>
            <Star className="h-4 w-4 text-primary animate-glow" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block text-foreground">متجر</span>
            <span className="block bg-gradient-gold bg-clip-text text-transparent animate-glow">
              فخيم
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-slide-up">
            اكتشف مجموعة استثنائية من المجوهرات الفاخرة والإكسسوارات الراقية
            المصممة خصيصاً لتلبي ذوقك الرفيع وتضفي لمسة من الأناقة على إطلالتك
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-end animate-slide-up">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              تصفح المجموعات
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-gold hover:shadow-glow text-primary-foreground font-semibold"
            >
              تسوق الآن
            </Button>
          </div>
          
          <div className="flex items-center justify-end gap-8 mt-12 text-sm text-muted-foreground">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">500+</p>
              <p>منتج فاخر</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">5000+</p>
              <p>عميل سعيد</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">10+</p>
              <p>سنوات خبرة</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};