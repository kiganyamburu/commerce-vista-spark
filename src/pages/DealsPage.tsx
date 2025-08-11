import React from "react";
import { Link } from "react-router-dom";

// Example deals data
const deals = [
  {
    id: "deal1",
    name: "Wireless Headphones - 30% Off",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    price: 139.99,
    oldPrice: 199.99,
  },
  {
    id: "deal2",
    name: "Smart Watch Pro - 20% Off",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    price: 239.99,
    oldPrice: 299.99,
  },
  {
    id: "deal3",
    name: "Tablet Pro 12.9 - 15% Off",
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop",
    price: 764.99,
    oldPrice: 899.99,
  },
];

const DealsPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-red-600">
        Hot Deals
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {deals.map((deal) => (
          <Link
            to={`/product/${deal.id}`}
            key={deal.id}
            className="block group rounded-lg overflow-hidden shadow hover:shadow-lg transition border bg-white"
          >
            <img
              src={deal.image}
              alt={deal.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold group-hover:text-red-600 transition-colors">
                {deal.name}
              </h2>
              <div className="mt-2">
                <span className="text-lg font-bold text-green-600 mr-2">
                  ${deal.price.toFixed(2)}
                </span>
                <span className="text-sm line-through text-gray-400">
                  ${deal.oldPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
