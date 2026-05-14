import React from 'react'

const FeatureFruitCard = ({head, img}) => {
  return (
    <div className="featuredSecondCards relative bg-cover bg-right h-[270px] w-full md:w-[[300px]] max-w-[500px] text-black rounded-xl flex items-center  p-12 "
      style={{ backgroundImage: `url(${img})` }}>
      <div className='w-[210px]  flex flex-col gap-3 md:w-[250px] lg:w-[220px] xl:w-[250px] '>
        <h3 className='font-semibold text-[1.3rem] md:text-[1.6rem]'>{head}</h3>
        <button className='bg-[#D17A5F] w-fit text-white px-3 py-2 rounded-md mt-3 font-semibold text-sm group hover:bg-[#E75C42] transition-all duration-200 cursor-pointer'>Shop Now <i className="group-hover:ml-3 transition-all duration-200 ri-arrow-right-line"></i></button>
      </div>
    </div>
  )
}

export default FeatureFruitCard
