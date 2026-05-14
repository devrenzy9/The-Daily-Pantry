import React from 'react'
import { useCart } from '../../context/CartContext';

const ProductCategoryComponent = ({id, img, head,star,rating,price,realPrice}) => {
  const { addToCart } = useCart();
  return (
    <div className='border-1 group border-[#E8DDD5] flex gap-3 xl:gap-2 rounded-lg overflow-hidden p-2 py-4 items-center cursor-pointer hover:shadow-md transition-all duration-200'>
      <img src={img} alt="Cards Image" className='w-25 group-hover:translate-y-[-5px] transition-all duration-200'/>
      <div className='flex-1'>
        <h4 className='font-semibold text-lg  leading-5 capitalize text-[#6B4423]'>{head}</h4>
            {/* grey star background */}
                <div className='relative flex items-center'>
                    <div className="text-gray-300 text-sm">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                    </div>

                    {/* Yellow Stars Overlay */}
                    <div
                        className="absolute top-0 left-0 overflow-hidden text-sm text-yellow-400"
                        style={{ width: `${star}%` }}
                    >
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                    </div>
                    <h5 className='text-[#A85A3E] text-sm ml-2'>{rating}</h5>
                </div>
            <div className='flex gap-2 items-center'>
<h4 className='text-[#D17A5F] font-bold text-xl'>₹{realPrice}</h4>
             <h5 className='text-[#A85A3E] line-through'>₹{price}</h5>
        </div>
      </div>
      <div 
        onClick={(e) => { e.stopPropagation(); addToCart(id, 1); }}
        className='bg-[#F9E6DE] flex gap-2 text-[#D17A5F] px-3 py-1 rounded-md cursor-pointer hover:translate-y-[-5px] transition-all duration-200 hover:bg-[#D17A5F] hover:text-white'
      >
        <i className="ri-shopping-cart-2-line"></i>
        <h6>Add</h6>
      </div>
    </div>
  )
}

export default ProductCategoryComponent
