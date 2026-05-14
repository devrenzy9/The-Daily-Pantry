import React from "react";
import CategoryBanner from "./CategoryBanner";
import bannerMenu from "../../assets/HomePageAssets/banner-menu.png";
import headphone from "../../assets/HomePageAssets/icon-headphone.svg";

const DesktopMenu = () => {
  return (
    <div className="hidden lg:flex w-full border-b border-slate-200 bg-[#FBF6F1]">
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        {/* Left: CategoryBanner + Menu */}
        <div className="flex items-center gap-8">
          <CategoryBanner />

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-8">
              {/* Deals */}
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 font-semibold text-slate-800 hover:text-[#D17A5F] transition-colors"
                >
                  <i className="ri-fire-line text-[#D17A5F]"></i> Deals
                </a>
              </li>

              {/* Home */}
              <li className="relative group">
                <span className="flex items-center gap-1 font-semibold text-slate-800 cursor-pointer hover:text-[#D17A5F]">
                  Home <i className="ri-arrow-down-s-line"></i>
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#FBF6F1] rounded-lg shadow-lg border border-slate-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                  <div className="flex flex-col gap-2">
                    {[
                      "Home 1",
                      "Home 2",
                      "Home 3",
                      "Home 4",
                      "Home 5",
                      "Home 6",
                    ].map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              {/* About */}
              <li>
                <a
                  href="#"
                  className="font-semibold text-slate-800 hover:text-[#D17A5F] transition-colors"
                >
                  About
                </a>
              </li>

              {/* Shop */}
              <li className="relative group">
                <span className="flex items-center gap-1 font-semibold text-slate-800 cursor-pointer hover:text-[#D17A5F]">
                  Shop <i className="ri-arrow-down-s-line"></i>
                </span>
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#FBF6F1] rounded-lg shadow-lg border border-slate-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                  <div className="flex flex-col gap-2">
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Shop Grid - Right Sidebar
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Shop Grid - Left Sidebar
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Shop List - Right Sidebar
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Shop List - Left Sidebar
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Shop - wide
                    </a>
                    {/* Single Product nested */}
                    <div className="relative group pl-2 border-l-2 border-slate-100 my-1">
                      <div className="flex justify-between items-center w-full cursor-pointer text-sm text-slate-600 hover:text-[#D17A5F] py-1">
                        <span>Single Product</span>
                        <i className="ri-arrow-right-s-line"></i>
                      </div>
                      <div className="absolute left-full top-0 ml-2 w-48 bg-[#FBF6F1] rounded-lg shadow-lg border border-slate-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                        <div className="flex flex-col gap-2">
                          <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-[#D17A5F]"
                          >
                            Product - Right Sidebar
                          </a>
                          <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-[#D17A5F]"
                          >
                            Product - Left Sidebar
                          </a>
                          <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-[#D17A5F]"
                          >
                            Product - No Sidebar
                          </a>
                          <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-[#D17A5F]"
                          >
                            Product - Vendor Info
                          </a>
                        </div>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Shop - Filter
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Shop - Wishlist
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Shop - Cart
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Shop - Checkout
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Shop - Compare
                    </a>
                    {/* Shop Invoice nested */}
                    <div className="relative group pl-2 border-l-2 border-slate-100 my-1">
                      <div className="flex justify-between items-center w-full cursor-pointer text-sm text-slate-600 hover:text-[#D17A5F] py-1">
                        <span>Shop Invoice</span>
                        <i className="ri-arrow-right-s-line"></i>
                      </div>
                      <div className="absolute left-full top-0 ml-2 w-48 bg-[#FBF6F1] rounded-lg shadow-lg border border-slate-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="flex flex-col gap-2">
                          <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-[#D17A5F]"
                          >
                            Shop Invoice 1
                          </a>
                          <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-[#D17A5F]"
                          >
                            Shop Invoice 2
                          </a>
                          <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-[#D17A5F]"
                          >
                            Shop Invoice 3
                          </a>
                          <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-[#D17A5F]"
                          >
                            Shop Invoice 4
                          </a>
                          <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-[#D17A5F]"
                          >
                            Shop Invoice 5
                          </a>
                          <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-[#D17A5F]"
                          >
                            Shop Invoice 6
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Vendors */}
              <li className="relative group">
                <span className="flex items-center gap-1 font-semibold text-slate-800 cursor-pointer hover:text-[#D17A5F]">
                  Vendors <i className="ri-arrow-down-s-line"></i>
                </span>
                <div className="absolute top-full left-0 mt-2 w-44 bg-[#FBF6F1] rounded-lg shadow-lg border border-slate-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                  <div className="flex flex-col gap-2">
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Vendors Grid
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Vendors List
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Vendor Detail 01
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Vendor Detail 02
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Vendor Dashboard
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Vendor Guide
                    </a>
                  </div>
                </div>
              </li>

              {/* Mega Menu */}
              <li className="relative group">
                <span className="flex items-center gap-1 font-semibold text-slate-800 cursor-pointer hover:text-[#D17A5F]">
                  Mega Menu <i className="ri-arrow-down-s-line"></i>
                </span>
                <div className="absolute top-full left-0 mt-2 bg-[#FBF6F1] rounded-lg shadow-xl border border-slate-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[800px] z-[9999]">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Women's Fashion */}
                    <div className="flex flex-col gap-2">
                      <h4 className="text-[#D17A5F] font-semibold mb-2">
                        Women's Fashion
                      </h4>
                      <a
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        Dresses
                      </a>
                      <a
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        Blouses & Shirts
                      </a>
                      <a
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        Hoodies & Sweatshirts
                      </a>
                      <a
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        Women's Sets
                      </a>
                    </div>
                    {/* Men's Fashion */}
                    <div className="flex flex-col gap-2">
                      <h4 className="text-[#D17A5F] font-semibold">
                        Men's Fashion
                      </h4>
                      <a
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        Jackets
                      </a>
                      <a
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        Casual Faux Leather
                      </a>
                      <a
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        Genuine Leather
                      </a>
                    </div>
                    {/* Technology */}
                    <div className="flex flex-col gap-2">
                      <h4 className="text-[#D17A5F] font-semibold">
                        Technology
                      </h4>
                      <a
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        Gaming Laptops
                      </a>
                      <a
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        Ultraslim Laptops
                      </a>
                      <a
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        Tablets
                      </a>
                      <a
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        Laptop Accessories
                      </a>
                      <a
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        Tablet Accessories
                      </a>
                    </div>
                  </div>
                  {/* Banner */}
                  <div className="relative w-full p-4 mt-6">
                    <img
                      src={bannerMenu}
                      alt="Deal Banner"
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-90"
                    />
                    <div className="relative z-10 flex flex-col items-start gap-1">
                      <h6 className="text-sm font-medium text-[#D17A5F]">
                        HOT DEALS
                      </h6>
                      <h5 className="text-2xl font-bold text-slate-800">
                        Don't miss <br />
                        Trending
                      </h5>
                      <h3 className="text-emerald-600 text-2xl">Save to 50%</h3>
                      <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors">
                        Shop now
                      </button>
                    </div>
                  </div>
                </div>
              </li>

              {/* Blog */}
              <li className="relative group">
                <span className="flex items-center gap-1 font-semibold text-slate-800 cursor-pointer hover:text-[#D17A5F]">
                  Blog <i className="ri-arrow-down-s-line"></i>
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#FBF6F1] rounded-lg shadow-lg border border-slate-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                  <div className="flex flex-col gap-2">
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Blog Category Grid
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Blog Category List
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Blog Category Big
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-[#D17A5F]"
                    >
                      Blog Category Wide
                    </a>
                    {/* Single Post nested */}
                    <div className="relative group pl-2 border-l-2 border-slate-100 my-1">
                      <div className="flex justify-between items-center w-full cursor-pointer text-sm text-slate-600 hover:text-[#D17A5F] py-1">
                        <span>Single Post</span>
                        <i className="ri-arrow-right-s-line"></i>
                      </div>
                      <div className="absolute left-full top-0 ml-2 w-40 bg-[#FBF6F1] rounded-lg shadow-lg border border-slate-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="flex flex-col gap-2">
                          <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-[#D17A5F]"
                          >
                            Left Sidebar
                          </a>
                          <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-[#D17A5F]"
                          >
                            Right Sidebar
                          </a>
                          <a
                            href="#"
                            className="text-sm text-slate-600 hover:text-[#D17A5F]"
                          >
                            No Sidebar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Pages */}
              <li className="relative group">
                <span className="flex items-center gap-1 font-semibold text-slate-800 cursor-pointer hover:text-[#D17A5F]">
                  Pages <i className="ri-arrow-down-s-line"></i>
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#FBF6F1] rounded-lg shadow-lg border border-slate-100 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                  <div className="flex flex-col gap-2">
                    {[
                      "About Us",
                      "My Account",
                      "Login",
                      "Register",
                      "Forgot Password",
                      "Reset Password",
                      "Purchase Guide",
                      "Privacy Policy",
                      "Terms Of Services",
                      "404 Page",
                    ].map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-sm text-slate-600 hover:text-[#D17A5F]"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right: Support Contact */}
        <div className="hidden xl:flex items-center gap-4 w-60">
          <div className="flex items-center gap-2">
            <div className="flex flex-col gap-1 text-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
