import React, { useState } from 'react';
import Button from '../../components/button/Button';
import UseUserData from "../../components/customHook/UseUserData";
import SocialHandles from '../../components/socialHandles/SocialHandles';

const Navbar = () => {
  const { userData, error } = UseUserData();
  const [isOpen, setIsOpen] = useState(false);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!userData) {
    return false;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between pt-10 text-md h-16 top-0 z-50">
      <div className="flex items-center gap-x-4">
        <div className="flex items-center">
          <a href="#" className="flex items-center font-extrabold text-black bg-lime-500 rounded-full px-4 py-2">
            LOGO
          </a>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center space-x-10 font-bold">
        <a href="#home" className="hover:text-lime-500">
          Home
        </a>
        <a href="#about" className="hover:text-lime-500">
          About
        </a>
        <a href="#skills" className="hover:text-lime-500">
          Skills
        </a>
        <a href="#services" className="hover:text-lime-500">
          Services
        </a>
        <a href="#projects" className="hover:text-lime-500">
          Projects
        </a>
      </div>
      <SocialHandles />
      <div className="flex items-center space-x-4">
        <a href='#contact'>
        <div className="max-sm:hidden">
          <Button btnText="Contact me" />
        </div>
        </a>
        <button
          className="focus:outline-none md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className={`w-8 h-8 ${isOpen ? 'hidden' : 'block'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className={`w-8 h-8 ${isOpen ? 'block' : 'hidden'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden bg-black opacity-40 shadow-lg w-[100vh] h-[15vh] absolute top-24 left-0 px-4 py-2 space-y-4 transition-all duration-300 ${
          isOpen ? 'flex justify-center gap-20 items-center' : 'hidden'
        }`}
        onClick={closeMenu} // Close menu when clicked outside
      >
        <a href="#home" className="block hover:text-lime-500">
          Home
        </a>
        <a href="#about" className="block hover:text-lime-500">
          About
        </a>
        <a href="#skills" className="block hover:text-lime-500">
          Skills
        </a>
        <a href="#services" className="block hover:text-lime-500">
          Services
        </a>
        <a href="#projects" className="block hover:text-lime-500">
          Projects
        </a>
        <a href='#contact'>
        <div className="flex justify-center">
          <Button btnText="Contact me" />
        </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
