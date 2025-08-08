import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-indigo-900 fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Top Contact Info Bar */}
      <div className="bg-gray-900 bg-opacity-90 py-3 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={Logo}
                  alt="Starlit Academy Logo"
                  className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-105"
                />
                <h1 className="font-extrabold text-lg sm:text-xl bg-gradient-to-r from-cyan-300 via-white to-cyan-200 bg-clip-text text-transparent">
                  Starlit Academy
                </h1>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-gray-200">
              <a
                href="https://maps.google.com"
                className="flex items-center gap-1 hover:text-cyan-300 transition-colors duration-200"
              >
                <FaLocationDot className="text-cyan-400 w-4 h-4" />3 James
                Odittah Crescent, Off Falcon Club Road, Asaba
              </a>
              <a
                href="tel:+234903248134"
                className="flex items-center gap-1 hover:text-cyan-300 transition-colors duration-200"
              >
                <FaPhoneAlt className="text-cyan-400 w-4 h-4" />
                0903248134, 07031983207
              </a>
              <a
                href="mailto:info@starlitacademy.com"
                className="flex items-center gap-1 hover:text-cyan-300 transition-colors duration-200"
              >
                <MdAlternateEmail className="text-cyan-400 w-4 h-4" />
                info@starlitacademy.com
              </a>
            </div>
          </div>
        </div>
        {/* Mobile Menu Button - Top-right corner on smaller screens */}
        <div className="sm:hidden absolute top-4 right-4 z-60">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-100 hover:text-cyan-300 focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Desktop Menu - Visible on medium and larger screens */}
          <div className="hidden sm:flex justify-center w-full items-center gap-6 lg:gap-8 font-bold text-base lg:text-lg">
            <Link
              to="/"
              className="relative text-gray-100 hover:text-cyan-300 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-cyan-300 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              HOME
            </Link>
            <Link
              to="/school"
              className="relative text-gray-100 hover:text-cyan-300 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-cyan-300 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              OUR SCHOOL
            </Link>
            <Link
              to="/about"
              className="relative text-gray-100 hover:text-cyan-300 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-cyan-300 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              ABOUT US
            </Link>
            <Link
              to="/gallery"
              className="relative text-gray-100 hover:text-cyan-300 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-cyan-300 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              GALLERY
            </Link>
            <Link
              to="/events"
              className="relative text-gray-100 hover:text-cyan-300 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-cyan-300 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              EVENTS
            </Link>
            <Link
              to="/admission"
              className="relative text-gray-100 hover:text-cyan-300 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-cyan-300 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              ADMISSION
            </Link>
            <Link
              to="/contact"
              className="relative text-gray-100 hover:text-cyan-300 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-cyan-300 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slides in from the right on smaller screens */}
      <div
        className={`sm:hidden fixed top-0 right-0 h-full w-64 bg-gray-800 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col items-center gap-6 font-bold text-lg pt-20">
          <Link
            to="/"
            className="text-gray-100 hover:text-cyan-300 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            HOME
          </Link>
          <Link
            to="/school"
            className="text-gray-100 hover:text-cyan-300 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            OUR SCHOOL
          </Link>
          <Link
            to="/about"
            className="text-gray-100 hover:text-cyan-300 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            ABOUT US
          </Link>
          <Link
            to="/gallery"
            className="text-gray-100 hover:text-cyan-300 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            GALLERY
          </Link>
          <Link
            to="/events"
            className="text-gray-100 hover:text-cyan-300 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            EVENTS
          </Link>
          <Link
            to="/admission"
            className="text-gray-100 hover:text-cyan-300 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            ADMISSION
          </Link>
          <Link
            to="/contact"
            className="text-gray-100 hover:text-cyan-300 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
