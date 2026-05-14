import React from 'react'

const FooterCompo = ({item1, item2, item3, item4, item5, item6, item7}) => {
  return (
    <ul className='flex flex-col gap-2 mt-2'>
        <li className='cursor-pointer hover:text-[#D17A5F] text-md capitalize'>{item1}</li>
        <li className='cursor-pointer hover:text-[#D17A5F] text-md capitalize'>{item2}</li>
        <li className='cursor-pointer hover:text-[#D17A5F] text-md capitalize'>{item3}</li>
        <li className='cursor-pointer hover:text-[#D17A5F] text-md capitalize'>{item4}</li>
        <li className='cursor-pointer hover:text-[#D17A5F] text-md capitalize'>{item5}</li>
        <li className='cursor-pointer hover:text-[#D17A5F] text-md capitalize'>{item6}</li>
        {item7 && <li className='cursor-pointer hover:text-[#D17A5F] text-md capitalize'>{item7}</li>}
    </ul>
  )
}

export default FooterCompo
