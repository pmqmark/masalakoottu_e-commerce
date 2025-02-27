import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "SPECIAL MEAT MASALA",
    price: 90,
    image: "/assets/products/599F6C5D61F5960879B2CFC6F1_1737805615747.jpg",
  },
  {
    id: 2,
    name: "Black Pepper Powder",
    price: 130,
    image: "/assets/products/9FA2A2CB562552C243A7D6FBA6_1737806203835.jpg",
  },
  {
    id: 3,
    name: "KASHMIRI CHILLY POWDER",
    price: 220,
    image: "/assets/products/kashmiri-chilly-powder-byadagi-250-g-2030067964-x6wzurhn.webp",
  },
  {
    id: 4,
    name: "GARAM MASALA",
    price: 98,
    image: "/assets/products/garam-masala-100-g-2030065970-t8puao2w.avif",
  },
];

const ProductGrid = () => {
  return (
    <div className="p-6 bg-white py-6 md:py-12">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <p className="text-orange-600 text-md italic font-semibold mb-2">
          Checkout New Products
        </p>
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-green-900">
          Today’s new hottest products <br /> available now
        </h2>
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-6 md:mt-10 mt-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
