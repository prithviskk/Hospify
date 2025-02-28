import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="relative bg-[#0D1321] shadow-lg w-full">
      <div className="max-w-9xl mx-auto h-20 flex items-center justify-between px-6 lg:px-16  text-white text-4xl">
        
        {/*Logo container for the MedFlow Design*/}
        <div className="flex items-center">
          <span className="text-4xl tracking-wide font-[Creepster] text-red-500">Med</span>
          <span className="text-4xl tracking-wide font-[Creepster] text-blue-500">Flow</span>
        </div>

        {/* Navigation Links*/}
        <div className="hidden md:flex items-center space-x-10 text-lg font-medium">
          {["Home", "Services", "Doctors", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="relative transition duration-300 hover:text-blue-400 hover:underline"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Login buttons when menu is open*/}
        <div className={`hidden md:flex ${click ? "hidden" : "flex"}`}>
          <Link
            to="/login"
            className="px-5 py-2 text-lg font-semibold text-white rounded-l-full bg-red-600 transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-lg"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 text-lg font-semibold text-white rounded-r-full bg-blue-600 transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
          >
            Signup
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden block z-50 ml-4" onClick={handleClick}>
          {click ? <FaTimes size={32} /> : <CiMenuFries size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#0D1321] bg-opacity-95 backdrop-blur-md transform transition-all duration-500 ease-in-out ${
          click ? "translate-x-0" : "-translate-x-full"
        } flex flex-col items-center justify-center`}
      >
        <button className="absolute top-5 right-6 text-white" onClick={handleClick}>
          <FaTimes size={32} />
        </button>

        <ul className="text-2xl font-bold space-y-8 text-white">
          {["Home", "Services", "Doctors", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase()}`}
                onClick={() => setClick(false)}
                className="block transition-all duration-300 hover:text-blue-400 hover:underline"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons in Mobile Menu */}
        <div className="mt-10 flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 text-lg font-semibold text-white rounded-l-full bg-red-600 transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-lg"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-5 py-2 text-lg font-semibold text-white rounded-r-full bg-blue-600 transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
