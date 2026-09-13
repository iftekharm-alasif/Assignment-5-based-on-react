import { useState } from "react";
import BrandLogo from "./logo-text.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[70px] max-w-[1080px] items-center justify-between px-5">

        {/* Logo */}
        <div>
          <img src={BrandLogo} alt="Brand Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 text-xs font-medium text-gray-500 md:flex">
          <a href="#" className="text-[#172033]">
            Home
          </a>

          <a href="#" className="hover:text-[#d83b9d]">
            Technologies
          </a>

          <a href="#" className="hover:text-[#d83b9d]">
            Projects
          </a>

          <a href="#" className="hover:text-[#d83b9d]">
            About
          </a>

          <a href="#" className="hover:text-[#d83b9d]">
            Contact
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="text-xs font-medium text-gray-600">
            Sign In
          </button>

          <button className="rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 px-4 py-2 text-xs font-medium text-white">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-gray-700 md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-gray-600">

            <a href="#" className="hover:text-[#d83b9d]">
              Home
            </a>

            <a href="#" className="hover:text-[#d83b9d]">
              Technologies
            </a>

            <a href="#" className="hover:text-[#d83b9d]">
              Projects
            </a>

            <a href="#" className="hover:text-[#d83b9d]">
              About
            </a>

            <a href="#" className="hover:text-[#d83b9d]">
              Contact
            </a>

            <div className="flex gap-3 pt-2">
              <button className="text-sm font-medium text-gray-600">
                Sign In
              </button>

              <button className="rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 px-4 py-2 text-sm font-medium text-white">
                Sign Up
              </button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}