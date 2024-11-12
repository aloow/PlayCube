import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#1E0F2F] text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Logo</h1>
        <nav className="space-x-4">
          <a href="#features" className="hover:text-gray-300">Features</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
