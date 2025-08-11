import { ProductCard } from "./ProductCard";

import { products } from "@/lib/products";

interface ProductGridProps {
  onAddToCart?: (productId: string) => void;
  onToggleFavorite?: (productId: string) => void;
  showAll?: boolean;
}

export function ProductGrid({
  onAddToCart,
  onToggleFavorite,
  showAll = false,
}: ProductGridProps) {
  // For demo: show first 6 as featured, all if showAll
  const displayedProducts = showAll ? products : products.slice(0, 6);
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {showAll ? "All Products" : "Featured Products"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {showAll
              ? "Browse our entire catalog of premium tech products."
              : "Discover our handpicked selection of premium tech products with unbeatable prices"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <a
              href="/view-all"
              className="bg-primary text-primary-foreground hover:bg-primary-hover px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-glow inline-block"
            >
              View All Products
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
