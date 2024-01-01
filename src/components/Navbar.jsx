import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoKoni from '../assets/koni.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    let deferredPrompt;

    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      deferredPrompt = event;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallButtonClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        deferredPrompt = null;
      });
    }
  };

  return (
    <div className="drop-shadow-md bg-gray-900">
      <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
        <div className="flex items-center flex-shrink-0 text-red-500 mr-6">
          <Link to="/">
          <span className="font-bold text-xl tracking-tight">konikulonprogo.com</span>
          </Link>
        </div>
        <div className="block lg:hidden">
          {/* <button
            onClick={toggleMobileMenu}
            className="flex items-center px-3 py-1 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-red-600"
          >
            <span className="text-white">=</span>
          </button> */}
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
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-300 hover:cursor-pointer mr-4"
            >
              Beranda
            </a>
            <a
              onClick={() => {
                navigate('/Pengurus');
                setIsMobileMenuOpen(false);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-300 hover:cursor-pointer mr-4"
            >
              Pengurus
            </a>
            <a
              onClick={() => {
                navigate('/Berita');
                setIsMobileMenuOpen(false);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-300 hover:cursor-pointer mr-4"
            >
              Berita
            </a>
            <a
              onClick={() => {
                navigate('/Galery');
                setIsMobileMenuOpen(false);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-300 hover:cursor-pointer mr-4"
            >
              Galery
            </a>
            <a
              onClick={() => {
                navigate('/DataAtlit');
                setIsMobileMenuOpen(false);
              }}
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-300 hover:cursor-pointer mr-4"
            >
              Dashboard
            </a>
            <a
              onClick={
                handleInstallButtonClick
              }
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-300 hover:cursor-pointer mr-4"
            >
              Download App
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
