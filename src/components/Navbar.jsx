import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import navLinks from "../data/navLinks";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const navBg = scrolled
    ? theme === "dark"
      ? "bg-slate-900/80 border-b border-white/10 shadow-2xl"
      : "bg-white/80 border-b border-gray-200 shadow-lg"
    : "bg-transparent";

  const linkBase =
    theme === "dark"
      ? "text-gray-300 hover:text-white"
      : "text-gray-700 hover:text-gray-900";

  const mobileMenuBg =
    theme === "dark" ? "bg-slate-900/90" : "bg-white/90 border border-gray-200";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${navBg}`}
      aria-label="Main Navigation"
    >
      <div className="px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="/"
            aria-label="Home"
            className="relative text-2xl font-black transition-transform duration-300 group hover:scale-105"
          >
            <span className="relative z-10 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              KK
            </span>
            <div className="absolute inset-0 transition-opacity duration-300 scale-150 rounded-lg opacity-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur group-hover:opacity-100"></div>
          </a>

          {/* Desktop Nav */}
          <div className="items-center hidden space-x-1 md:flex">
            <ul className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 font-medium transition-all duration-300 group ${linkBase}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
              className={`ml-6 p-2 rounded-lg transition-all duration-300 ${
                theme === "dark"
                  ? "text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10"
                  : "text-gray-600 hover:text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200"
              }`}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="px-6 py-2 ml-4 text-white transition-transform duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105"
            >
              Let’s Talk
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
              className={`p-2 rounded-lg ${
                theme === "dark"
                  ? "text-gray-300 hover:text-white bg-white/5 border border-white/10"
                  : "text-gray-600 hover:text-gray-900 bg-gray-100 border border-gray-300"
              }`}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              className={`p-2 rounded-lg ${
                theme === "dark"
                  ? "text-gray-300 hover:text-white bg-white/5 border border-white/10"
                  : "text-gray-600 hover:text-gray-900 bg-gray-100 border border-gray-300"
              }`}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul
            className={`py-4 space-y-2 backdrop-blur-md rounded-lg mt-2 ${mobileMenuBg}`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-6 py-3 ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-white hover:bg-white/5"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
