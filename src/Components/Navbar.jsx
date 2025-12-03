import React, { useState, useEffect, useRef } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Skills", "Experience", "Certificates", "Contact"];

  const navRef = useRef();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  // Close when clicking OUTSIDE entire navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent cursor-pointer hover:scale-110 duration-300">
          A. Sakthisudalai
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-white text-lg">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => handleScroll(item.toLowerCase())}
              className="relative cursor-pointer group font-semibold tracking-wide"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-pink-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div
          className="lg:hidden text-white cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-white/10 backdrop-blur-xl border-t border-white/20 text-center py-6 space-y-4 text-white text-lg shadow-lg">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => handleScroll(item.toLowerCase())}
              className="cursor-pointer hover:text-pink-300 duration-200 font-semibold"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
