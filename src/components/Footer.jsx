import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-dark py-6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding and Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold">Yash Singhal</h2>
            <p className="text-sm mt-2 opacity-80">Crafting the future of web design.</p>
          </div>

          {/* Footer Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-[#647376]">Home</a>
            <a href="#about" className="text-sm hover:text-[#647376]">About</a>
            <a href="#project" className="text-sm hover:text-[#647376]">Projects</a>
            <a href="#contact" className="text-sm hover:text-[#647376]">Contact</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://github.com/mryashsinghal" className="text-lg hover:text-[#647376]">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/yash--singhal/" className="text-lg hover:text-[#647376]">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* Footer CopyRight */}
        <div className="mt-4 text-center text-xs opacity-60">
          &copy; 2024 Yash Singhal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
