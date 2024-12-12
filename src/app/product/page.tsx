import React from "react";

const ProductPage = () => {
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
      image:"/icons/chairproduct5.jpeg",
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
      badge: "sales",
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

  return (
    <div className="bg-white lg:px-48 py-6">
      <h1 className="text-2xl font-bold mb-6  text-black p-2 pl-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white  rounded-lg p-4 relative"
          >
            {product.badge && (
              <span
                className={`absolute ml-4 mt-4  text-white text-xs font-bold px-2 py-1 rounded ${
                  product.badge === "New" ? "bg-green-500" : "bg-orange-500"
                }`}
              >
                {product.badge}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md text-black"
            />
            <h2 className="text-lg  mt-4 text-black">{product.name}</h2>
            <div className="flex items-center mt-2">
              <p className="text-black font-bold">{product.price}</p>
              {product.oldPrice && (
                <p className="text-gray-500 text-sm line-through ml-2">
                  {product.oldPrice}
                </p>
              )}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
