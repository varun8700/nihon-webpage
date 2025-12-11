// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { ChevronRight, X, Menu, Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { COMPANY_DETAILS } from "../data.js";

export default function Navbar({ onContactClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll listener to toggle navbar style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContact = () => {
    if (onContactClick) onContactClick();
    setIsOpen(false);
  };

  const navBaseClasses =
    "fixed top-0 left-0 w-full z-50 transition-all duration-300";

  // Solid when scrolled, slightly translucent at top
  const navStyleClasses = scrolled
    ? "bg-slate-900/95 backdrop-blur-md py-3 shadow-lg"
    : "bg-slate-900/70 backdrop-blur-sm py-5";

  return (
    <nav className={`${navBaseClasses} ${navStyleClasses}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand */}
        <button
          onClick={() => handleNavClick("/")}
          className="flex items-center gap-2 active:scale-95 transition-transform"
        >
          <div className="bg-blue-600 p-2 rounded-lg">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
            {COMPANY_DETAILS.name}
          </span>
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10">
          {/* HOME */}
          <button
            onClick={() => handleNavClick("/")}
            className={`text-sm uppercase tracking-wide font-medium transition ${
              location.pathname === "/"
                ? "text-amber-400"
                : "text-slate-200 hover:text-white"
            }`}
          >
            Home
          </button>

          {/* DOMESTIC */}
          <button
            onClick={() => handleNavClick("/domestic")}
            className={`text-sm uppercase tracking-wide font-medium transition ${
              location.pathname === "/domestic"
                ? "text-amber-400"
                : "text-slate-200 hover:text-white"
            }`}
          >
            Domestic
          </button>

          {/* INTERNATIONAL */}
          <button
            onClick={() => handleNavClick("/international")}
            className={`text-sm uppercase tracking-wide font-medium transition ${
              location.pathname === "/international"
                ? "text-amber-400"
                : "text-slate-200 hover:text-white"
            }`}
          >
            International
          </button>

          {/* ABOUT */}
          <button
            onClick={() => handleNavClick("/about")}
            className={`text-sm uppercase tracking-wide font-medium transition ${
              location.pathname === "/about"
                ? "text-amber-400"
                : "text-slate-200 hover:text-white"
            }`}
          >
            About Us
          </button>
        </div>

        {/* Desktop Enquire button */}
        <button
          onClick={handleContact}
          className="hidden md:flex bg-white hover:bg-blue-50 text-blue-900 px-6 py-2.5 rounded-full font-bold transition shadow-lg items-center gap-2 active:scale-95"
        >
          Enquire Now <ChevronRight className="w-4 h-4" />
        </button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white active:scale-95 transition-transform"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-6 flex flex-col gap-4 md:hidden shadow-2xl animate-fade-in-up">
          <button
            onClick={() => handleNavClick("/")}
            className="text-lg text-slate-300 py-2 border-b border-slate-800 text-left"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("/domestic")}
            className="text-lg text-slate-300 py-2 border-b border-slate-800 text-left"
          >
            Domestic Packages
          </button>
          <button
            onClick={() => handleNavClick("/international")}
            className="text-lg text-slate-300 py-2 border-b border-slate-800 text-left"
          >
            International Destinations
          </button>
          <button
            onClick={() => handleNavClick("/about")}
            className="text-lg text-slate-300 py-2 border-b border-slate-800 text-left"
          >
            About Us
          </button>
          <button
            onClick={handleContact}
            className="bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-bold mt-2"
          >
            Enquire Now
          </button>
        </div>
      )}
    </nav>
  );
}
