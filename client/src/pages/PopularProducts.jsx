import React, { useEffect, useRef } from 'react'
import PopularProductCard from '../components/HomePageComponent/PopularProductCard'
import product1_1 from '../assets/HomePageAssets/product-1-1.jpg';
import product1_2 from '../assets/HomePageAssets/product-1-2.jpg';

import product2_1 from '../assets/HomePageAssets/product-2-1.jpg';
import product2_2 from '../assets/HomePageAssets/product-2-2.jpg';

import product3_1 from '../assets/HomePageAssets/product-3-1.jpg';
import product3_2 from '../assets/HomePageAssets/product-3-2.jpg';

import product4_1 from '../assets/HomePageAssets/product-4-1.jpg';
import product4_2 from '../assets/HomePageAssets/product-4-2.jpg';

import product5_1 from '../assets/HomePageAssets/product-5-1.jpg';
import product5_2 from '../assets/HomePageAssets/product-5-2.jpg';

import product6_1 from '../assets/HomePageAssets/product-6-1.jpg';
import product6_2 from '../assets/HomePageAssets/product-6-2.jpg';

import product7_1 from '../assets/HomePageAssets/product-7-1.jpg';
import product7_2 from '../assets/HomePageAssets/product-7-2.jpg';

import product8_1 from '../assets/HomePageAssets/product-8-1.jpg';
import product8_2 from '../assets/HomePageAssets/product-8-2.jpg';

import product9_1 from '../assets/HomePageAssets/product-9-1.jpg';
import product9_2 from '../assets/HomePageAssets/product-9-2.jpg';

import product10_1 from '../assets/HomePageAssets/product-10-1.jpg';
import product10_2 from '../assets/HomePageAssets/product-10-2.jpg';

import product11_1 from '../assets/HomePageAssets/product-11-1.jpg';
import product11_2 from '../assets/HomePageAssets/product-11-2.jpg';

import product12_1 from '../assets/HomePageAssets/product-12-1.jpg';
import product12_2 from '../assets/HomePageAssets/product-12-2.jpg';

import product13_1 from '../assets/HomePageAssets/product-13-1.jpg';
import product13_2 from '../assets/HomePageAssets/product-13-2.jpg';

import product14_1 from '../assets/HomePageAssets/product-14-1.jpg';
import product14_2 from '../assets/HomePageAssets/product-14-2.jpg';

import product15_1 from '../assets/HomePageAssets/product-15-1.jpg';
import product15_2 from '../assets/HomePageAssets/product-15-2.jpg';

import product16_1 from '../assets/HomePageAssets/product-16-1.jpg';
import product16_2 from '../assets/HomePageAssets/product-16-2.jpg';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins once globally
gsap.registerPlugin(ScrollTrigger);

const PopularProducts = () => {

  const cardHead = useRef();
  const cards = useRef();

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(cardHead.current, {
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: cardHead.current,
        start: "top 90%",
        toggleActions: "play none none none",
        // markers: true
      },
    });

    gsap.from(cards.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cards.current,
        start: "top 90%",
        toggleActions: "play none none none",
        // markers: true
      },
    });
  });

  return () => ctx.revert();
}, []);


  return (
    <div className='px-4 lg:px-6 mt-10'>
        <div ref={cardHead}>
            <h2 className='text-[2rem] font-semibold lg:text-[2.3rem] md:whitespace-nowrap'>Popular Products</h2>
            <div className='flex flex-wrap gap-3 mt-4'>
                <button className='px-5 py-2 rounded-full bg-[#D17A5F] text-white hover:bg-[#C86A50] transition-all duration-200 font-medium'>All</button>
                <button className='px-5 py-2 rounded-full bg-[#F9E6DE] text-[#6B4423] hover:bg-[#D17A5F] hover:text-white transition-all duration-200 font-medium'>Milks & Dairies</button>
                <button className='px-5 py-2 rounded-full bg-[#F9E6DE] text-[#6B4423] hover:bg-[#D17A5F] hover:text-white transition-all duration-200 font-medium'>Coffee & Teas</button>
                <button className='px-5 py-2 rounded-full bg-[#F9E6DE] text-[#6B4423] hover:bg-[#D17A5F] hover:text-white transition-all duration-200 font-medium'>Pet Foods</button>
                <button className='px-5 py-2 rounded-full bg-[#F9E6DE] text-[#6B4423] hover:bg-[#D17A5F] hover:text-white transition-all duration-200 font-medium'>Meats</button>
                <button className='px-5 py-2 rounded-full bg-[#F9E6DE] text-[#6B4423] hover:bg-[#D17A5F] hover:text-white transition-all duration-200 font-medium'>Vegetables</button>
                <button className='px-5 py-2 rounded-full bg-[#F9E6DE] text-[#6B4423] hover:bg-[#D17A5F] hover:text-white transition-all duration-200 font-medium'>Fruits</button>
            </div>
        </div>
        {/* iskay columns ko maintain krny ka code index css mn likha hua hy  */}
        <div ref={cards} className='productsContainer grid grid-cols-1  gap-4 '>
            <PopularProductCard id={1} deal="Hot" img={product1_1} hover={product1_2} cat="Snack" name="Organic Quinoa, Brown, & Red Rice" star="30" rating="(4.0)" company="Fresh Farms" realPrice="28.85" price="32.0" />

            <PopularProductCard id={2} deal="Hot" img={product2_1} star="20" hover={product2_2} cat="Meats" name="All Natural Italian‑Style Chicken Meatballs" rating="(3.5)" company="Premium Meats" realPrice="52.85" price="55.0" />

            <PopularProductCard id={3} deal="New" img={product3_1} star="15" hover={product3_2} cat="Snack" name="Sweet & Salty Kettle Corn" rating="(4.0)" company="Snack Co" realPrice="22.85" price="25.0" />

            <PopularProductCard id={4} deal="Sale" img={product4_1} star="28" hover={product4_2} cat="Vegetables" name="Crispy Classic Buffalo Wings" rating="(4.5)" company="Farm Fresh" realPrice="19.85" price="22.0" />

            <PopularProductCard id={5} deal="new" img={product5_1} star="14" hover={product5_2} cat="Pet Foods" name="Lightly Salted Almonds" rating="(4.2)" company="NutriSource" realPrice="15.85" price="17.0" />

            <PopularProductCard id={6} deal="" img={product6_1} star="18" hover={product6_2} cat="Dairy" name="Vanilla Greek Yogurt" rating="(4.0)" company="Dairy Best" realPrice="12.50" price="13.9" />

            <PopularProductCard id={7} deal="-10%" img={product7_1} star="11" hover={product7_2} cat="Meats" name="Ginger Ale – 2 L Bottle" rating="(3.8)" company="Beverage Co" realPrice="18.85" price="21.0" />

            <PopularProductCard id={8} deal="Sale" img={product8_1} star="12" hover={product8_2} cat="Seafood" name="Stuffed Alaskan Salmon" rating="(4.3)" company="Ocean Harvest" realPrice="26.85" price="28.0" />

            <PopularProductCard id={9} deal="" img={product9_1} star="10" hover={product9_2} cat="Fruits" name="Fresh Organic Strawberries" rating="(4.6)" company="Berry Farms" realPrice="10.85" price="12.0" />

            <PopularProductCard id={10} deal="Hot" img={product10_1} star="9" hover={product10_2} cat="Coffee & Tea" name="Organic Green Tea Bags – 100 Count" rating="(4.4)" company="Tea Company" realPrice="14.99" price="16.5" />
        </div>
    </div>
  )
}

export default PopularProducts
