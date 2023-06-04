import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoKoni from '../assets/koni.png';

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="drop-shadow-md bg-gray-200">
      <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-6">
        <div className="flex items-center flex-shrink-0 text-red-700 mr-6">
          <span className="font-bold text-xl tracking-tight">konikulonprogo.com</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="flex items-center px-3 py-1 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-red-600"
          >
            <span className="text-black">=</span>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <a
              onClick={() => {
                navigate('/');
                setIsMobileMenuOpen(false);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-black hover:cursor-pointer mr-4"
            >
              Beranda
            </a>
            <a
              onClick={() => {
                navigate('/Pengurus');
                setIsMobileMenuOpen(false);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-black hover:cursor-pointer mr-4"
            >
              Pengurus
            </a>
            <a
              onClick={() => {
                navigate('/Berita');
                setIsMobileMenuOpen(false);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-black hover:cursor-pointer mr-4"
            >
              Berita
            </a>
            <a
              onClick={() => {
                navigate('/DataAtlit');
                setIsMobileMenuOpen(false);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-red-500 hover:text-black hover:cursor-pointer mr-4"
            >
              Dashboard
            </a>
          </div>
          <div>
            <img src={LogoKoni} className="w-11 h-11 hidden lg:block " alt="KONI Logo" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
