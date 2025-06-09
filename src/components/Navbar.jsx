import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ls-dev-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <nav className="flex justify-between items-center px-6 py-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-7" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-6 uppercase text-sm">
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden focus:outline-none transition-transform duration-300 z-[999]"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FaTimes className="text-4xl" />
          ) : (
            <FaBars className="text-3xl" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col justify-center items-center space-y-8 text-white uppercase font-poppins text-lg z-40 animate-fade-in">
          <a
            href="#about"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="#projects"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </div>
      )}
    </header>
  );
}
