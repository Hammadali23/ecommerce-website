"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";

// Define the Product type if not already imported
interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart) as Product[];
      setCart(parsedCart);
      calculateTotal(parsedCart);
    }
  }, []);

  const calculateTotal = (cartItems: Product[]) => {
    const sum = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  return (
    <div className=" bg-white max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side - Cart Items */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Bag</h1>
            <Link href="/products" className="text-teal-600 hover:underline">
              Continue Shopping
            </Link>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Link href="/products">
                <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  Start Shopping
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0">
                      <img
                        src={item.image || "/api/placeholder/96/96"}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">Size: L</p>
                      <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">MRP ${item.price}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right side - Summary */}
        {cart.length > 0 && (
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Delivery & Handling</span>
                  <span className="text-gray-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-md transition-colors">
                  Member Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}