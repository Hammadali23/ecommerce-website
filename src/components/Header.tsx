"use client";
import Image from "next/image";

import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* Top Banner */}
      <div 
        className="w-full text-white bg-[#272343]"
      >
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
              <Image
                src="/icons/LogoIcon.png"
                alt="logo"
                className="w-8 h-8 sm:w-8 sm:h-8"
                width={0}
                height={0}
              />
            </span>
            <h1 className="text-lg sm:text-xl font-bold text-black">Comforty</h1>
          </div>

          {/* Cart Button (Visible on all screens) */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center bg-white border border-gray-300 px-3 py-1.5 rounded-md text-black hover:bg-gray-50 transition-colors">
              🛒 Cart
              <span className="ml-2 bg-teal-600 text-white text-xs px-2 py-0.5 rounded-full">
                2
              </span>
            </button>
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
              <a href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
                Home
              </a>
              <a href="/shop" className="text-gray-700 hover:text-teal-600 transition-colors">
                Shop
              </a>
              <a href="/product" className="text-gray-700 hover:text-teal-600 transition-colors">
                Product
              </a>
              <a href="/pages" className="text-gray-700 hover:text-teal-600 transition-colors">
                Pages
              </a>
              <a href="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
                About
              </a>
              <a href="/contactUs" className="text-gray-700 hover:text-teal-600 transition-colors">
                Contact Us
              </a>
            </nav>
            <p className="text-sm text-black">
              Contact: <span className="font-bold">(808) 555-0111</span>
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <a href="/" onClick={closeMenu} className="block text-gray-700 hover:text-teal-600">
              Home
            </a>
            <a href="/shop" onClick={closeMenu} className="block text-gray-700 hover:text-teal-600">
              Shop
            </a>
            <a href="/product" onClick={closeMenu} className="block text-gray-700 hover:text-teal-600">
              Product
            </a>
            <a href="/pages" onClick={closeMenu} className="block text-gray-700 hover:text-teal-600">
              Pages
            </a>
            <a href="/about" onClick={closeMenu} className="block text-gray-700 hover:text-teal-600">
              About
            </a>
            <a href="/contactUs" onClick={closeMenu} className="block text-gray-700 hover:text-teal-600">
              Contact Us
            </a>
            <p className="text-sm text-black pt-2">
              Contact: <span className="font-bold">(808) 555-0111</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
