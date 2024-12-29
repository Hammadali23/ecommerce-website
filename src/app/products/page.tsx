 "use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import data from "@/data/data.json"; // Import data from the JSON file

export default function ProductPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} has been added to the cart!`);
  };

  // Use data from data.json instead of hardcoded products array
  const products: Product[] = data;

  return (
    <div className="bg-white">
      <h1 className="text-2xl font-bold text-black pl-6 lg:px-[9%]  py-6">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-[8%] px-2 pb-16">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="block hover:shadow-lg transition-shadow">
              <ProductCard product={product} />
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
    </div>
  );
}
