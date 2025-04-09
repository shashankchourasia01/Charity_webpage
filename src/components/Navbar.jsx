import React, { useState } from 'react';
import logo from '../assets_nav/Logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-6 h-6" />

              <span>NAME</span>
            </span>
          </div>

          {/* Middle: Links (Desktop) */}
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="font-semibold">Home</a>
            <a href="#">Causes</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>

          {/* Right: Donate button (Desktop) */}
          <div className="hidden md:flex">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
              DONATE
            </button>
          </div>

          {/* Hamburger menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#" className="block py-2">Home</a>
          <a href="#" className="block py-2">Causes</a>
          <a href="#" className="block py-2">About Us</a>
          <a href="#" className="block py-2">Contact Us</a>
          <button className="w-full bg-orange-500 text-white px-4 py-2 mt-2 rounded-full font-semibold hover:bg-orange-600 transition">
            DONATE
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
