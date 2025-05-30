import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Fungsi untuk handle klik link agar tutup menu dan dropdown
  const handleLinkClick = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

  return (
    <nav className="relative z-50 bg-black shadow-md px-10 py-6 font-Oxanium">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium items-center">
          <li>
            <Link
              to="/"
              className="hover:text-red-600"
              onClick={handleLinkClick}
            >
              BERANDA
            </Link>
          </li>
          <li>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-1 hover:text-red-600"
            >
              PRODUK
              {showDropdown ? (
                <ChevronUp className="w-4 h-4 mt-[1px]" />
              ) : (
                <ChevronDown className="w-4 h-4 mt-[1px]" />
              )}
            </button>
          </li>
          <li>
            <Link
              to="/kontak"
              className="hover:text-red-600"
              onClick={handleLinkClick}
            >
              KONTAK
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Produk (Desktop) */}
      {showDropdown && (
        <div className="absolute left-0 top-full w-full bg-black text-white shadow-md py-6 px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <Link
              to="/produk"
              className="hover:text-red-500 cursor-pointer"
              onClick={handleLinkClick}
            >
              ALL PRODUCT
            </Link>
            <Link
              to="/test-drive"
              className="hover:text-red-500 cursor-pointer"
              onClick={handleLinkClick}
            >
              TEST DRIVE
            </Link>
            <Link
              to="/tentang"
              className="hover:text-red-500 cursor-pointer"
              onClick={handleLinkClick}
            >
              ABOUT ME
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-3 space-y-2 text-white font-medium bg-gray-950 px-4 py-3 rounded">
          <li>
            <Link
              to="/"
              className="block px-4 py-2 hover:text-red-600"
              onClick={handleLinkClick}
            >
              Beranda
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setShowDropdown(!showDropdown);
                setMenuOpen(false);
              }}
              className="flex items-center gap-1 w-full text-left px-4 py-2 hover:text-red-600"
            >
              Produk
              {showDropdown ? (
                <ChevronUp className="w-4 h-4 mt-[1px]" />
              ) : (
                <ChevronDown className="w-4 h-4 mt-[1px]" />
              )}
            </button>
          </li>
          <li>
            <Link
              to="/kontak"
              className="block px-4 py-2 hover:text-red-600"
              onClick={handleLinkClick}
            >
              Kontak
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
