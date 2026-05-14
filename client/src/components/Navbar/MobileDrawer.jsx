import React from 'react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const MobileDrawer = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          open ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85%] bg-[#FBF6F1] shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#E8DDD5] bg-[#FBF6F1]">
          <Logo />
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F9E6DE] transition-colors"
            aria-label="Close menu"
          >
            <i className="ri-close-line text-2xl text-[#6B4423]"></i>
          </button>
        </div>
        {/* Search */}
        <div className="p-4 border-b border-[#E8DDD5] bg-[#FBF6F1]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search items..."
              className="w-full pl-4 pr-10 py-2 border border-[#D4A574] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D17A5F]"
            />
            <i className="ri-search-line absolute right-3 top-1/2 -translate-y-1/2 text-[#A85A3E]"></i>
          </div>
        </div>
        {/* Menu */}
        <div className="overflow-y-auto h-[calc(100vh-200px)] bg-[#FBF6F1]">
          <MobileMenu />
        </div>
        {/* Footer */}
         <div className="absolute bottom-0 w-full p-4 border-t border-[#E8DDD5] bg-[#F9E6DE] text-xs text-[#A85A3E]">
           <div className="flex gap-3 justify-center mb-2">
             <a href="#" className="w-7 h-7 rounded-full bg-[#D17A5F] text-white flex items-center justify-center hover:bg-[#E75C42]"><i className="ri-facebook-fill text-sm"></i></a>
             <a href="#" className="w-7 h-7 rounded-full bg-[#D17A5F] text-white flex items-center justify-center hover:bg-[#E75C42]"><i className="ri-instagram-line text-sm"></i></a>
             <a href="#" className="w-7 h-7 rounded-full bg-[#D17A5F] text-white flex items-center justify-center hover:bg-[#E75C42]"><i className="ri-twitter-fill text-sm"></i></a>
             <a href="#" className="w-7 h-7 rounded-full bg-[#D17A5F] text-white flex items-center justify-center hover:bg-[#E75C42]"><i className="ri-github-fill text-sm"></i></a>
             <a href="#" className="w-7 h-7 rounded-full bg-[#D17A5F] text-white flex items-center justify-center hover:bg-[#E75C42]"><i className="ri-youtube-fill text-sm"></i></a>
           </div>
           <p className="text-center">&copy; 2025 The Daily Pantry. All rights reserved.</p>
         </div>
      </div>
    </>
  );
};

export default MobileDrawer;
