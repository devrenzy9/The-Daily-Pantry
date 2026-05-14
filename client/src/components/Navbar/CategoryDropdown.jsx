import React, { useState } from 'react';

const CategoryDropdown = () => {
  const [open, setOpen] = useState(false);
  const categories = [
    { name: 'All Categories', icon: 'ri-layout-grid-line' },
    { name: 'Milks and Dairies', icon: 'ri-milk-2-line' },
    { name: 'Wines & Alcohol', icon: 'ri-wine-line' },
    { name: 'Clothing & Beauty', icon: 'ri-shirt-line' },
    { name: 'Pet Foods & Toy', icon: 'ri-leaf-line' },
    { name: 'Fast Food', icon: 'ri-takeaway-line' },
    { name: 'Baking Material', icon: 'ri-cake-3-line' },
    { name: 'Vegetables', icon: 'ri-leaf-2-line' },
    { name: 'Fresh Seafood', icon: 'ri-fish-line' },
    { name: 'Noodles & Rice', icon: 'ri-bowl-line' },
    { name: 'Ice cream', icon: 'ri-ice-cream-2-line' }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-[#F9E6DE] hover:bg-[#F3D4C4] border-r border-[#E8D4C0] transition-colors"
        aria-haspopup="true"
        aria-expanded={open}
      >
        All Categories <i className="ri-arrow-down-s-line"></i>
      </button>
      {open && (
        <div className="absolute top-full left-0 z-[9999] w-72 bg-[#FBF6F1] border border-[#E8DDD5] rounded-lg shadow-xl mt-1 p-3" onClick={() => setOpen(false)}>
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full px-3 py-2 border border-[#D4A574] rounded focus:outline-none focus:ring-2 focus:ring-[#D17A5F] mb-3"
          />
          <ul className="max-h-64 overflow-y-auto space-y-1">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 px-3 py-2.5 rounded hover:bg-[#F9E6DE] cursor-pointer text-sm text-[#6B4423] transition-colors"
              >
                <i className={`${cat.icon} text-lg text-[#D17A5F] flex-shrink-0`}></i>
                <span className="flex-1">{cat.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
