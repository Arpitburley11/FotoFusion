import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to='/'><h1 className="text-3xl font-bold text-teal-400">FotoFusion</h1></Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <Link to="/" className="px-3 py-2 text-lg font-medium rounded-md hover:text-teal-400">Gallery</Link>
              <Link to="/" className="px-3 py-2 text-lg font-medium rounded-md hover:text-teal-400">Category</Link>
              <Link to="/upload" className="px-3 py-2 text-lg font-medium rounded-md hover:text-teal-400">Submit Image </Link>
              <Link to='/contact' className="px-3 py-2 text-lg font-medium rounded-md hover:text-teal-400">Contact</Link>
            </div>
          </div>
          <div className="flex -mr-2 md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 text-teal-400 rounded-md hover:text-white hover:bg-teal-400 focus:outline-none focus:bg-teal-400 focus:text-white">
              <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block px-3 py-2 text-base font-medium rounded-md hover:text-teal-400" onClick={toggleMenu}>Gallery</Link>
          <Link to="/" className="block px-3 py-2 text-base font-medium rounded-md hover:text-teal-400" onClick={toggleMenu}>Category</Link>
          <Link to='/upload' className="block px-3 py-2 text-base font-medium rounded-md hover:text-teal-400" onClick={toggleMenu}>Submit Image</Link>
          <Link to="/contact" className="block px-3 py-2 text-base font-medium rounded-md hover:text-teal-400" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
