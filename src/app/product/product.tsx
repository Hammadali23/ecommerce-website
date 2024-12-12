import React from "react";
import Image from "next/image";

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Library Stool Chair", price: "$20", tag: "New", img: "/chair1.jpg" },
    { id: 2, name: "Library Stool Chair", price: "$20", tag: "Sales", oldPrice: "$30", img: "/chair2.jpg" },
    { id: 3, name: "Library Stool Chair", price: "$20", img: "/chair3.jpg" },
    { id: 4, name: "Library Stool Chair", price: "$20", img: "/chair4.jpg" },
    { id: 5, name: "Library Stool Chair", price: "$20", tag: "New", img: "/chair5.jpg" },
    { id: 6, name: "Library Stool Chair", price: "$20", tag: "Sales", oldPrice: "$30", img: "/chair6.jpg" },
    { id: 7, name: "Library Stool Chair", price: "$20", img: "/chair7.jpg" },
    { id: 8, name: "Library Stool Chair", price: "$20", img: "/chair8.jpg" },
    { id: 9, name: "Library Stool Chair", price: "$20", tag: "New", img: "/chair9.jpg" },
    { id: 10, name: "Library Stool Chair", price: "$20", tag: "Sales", oldPrice: "$30", img: "/chair10.jpg" },
    { id: 11, name: "Library Stool Chair", price: "$20", img: "/chair11.jpg" },
    { id: 12, name: "Library Stool Chair", price: "$20", img: "/chair12.jpg" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden relative"
          >
            {/* Tag */}
            {product.tag && (
              <span
                className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded ${
                  product.tag === "New" ? "bg-green-500 text-white" : "bg-orange-500 text-white"
                }`}
              >
                {product.tag}
              </span>
            )}

            {/* Image */}
            <Image
              src={product.img}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />

            {/* Details */}
            <div className="p-4">
              <h3 className="text-gray-800 font-semibold">{product.name}</h3>
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-lg font-bold text-gray-800">{product.price}</p>
                {product.oldPrice && (
                  <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
                )}
              </div>
              {/* Cart Button */}
              <button className="mt-4 w-full flex items-center justify-center bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
