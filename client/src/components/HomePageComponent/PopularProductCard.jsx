import React from 'react'
import { useCart } from '../../context/CartContext';

const PopularProductCard = ({id, deal, img, hover, cat, name,star, rating, company, realPrice, price}) => {
  let badgeStyle = '';
  const { addToCart } = useCart();
  switch (deal?.toLowerCase()) {
    case 'hot':
      badgeStyle = 'bg-[#E75C42] ';
      break;
    case 'sale':
      badgeStyle = 'bg-[#E75C42] ';
      break;
    case 'new':
      badgeStyle = 'bg-[#F4A82E]';
      break;
    default: 
        badgeStyle = "bg-[#D17A5F]"
  }

  return (
    <div className='productCard  mt-10 w-full  group  shadow-md rounded-lg border-1 border-zinc-200 relative overflow-hidden hover:shadow-lg transition-all duration-100'>
        {deal && (
        <div className={`absolute top-[-3px] left-[-8px] px-6 py-2 rounded-br-[19px] z-80 text-sm font-semibold ${badgeStyle} text-white`}>
          {deal}
        </div>
        )}
        <div className='w-full  flex items-center justify-center relative cursor-pointer'>
            <img src={img} alt='Main Products Image' className='w-[70%] productImage opacity-[1] transition-all duration-200 group-hover:opacity-0'/>
            <img src={hover} alt='background Hover Image' className='w-[70%] productImage absolute opacity-0 group-hover:scale-[1.1] transition-all duration-200 group-hover:opacity-100'/>
             <div className='absolute z-[100] hidden group-hover:flex gap-3 cursor-default bg-[#FBF6F1] px-2 py-1 rounded-md text-[#D17A5F] text-lg'>
      
      {/* Icon with tooltip */}
      <div className="relative group">
        <i className="ri-heart-line peer px-2 border-r border-[#D17A5F] cursor-pointer"></i>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#D17A5F] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap hidden peer-hover:block after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#D17A5F]">
          Wishlist
        </span>
      </div>

      <div className="relative group">
        <i className="ri-eye-line px-2 border-r border-[#D17A5F] cursor-pointer peer"></i>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#D17A5F] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap hidden peer-hover:block after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#D17A5F]">
          Quick View
        </span>
      </div>

      <div className="relative group">
        <i className="ri-share-forward-line px-2 cursor-pointer peer"></i>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#D17A5F] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap hidden peer-hover:block after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#D17A5F]">
          Share
        </span>
      </div>

    </div>
        </div>
        <div className='p-2 px-4 relative '>
            <h6 className='text-[#A85A3E] font-semibold text-sm'>{cat}</h6>
            <h4 className='text-lg font-semibold hover:text-[#D17A5F] cursor-pointer'>{name}</h4>

            {/* grey star background */}
            <div className='relative flex items-center'>
                <div className="text-gray-300">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                </div>

                {/* Yellow Stars Overlay */}
                <div
                    className="absolute top-0 left-0 overflow-hidden text-yellow-400"
                    style={{ width: `${star}%` }}
                >
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                </div>
                <h5 className='text-zinc-500 text-sm ml-2'>{rating}</h5>
            </div>
            <h5 className='text-sm'>By <span className='text-[#D17A5F] cursor-pointer'>{company}</span></h5>
        </div>
            <div className='flex gap-3 items-center absolute bottom-3 w-full justify-between px-4'>
                <div className='flex gap-3 items-center'>
<h4 className='text-[#D17A5F] text-xl font-bold'>₹{realPrice}</h4>
                     <h5 className='font-semibold text-md text-[#A85A3E] line-through'>₹{price}</h5>
                  </div>
                  <div 
                    onClick={() => addToCart(id, 1)}
                    className='bg-[#F9E6DE] flex gap-2 text-[#D17A5F] px-3 py-1 rounded-md cursor-pointer hover:translate-y-[-5px] transition-all duration-200 hover:bg-[#D17A5F] hover:text-white'>
                        <i className="ri-shopping-cart-2-line "></i>
                        <h6>Add</h6>
                </div>   
            </div>
    </div>
  )
}

export default PopularProductCard
