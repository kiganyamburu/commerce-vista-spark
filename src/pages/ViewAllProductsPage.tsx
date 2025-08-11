import React from "react";
import { ProductGrid } from "@/components/ProductGrid";

const ViewAllProductsPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>
      <ProductGrid showAll />
    </div>
  );
};

export default ViewAllProductsPage;
