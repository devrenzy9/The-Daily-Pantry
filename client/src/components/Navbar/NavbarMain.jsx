import React, { useState } from 'react';
import Logo from './Logo';
import CategoryDropdown from './CategoryDropdown';
import ActionIcons from './ActionIcons';
import CartDrawer from '../CartDrawer';
import { useCart } from '../../context/CartContext';

const NavbarMain = ({ mobileOpen, setMobileOpen }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <>
      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between py-4 px-4 bg-[#FBF6F1] shadow-md">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Open navigation menu"
        >
          <i className="ri-menu-line text-2xl"></i>
        </button>
        <Logo />
        <div className="flex gap-4">
          <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors" aria-label="Wishlist">
            <i className="ri-heart-line text-xl text-slate-600"></i>
            <span className="absolute -top-1 -right-1 bg-[#D17A5F] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
          </button>
          <button
            className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Shopping cart"
            onClick={() => setCartOpen(true)}
          >
            <i className="ri-shopping-cart-line text-xl text-slate-600"></i>
            <span className="absolute -top-1 -right-1 bg-[#D17A5F] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {/* dynamic count from context will be shown via ActionIcons, but mobile uses separate button */}
               {itemCount}
            </span>
          </button>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between py-4 px-6 border-b border-[#E8DDD5] bg-[#FBF6F1] relative z-40">
        <Logo />
        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex border border-[#D4A574] rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#D17A5F] focus-within:border-[#D17A5F]">
            <CategoryDropdown />
            <input
              type="text"
              placeholder="Search items..."
              className="flex-1 px-4 py-2 outline-none text-slate-700"
            />
            <button className="px-4 text-slate-600 hover:bg-[#F9E6DE] transition-colors" aria-label="Search">
              <i className="ri-search-line text-lg"></i>
            </button>
          </div>
        </div>
        <ActionIcons onCartClick={() => setCartOpen(true)} />
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default NavbarMain;
