import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-20 py-10 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-blue-600">Travel Companion</h2>
          <p className="text-sm mt-1">Helping you explore the world better 🌍</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
          <a href="#" className="hover:text-blue-600 transition">Privacy</a>
          <a href="#" className="hover:text-blue-600 transition">Terms</a>
        </div>

        {/* Social */}
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
            <i className="fa-brands fa-github text-xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
            <i className="fa-brands fa-twitter text-xl"></i>
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Travel Companion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;