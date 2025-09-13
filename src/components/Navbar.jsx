import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-slate-800 shadow-lg flex items-center justify-between py-3 px-4 mx-auto fixed top-0 left-0 w-full">
      <Link to="/">
        <span className="font-semibold text-lg flex items-center gap-3 text-blue-400">
          <FaBitcoin className="text-5xl" />
          <span className="hidden md:inline">Financial Dashboard</span>
        </span>
      </Link>

      <div onClick={handleNav} className="block md:hidden">
        <AiOutlineMenu size={20} className="text-white" />
      </div>

      {/* SIDE MENU */}
      <div
        className={
          nav
            ? "fixed right-0 top-0 w-[225px] h-full border-l border-l-blue-400 bg-slate-800 ease-in-out duration-500 px-3 py-3"
            : "fixed right-[-100%] top-0 w-[225px] h-full bg-slate-800 ease-in-out duration-500 px-3 py-3"
        }
      >
        <div className="flex flex-col items-end gap-5 text-right">
          <Link
            to="/"
            className="py-3 px-3 w-full text-lg font-light text-white hover:text-sky-300
      rounded-2xl hover:bg-slate-700 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/coins"
            className="py-3 px-3 w-full text-lg font-light text-white hover:text-sky-300
      rounded-2xl hover:bg-slate-700 transition duration-300"
          >
            Coins
          </Link>
          <Link
            to="/track"
            className="py-3 px-3 w-full text-lg font-light text-white hover:text-sky-300
      rounded-2xl hover:bg-slate-700 transition duration-300"
          >
            Track
          </Link>
          <Link
            to="/settings"
            className="py-3 px-3 w-full text-lg font-light text-white hover:text-sky-300
      rounded-2xl hover:bg-slate-700 transition duration-300"
          >
            Settings
          </Link>
          <div
            onClick={handleNav}
            className="py-3 px-3 w-full text-lg font-light text-white hover:text-sky-300 
      rounded-2xl hover:bg-slate-700 tansition duration-300 cursor-pointer"
          >
            Close
          </div>
        </div>
      </div>

      {/* REGULAR */}
      <div className={nav ? "hidden" : "hidden md:flex items-center gap-5"}>
        <Link
          to="/"
          className="py-3 px-3 text-lg font-light text-white hover:text-sky-300
      rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/coins"
          className="py-3 px-3 text-lg font-light text-white hover:text-sky-300
      rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Coins
        </Link>
        <Link
          to="/track"
          className="py-3 px-3 text-lg font-light text-white hover:text-sky-300
      rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Track
        </Link>
        <Link
          to="/settings"
          className="py-3 px-3 text-lg font-light text-white hover:text-sky-300
      rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
