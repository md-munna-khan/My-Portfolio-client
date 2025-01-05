

import logo from '../assets/logo.jpg'
import { MdMenuBook } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center px-4 py-4 sticky top-0 z-50 backdrop-blur-lg bg-gray-800 bg-opacity-50 text-white">
      {/* Logo */}
      <div>
        <img className="w-12 h-8" src={logo} alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-4 text-lg">
        <a href="#about" className="hover:text-green-400">ABOUT</a>
        <p className="hover:text-green-400">EXPERIENCE</p>
        <a href="#skills" className="hover:text-green-400">SKILLS</a>
        <p className="hover:text-green-400">EDUCATION</p>
        <a href="#projects" className="hover:text-green-400">PROJECTS</a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center gap-4">
        <MdMenuBook size={28} onClick={toggleMenu} className="cursor-pointer" />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
          <div className="flex flex-col  items-center gap-6 text-white text-lg">
            <a href="#about" className="hover:text-green-400" onClick={toggleMenu}>ABOUT</a>
            <p className="hover:text-green-400" onClick={toggleMenu}>EXPERIENCE</p>
            <a href="#skills" className="hover:text-green-400" onClick={toggleMenu}>SKILLS</a>
            <p className="hover:text-green-400" onClick={toggleMenu}>EDUCATION</p>
            <a href="#projects" className="hover:text-green-400" onClick={toggleMenu}>PROJECTS</a>
            <FaWindowClose size={28} onClick={toggleMenu} className="cursor-pointer text-red-500" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

