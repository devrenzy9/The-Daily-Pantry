import React from 'react';

const CategoryItem = ({ img, head }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-[#D17A5F] hover:bg-[#F9E6DE] hover:shadow-sm transition-all duration-200 cursor-pointer w-full">
      <img src={img} alt={head} className="w-10 h-10 object-contain flex-shrink-0" />
      <span className="text-sm font-medium text-slate-700 leading-tight">{head}</span>
    </div>
  );
};

export default CategoryItem;
