/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <NavLink to={'/home'}>
          <div className="flex justify-between items-center w-[120px] cursor-pointer">
            <img className="h-8" src={Logo} alt="picfolio" />
            <div className="text-white font-mono">Picfolio</div>
          </div>
        </NavLink>
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen && (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              )}
              {!isOpen && (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } px-4 pt-2 pb-4 sm:flex sm:p-0 sm:space-x-12`}
      >
        <div className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">
          <NavLink
            to="/home"
            className={({ isActive, isPending }) =>
              isPending ? '' : isActive ? 'text-[#E8751A]' : ''
            }
            onClick={() => setIsOpen(false)}
          >
            <div>Home</div>
          </NavLink>
        </div>

        <div className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 w-full sm:mt-0 sm:ml-2'">
          <NavLink
            to="/starred"
            className={({ isActive, isPending }) =>
              isPending ? '' : isActive ? 'text-[#E8751A]' : ''
            }
            onClick={() => setIsOpen(false)}
          >
            <div>Starred</div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
