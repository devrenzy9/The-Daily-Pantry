import React, { useState } from 'react';

const MobileMenu = () => {
  const [openSection, setOpenSection] = useState(null);
  const [openSubsection, setOpenSubsection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const toggleSubsection = (sub) => {
    setOpenSubsection(openSubsection === sub ? null : sub);
  };

  return (
    <ul className="py-2">
      {/* Home */}
      <li className="border-b border-slate-100">
        <button
          onClick={() => toggleSection('home')}
          className="flex items-center justify-between w-full px-4 py-3 text-left font-semibold text-slate-800 hover:bg-slate-50"
        >
          <span>Home</span>
          <i className={`ri-arrow-down-s-line transition-transform ${openSection === 'home' ? 'rotate-180' : ''}`}></i>
        </button>
        {openSection === 'home' && (
          <ul className="bg-slate-50 px-4 py-2 space-y-2">
            {['Home 1','Home 2','Home 3','Home 4','Home 5','Home 6'].map((item, i) => (
              <li key={i}><a href="#" className="block text-sm text-slate-600 hover:text-[#D17A5F] py-1">{item}</a></li>
            ))}
          </ul>
        )}
      </li>

      {/* Shop */}
      <li className="border-b border-slate-100">
        <button
          onClick={() => toggleSection('shop')}
          className="flex items-center justify-between w-full px-4 py-3 text-left font-semibold text-slate-800 hover:bg-slate-50"
        >
          <span>Shop</span>
          <i className={`ri-arrow-down-s-line transition-transform ${openSection === 'shop' ? 'rotate-180' : ''}`}></i>
        </button>
        {openSection === 'shop' && (
          <ul className="bg-[#F9E6DE] px-4 py-2 space-y-2">
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop Grid - Right Sidebar</a></li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop Grid - Left Sidebar</a></li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop List - Right Sidebar</a></li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop List - Left Sidebar</a></li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop - wide</a></li>
            {/* Single Product nested */}
            <li>
              <button
                onClick={() => toggleSubsection('single-product')}
                className="flex items-center justify-between w-full text-sm text-[#6B4423] hover:text-[#D17A5F] py-1"
              >
                <span>Single Product</span>
                <i className={`ri-arrow-right-s-line transition-transform ${openSubsection === 'single-product' ? 'rotate-180' : ''}`}></i>
              </button>
              {openSubsection === 'single-product' && (
                <ul className="mt-2 ml-4 space-y-1 bg-[#F3D4C4] p-2 rounded">
                  <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Product - Right Sidebar</a></li>
                  <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Product - Left Sidebar</a></li>
                  <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Product - No Sidebar</a></li>
                  <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Product - Vendor Infor</a></li>
                </ul>
              )}
            </li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop - Filter</a></li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop - Wishlist</a></li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop - Cart</a></li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop - Checkout</a></li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop - Compare</a></li>
            {/* Shop Invoice nested */}
            <li>
              <button
                onClick={() => toggleSubsection('shop-invoice')}
                className="flex items-center justify-between w-full text-sm text-[#6B4423] hover:text-[#D17A5F] py-1"
              >
                <span>Shop Invoice</span>
                <i className={`ri-arrow-right-s-line transition-transform ${openSubsection === 'shop-invoice' ? 'rotate-180' : ''}`}></i>
              </button>
              {openSubsection === 'shop-invoice' && (
                <ul className="mt-2 ml-4 space-y-1 bg-[#F3D4C4] p-2 rounded">
                  <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop Invoice 1</a></li>
                  <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop Invoice 2</a></li>
                  <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop Invoice 3</a></li>
                  <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop Invoice 4</a></li>
                  <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop Invoice 5</a></li>
                  <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Shop Invoice 6</a></li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </li>

      {/* Vendors */}
      <li className="border-b border-slate-100">
        <button
          onClick={() => toggleSection('vendors')}
          className="flex items-center justify-between w-full px-4 py-3 text-left font-semibold text-slate-800 hover:bg-slate-50"
        >
          <span>Vendors</span>
          <i className={`ri-arrow-down-s-line transition-transform ${openSection === 'vendors' ? 'rotate-180' : ''}`}></i>
        </button>
        {openSection === 'vendors' && (
          <ul className="bg-[#F9E6DE] px-4 py-2 space-y-2">
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Vendors Grid</a></li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Vendors List</a></li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Vendor Detail 01</a></li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Vendor Detail 02</a></li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Vendor Dashboard</a></li>
            <li><a href="#" className="block text-sm text-[#6B4423] hover:text-[#D17A5F]">Vendor Guide</a></li>
          </ul>
        )}
      </li>

      {/* Mega Menu */}
      <li className="border-b border-slate-100">
        <button
          onClick={() => toggleSection('mega')}
          className="flex items-center justify-between w-full px-4 py-3 text-left font-semibold text-slate-800 hover:bg-slate-50"
        >
          <span>Mega Menu</span>
          <i className={`ri-arrow-down-s-line transition-transform ${openSection === 'mega' ? 'rotate-180' : ''}`}></i>
        </button>
        {openSection === 'mega' && (
          <div className="bg-[#F9E6DE] px-4 py-3 space-y-4">
            <div>
              <h4 className="font-semibold text-[#D17A5F] mb-2">Women's Fashion</h4>
              <ul className="space-y-1 pl-2">
                <li><a href="#" className="text-sm text-[#6B4423] hover:text-[#D17A5F]">Dresses</a></li>
                <li><a href="#" className="text-sm text-[#6B4423] hover:text-[#D17A5F]">Blouses & Shirts</a></li>
                <li><a href="#" className="text-sm text-[#6B4423] hover:text-[#D17A5F]">Hoodies & Sweatshirts</a></li>
                <li><a href="#" className="text-sm text-[#6B4423] hover:text-[#D17A5F]">Women's Sets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#D17A5F] mb-2">Men's Fashion</h4>
              <ul className="space-y-1 pl-2">
                <li><a href="#" className="text-sm text-[#6B4423] hover:text-[#D17A5F]">Jackets</a></li>
                <li><a href="#" className="text-sm text-[#6B4423] hover:text-[#D17A5F]">Casual Faux Leather</a></li>
                <li><a href="#" className="text-sm text-[#6B4423] hover:text-[#D17A5F]">Genuine Leather</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[#D17A5F] mb-2">Technology</h4>
              <ul className="space-y-1 pl-2">
                <li><a href="#" className="text-sm text-[#6B4423] hover:text-[#D17A5F]">Gaming Laptops</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-[#D17A5F]">Ultraslim Laptops</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-[#D17A5F]">Tablets</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-[#D17A5F]">Laptop Accessories</a></li>
                <li><a href="#" className="text-sm text-slate-600 hover:text-[#D17A5F]">Tablet Accessories</a></li>
              </ul>
            </div>
          </div>
        )}
      </li>

      {/* Blog */}
      <li className="border-b border-slate-100">
        <button
          onClick={() => toggleSection('blog')}
          className="flex items-center justify-between w-full px-4 py-3 text-left font-semibold text-slate-800 hover:bg-slate-50"
        >
          <span>Blog</span>
          <i className={`ri-arrow-down-s-line transition-transform ${openSection === 'blog' ? 'rotate-180' : ''}`}></i>
        </button>
        {openSection === 'blog' && (
          <ul className="bg-slate-50 px-4 py-2 space-y-2">
            <li><a href="#" className="block text-sm text-slate-600 hover:text-[#D17A5F]">Blog Category Grid</a></li>
            <li><a href="#" className="block text-sm text-slate-600 hover:text-[#D17A5F]">Blog Category List</a></li>
            <li><a href="#" className="block text-sm text-slate-600 hover:text-[#D17A5F]">Blog Category Big</a></li>
            <li><a href="#" className="block text-sm text-slate-600 hover:text-[#D17A5F]">Blog Category Wide</a></li>
            {/* Single Post nested */}
            <li>
              <button
                onClick={() => toggleSubsection('single-post')}
                className="flex items-center justify-between w-full text-sm text-slate-600 hover:text-[#D17A5F] py-1"
              >
                <span>Single Post</span>
                <i className={`ri-arrow-right-s-line transition-transform ${openSubsection === 'single-post' ? 'rotate-180' : ''}`}></i>
              </button>
              {openSubsection === 'single-post' && (
                <ul className="mt-2 ml-4 space-y-1 bg-slate-100 p-2 rounded">
                  <li><a href="#" className="block text-sm text-slate-600 hover:text-[#D17A5F]">Left Sidebar</a></li>
                  <li><a href="#" className="block text-sm text-slate-600 hover:text-[#D17A5F]">Right Sidebar</a></li>
                  <li><a href="#" className="block text-sm text-slate-600 hover:text-[#D17A5F]">No Sidebar</a></li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </li>

      {/* Pages */}
      <li className="border-b border-slate-100">
        <button
          onClick={() => toggleSection('pages')}
          className="flex items-center justify-between w-full px-4 py-3 text-left font-semibold text-slate-800 hover:bg-slate-50"
        >
          <span>Pages</span>
          <i className={`ri-arrow-down-s-line transition-transform ${openSection === 'pages' ? 'rotate-180' : ''}`}></i>
        </button>
        {openSection === 'pages' && (
          <ul className="bg-slate-50 px-4 py-2 space-y-2">
            {['About Us','My Account','Login','Register','Forgot Password','Reset Password','Purchase Guide','Privacy Policy','Terms Of Services','404 Page'].map((item, i) => (
              <li key={i}><a href="#" className="block text-sm text-slate-600 hover:text-[#D17A5F] py-1">{item}</a></li>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default MobileMenu;