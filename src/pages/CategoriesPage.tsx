import React from "react";
import { Link } from "react-router-dom";

// Example categories, you can expand or fetch dynamically
const categories = [
  {
    id: "audio",
    name: "Audio & Headphones",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop",
  },
  {
    id: "wearables",
    name: "Wearables",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&h=400&fit=crop",
  },
  {
    id: "laptops",
    name: "Laptops",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
  },
  {
    id: "phones",
    name: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
  },
  {
    id: "tablets",
    name: "Tablets",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=400&fit=crop",
  },
];

const CategoriesPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shop by Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link
            to={`/category/${cat.id}`}
            key={cat.id}
            className="block group rounded-lg overflow-hidden shadow hover:shadow-lg transition border bg-white"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                {cat.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
