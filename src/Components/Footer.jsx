import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white text-center py-6 mt-12 font-poppins">
      <p>
        &copy; {new Date().getFullYear()} A. Sakthisudalai. All rights reserved.
      </p>
      <p>
        Designed & Developed by <span className="font-bold">A. Sakthisudalai</span>
      </p>
    </footer>
  );
}

export default Footer;
