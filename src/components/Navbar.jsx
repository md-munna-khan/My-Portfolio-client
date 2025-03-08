

import logo from '../assets/logo.png'

import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import { IoMdMenu } from 'react-icons/io';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between container sticky  mx-auto  md:px-5  my-4 items-center px-4 py-4  top-0  z-50 backdrop-blur-lg text-white bg-gray-900  rounded-md  bg-opacity-80 ">
      {/* Logo */}
      <div>
        <img className="w-18 h-10 ml-2 object-cover" src={logo} alt="Logo" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex  gap-6  text-lg">
        <a href="#about" className="hover:text-green-400">ABOUT</a>
        <p className="hover:text-green-400">EXPERIENCE</p>
        <a href="#skills" className="hover:text-green-400">SKILLS</a>
        <p className="hover:text-green-400">EDUCATION</p>
        <a href="#projects" className="hover:text-green-400">PROJECTS</a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden  flex items-center gap-4">
        <IoMdMenu  size={28} onClick={toggleMenu} className="cursor-pointer" />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[170px]   left-0 w-full h-full bg-opacity-70 flex justify-center items-center z-50">
          <div className="flex flex-col w-full bg-gray-800 items-center gap-6 text-white text-lg">
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

