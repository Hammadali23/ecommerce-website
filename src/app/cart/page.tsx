"use client"
import React, { useState } from 'react';
import { Heart, Trash2 } from 'lucide-react';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Library Stool Chair',
      color: 'Ashen Slate/Cobalt Bliss',
      size: 'L',
      quantity: 1,
      price: 99,
      image: '/icons/chairproduct3.jpeg'
    },
    {
      id: 2,
      name: 'Library Stool Chair',
      color: 'Ashen Slate/Cobalt Bliss',
      size: 'L',
      quantity: 1,
      price: 99,
      image: '/icons/category1.jpeg'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-8xl  lg:p-16 p-8 lg:px-36 bg-white">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-6 text-black">Bag</h1>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-36 object-cover rounded"
                />
                <div className="flex-1 text-black">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">{item.color}</p>
                      <p className="text-gray-600">Size {item.size}</p>
                      <div className="flex items-center mt-2 space-x-2">
                        <label className="text-sm">Quantity</label>
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                          className="border rounded p-1"
                        >
                          {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium ">MRP: ${item.price}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <button className="flex items-center text-gray-600 hover:text-gray-900">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-full md:w-80 text-black">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 ">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery & Handling</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-teal-500 text-white py-3 rounded-full hover:bg-teal-600 transition-colors">
                Member Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;