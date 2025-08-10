import { ProductCard } from "./ProductCard";

import { products } from "@/lib/products";
    rating: 4.7,
    reviewCount: 2103,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop",
    inStock: false,
  },
  {
    id: "5",
    name: "Bluetooth Speaker",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.5,
    reviewCount: 678,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop",
    inStock: true,
  },
  {
    id: "6",
    name: "Tablet Pro 12.9",
    price: 899.99,
    rating: 4.8,
    reviewCount: 1034,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&h=800&fit=crop",
    inStock: true,
  },
];

interface ProductGridProps {
  onAddToCart?: (productId: string) => void;
  onToggleFavorite?: (productId: string) => void;
}

export function ProductGrid({ onAddToCart, onToggleFavorite }: ProductGridProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium tech products with unbeatable prices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-glow">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}