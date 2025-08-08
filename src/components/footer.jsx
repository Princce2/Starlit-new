import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={Logo}
                alt="Starlit Academy Logo"
                className="w-16 h-16 transition-transform duration-300 hover:scale-105"
              />
              <h1 className="font-extrabold text-xl bg-gradient-to-r from-cyan-300 via-white to-cyan-200 bg-clip-text text-transparent">
                Starlit Academy
              </h1>
            </div>
            <p className="text-sm text-gray-400 text-center md:text-left max-w-xs">
              Empowering young minds with quality education and a nurturing
              environment since 2019.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold text-cyan-300 mb-4">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-cyan-300 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/school"
                  className="hover:text-cyan-300 transition-colors duration-200"
                >
                  Our School
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-cyan-300 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-cyan-300 transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-cyan-300 transition-colors duration-200"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/admission"
                  className="hover:text-cyan-300 transition-colors duration-200"
                >
                  Admission
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-cyan-300 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg font-semibold text-cyan-300 mb-4">
              Contact Us
            </h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-center gap-2">
                <FaLocationDot className="text-cyan-400 w-4 h-4" />
                <a
                  href="https://maps.google.com"
                  className="hover:text-cyan-300 transition-colors duration-200"
                >
                  3 James Odittah Crescent, Off Falcon Club Road, Asaba
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-cyan-400 w-4 h-4" />
                <a
                  href="tel:+234903248134"
                  className="hover:text-cyan-300 transition-colors duration-200"
                >
                  0903248134, 07031983207
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MdAlternateEmail className="text-cyan-400 w-4 h-4" />
                <a
                  href="mailto:info@starlitacademy.com"
                  className="hover:text-cyan-300 transition-colors duration-200"
                >
                  info@starlitacademy.com
                </a>
              </li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-cyan-300 transition-colors duration-200"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-cyan-300 transition-colors duration-200"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-cyan-300 transition-colors duration-200"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p className="bg-gradient-to-r from-cyan-200 via-white to-cyan-100 bg-clip-text text-transparent">
            © 2019 | Starlit Academy All Rights Reserved. Powered by{" "}
            <a
              href="https://utechnologies.com"
              className="underline hover:text-cyan-300 transition-colors duration-200"
            >
              UTechnologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
