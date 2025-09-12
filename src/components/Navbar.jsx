import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen max-h-screen grid grid-cols-5 bg-white text-[#364152] dark:bg-[#0F1624] dark:text-white">
        <nav className="h-screen p-5 bg-white text-[#364152] dark:bg-[#0F1624] dark:text-white grid-cols-1 border-r-1 border-gray-600">
          <FaBitcoin className="fill-[#615FFF] w-10 h-10" />
        </nav>
        <nav></nav>
      </div>
    </>
  );
};

export default Navbar;
