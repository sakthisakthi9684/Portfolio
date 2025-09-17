import React, { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Skills", "Experience", "Certificates", "Contact"];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500/80 backdrop-blur-md shadow-lg px-6 py-4 font-poppins">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-white cursor-pointer hover:scale-105 transition-transform">
          A. Sakthisudalai
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {menuItems.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer font-semibold hover:text-yellow-300 transition-colors duration-300"
              onClick={() => handleScroll(item.toLowerCase())}
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-white cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-gradient-to-b from-pink-500 via-purple-600 to-blue-500/80 backdrop-blur-md w-full text-center py-4 space-y-4 text-white font-medium transition-all duration-300">
          {menuItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-yellow-300 transition-colors duration-300 text-lg"
              onClick={() => handleScroll(item.toLowerCase())}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
