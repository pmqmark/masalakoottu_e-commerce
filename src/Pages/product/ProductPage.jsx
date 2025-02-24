import React, { useState } from "react";

const categories = [
  { name: "Masalas and Curry Powders", icon: "🌶️" },
  { name: "Millet Products", icon: "🌾" },
  { name: "Ready to Eat or Cooked Items", icon: "🍽️" },
  { name: "Rice and Wheat Products", icon: "🍚" },
  { name: "Baby Products", icon: "🍼" },
  { name: "Tea & Coffee", icon: "☕" },
  { name: "Honeys", icon: "🍯" },
  { name: "Oils", icon: "🛢️" },
];

const allProducts = {
  "Masalas and Curry Powders": [
    { name: "Turmeric Powder", price: 50 },
    { name: "Red Chilli Powder", price: 80 },
    { name: "Coriander Powder", price: 60 },
    { name: "Garam Masala", price: 90 },
    { name: "Cumin Powder", price: 70 },
    { name: "Sambar Powder", price: 85 },
  ],
  "Millet Products": [
    { name: "Ragi Flour", price: 40 },
    { name: "Foxtail Millet", price: 60 },
    { name: "Barnyard Millet", price: 55 },
    { name: "Kodo Millet", price: 65 },
    { name: "Little Millet", price: 75 },
    { name: "Bajra Flour", price: 50 },
  ],
};

const ProductCard = ({ name, price }) => (
  <div className="w-full sm:w-[270px] bg-gray-200 rounded-lg p-4 shadow-lg">
    <div className="w-full h-[275px] bg-gray-300 flex items-center justify-center text-black font-bold">
      270X275
    </div>
    <div className="text-center mt-2">
      <p className="text-orange-700 font-bold">{name}</p>
      <p className="text-gray-600">${price}</p>
      <button className="mt-2 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
        Add to cart
      </button>
    </div>
  </div>
);

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <div className="hidden lg:block w-[250px] p-4 bg-gray-100 rounded-lg">
    <h2 className="text-orange-700 font-bold">Categories</h2>
    <ul className="mt-2 space-y-2">
      {categories.map((category, index) => (
        <li
          key={index}
          onClick={() => setSelectedCategory(category.name)}
          className={`cursor-pointer p-2 rounded-lg transition font-semibold ${
            selectedCategory === category.name
              ? "bg-orange-500 text-white"
              : "text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category.icon} {category.name}
        </li>
      ))}
    </ul>
  </div>
);

const MobileDropdown = ({ selectedCategory, setSelectedCategory }) => (
  <div className="lg:hidden w-full mb-4">
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700 font-semibold"
    >
      {categories.map((category, index) => (
        <option key={index} value={category.name}>
          {category.icon} {category.name}
        </option>
      ))}
    </select>
  </div>
);

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "Masalas and Curry Powders"
  );

  return (
    <div className="p-6 pb-[100px] flex flex-col lg:flex-row gap-6">
      {/* Mobile Dropdown for Small Screens */}
      <MobileDropdown
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Sidebar for Large Screens */}
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {allProducts[selectedCategory]?.slice(0, 6).map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
