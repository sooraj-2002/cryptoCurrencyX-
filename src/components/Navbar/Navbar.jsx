import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CoinContext } from '../../context/CoinContext';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd':
        setCurrency({ name: 'usd', symbol: '$' });
        break;
      case 'eur':
        setCurrency({ name: 'eur', symbol: '€' });
        break;
      case 'inr':
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
      default:
        setCurrency({ name: 'inr', symbol: '₹' });
        break;
    }
  };

  return (
    <nav className="shadow-lg nav-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="img-crp " src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
            <Link to="/News" className="text-white hover:text-gray-400">News</Link>
            <Link to="/Price" className="text-white hover:text-gray-400">CryptoNews</Link>
            <Link to="/About" className="text-white hover:text-gray-400">AboutMe</Link>
          </div>
          <div className="flex items-center">
            <select className="p-1 px-1  bg-indigo-950 text-white  border-none" onChange={currencyHandler}>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="inr">INR</option>
            </select>

          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-xl">
            <Link to="/" className="block text-white hover:text-gray-400">Home</Link>
            <Link to="/News" className="block text-white hover:text-gray-400">News</Link>
            <Link to="/Price" className="block text-white hover:text-gray-400">CryptoNews</Link>
            <Link to="/About" className="block text-white hover:text-gray-400">AboutMe</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
