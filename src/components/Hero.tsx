import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 opacity-50"></div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">Trending Now</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Premium Tech
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Delivered Fast
                </span>
              </h1>

              <p className="text-xl text-primary-foreground/80 max-w-lg">
                Discover the latest technology with unbeatable prices and
                lightning-fast delivery. Your premium shopping experience starts
                here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="hero"
                size="xl"
                className="bg-background text-primary hover:bg-background/90"
              >
                <Link to="/view-all">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-primary-foreground/20 text-secondary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/deals">View Deals</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">
                  50K+
                </div>
                <div className="text-sm text-primary-foreground/60">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 text-primary-foreground">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <div className="text-sm text-primary-foreground/60">
                  Average Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">
                  24/7
                </div>
                <div className="text-sm text-primary-foreground/60">
                  Support
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="h-32 bg-gradient-to-br from-background/20 to-background/10 rounded-lg flex items-center justify-center">
                    <div className="text-6xl">📱</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-primary-foreground">
                      iPhone 15 Pro
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary-foreground">
                        $999
                      </span>
                      <span className="text-lg text-primary-foreground/60 line-through">
                        $1,199
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              -17% OFF
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background text-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              Free Shipping
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
