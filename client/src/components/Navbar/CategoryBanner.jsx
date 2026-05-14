import React, { useState } from 'react';
import cat1 from '../../assets/HomePageAssets/category-1.svg';
import cat2 from '../../assets/HomePageAssets/category-2.svg';
import cat3 from '../../assets/HomePageAssets/category-3.svg';
import cat4 from '../../assets/HomePageAssets/category-4.svg';
import cat5 from '../../assets/HomePageAssets/category-5.svg';
import cat6 from '../../assets/HomePageAssets/category-6.svg';
import cat7 from '../../assets/HomePageAssets/category-7.svg';
import cat8 from '../../assets/HomePageAssets/category-8.svg';
import cat9 from '../../assets/HomePageAssets/category-9.svg';
import cat10 from '../../assets/HomePageAssets/category-10.svg';
import CategoryItem from './CategoryItem';

const CategoryBanner = () => {
  const [open, setOpen] = useState(false);
  
  const categories = [
    { title: 'Milks and Dairies', icon: cat1 },
    { title: 'Wines & Drinks', icon: cat2 },
    { title: 'Clothing & beauty', icon: cat3 },
    { title: 'fresh seafood', icon: cat4 },
    { title: 'pet foods & toy', icon: cat5 },
    { title: 'fast food', icon: cat6 },
    { title: 'Baking material', icon: cat7 },
    { title: 'vegetables', icon: cat8 },
    { title: 'fresh fruit', icon: cat9 },
    { title: 'bread and juice', icon: cat10 },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#D17A5F] hover:bg-[#E75C42] text-white font-semibold py-2 px-4 rounded-md transition-colors flex items-center gap-2"
        aria-expanded={open}
      >
        <i className="ri-box-3-line"></i>
        <span>All Categories</span>
        <i className={`ri-arrow-down-s-line transition-transform duration-200 ${open ? 'rotate-180' : ''}`}></i>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-3 w-[30rem] bg-[#FBF6F1] rounded-lg shadow-2xl border border-slate-200 p-5 z-50">
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat, idx) => (
              <CategoryItem 
                key={idx} 
                img={cat.icon} 
                head={cat.title} 
              />
            ))}
          </div>
          <div className="mt-4 text-center">
            <span className="text-[#D17A5F] text-sm font-medium flex items-center justify-center gap-1 cursor-pointer hover:underline">
              Show more... <i className="ri-add-circle-line text-xl"></i>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryBanner;
