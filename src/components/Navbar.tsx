"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const router = useRouter();

  // Update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItemCount(cartItems.length);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleCartClick = () => {
    router.push('/cart');
  };

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div className="w-full text-white bg-[#272343]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-2 text-xs sm:text-sm">
          <p className="truncate">✔️ Free Shipping On All Orders Over $50</p>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <span>Eng ▼</span>
            <a href="#" className="hover:underline">FAQs</a>
            <a href="#" className="hover:underline">Need Help</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-teal-600">
              <img
                src="/icons/LogoIcon.png"
                alt="logo"
                className="w-8 h-8 sm:w-8 sm:h-8"
              />
            </span>
            <h1 className="text-lg sm:text-xl font-bold text-black">Comforty</h1>
          </div>

          {/* Cart Button (Visible on all screens) */}
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <button 
                className="flex items-center bg-white border border-gray-300 px-3 py-1.5 rounded-md text-black hover:bg-gray-50 transition-colors"
                onClick={handleCartClick}
              >
                🛒 Cart
                {cartItemCount > 0 && (
                  <span className="ml-2 bg-teal-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </Link>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-teal-600 text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block bg-white border-b-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3">
            <nav className="flex space-x-6 text-lg font-medium">
              <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-teal-600 transition-colors">
                Shop
              </Link>
              <Link href="/product" className="text-gray-700 hover:text-teal-600 transition-colors">
                Product
              </Link>
              <Link href="/pages" className="text-gray-700 hover:text-teal-600 transition-colors">
                Pages
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
                About
              </Link>
              <Link href="/contactUs" className="text-gray-700 hover:text-teal-600 transition-colors">
                Contact Us
              </Link>
            </nav>
            <p className="text-lg text-black">
              Contact: <span className="font-bold">(808) 555-0111</span>
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t text-center p-8 text-lg">
          <div className="px-4 py-3 space-y-3">
            <Link href="/" onClick={closeMenu} className="block text-gray-700 hover:text-teal-600">
              Home
            </Link>
            <Link href="/shop" onClick={closeMenu} className="block text-gray-700 hover:text-teal-600">
              Shop
            </Link>
            <Link href="/product" onClick={closeMenu} className="block text-gray-700 hover:text-teal-600">
              Product
            </Link>
            <Link href="/pages" onClick={closeMenu} className="block text-gray-700 hover:text-teal-600">
              Pages
            </Link>
            <Link href="/about" onClick={closeMenu} className="block text-gray-700 hover:text-teal-600">
              About
            </Link>
            <Link href="/contactUs" onClick={closeMenu} className="block text-gray-700 hover:text-teal-600">
              Contact Us
            </Link>
            <p className="text-lg text-black pt-6  border-t-4">
              Contact: <span className="font-bold">(808) 555-0111</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;