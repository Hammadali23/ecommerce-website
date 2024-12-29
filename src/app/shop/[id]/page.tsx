"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import data from "@/data/data.json";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  originalPrice?: number;
  onSale?: boolean;
};

const ProductDetailPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id; // Handle string | string[]

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = data.find((prod) => prod.id === parseInt(id, 10));
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return <div className="text-center mt-8">Product not found!</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Image */}
          <div className="flex-1">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            {product.isNew && (
              <span className="bg-green-100 text-green-800 text-xs font-semibold py-1 px-3 rounded-full mb-2 inline-block">
                New Arrival
              </span>
            )}

            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            {product.onSale && product.originalPrice ? (
              <div className="text-xl font-bold text-red-600 mb-4">
                <span className="line-through text-gray-500 mr-2">
                  ${product.originalPrice}
                </span>
                <span>${product.price}</span>
              </div>
            ) : (
              <p className="text-xl font-bold text-gray-800 mb-4">
                ${product.price}
              </p>
            )}

            <p className="text-gray-600 mb-6">
              This library stool chair is designed for ultimate comfort and
              durability, making it a perfect addition to your home or office.
            </p>

            <button className="bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
