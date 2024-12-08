"use client"
import React, { useState } from "react";
import Image from "next/image";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="text-white flex justify-between items-center px-4 md:px-6 py-2 text-xs md:text-sm" style={{ backgroundColor: '#272343' }}>
        <p className="truncate lg:ml-44">✔️ Free Shipping On All Orders Over $50</p>
        <div className="flex items-center space-x-2 md:space-x-4 lg:mr-44">
          <span>Eng ▼</span>
          <a href="#" className="hover:underline">
            FAQs
          </a>
          <a href="#" className="hover:underline">
            Need Help
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gray-100 flex justify-between items-center px-4 md:px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 lg:ml-44">
          <span className="text-teal-600 text-2xl md:text-3xl"><Image src="/icons/logo.jpg" alt="logo" width={30} height={30} /></span>
          <h1 className="text-lg md:text-xl font-bold">Comforty</h1>
        </div>

        <button
          className="md:hidden text-teal-600 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <div className="hidden md:flex space-x-4 md:space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-teal-600">
            Home
          </a>
          <a href="#" className="hover:text-teal-600">
            Shop
          </a>
          <a href="#" className="hover:text-teal-600">
            Product
          </a>
          <a href="#" className="hover:text-teal-600">
            Pages
          </a>
          <a href="#" className="hover:text-teal-600">
            About
          </a>
        </div>

        {/* Cart & Contact */}
        <div className="hidden md:flex items-center space-x-4 lg:mr-44">
          <button className="flex items-center bg-white border border-gray-300 px-3 py-1 rounded-md">
            🛒 Cart
            <span className="ml-2 bg-teal-600 text-white text-xs px-2 rounded-full">
              2
            </span>
          </button>
          <p className="text-sm md:text-base">
            Contact: <span className="font-bold">(808) 555-0111</span>
          </p>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-4 py-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-teal-600">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-teal-600">
            Shop
          </a>
          <a href="#" className="block text-gray-700 hover:text-teal-600">
            Product
          </a>
          <a href="#" className="block text-gray-700 hover:text-teal-600">
            Pages
          </a>
          <a href="#" className="block text-gray-700 hover:text-teal-600">
            About
          </a>
          <button className="flex items-center bg-white border border-gray-300 px-3 py-1 rounded-md w-full">
            🛒 Cart
            <span className="ml-2 bg-teal-600 text-white text-xs px-2 rounded-full">
              2
            </span>
          </button>
          <p className="text-sm">
            Contact: <span className="font-bold">(808) 555-0111</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
