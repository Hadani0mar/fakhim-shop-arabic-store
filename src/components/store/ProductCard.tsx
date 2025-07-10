import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  image_url: string;
  is_available: boolean;
  featured: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleFavorite?: (productId: string) => void;
  isFavorite?: boolean;
}

export const ProductCard = ({ 
  product, 
  onAddToCart, 
  onToggleFavorite, 
  isFavorite = false 
}: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR'
    }).format(price);
  };

  return (
    <Card className="group relative overflow-hidden bg-card border-border shadow-card hover:shadow-luxury transition-all duration-500 hover:scale-105">
      {product.featured && (
        <Badge className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground">
          مميز
        </Badge>
      )}
      
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = "/api/placeholder/300/300";
          }}
        />
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <Button
              size="icon"
              variant="secondary"
              className="bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              onClick={() => onToggleFavorite?.(product.id)}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            
            <Button
              size="icon"
              variant="secondary"
              className="bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              onClick={() => onAddToCart?.(product)}
              disabled={!product.is_available}
            >
              <ShoppingBag className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {!product.is_available && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Badge variant="secondary" className="bg-destructive text-destructive-foreground">
              غير متوفر
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Category */}
        <Badge variant="outline" className="text-xs">
          {product.category === 'men' ? 'رجالي' : 
           product.category === 'women' ? 'نسائي' : 
           product.category === 'unisex' ? 'للجنسين' : product.category}
        </Badge>

        {/* Product Name */}
        <h3 className="font-semibold text-foreground line-clamp-2 text-right" dir="rtl">
          {product.name}
        </h3>

        {/* Description */}
        {product.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 text-right" dir="rtl">
            {product.description}
          </p>
        )}

        {/* Price and Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-primary text-primary" />
            ))}
            <span className="text-xs text-muted-foreground mr-1">5.0</span>
          </div>
          
          <div className="text-left">
            <p className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-gradient-gold hover:shadow-glow disabled:opacity-50"
          onClick={() => onAddToCart?.(product)}
          disabled={!product.is_available}
        >
          {product.is_available ? 'أضف للسلة' : 'غير متوفر'}
        </Button>
      </CardContent>
    </Card>
  );
};