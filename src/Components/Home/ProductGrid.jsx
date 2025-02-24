import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "SPECIAL MEAT MASALA",
    price: 90,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Black Pepper Powder",
    price: 130,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "KASHMIRI CHILLY POWDER",
    price: 220,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "GARAM MASALA",
    price: 98,
    image: "https://via.placeholder.com/150",
  },
];

const ProductGrid = () => {
  return (
    <div className="p-6 bg-white">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <p className="text-orange-600 italic font-semibold">
          Checkout New Products
        </p>
        <h2 className="text-3xl font-bold text-green-900">
          Today’s new hottest products <br /> available now
        </h2>
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
