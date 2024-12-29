"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import data from "@/data/data.json"; // Import data from the JSON file

export default function ProductPage() {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Add product to cart and save to localStorage
  const addToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} has been added to the cart!`);
  };

  // Products fetched from data.json
  const products: Product[] = data;

  return (
    <div className="bg-white">
      {/* Header */}
      <h1 className="text-2xl font-bold text-black pl-6 lg:px-[9%] py-6">
        All Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-[8%] px-4 pb-16">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="block hover:shadow-lg transition-shadow">
              {/* Product Card */}
              <ProductCard product={product} />

              {/* Add to Cart Button */}
              <button
                onClick={(e) => addToCart(product, e)}
                className="mt-4 bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 w-full"
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-32">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Or Subscribe To The Newsletter
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Address..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4 sm:mb-0"
            />
            <button className="px-6 py-2 bg-teal-500 text-white font-medium rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-teal-600 transition">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <img
              src="/icons/category2.jpeg"
              alt="Product 1"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="/icons/category1.jpeg"
              alt="Product 2"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="/icons/chairproduct2.jpeg"
              alt="Product 3"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="/icons/chairproduct.jpeg"
              alt="Product 4"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="/icons/chairproduct3.jpeg"
              alt="Product 5"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src="/icons/category3.png"
              alt="Product 6"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
