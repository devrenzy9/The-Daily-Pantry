import React from 'react';
import { useCart } from '../../context/CartContext';

const ActionIcons = ({ onCartClick }) => {
  const { itemCount } = useCart();
  const actions = [
    { icon: 'ri-shuffle-line', label: 'Compare' },
    { icon: 'ri-heart-line', label: 'Wishlist', badge: 0 }, // placeholder
    { icon: 'ri-shopping-cart-line', label: 'Cart', badge: itemCount, onClick: onCartClick },
    { icon: 'ri-user-line', label: 'Account' },
  ];

  return (
    <div className="flex items-center gap-4">
      {/* Action Icons */}
      <div className="flex items-center gap-1">
        {actions.map((action, idx) => (
          <button
            key={idx}
            onClick={action.onClick}
            className="relative p-2 hover:bg-slate-100 rounded-full transition-colors flex flex-col items-center gap-0.5 group"
            aria-label={action.label}
          >
            <div className="relative">
              <i className={`${action.icon} text-lg text-slate-600 group-hover:text-[#D17A5F]`}></i>
              {action.badge > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#D17A5F] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {action.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] text-slate-600 group-hover:text-[#D17A5F] hidden lg:inline-block">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionIcons;
