function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-gray-300 py-6 text-center border-t border-white/10">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} <span className="font-semibold">A. Sakthisudalai</span>. All rights reserved.
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mt-1">
        Designed & Developed by <span className="text-blue-400 font-semibold">A. Sakthisudalai</span>
      </p>
    </footer>
  );
}
export default Footer;
