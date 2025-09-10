import React, { useState } from "react";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Facility", href: "/facility" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Memberships", href: "/memberships" },
    { label: "Community", href: "/community" },
  ];

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="T-Works Logo"
            className="h-20 w-20 md:h-24 md:w-24 object-contain"
          />
          <span className="ml-4 text-black text-3xl font-bold tracking-wide">
            T-WORKS
          </span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="relative group transition"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 border rounded"
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="28" height="28" fill="none" stroke="currentColor">
            <rect x="4" y="7" width="20" height="2" rx="1" fill="currentColor" />
            <rect x="4" y="15" width="20" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-100 shadow-inner"
          >
            <div className="flex flex-col space-y-4 px-6 py-4 text-gray-800 font-medium">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="hover:text-red-600 transition"
                  onClick={() => setOpen(false)} // close menu on click
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
