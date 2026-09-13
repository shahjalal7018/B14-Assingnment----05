import { useState } from "react";
import Logo from '../assets/logo-text.png'
const navLinks = [
    "Home", 
    "Technologies",
    "Projects",
    "About",
    "Contact",
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
         {/* Mobile Menu Button  */}
        <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 md:hidden"
            aria-label="Open menu"
        >
            ☰  
        </button>
       {/* brand logo */}
        <a href="#home" className="flex items-center">
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Links  */}
         <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${
                link === "Home"
                  ? "text-[#D946EF] font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Buttons*/}
         <div className="flex items-center gap-6">
          <button className="hidden text-sm font-medium text-gray-600 hover:text-gray-900 sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-[#E8368F] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#d02c7d]">
            Sign Up
          </button>
        </div>
      </div>

       {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium ${
                  link === "Home"
                    ? "text-[#D946EF] font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link}
              </a>
            ))}

            <button className="w-fit text-sm font-medium text-gray-600 hover:text-gray-900">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
