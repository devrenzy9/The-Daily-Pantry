import React, { useState, useEffect } from 'react';
import flag1 from '../../assets/HomePageAssets/flag-dt.png';
import flag2 from '../../assets/HomePageAssets/flag-fr.png';
import flag3 from '../../assets/HomePageAssets/flag-ru.png';

const NavbarTopBar = () => {
  const messages = [
    "100% secure delivery without any problem",
    "Super value deals | Save more with coupons",
    "More valuable than any other grocery store"
  ];
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#6B4423] text-white text-xs py-2 hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#F4A82E] transition-colors">About</a>
          <a href="#" className="hover:text-[#F4A82E] transition-colors">My Account</a>
          <a href="#" className="hover:text-[#F4A82E] transition-colors">Wishlist</a>
          <a href="#" className="hover:text-[#F4A82E] transition-colors">Order Tracking</a>
        </div>
        <div className="overflow-hidden h-5 mx-8 flex-1 max-w-md">
          <div
            className="transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateY(-${msgIndex * 100}%)` }}
          >
            {messages.map((msg, i) => (
              <div key={i} className="h-5 flex items-center justify-center text-center opacity-80">
                {msg}
              </div>
            ))}
          </div>
        </div>
         <div className="flex items-center gap-6">
           <div className="flex items-center gap-2">
             <span className="hidden sm:inline">Need help? Call Us:</span>
             <span className="font-bold text-[#F4A82E]">Support Hotline</span>
           </div>
           <LanguageDropdown />
           <CurrencyDropdown />
         </div>
      </div>
    </div>
  );
};

const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <span className="hover:text-[#F4A82E] transition-colors flex items-center gap-1 cursor-pointer">
        English <i className="ri-arrow-down-s-line"></i>
      </span>
      {open && (
        <ul className="absolute top-full right-0 mt-1 w-32 bg-[#FBF6F1] text-[#6B4423] rounded-lg shadow-lg overflow-hidden z-50">
          <li className="px-4 py-2 hover:bg-[#F9E6DE] cursor-pointer flex items-center gap-2">
            <img src={flag1} alt="Germany" className="w-4 h-4" /> Germany
          </li>
          <li className="px-4 py-2 hover:bg-[#F9E6DE] cursor-pointer flex items-center gap-2">
            <img src={flag2} alt="France" className="w-4 h-4" /> France
          </li>
          <li className="px-4 py-2 hover:bg-[#F9E6DE] cursor-pointer flex items-center gap-2">
            <img src={flag3} alt="Russia" className="w-4 h-4" /> Russia
          </li>
        </ul>
      )}
    </div>
  );
};

const CurrencyDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <span className="hover:text-[#F4A82E] transition-colors flex items-center gap-1 cursor-pointer">
        USD <i className="ri-arrow-down-s-line"></i>
      </span>
      {open && (
        <ul className="absolute top-full right-0 mt-1 w-32 bg-[#FBF6F1] text-[#6B4423] rounded-lg shadow-lg overflow-hidden z-50">
          <li className="px-4 py-2 hover:bg-[#F9E6DE] cursor-pointer flex items-center gap-2">
            <img src={flag1} alt="Germany" className="w-4 h-4" /> Germany
          </li>
          <li className="px-4 py-2 hover:bg-[#F9E6DE] cursor-pointer flex items-center gap-2">
            <img src={flag2} alt="France" className="w-4 h-4" /> France
          </li>
          <li className="px-4 py-2 hover:bg-[#F9E6DE] cursor-pointer flex items-center gap-2">
            <img src={flag3} alt="Russia" className="w-4 h-4" /> Russia
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavbarTopBar;
