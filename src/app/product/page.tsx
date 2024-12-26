"use client"
import React, { useState, useEffect } from "react";

const ProductPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cart, setCart] = useState<any[]>([]);

  
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addToCart = (product:any) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to the cart!`);
  };

  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: "$20",
      image: "/icons/chairproduct.jpeg",
      badge: "New",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: "$20",
      oldPrice: "$30",
      image: "/icons/chairproduct2.jpeg",
      badge: "Sales",
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: "$20",
      image: "/icons/chairproduct3.jpeg",
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: "$20",
      image: "/icons/chairproduct4.jpeg",
    },
    {
      id: 5,
      name: "Library Stool Chair",
      price: "$20",
      image: "/icons/category2.jpeg",
      badge: "New",
    },
    {
      id: 6,
      name: "Library Stool Chair",
      price: "$20",
      oldPrice: "$30",
      image: "/icons/chairproduct5.jpeg",
      badge: "Sales",
    },
    {
      id: 7,
      name: "Library Stool Chair",
      price: "$20",
      image: "/icons/chairproduct6.jpeg",
    },
    {
      id: 8,
      name: "Library Stool Chair",
      price: "$20",
      image: "/icons/chairproduct.jpeg",
    },
    {
      id: 9,
      name: "Library Stool Chair",
      price: "$20",
      badge: "New",
      image: "/icons/category1.jpeg",
    },
    {
      id: 10,
      name: "Library Stool Chair",
      price: "$20",
      badge: "Sales",
      image: "/icons/chairproduct2.jpeg",
    },
    {
      id: 11,
      name: "Library Stool Chair",
      price: "$20",
      image: "/icons/chairproduct3.jpeg",
    },
    {
      id: 12,
      name: "Library Stool Chair",
      price: "$20",
      image: "/icons/category3.png",
    },
  ];

  const instagramImages = [
    "/icons/category2.jpeg",
    "/icons/category1.jpeg",
    "/icons/chairproduct2.jpeg",
    "/icons/chairproduct.jpeg",
    "/icons/chairproduct3.jpeg",
    "/icons/category3.png",
  ];

  return (
    <div className="bg-white">
      <h1 className="text-2xl font-bold text-black pl-6 lg:px-[9%] py-8">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-[8%]">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg p-4 relative shadow-md"
          >
            {product.badge && (
              <span
                className={`absolute ml-4 mt-4 text-white text-xs font-bold px-2 py-1 rounded ${
                  product.badge === "New" ? "bg-green-500" : "bg-orange-500"
                }`}
              >
                {product.badge}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full lg:h-72 lg:object-cover rounded-md"
            />
            <h2 className="text-lg mt-4 text-black">{product.name}</h2>
            <div className="flex items-center mt-2">
              <p className="text-black font-bold">{product.price}</p>
              {product.oldPrice && (
                <p className="text-gray-500 text-sm line-through ml-2">
                  {product.oldPrice}
                </p>
              )}
            </div>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 mt-16 pt-2 pb-16">
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            Or Subscribe To The Newsletter
          </h2>
          <div className="flex justify-center items-center max-w-md mx-auto p-2">
            <input
              type="text"
              placeholder="Email Address..."
              className="border-b border-black text-black w-full p-2 focus:outline-none"
            />
            <button className="ml-4 bg-black text-white lg:px-4 py-2 hover:bg-gray-700">
              SUBMIT
            </button>
          </div>
        </div>

        {/* Instagram Products Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-black mb-8">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {instagramImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Instagram product ${index + 1}`}
                className="w-40 h-40 object-cover rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
