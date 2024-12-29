import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 overflow-hidden transition-all duration-700 ease-in-out
      ${isScrolled ? 'h-16 bg-dark' : 'h-screen bg-dark'}`}>
      <div className="flex justify-between items-center h-full relative">
        {/* Left Side */}
        <div className={`absolute w-1/2 h-full bg-black left-0 transition-transform duration-700
          ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}></div>

        {/* Right Side */}
        <div className={`absolute w-1/2 h-full bg-black right-0 transition-transform duration-700
          ${isScrolled ? 'translate-y-full' : 'translate-y-0'}`}></div>

        {/* Centered Navicon */}
        <div className="absolute inset-0 flex justify-center items-center text-white text-3xl font-bold">
          <a href="#"  className="transition-transform transform hover:scale-110 duration-300 ease-in-out">MyPortfolio</a>
        </div>

        {/* Menu Items */}
        <ul className={`flex space-x-10 absolute inset-x-0 bottom-20 sm:bottom-10 justify-center text-dark text-lg font-semibold
          ${isScrolled ? 'hidden' : 'block'}`}>
          <li><a href="#home" onClick={()=>{setIsScrolled(true)}} >Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;


/* #647376 #aeb1b8 */