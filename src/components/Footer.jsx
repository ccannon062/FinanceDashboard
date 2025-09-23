import React from "react";
import { FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 shadow-lg mt-auto">
      <div className="max-w-[1240px] mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="font-semibold text-lg flex items-center gap-3 text-blue-400 mb-3">
              <FaBitcoin className="text-3xl" />
              <span>Financial Dashboard</span>
            </div>
            <p className="text-gray-300 text-sm text-center md:text-left max-w-md">
              Your comprehensive platform for tracking cryptocurrency
              investments and market trends.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-sky-300 transition duration-300 text-sm"
            >
              Home
            </Link>
            <Link
              to="/coins"
              className="text-gray-300 hover:text-sky-300 transition duration-300 text-sm"
            >
              Coins
            </Link>
            <Link
              to="/track"
              className="text-gray-300 hover:text-sky-300 transition duration-300 text-sm"
            >
              Track
            </Link>
            <Link
              to="/settings"
              className="text-gray-300 hover:text-sky-300 transition duration-300 text-sm"
            >
              Settings
            </Link>
          </div>
          <div className="flex gap-4">
            <FaInstagram
              size={24}
              className="text-gray-300 hover:text-sky-300 transition duration-300 cursor-pointer"
            />
            <FaTwitterSquare
              size={24}
              className="text-gray-300 hover:text-sky-300 transition duration-300 cursor-pointer"
            />
            <FaGithubSquare
              size={24}
              className="text-gray-300 hover:text-sky-300 transition duration-300 cursor-pointer"
            />
          </div>
        </div>
        <div className="border-t border-slate-700 mt-6 pt-4">
          <p className="text-gray-400 text-xs text-center">
            © 2024 Financial Dashboard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
