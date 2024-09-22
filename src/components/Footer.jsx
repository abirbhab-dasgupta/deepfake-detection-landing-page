import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p className="text-gray-400 mb-2">Email: abirbhab00dasgupta@gmail.com</p>
            <p className="text-gray-400">
              Address: Barasat, West Bengal 
            </p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link
                  to='/'
                  className="hover:text-white transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to='/about'
                  className="hover:text-white transition duration-300"
                >
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to='/services'
                  className="hover:text-white transition duration-300"
                >
                  Service
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to='/pricing'
                  className="hover:text-white transition duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to='/contact'
                  className="hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-wrap justify-between">
            <p>&copy; 2024 Deepfake Detector. All rights reserved.</p>
            <div>
              <a href="#" className="hover:text-white transition duration-300 mr-4">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;