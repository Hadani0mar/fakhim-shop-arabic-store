import { Crown, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4" dir="rtl">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Crown className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">متجر فخيم</h3>
                <p className="text-sm text-muted-foreground">للمجوهرات والإكسسوارات</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              وجهتك الأولى للحصول على أجمل قطع المجوهرات والإكسسوارات الفاخرة.
              نحن نقدم لك أرقى المنتجات بجودة استثنائية وتصاميم عصرية.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4" dir="rtl">
            <h4 className="text-lg font-semibold text-foreground">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">الرئيسية</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">المنتجات</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">العروض</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">من نحن</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">اتصل بنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4" dir="rtl">
            <h4 className="text-lg font-semibold text-foreground">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+966 50 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">info@fakhimstore.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4" dir="rtl">
            <h4 className="text-lg font-semibold text-foreground">النشرة البريدية</h4>
            <p className="text-muted-foreground text-sm">
              اشترك في نشرتنا البريدية للحصول على أحدث العروض والمنتجات الجديدة
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="البريد الإلكتروني"
                className="bg-background border-border"
                dir="rtl"
              />
              <Button className="bg-gradient-gold hover:shadow-glow">
                اشتراك
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p dir="rtl">© 2024 متجر فخيم. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6" dir="rtl">
              <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-primary transition-colors">شروط الاستخدام</a>
              <a href="#" className="hover:text-primary transition-colors">سياسة الإرجاع</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};