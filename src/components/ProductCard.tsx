import { Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  inStock: boolean;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  onToggleFavorite?: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart, onToggleFavorite }: ProductCardProps) {
  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group relative overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-[1.02] bg-card border-0">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {product.featured && (
            <Badge className="bg-gradient-primary text-primary-foreground">
              Featured
            </Badge>
          )}
          {discountPercent > 0 && (
            <Badge variant="destructive">
              -{discountPercent}%
            </Badge>
          )}
          {!product.inStock && (
            <Badge className="bg-stock-out text-destructive-foreground">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Favorite button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 hover:bg-background"
          onClick={() => onToggleFavorite?.(product.id)}
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick add to cart overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="cart"
            size="lg"
            disabled={!product.inStock}
            onClick={() => onAddToCart?.(product.id)}
            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg text-card-foreground line-clamp-2 min-h-[3.5rem] flex items-center">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-price">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}