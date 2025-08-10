import React from "react";
import { useParams } from "react-router-dom";
import { products } from "@/lib/products";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-2xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-600">
          Sorry, we couldn't find the product you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain rounded-lg border"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★ {product.rating}</span>
            <span className="text-gray-500 text-sm">
              ({product.reviewCount} reviews)
            </span>
          </div>
          <div className="text-2xl font-semibold text-green-600">
            ${product.price}
          </div>
          {product.originalPrice && (
            <div className="text-gray-400 line-through">
              ${product.originalPrice}
            </div>
          )}
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl
            aliquam eros, eget convallis nunc urna eu lectus.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
