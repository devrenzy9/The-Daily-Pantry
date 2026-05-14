// FruitItems.js
import React, { forwardRef } from 'react';

const FruitItems = forwardRef(({ color, img, head, quantity }, ref) => {
  const bgColors = {
    red: 'bg-[#FEEFEA]',
    green: 'bg-[#F9E6DE]',
    cream: 'bg-[#FFFCEB]',
  };

  return (
    <div
      ref={ref}
      className={`${bgColors[color]} w-[100%] sm:w-[100%] h-[180px] cursor-pointer rounded-lg flex justify-center items-center flex-col flex-shrink-0`}
    >
      <img src={img} alt='Fruit Item' className='w-18' />
      <h5 className='text-md font-semibold mt-3'>{head}</h5>
      <h6 className='text-sm'>{quantity}</h6>
    </div>
  );
});

export default FruitItems;
