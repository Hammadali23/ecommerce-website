"use client";
import Image from "next/image";
import Link from "next/link";
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
      <div
        className="text-white flex justify-between items-center px-4 md:px-6 py-2 text-xs md:text-sm"
        style={{ backgroundColor: "#272343" }}
      >
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
          <span className="text-teal-600 text-2xl md:text-3xl">
            <Image
              src="/icons/LogoIcon.png"
              alt="logo"
              width={30}
              height={30}
              priority
            />
          </span>
          <h1 className="text-lg md:text-xl font-bold text-black">Comforty</h1>
        </div>

        <button
          className="md:hidden text-teal-600 text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Cart & Contact */}
        <div className="hidden md:flex items-center space-x-4 lg:mr-44">
          <button className="flex items-center bg-white border border-gray-300 px-3 py-1 rounded-md text-black">
            🛒 Cart
            <span className="ml-2 bg-teal-600 text-white text-xs px-2 rounded-full ">
              2
            </span>
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex lg:pl-52 bg-white border-b-2 py-2 text-gray-700 font-medium space-x-4 md:space-x-8 text-lg">
        <Link href="/" className="hover:text-teal-600">
          Home
        </Link>
        <Link href="/shop" className="hover:text-teal-600">
          Shop
        </Link>
        <Link href="/product" className="hover:text-teal-600">
          Product
        </Link>
        <Link href="/pages" className="hover:text-teal-600">
          Pages
        </Link>
        <Link href="/about" className="hover:text-teal-600">
          About
        </Link>
        <p className="text-sm md:text-base text-black lg:pl-[40%]">
          Contact: <span className="font-bold text-black">(808) 555-0111</span>
        </p>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 px-4 py-4 space-y-2 text-xl">
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
          <button className="flex items-center bg-white border border-gray-300 px-3 py-1 rounded-md w-full text-black">
            🛒 Cart
            <span className="ml-2 bg-teal-600 text-black text-xs px-2 rounded-full">
              2
            </span>
          </button>
          <p className="text-sm text-black">
            Contact: <span className="font-bold">(808) 555-0111</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
