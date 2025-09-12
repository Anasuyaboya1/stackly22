import React, { useState } from 'react';

const MinimalHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="font-bold text-xl">LOGO</div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Services</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </nav>
        {/* Hamburger Icon (mobile/tablet only, below md) */}
        <button className="block md:hidden p-2" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile/Tablet Nav (below md) */}
      {open && (
        <nav className="block md:hidden px-4 pb-4 flex flex-col space-y-2 bg-white border-b border-gray-200">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Services</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default MinimalHeader;
